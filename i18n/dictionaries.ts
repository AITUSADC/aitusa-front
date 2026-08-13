import type { Locale } from "@/i18n/config";

export type Dictionary = {
  metadata: { title: string; description: string };
  header: {
    home: string;
    clubs: string;
    gallery: string;
    contacts: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  footer: {
    questions: string;
    description: string;
    telegramButton: string;
    online: string;
    socialDescription: string;
  };
  home: {
    about: {
      description: string;
      join: string;
    };
    team: {
      members: Array<{ name: string; role: string; brand?: string }>;
      eyebrow: string;
      revealText: string;
      join: string;
      bannerAlt: string;
      joinImageAlt: string;
      footerBannerAlt: string;
    };
    committees: { title: string; details: string };
    memories: { title: string; descriptions: string[] };
  };
  committeePage: {
    notFound: string;
    all: string;
    badge: string;
    about: string;
    whatWeDo: string;
    directions: string;
    inside: string;
    moments: string;
    continue: string;
    other: string;
    viewAll: string;
    join: string;
    contact: string;
  };
  clubs: {
    title: string;
    searchPlaceholder: string;
    search: string;
    options: { all: string; sports: string; strategy: string; literature: string };
    removeFilter: string;
    openCall: string;
    joinNow: string;
    goals: string;
    memories: string;
    memoryAlt: string;
    archive: string;
    looking: string;
    membershipTitle: string;
    membershipDescription: string;
    membershipButton: string;
    loading: string;
    error: string;
  };
  gallery: { title: string; description: string };
};

const en: Dictionary = {
  metadata: {
    title: "AITUSA — Student Government",
    description: "AITUSA brings together active students, clubs, and initiatives at Astana IT University.",
  },
  header: {
    home: "Home",
    clubs: "Clubs",
    gallery: "Gallery",
    contacts: "Contacts",
    contact: "Contact us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Choose language",
  },
  footer: {
    questions: "Still have questions?",
    description: "Message our team directly. We will answer your questions, introduce the different areas, and help you find the right way to join.",
    telegramButton: "Message us on Telegram",
    online: "AITUSA is online",
    socialDescription: "News, events, and student life",
  },
  home: {
    about: {
      description: "The student government of Astana IT University, bringing together active students, clubs, and initiatives.",
      join: "Become part of AITUSA",
    },
    team: {
      members: [
        { name: "Ainaz Zhubanazarova", role: "President of the student government", brand: "AITUSA" },
        { name: "Linara Yermekova", role: "Vice President for Social and Cultural Affairs" },
        { name: "Asylkhan Toilybekov", role: "Vice President for Science and Academic Affairs" },
      ],
      eyebrow: "About us",
      revealText: "Want to organize events, support students, create content or build partnerships?",
      join: "Join our team",
      bannerAlt: "AITUSA team",
      joinImageAlt: "Students working together",
      footerBannerAlt: "AITUSA community",
    },
    committees: { title: "Committees", details: "Learn more" },
    memories: {
      title: "Memories",
      descriptions: ["The AITUSA team — shaping student life together", "Moments that bring us together"],
    },
  },
  committeePage: {
    notFound: "Committee not found",
    all: "All committees",
    badge: "AITUSA Committee",
    about: "About the committee",
    whatWeDo: "What we do",
    directions: "Key areas",
    inside: "Inside the team",
    moments: "People, ideas, moments",
    continue: "Keep exploring",
    other: "Other committees",
    viewAll: "View all",
    join: "Join the team",
    contact: "Contact the team",
  },
  clubs: {
    title: "Clubs",
    searchPlaceholder: "Club name or keywords...",
    search: "Search",
    options: { all: "All", sports: "Sports", strategy: "Strategy", literature: "Literature" },
    removeFilter: "Remove",
    openCall: "Open call",
    joinNow: "Join now",
    goals: "Key goals",
    memories: "Memorable moments",
    memoryAlt: "Club memory",
    archive: "View the event archive",
    looking: "We are looking for",
    membershipTitle: "New team members",
    membershipDescription: "Join the club team, contribute to real projects, and grow together with the community.",
    membershipButton: "Apply",
    loading: "Loading club...",
    error: "We could not load this club.",
  },
  gallery: {
    title: "Gallery",
    description: "Photos and moments from AITUSA student life.",
  },
};

const ru: Dictionary = {
  metadata: {
    title: "AITUSA — Студенческое самоуправление",
    description: "AITUSA объединяет активных студентов, клубы и инициативы Astana IT University.",
  },
  header: {
    home: "Главная",
    clubs: "Клубы",
    gallery: "Галерея",
    contacts: "Контакты",
    contact: "Связаться",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Выбрать язык",
  },
  footer: {
    questions: "Остались вопросы?",
    description: "Свяжитесь с нами. Мы ответим на вопросы, расскажем о направлениях и поможем понять, как присоединиться.",
    telegramButton: "Написать в Telegram",
    online: "AITUSA на связи",
    socialDescription: "Новости, события и студенческая жизнь",
  },
  home: {
    about: {
      description: "Это студенческое самоуправление Astana IT University, которое объединяет активных студентов, клубы и инициативы.",
      join: "Стать частью AITUSA",
    },
    team: {
      members: [
        { name: "Жубаназарова Айназ", role: "Президент студенческого самоуправления", brand: "AITUSA" },
        { name: "Ермекова Линара", role: "Вице-президент по социально-культурной деятельности" },
        { name: "Тойлыбеков Асылхан", role: "Вице-президент по научно-академической деятельности" },
      ],
      eyebrow: "О нас",
      revealText: "Хотите организовывать мероприятия, помогать студентам, создавать контент или налаживать партнёрские отношения?",
      join: "Присоединяйтесь к нам",
      bannerAlt: "Команда AITUSA",
      joinImageAlt: "Совместная работа студентов",
      footerBannerAlt: "Сообщество AITUSA",
    },
    committees: { title: "Комитеты", details: "Подробнее" },
    memories: {
      title: "Воспоминания",
      descriptions: ["Команда AITUSA — вместе создаём студенческую жизнь", "Моменты, которые объединяют нас"],
    },
  },
  committeePage: {
    notFound: "Комитет не найден",
    all: "Все комитеты",
    badge: "Комитет AITUSA",
    about: "О комитете",
    whatWeDo: "Чем мы занимаемся",
    directions: "Главные направления",
    inside: "Внутри команды",
    moments: "Люди, идеи, моменты",
    continue: "Продолжить знакомство",
    other: "Другие комитеты",
    viewAll: "Смотреть все",
    join: "Стань частью команды",
    contact: "Связаться с командой",
  },
  clubs: {
    title: "Клубы",
    searchPlaceholder: "Название клуба или ключевые слова...",
    search: "Найти",
    options: { all: "Все", sports: "Спорт", strategy: "Стратегия", literature: "Литература" },
    removeFilter: "Удалить",
    openCall: "Набор открыт",
    joinNow: "Присоединиться",
    goals: "Ключевые цели",
    memories: "Яркие моменты",
    memoryAlt: "Момент из жизни клуба",
    archive: "Посмотреть архив событий",
    looking: "Мы ищем",
    membershipTitle: "Новых участников",
    membershipDescription: "Станьте частью команды клуба, участвуйте в реальных проектах и развивайтесь вместе с сообществом.",
    membershipButton: "Подать заявку",
    loading: "Загружаем клуб...",
    error: "Не удалось загрузить информацию о клубе.",
  },
  gallery: {
    title: "Галерея",
    description: "Фотографии и моменты студенческой жизни AITUSA.",
  },
};

const kk: Dictionary = {
  metadata: {
    title: "AITUSA — Студенттік өзін-өзі басқару",
    description: "AITUSA Astana IT University белсенді студенттерін, клубтары мен бастамаларын біріктіреді.",
  },
  header: {
    home: "Басты бет",
    clubs: "Клубтар",
    gallery: "Галерея",
    contacts: "Байланыс",
    contact: "Хабарласу",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    language: "Тілді таңдау",
  },
  footer: {
    questions: "Сұрақтарыңыз қалды ма?",
    description: "Бізге тікелей жазыңыз. Сұрақтарыңызға жауап беріп, бағыттар туралы айтып, командаға қосылуға көмектесеміз.",
    telegramButton: "Telegram-ға жазу",
    online: "AITUSA байланыста",
    socialDescription: "Жаңалықтар, іс-шаралар және студенттік өмір",
  },
  home: {
    about: {
      description: "Белсенді студенттерді, клубтар мен бастамаларды біріктіретін Astana IT University студенттік өзін-өзі басқару ұйымы.",
      join: "AITUSA қатарына қосылу",
    },
    team: {
      members: [
        { name: "Жұбаназарова Айназ", role: "Студенттік өзін-өзі басқару президенті", brand: "AITUSA" },
        { name: "Ермекова Линара", role: "Әлеуметтік-мәдени қызмет жөніндегі вице-президент" },
        { name: "Тойлыбеков Асылхан", role: "Ғылыми-академиялық қызмет жөніндегі вице-президент" },
      ],
      eyebrow: "Біз туралы",
      revealText: "Іс-шаралар ұйымдастырып, студенттерге көмектесіп, контент жасап немесе серіктестік орнатқыңыз келе ме?",
      join: "Біздің командаға қосылыңыз",
      bannerAlt: "AITUSA командасы",
      joinImageAlt: "Студенттердің бірлескен жұмысы",
      footerBannerAlt: "AITUSA қауымдастығы",
    },
    committees: { title: "Комитеттер", details: "Толығырақ" },
    memories: {
      title: "Естеліктер",
      descriptions: ["AITUSA командасы — студенттік өмірді бірге қалыптастырамыз", "Бізді біріктіретін сәттер"],
    },
  },
  committeePage: {
    notFound: "Комитет табылмады",
    all: "Барлық комитеттер",
    badge: "AITUSA комитеті",
    about: "Комитет туралы",
    whatWeDo: "Біздің қызметіміз",
    directions: "Негізгі бағыттар",
    inside: "Команда ішінде",
    moments: "Адамдар, идеялар, сәттер",
    continue: "Танысуды жалғастыру",
    other: "Басқа комитеттер",
    viewAll: "Барлығын көру",
    join: "Командаға қосыл",
    contact: "Командамен байланысу",
  },
  clubs: {
    title: "Клубтар",
    searchPlaceholder: "Клуб атауы немесе кілт сөздер...",
    search: "Іздеу",
    options: { all: "Барлығы", sports: "Спорт", strategy: "Стратегия", literature: "Әдебиет" },
    removeFilter: "Жою",
    openCall: "Қабылдау ашық",
    joinNow: "Қосылу",
    goals: "Негізгі мақсаттар",
    memories: "Жарқын сәттер",
    memoryAlt: "Клуб өмірінен сәт",
    archive: "Іс-шаралар мұрағатын көру",
    looking: "Біз іздейміз",
    membershipTitle: "Жаңа қатысушыларды",
    membershipDescription: "Клуб командасына қосылып, нақты жобаларға үлес қосыңыз және қауымдастықпен бірге дамыңыз.",
    membershipButton: "Өтінім беру",
    loading: "Клуб жүктелуде...",
    error: "Клуб туралы ақпаратты жүктеу мүмкін болмады.",
  },
  gallery: {
    title: "Галерея",
    description: "AITUSA студенттік өмірінің суреттері мен жарқын сәттері.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ru, kk };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
