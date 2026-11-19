import os, asyncio, secrets
from pathlib import Path
from contextlib import asynccontextmanager
from typing import Optional

import aiosqlite
from fastapi import FastAPI, HTTPException, Depends, Request, UploadFile, File
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel, Field
from telegram import Update, KeyboardButton, ReplyKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes
import uvicorn

BASE = Path(__file__).parent
DB_PATH = BASE / "catalog.db"
UPLOAD_DIR = BASE / "static" / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

BOT_TOKEN = os.getenv("BOT_TOKEN", "").strip()
WEBAPP_URL = os.getenv("WEBAPP_URL", "").strip().rstrip("/")
ADMIN_USER = os.getenv("ADMIN_USER", "admin")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "")
PORT = int(os.getenv("PORT", "8000"))
security = HTTPBasic()

CATEGORIES = ["Банки", "Покупки", "Сервисы", "Общение", "Досуг", "Образование", "Другое"]

class AppItem(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    category: str = Field(min_length=1, max_length=40)
    description: str = Field(default="", max_length=1000)
    rating: float = Field(default=0, ge=0, le=5)
    size: str = Field(default="", max_length=30)
    icon_url: str = Field(default="", max_length=500)
    official_url: str = Field(default="", max_length=500)

async def init_db():
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute("""
        CREATE TABLE IF NOT EXISTS apps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            description TEXT NOT NULL DEFAULT '',
            rating REAL NOT NULL DEFAULT 0,
            size TEXT NOT NULL DEFAULT '',
            icon_url TEXT NOT NULL DEFAULT '',
            official_url TEXT NOT NULL DEFAULT ''
        )""")
        cur = await db.execute("SELECT COUNT(*) FROM apps")
        count = (await cur.fetchone())[0]
        if count == 0:
            samples = [
                ("Пример: Заметки", "Сервисы", "Приложение для заметок. Замените этот пример своими данными.", 4.8, "25 МБ", "https://placehold.co/96x96/315efb/ffffff?text=N", "https://www.apple.com/app-store/"),
                ("Пример: Музыка", "Досуг", "Музыкальное приложение. Добавьте ссылку на официальный источник.", 4.6, "80 МБ", "https://placehold.co/96x96/7654ed/ffffff?text=M", "https://www.apple.com/app-store/"),
            ]
            await db.executemany("INSERT INTO apps(name,category,description,rating,size,icon_url,official_url) VALUES(?,?,?,?,?,?,?)", samples)
        await db.commit()

def admin_auth(credentials: HTTPBasicCredentials = Depends(security)):
    user_ok = secrets.compare_digest(credentials.username, ADMIN_USER)
    pass_ok = bool(ADMIN_PASSWORD) and secrets.compare_digest(credentials.password, ADMIN_PASSWORD)
    if not (user_ok and pass_ok):
        raise HTTPException(status_code=401, detail="Неверные данные администратора",
                            headers={"WWW-Authenticate": "Basic"})
    return credentials.username

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not WEBAPP_URL:
        await update.message.reply_text("Каталог пока не настроен. Администратору нужно указать WEBAPP_URL.")
        return
    keyboard = [[KeyboardButton("Открыть каталог приложений", web_app=WebAppInfo(url=WEBAPP_URL))]]
    await update.message.reply_text(
        "Добро пожаловать! Откройте каталог кнопкой ниже. Здесь собраны описания и ссылки на официальные источники приложений.",
        reply_markup=ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    )

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

api = FastAPI(title="Telegram App Catalog", lifespan=lifespan)
api.mount("/static", StaticFiles(directory=BASE / "static"), name="static")

@api.get("/", response_class=HTMLResponse)
async def home():
    return FileResponse(BASE / "static" / "index.html")

@api.get("/admin", response_class=HTMLResponse)
async def admin_page(_: str = Depends(admin_auth)):
    return FileResponse(BASE / "static" / "admin.html")

@api.get("/api/categories")
async def categories():
    return CATEGORIES

@api.get("/api/apps")
async def list_apps(q: str = "", category: str = ""):
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        sql = "SELECT * FROM apps WHERE 1=1"
        args = []
        if q:
            sql += " AND (name LIKE ? OR description LIKE ?)"
            args.extend([f"%{q}%", f"%{q}%"])
        if category:
            sql += " AND category = ?"
            args.append(category)
        sql += " ORDER BY category, name"
        cur = await db.execute(sql, args)
        return [dict(row) for row in await cur.fetchall()]

@api.post("/api/apps")
async def create_app(item: AppItem, _: str = Depends(admin_auth)):
    async with aiosqlite.connect(DB_PATH) as db:
        cur = await db.execute(
            "INSERT INTO apps(name,category,description,rating,size,icon_url,official_url) VALUES(?,?,?,?,?,?,?)",
            (item.name, item.category, item.description, item.rating, item.size, item.icon_url, item.official_url)
        )
        await db.commit()
        return {"id": cur.lastrowid, "ok": True}

@api.put("/api/apps/{app_id}")
async def update_app(app_id: int, item: AppItem, _: str = Depends(admin_auth)):
    async with aiosqlite.connect(DB_PATH) as db:
        cur = await db.execute(
            "UPDATE apps SET name=?,category=?,description=?,rating=?,size=?,icon_url=?,official_url=? WHERE id=?",
            (item.name, item.category, item.description, item.rating, item.size, item.icon_url, item.official_url, app_id)
        )
        await db.commit()
        if cur.rowcount == 0:
            raise HTTPException(404, "Приложение не найдено")
        return {"ok": True}

@api.delete("/api/apps/{app_id}")
async def delete_app(app_id: int, _: str = Depends(admin_auth)):
    async with aiosqlite.connect(DB_PATH) as db:
        cur = await db.execute("DELETE FROM apps WHERE id=?", (app_id,))
        await db.commit()
        if cur.rowcount == 0:
            raise HTTPException(404, "Приложение не найдено")
        return {"ok": True}

@api.post("/api/upload")
async def upload_icon(file: UploadFile = File(...), _: str = Depends(admin_auth)):
    suffix = Path(file.filename or "").suffix.lower()
    if suffix not in {".png", ".jpg", ".jpeg", ".webp"}:
        raise HTTPException(400, "Разрешены только PNG, JPG и WEBP")
    content = await file.read()
    if len(content) > 2 * 1024 * 1024:
        raise HTTPException(400, "Файл должен быть меньше 2 МБ")
    name = secrets.token_hex(12) + suffix
    (UPLOAD_DIR / name).write_bytes(content)
    return {"url": f"/static/uploads/{name}"}

async def run():
    if not BOT_TOKEN:
        raise RuntimeError("Укажите BOT_TOKEN в .env")
    if not ADMIN_PASSWORD:
        raise RuntimeError("Укажите ADMIN_PASSWORD в .env")
    bot_app = Application.builder().token(BOT_TOKEN).build()
    bot_app.add_handler(CommandHandler("start", start))
    await bot_app.initialize()
    await bot_app.start()
    await bot_app.updater.start_polling()
    config = uvicorn.Config(api, host="0.0.0.0", port=PORT, proxy_headers=True)
    server = uvicorn.Server(config)
    try:
        await server.serve()
    finally:
        await bot_app.updater.stop()
        await bot_app.stop()
        await bot_app.shutdown()

if __name__ == "__main__":
    asyncio.run(run())
