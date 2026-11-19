const apps = [
    // --- Приложения с картинками (по вашим ссылкам) ---
    { name: 'Авито', desc: 'Шоппинг · Объявления', rating: '4.5', count: '540 тыс.', bg: '#FF5A5F', letter: 'А', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0793.jpeg' },
    { name: 'Альфа-Банк', desc: 'Финансы · Альфа', rating: '4.7', count: '225 тыс.', bg: '#EF3124', letter: 'А', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8531.jpeg' },
    { name: 'ВКонтакте', desc: 'Соцсети · ВК', rating: '4.5', count: '900 тыс.', bg: '#0077FF', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8533.jpeg' },
    { name: 'ВТБ Онлайн', desc: 'Финансы', rating: '4.7', count: '3,6 млн', bg: '#0A2896', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8534.jpeg' },
    { name: 'Wildberries', desc: 'Шоппинг · Маркетплейс', rating: '4.4', count: '690 тыс.', bg: '#CB11AB', letter: 'W', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8557.jpeg' },
    { name: 'Госуслуги', desc: 'Утилиты · Госуслуги', rating: '4.3', count: '320 тыс.', bg: '#0A55F0', letter: 'Г', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8536.jpeg' },
    { name: 'Генератор ИИ видео', desc: 'ИИ · Видео', rating: '4.6', count: '76 тыс.', bg: '#333333', letter: 'Г', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8535.jpeg' },
    { name: 'Dino Run', desc: 'Игры · Аркада', rating: '4.5', count: '88 тыс.', bg: '#4CAF50', letter: 'D', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8545.jpeg' },
    { name: 'Happ Plus VPN', desc: 'VPN', rating: '4.9', count: '1.1 тыс.', bg: '#333', letter: 'H', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8547.jpeg' },
    { name: 'Одноклассники', desc: 'Соцсети', rating: '4.9', count: '20 млн+', bg: '#EE8208', letter: 'О', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8537.jpeg' },
    { name: 'OZON', desc: 'Шоппинг · Маркетплейс', rating: '4.6', count: '760 тыс.', bg: '#005BFF', letter: 'O', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8552.jpeg' },
    { name: 'Rave', desc: 'Развлечения', rating: '4.4', count: '355', bg: '#000', letter: 'R', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8553.jpeg' },
    { name: 'Сбербанк Онлайн', desc: 'Финансы · Сбер', rating: '4.8', count: '980 тыс.', bg: '#21A038', letter: 'С', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8538.jpeg' },
    { name: 'Spotify', desc: 'Развлечения', rating: '4', count: '1,3 тыс.', bg: '#1DB954', letter: 'S', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8554.jpeg' },
    { name: 'Т-Банк', desc: 'Финансы · Т-Банк', rating: '4.8', count: '1,2 млн', bg: '#FFDD2D', letter: 'Т', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8539.jpeg' },
    { name: 'TikTok (Mod)', desc: 'Соцсети · Видео', rating: '4.6', count: '3,2 млн', bg: '#000', letter: 'T', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8555.jpeg' },
    { name: 'ChatGPT PRO', desc: 'ИИ · Ассистент', rating: '4.8', count: '1,5 млн', bg: '#000', letter: 'C', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8544.jpeg' },
    { name: 'Чат Рулетка', desc: 'Общение', rating: '5', count: '32 тыс.', bg: '#336699', letter: 'Ч', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8540.png' },
    { name: 'Яндекс Пэй', desc: 'Финансы', rating: '4.5', count: '35.8 тыс.', bg: '#FFCC00', letter: 'Я', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8542.webp' },
    { name: 'Яндекс', desc: 'Утилиты · Поиск', rating: '4.7', count: '450 тыс.', bg: '#FF0000', letter: 'Я', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8541.jpeg' },
    { name: 'ВК Видео', desc: 'Развлечения · ВК', rating: '4.6', count: '182,6 тыс.', bg: '#0077FF', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8532.jpeg' },
    { name: 'Minecraft', desc: 'Игры · Песочница', rating: '4.7', count: '2.1 млн', bg: '#795548', letter: 'M', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8550.jpeg' },
    { name: 'Mail', desc: 'Соцсети · Почта', rating: '4.7', count: '2.1 млн', bg: '#005FF9', letter: 'M', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8548.png' },
    { name: 'Nulls Brawl', desc: 'Игры · Приватный сервер', rating: '4.6', count: '540 тыс.', bg: '#2196F3', letter: 'N', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8551.jpeg' },
    
    // --- Новые картинки ---
    { name: 'AyuGram', desc: 'Моды Telegram · Клиент', rating: '4.8', count: '45 тыс.', bg: '#6C5CE7', letter: 'A', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8543.jpeg' },
    { name: 'HakoGram', desc: 'Моды Telegram · Клиент', rating: '4.7', count: '32 тыс.', bg: '#0984E3', letter: 'H', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8546.png' },
    { name: 'СберKids', desc: 'Финансы · Детям', rating: '4.5', count: '120 тыс.', bg: '#00B894', letter: 'С', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8538.jpeg' },
    { name: 'VK Знакомства', desc: 'Соцсети', rating: '4.7', count: '31,6 тыс.', bg: '#FF4081', letter: 'V', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8556.png' },

    // --- Приложения БЕЗ картинок (останутся буквы) ---
    { name: 'MangaLib', desc: 'Книги', rating: '4.6', count: '512', bg: '#FF9800', letter: 'M' },
    { name: 'Stand Rise', desc: 'Игры · Шутер', rating: '4.4', count: '210 тыс.', bg: '#9E9E9E', letter: 'S' },
    { name: 'Tele 2', desc: 'Финансы', rating: '4.6', count: '355 тыс.', bg: '#000', letter: 't2' },
    { name: 'Five Nights at Freddy\'s', desc: 'Игры · Хоррор', rating: '4.5', count: '320 тыс.', bg: '#8B4513', letter: 'F' },
    { name: 'Brawl Stars', desc: 'Игры · Экшн', rating: '4.6', count: '1,8 млн', bg: '#FFD700', letter: 'B' }
];
