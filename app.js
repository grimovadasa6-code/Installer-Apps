const apps = [
// --- Те, для которых вы загрузили картинки ---
{ name: 'Авито', desc: 'Шоппинг · Объявления', rating: '4.5', count: '540 тыс.', bg: '#FF5A5F', letter: 'А', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8531.jpeg' },
{ name: 'Альфа-Банк', desc: 'Финансы · Альфа', rating: '4.7', count: '225 тыс.', bg: '#EF3124', letter: 'А', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8532.jpeg' }, // Вставьте правильный ID если это Альфа
{ name: 'ВКонтакте', desc: 'Соцсети · ВК', rating: '4.5', count: '900 тыс.', bg: '#0077FF', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8533.jpeg' },
{ name: 'ВТБ Онлайн', desc: 'Финансы', rating: '4.7', count: '3,6 млн', bg: '#0A2896', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8534.jpeg' },
{ name: 'Генератор ИИ видео', desc: 'ИИ · Видео', rating: '4.6', count: '76 тыс.', bg: '#333333', letter: 'Г', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8535.jpeg' },
{ name: 'Госуслуги', desc: 'Утилиты · Госуслуги', rating: '4.3', count: '320 тыс.', bg: '#0A55F0', letter: 'Г', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8536.jpeg' },
{ name: 'Одноклассники', desc: 'Соцсети', rating: '4.9', count: '20 млн+', bg: '#EE8208', letter: 'О', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8537.jpeg' },
{ name: 'Сбербанк Онлайн', desc: 'Финансы · Сбер', rating: '4.8', count: '980 тыс.', bg: '#21A038', letter: 'С', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8538.jpeg' },
{ name: 'Т-Банк', desc: 'Финансы · Т-Банк', rating: '4.8', count: '1,2 млн', bg: '#FFDD2D', letter: 'Т', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8539.jpeg' },
{ name: 'ВК Видео', desc: 'Развлечения · ВК', rating: '4.6', count: '182,6 тыс.', bg: '#0077FF', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8540.png' }, // Вставьте правильный ID для ВК Видео

// --- Остальные приложения (без картинок, только буквы) ---
{ name: 'Happ Plus VPN', desc: 'VPN', rating: '4.9', count: '1.1 тыс.', bg: '#333', letter: 'H' },
{ name: 'Rave', desc: 'Развлечения', rating: '4.4', count: '355', bg: '#000', letter: 'R' },
{ name: 'Чат Рулетка', desc: 'Общение', rating: '5', count: '32 тыс.', bg: '#336699', letter: 'Ч' },
{ name: 'Яндекс Пэй', desc: 'Финансы', rating: '4.5', count: '35.8 тыс.', bg: '#FFCC00', letter: 'Я' },
{ name: 'Wildberries', desc: 'Шоппинг · Маркетплейс', rating: '4.4', count: '690 тыс.', bg: '#CB11AB', letter: 'W' },
{ name: 'Dino Run', desc: 'Игры · Аркада', rating: '4.5', count: '88 тыс.', bg: '#4CAF50', letter: 'D' },
{ name: 'Minecraft', desc: 'Игры · Песочница', rating: '4.7', count: '2.1 млн', bg: '#795548', letter: 'M' },
{ name: 'Mail', desc: 'Соцсети · Почта', rating: '4.7', count: '2.1 млн', bg: '#005FF9', letter: 'M' },
{ name: 'Nulls Brawl', desc: 'Игры · Приватный сервер', rating: '4.6', count: '540 тыс.', bg: '#2196F3', letter: 'N' },
{ name: 'Stand Rise', desc: 'Игры · Шутер', rating: '4.4', count: '210 тыс.', bg: '#9E9E9E', letter: 'S' },
{ name: 'MangaLib', desc: 'Книги', rating: '4.6', count: '512', bg: '#FF9800', letter: 'M' },
{ name: 'Spotify', desc: 'Развлечения', rating: '4', count: '1,3 тыс.', bg: '#1DB954', letter: 'S' },
{ name: 'TikTok (Mod)', desc: 'Соцсети · Видео', rating: '4.6', count: '3,2 млн', bg: '#000', letter: 'T' },
{ name: 'AyuGram', desc: 'Моды Telegram · Клиент', rating: '4.8', count: '45 тыс.', bg: '#6C5CE7', letter: 'A' },
{ name: 'HakoGram', desc: 'Моды Telegram · Клиент', rating: '4.7', count: '32 тыс.', bg: '#0984E3', letter: 'H' },
{ name: 'СберKids', desc: 'Финансы · Детям', rating: '4.5', count: '120 тыс.', bg: '#00B894', letter: 'С' },
{ name: 'ChatGPT PRO', desc: 'ИИ · Ассистент', rating: '4.8', count: '1,5 млн', bg: '#000', letter: 'C' },{ name: 'VK Знакомства', desc: 'Соцсети', rating: '4.7', count: '31,6 тыс.', bg: '#FF4081', letter: 'V' }
];
