import type { Locale } from "@/i18n/config";

export type Dictionary = {
  metadata: { title: string; description: string };
  header: {
    home: string;
    committees: string;
    clubs: string;
    events: string;
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
    join: string;
    contact: string;
  };
  clubs: {
    all: string;
    about: string;
    title: string;
    searchPlaceholder: string;
    search: string;
    options: { all: string; sports: string; strategy: string; literature: string };
    removeFilter: string;
    memories: string;
    memoryAlt: string;
    loading: string;
    error: string;
  };
  events: {
    eyebrow: string;
    title: string;
    description: string;
    current: string;
    currentDescription: string;
    upcoming: string;
    upcomingDescription: string;
    past: string;
    pastDescription: string;
    currentBadge: string;
    upcomingBadge: string;
    pastBadge: string;
    location: string;
    emptyCurrent: string;
    emptyUpcoming: string;
    emptyPast: string;
    error: string;
  };
};

const en: Dictionary = {
  metadata: {
    title: "AITUSA — Student Government",
    description: "AITUSA brings together active students, clubs, and initiatives at Astana IT University.",
  },
  header: {
    home: "Home",
    committees: "Committees",
    clubs: "Clubs",
    events: "Events",
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
        { name: "Assylkhan Toilybekov", role: "Vice President for Science and Academic Affairs" },
      ],
      eyebrow: "About us",
      revealText: "Want to organize events, support students, create content or build partnerships?",
      join: "Join our team",
      bannerAlt: "AITUSA team",
      joinImageAlt: "Students working together",
      footerBannerAlt: "AITUSA community",
    },
    committees: { title: "Committees", details: "Learn more" },
  },
  committeePage: {
    notFound: "Committee not found",
    all: "Back to committees",
    badge: "AITUSA Committee",
    about: "About the committee",
    whatWeDo: "What we do",
    directions: "Key areas",
    inside: "Inside the team",
    moments: "Memories",
    join: "Join the team",
    contact: "Contact the team",
  },
  clubs: {
    title: "Clubs",
    all: "Back to clubs",
    about: "About the club",
    searchPlaceholder: "Club name or keywords...",
    search: "Search",
    options: { all: "All", sports: "Sports", strategy: "Strategy", literature: "Literature" },
    removeFilter: "Remove",
    memories: "Memorable moments",
    memoryAlt: "Club memory",
    loading: "Loading club...",
    error: "We could not load this club.",
  },
  events: {
    eyebrow: "AITUSA calendar",
    title: "Events that bring us together",
    description: "Discover what is happening now, plan your next campus experience, and revisit memorable moments from student life.",
    current: "Happening now",
    currentDescription: "Join events taking place across the AITU community today.",
    upcoming: "Coming up",
    upcomingDescription: "Save the date and be part of what happens next.",
    past: "Past events",
    pastDescription: "A look back at the ideas, people, and moments we shared.",
    currentBadge: "Happening now",
    upcomingBadge: "Upcoming",
    pastBadge: "Completed",
    location: "Location",
    emptyCurrent: "There are no events happening right now.",
    emptyUpcoming: "New events will be announced soon.",
    emptyPast: "The event archive is currently empty.",
    error: "We could not load the events. Please try again later.",
  },
};

