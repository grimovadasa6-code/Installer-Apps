const apps = [
    { 
        name: 'Авито', desc: 'Шоппинг · Объявления', rating: '4.5', count: '540 тыс.', bg: '#FF5A5F', letter: 'А', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0793.jpeg', cat: 'shopping', fullDesc: 'Авито — это крупнейшая онлайн-площадка для размещения объявлений о товарах, недвижимости, вакансиях и резюме.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0839.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0840.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0841.jpeg'
        ]
    },
    { 
        name: 'Альфа-Банк', desc: 'Финансы · Альфа', rating: '4.7', count: '225 тыс.', bg: '#EF3124', letter: 'А', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8531.jpeg', cat: 'banks', fullDesc: 'Альфа-Банк — универсальный банк, предлагающий широкий спектр финансовых услуг.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0842.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0843.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0844.jpeg'
        ]
    },
    { 
        name: 'ВКонтакте', desc: 'Соцсети · ВК', rating: '4.5', count: '900 тыс.', bg: '#0077FF', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8533.jpeg', cat: 'social', fullDesc: 'ВКонтакте — крупнейшая российская социальная сеть.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0845.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0846.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0847.jpeg'
        ]
    },
    { 
        name: 'ВТБ Онлайн', desc: 'Финансы', rating: '4.7', count: '3,6 млн', bg: '#0A2896', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8534.jpeg', cat: 'banks', fullDesc: 'ВТБ Онлайн — мобильное приложение для управления финансами.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0848.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0849.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0850.jpeg'
        ]
    },
    { 
        name: 'Wildberries', desc: 'Шоппинг · Маркетплейс', rating: '4.4', count: '690 тыс.', bg: '#CB11AB', letter: 'W', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8557.jpeg', cat: 'shopping', fullDesc: 'Wildberries — самый крупный международный маркетплейс.'
    },
    { 
        name: 'Госуслуги', desc: 'Утилиты · Госуслуги', rating: '4.3', count: '320 тыс.', bg: '#0A55F0', letter: 'Г', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8536.jpeg', cat: 'services', fullDesc: 'Госуслуги — единый портал государственных услуг.'
    },
    { 
        name: 'Генератор ИИ видео', desc: 'ИИ · Видео', rating: '4.6', count: '76 тыс.', bg: '#333333', letter: 'Г', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8535.jpeg', cat: 'fun', fullDesc: 'Мощный инструмент на базе искусственного интеллекта для создания уникальных видеороликов.'
    },
    { 
        name: 'Dino Run', desc: 'Игры · Аркада', rating: '4.5', count: '88 тыс.', bg: '#4CAF50', letter: 'D', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8545.jpeg', cat: 'fun', fullDesc: 'Классический раннер с динозавриком!'
    },
    { 
        name: 'Happ Plus VPN', desc: 'VPN', rating: '4.9', count: '1.1 тыс.', bg: '#333', letter: 'H', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8547.jpeg', cat: 'services', fullDesc: 'Быстрый и надежный VPN-клиент для обхода блокировок.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0871.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0872.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0873.jpeg'
        ]
    },
    { 
        name: 'Одноклассники', desc: 'Соцсети', rating: '4.9', count: '20 млн+', bg: '#EE8208', letter: 'О', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8537.jpeg', cat: 'social', fullDesc: 'Одноклассники — социальная сеть для общения с друзьями и близкими.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0854.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0855.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0856.jpeg'
        ]
    },
    { 
        name: 'OZON', desc: 'Шоппинг · Маркетплейс', rating: '4.6', count: '760 тыс.', bg: '#005BFF', letter: 'O', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8552.jpeg', cat: 'shopping', fullDesc: 'OZON — один из крупнейших маркетплейсов России.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0880.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0879.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0881.jpeg'
        ]
    },
    { 
        name: 'Rave', desc: 'Развлечения', rating: '4.4', count: '355', bg: '#000', letter: 'R', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8553.jpeg', cat: 'fun', fullDesc: 'Rave — приложение для совместного просмотра фильмов и видео.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0882.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0883.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0884.jpeg'
        ]
    },
    { 
        name: 'Сбербанк Онлайн', desc: 'Финансы · Сбер', rating: '4.8', count: '980 тыс.', bg: '#21A038', letter: 'С', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8538.jpeg', cat: 'banks', fullDesc: 'Сбербанк Онлайн — надежный помощник в мире финансов.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0857.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0858.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0859.jpeg'
        ]
    },
    { 
        name: 'Spotify', desc: 'Развлечения', rating: '4', count: '1,3 тыс.', bg: '#1DB954', letter: 'S', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8554.jpeg', cat: 'fun', fullDesc: 'Spotify — популярный стриминговый сервис.'
    },
    { 
        name: 'Т-Банк', desc: 'Финансы · Т-Банк', rating: '4.8', count: '1,2 млн', bg: '#FFDD2D', letter: 'Т', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8539.jpeg', cat: 'banks', fullDesc: 'Т-Банк — современный онлайн-банк.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0835.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0836.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0838.jpeg'
        ]
    },
    { 
        name: 'TikTok (Mod)', desc: 'Соцсети · Видео', rating: '4.6', count: '3,2 млн', bg: '#000', letter: 'T', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8555.jpeg', cat: 'social', fullDesc: 'Модифицированная версия TikTok без водяных знаков.'
    },
    { 
        name: 'ChatGPT PRO', desc: 'ИИ · Ассистент', rating: '4.8', count: '1,5 млн', bg: '#000', letter: 'C', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8544.jpeg', cat: 'services', fullDesc: 'ChatGPT PRO — ваш персональный ИИ-ассистент.'
    },
    { 
        name: 'Чат Рулетка', desc: 'Общение', rating: '5', count: '32 тыс.', bg: '#336699', letter: 'Ч', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8540.png', cat: 'social', fullDesc: 'Чат Рулетка — отличный способ познакомиться с новыми людьми.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0863.jpeg'
        ]
    },
    { 
        name: 'Яндекс Пэй', desc: 'Финансы', rating: '4.5', count: '35.8 тыс.', bg: '#FFCC00', letter: 'Я', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8542.webp', cat: 'banks', fullDesc: 'Яндекс Пэй — удобный платежный сервис.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0865.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0866.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0867.jpeg'
        ]
    },
    { 
        name: 'Яндекс', desc: 'Утилиты · Поиск', rating: '4.7', count: '450 тыс.', bg: '#FF0000', letter: 'Я', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8541.jpeg', cat: 'services', fullDesc: 'Главное приложение Яндекса.'
    },
    { 
        name: 'ВК Видео', desc: 'Развлечения · ВК', rating: '4.6', count: '182,6 тыс.', bg: '#0077FF', letter: 'В', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8532.jpeg', cat: 'fun', fullDesc: 'ВК Видео — огромная библиотека фильмов, сериалов и клипов.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0886.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0887.jpeg'
        ]
    },
    { 
        name: 'Minecraft', desc: 'Игры · Песочница', rating: '4.7', count: '2.1 млн', bg: '#795548', letter: 'M', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8550.jpeg', cat: 'fun', fullDesc: 'Minecraft — легендарная игра-песочница.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0892.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0893.webp'
        ]
    },
    { 
        name: 'Mail', desc: 'Соцсети · Почта', rating: '4.7', count: '2.1 млн', bg: '#005FF9', letter: 'M', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8548.png', cat: 'social', fullDesc: 'Почта Mail.ru — удобный и безопасный почтовый клиент.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0876.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0877.jpeg'
        ]
    },
    { 
        name: 'Nulls Brawl', desc: 'Игры · Приватный сервер', rating: '4.6', count: '540 тыс.', bg: '#2196F3', letter: 'N', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8551.jpeg', cat: 'fun', fullDesc: 'Nulls Brawl — популярный приватный сервер Brawl Stars.'
    },
    { 
        name: 'AyuGram', desc: 'Моды Telegram · Клиент', rating: '4.8', count: '45 тыс.', bg: '#6C5CE7', letter: 'A', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8543.jpeg', cat: 'social', fullDesc: 'AyuGram — продвинутый клиент Telegram.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0868.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0869.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0870.jpeg'
        ]
    },
    { 
        name: 'HakoGram', desc: 'Моды Telegram · Клиент', rating: '4.7', count: '32 тыс.', bg: '#0984E3', letter: 'H', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8546.png', cat: 'social', fullDesc: 'HakoGram — стильный и функциональный клиент Telegram.'
    },
    { 
        name: 'СберKids', desc: 'Финансы · Детям', rating: '4.5', count: '120 тыс.', bg: '#00B894', letter: 'С', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8538.jpeg', cat: 'banks', fullDesc: 'СберKids — приложение для детей и их родителей.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0860.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0861.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0862.jpeg'
        ]
    },
    { 
        name: 'VK Знакомства', desc: 'Соцсети', rating: '4.7', count: '31,6 тыс.', bg: '#FF4081', letter: 'V', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_8556.png', cat: 'social', fullDesc: 'VK Знакомства — сервис для поиска новых друзей.',
        screenshots: [
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0888.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0889.jpeg',
            'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0890.jpeg'
        ]
    },
    { 
        name: 'Brawl Stars', desc: 'Игры · Экшн', rating: '4.6', count: '1,8 млн', bg: '#FFD700', letter: 'B', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0794.jpeg', cat: 'fun', fullDesc: 'Brawl Stars — динамичная мобильная игра от Supercell.'
    },
    { 
        name: 'Tele 2', desc: 'Финансы', rating: '4.6', count: '355 тыс.', bg: '#000', letter: 't2', img: 'https://raw.githubusercontent.com/grimovadasa6-code/Installer-Apps/main/IMG_0795.jpeg', cat: 'banks', fullDesc: 'Tele2 — приложение мобильного оператора.'
    }
];