const ru: Dictionary = {
  metadata: {
    title: "AITUSA — Студенческое самоуправление",
    description: "AITUSA объединяет активных студентов, клубы и инициативы Astana IT University.",
  },
  header: {
    home: "Главная",
    committees: "Комитеты",
    clubs: "Клубы",
    events: "События",
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
  },
  committeePage: {
    notFound: "Комитет не найден",
    all: "Вернуться к комитетам",
    badge: "Комитет AITUSA",
    about: "О комитете",
    whatWeDo: "Чем мы занимаемся",
    directions: "Главные направления",
    inside: "Внутри команды",
    moments: "Воспоминания",
    join: "Стань частью команды",
    contact: "Связаться с командой",
  },
  clubs: {
    title: "Клубы",
    all: "Вернуться к клубам",
    about: "О клубе",
    searchPlaceholder: "Название клуба или ключевые слова...",
    search: "Найти",
    options: { all: "Все", sports: "Спорт", strategy: "Стратегия", literature: "Литература" },
    removeFilter: "Удалить",
    memories: "Яркие моменты",
    memoryAlt: "Момент из жизни клуба",
    loading: "Загружаем клуб...",
    error: "Не удалось загрузить информацию о клубе.",
  },
  events: {
    eyebrow: "Календарь AITUSA",
    title: "События, которые объединяют",
    description: "Узнавайте, что проходит сейчас, планируйте следующие события и вспоминайте яркие моменты студенческой жизни.",
    current: "Проходят сейчас",
    currentDescription: "Присоединяйтесь к мероприятиям, которые проходят в сообществе AITU прямо сейчас.",
    upcoming: "Предстоящие события",
    upcomingDescription: "Сохраните дату и станьте частью следующих событий.",
    past: "Прошедшие события",
    pastDescription: "Вспоминаем идеи, людей и моменты, которые нас объединили.",
    currentBadge: "Сейчас",
    upcomingBadge: "Скоро",
    pastBadge: "Завершено",
    location: "Место",
    emptyCurrent: "Сейчас активных мероприятий нет.",
    emptyUpcoming: "Новые мероприятия скоро появятся.",
    emptyPast: "Архив мероприятий пока пуст.",
    error: "Не удалось загрузить мероприятия. Попробуйте позже.",
  },
};

const kk: Dictionary = {
  metadata: {
    title: "AITUSA — Студенттік өзін-өзі басқару",
    description: "AITUSA Astana IT University белсенді студенттерін, клубтары мен бастамаларын біріктіреді.",
  },
  header: {
    home: "Басты бет",
    committees: "Комитеттер",
    clubs: "Клубтар",
    events: "Іс-шаралар",
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
  },
  committeePage: {
    notFound: "Комитет табылмады",
    all: "Комитеттерге оралу",
    badge: "AITUSA комитеті",
    about: "Комитет туралы",
    whatWeDo: "Біздің қызметіміз",
    directions: "Негізгі бағыттар",
    inside: "Команда ішінде",
    moments: "Естеліктер",
    join: "Командаға қосыл",
    contact: "Командамен байланысу",
  },
  clubs: {
    title: "Клубтар",
    all: "Клубтарға оралу",
    about: "Клуб туралы",
    searchPlaceholder: "Клуб атауы немесе кілт сөздер...",
    search: "Іздеу",
    options: { all: "Барлығы", sports: "Спорт", strategy: "Стратегия", literature: "Әдебиет" },
    removeFilter: "Жою",
    memories: "Жарқын сәттер",
    memoryAlt: "Клуб өмірінен сәт",
    loading: "Клуб жүктелуде...",
    error: "Клуб туралы ақпаратты жүктеу мүмкін болмады.",
  },
  events: {
    eyebrow: "AITUSA күнтізбесі",
    title: "Бізді біріктіретін іс-шаралар",
    description: "Қазір өтіп жатқан іс-шараларды біліп, алдағы кездесулерді жоспарлап, студенттік өмірдің жарқын сәттерін еске алыңыз.",
    current: "Қазір өтіп жатыр",
    currentDescription: "AITU қауымдастығында дәл қазір өтіп жатқан іс-шараларға қосылыңыз.",
    upcoming: "Алдағы іс-шаралар",
    upcomingDescription: "Күнін белгілеп, келесі іс-шаралардың бір бөлігі болыңыз.",
    past: "Өткен іс-шаралар",
    pastDescription: "Бізді біріктірген идеяларды, адамдарды және сәттерді еске аламыз.",
    currentBadge: "Қазір",
    upcomingBadge: "Жақында",
    pastBadge: "Аяқталды",
    location: "Өтетін орны",
    emptyCurrent: "Қазір өтіп жатқан іс-шаралар жоқ.",
    emptyUpcoming: "Жаңа іс-шаралар жақында жарияланады.",
    emptyPast: "Іс-шаралар мұрағаты әзірге бос.",
    error: "Іс-шараларды жүктеу мүмкін болмады. Кейінірек қайталап көріңіз.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ru, kk };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
