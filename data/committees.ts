export type CommitteePhoto = {
  src: string;
  alt: string;
  position?: string;
};

export type CommitteeDirection = {
  title: string;
  description: string;
};

export type Committee = {
  id: number;
  slug: string;
  title: string;
  cardDescription: string;
  imageUrl: string;
  isBlue: boolean;
  wide?: boolean;
  heroImage: string;
  heroImagePosition?: string;
  statement: string;
  about: string[];
  directions: CommitteeDirection[];
  gallery: CommitteePhoto[];
  cta: string;
};

export const committees: Committee[] = [
  {
    id: 1,
    slug: "social",
    title: "Социальная деятельность",
    cardDescription:
      "Поддерживаем студентов, развиваем волонтёрские инициативы и создаём полезные социальные проекты.",
    imageUrl: "/committees/soc_cul_dig.png",
    isBlue: true,
    heroImage: "/images/IMG.png",
    heroImagePosition: "center",
    statement: "Помогаем студентам чувствовать поддержку и превращаем заботу в реальные дела.",
    about: [
      "Комитет социальной деятельности объединяет студентов, которым важно делать университетскую среду внимательнее, добрее и доступнее для каждого.",
      "Мы помогаем запускать волонтёрские инициативы, поддерживаем благотворительные проекты и создаём пространство, где студент может обратиться за помощью или сам стать частью полезного дела.",
    ],
    directions: [
      {
        title: "Волонтёрство",
        description: "Собираем команды для социальных инициатив и помогаем каждому найти дело по душе.",
      },
      {
        title: "Поддержка студентов",
        description: "Слышим запросы студентов и вместе ищем понятные, человечные решения.",
      },
      {
        title: "Добрые проекты",
        description: "Организуем акции, которые объединяют университет вокруг важных ценностей.",
      },
    ],
    gallery: [
      { src: "/images/Rectangle 15.png", alt: "Команда AITUSA", position: "center" },
      { src: "/images/IMG.png", alt: "Студенты объединяют усилия", position: "center" },
      { src: "/images/Container.png", alt: "Представитель команды AITUSA", position: "center 28%" },
    ],
    cta: "Хочешь помогать людям и видеть результат своих действий? Тебе точно к нам.",
  },
  {
    id: 2,
    slug: "media",
    title: "СМИ",
    cardDescription:
      "Рассказываем о жизни университета, снимаем контент и формируем узнаваемый образ AITUSA.",
    imageUrl: "/committees/smi.png",
    isBlue: false,
    heroImage: "/images/Rectangle 15.png",
    heroImagePosition: "center 35%",
    statement: "Замечаем главное, находим свой голос и показываем студенческую жизнь такой, какая она есть.",
    about: [
      "Комитет СМИ — это редакция, съёмочная команда и креативная лаборатория AITUSA в одном месте. Мы превращаем события и идеи в истории, которые хочется смотреть, читать и обсуждать.",
      "Здесь можно попробовать себя в фотографии, видео, дизайне, копирайтинге или работе с социальными сетями и собрать первые сильные проекты в портфолио.",
    ],
    directions: [
      {
        title: "Фото и видео",
        description: "Снимаем мероприятия, портреты и короткие форматы о жизни университета.",
      },
      {
        title: "Дизайн",
        description: "Создаём визуальный язык проектов, афиши и оформление цифровых площадок.",
      },
      {
        title: "Редакция",
        description: "Пишем тексты, планируем публикации и рассказываем истории студентов.",
      },
    ],
    gallery: [
      { src: "/images/Rectangle 15.png", alt: "Команда студенческого самоуправления", position: "center 30%" },
      { src: "/images/Container(1).png", alt: "Участница команды AITUSA", position: "center 25%" },
      { src: "/images/Container(3).png", alt: "Участник команды AITUSA", position: "center 25%" },
    ],
    cta: "Если любишь рассказывать истории и создавать визуал — приходи делать медиа вместе.",
  },
  {
    id: 3,
    slug: "culture",
    title: "Культурно-массовая деятельность",
    cardDescription:
      "Придумываем и проводим события, которые объединяют студентов и становятся яркими воспоминаниями.",
    imageUrl: "/committees/soc_cul_dig.png",
    isBlue: true,
    heroImage: "/images/Rectangle 15.png",
    heroImagePosition: "center 35%",
    statement: "Создаём события, после которых у студентов остаются новые знакомства, эмоции и общие воспоминания.",
    about: [
      "Комитет культурно-массовой деятельности отвечает за атмосферу университетской жизни: от первой идеи события до последнего света на площадке.",
      "В нашей команде можно научиться придумывать концепции, собирать программу, работать со сценой, координировать участников и превращать обычный день в событие для всего кампуса.",
    ],
    directions: [
      {
        title: "Концепции",
        description: "Придумываем темы, форматы и детали, которые делают каждое событие особенным.",
      },
      {
        title: "Организация",
        description: "Составляем план, координируем команды и отвечаем за ход мероприятия.",
      },
      {
        title: "Атмосфера",
        description: "Работаем со сценарием, оформлением и опытом каждого гостя.",
      },
    ],
    gallery: [
      { src: "/images/Rectangle 15.png", alt: "Команда AITUSA на общей фотосессии", position: "center 35%" },
      { src: "/images/IMG.png", alt: "Командная работа студентов", position: "center" },
      { src: "/images/Container(1).png", alt: "Представительница команды AITUSA", position: "center 24%" },
    ],
    cta: "Любишь собирать людей и создавать эмоции? Давай делать главные события кампуса вместе.",
  },
  {
    id: 4,
    slug: "external-relations",
    title: "Внешние связи",
    cardDescription:
      "Развиваем партнёрства, представляем AITUSA за пределами университета и открываем новые возможности.",
    imageUrl: "/committees/vneshie.png",
    isBlue: false,
    heroImage: "/images/IMG.png",
    heroImagePosition: "center",
    statement: "Соединяем студенческие идеи с людьми и организациями, которые помогают им расти.",
    about: [
      "Комитет внешних связей выстраивает коммуникацию AITUSA с партнёрами, студенческими организациями и профессиональным сообществом.",
      "Участники учатся вести деловую переписку, готовить предложения, презентовать проекты и поддерживать долгосрочные отношения — навыки, которые полезны в любой карьере.",
    ],
    directions: [
      {
        title: "Партнёрства",
        description: "Находим точки сотрудничества и готовим предложения для совместных проектов.",
      },
      {
        title: "Коммуникация",
        description: "Представляем инициативы AITUSA и поддерживаем профессиональный диалог.",
      },
      {
        title: "Новые возможности",
        description: "Расширяем круг контактов и открываем студентам новые форматы участия.",
      },
    ],
    gallery: [
      { src: "/images/IMG.png", alt: "Команда объединяет усилия", position: "center" },
      { src: "/images/Rectangle 15.png", alt: "Представители AITUSA", position: "center 35%" },
      { src: "/images/Container(3).png", alt: "Представитель команды AITUSA", position: "center 25%" },
    ],
    cta: "Хочешь знакомиться, договариваться и открывать возможности для других? Присоединяйся.",
  },
  {
    id: 5,
    slug: "academic",
    title: "Академическая деятельность",
    cardDescription:
      "Помогаем решать учебные вопросы и делаем образовательную среду понятнее и комфортнее.",
    imageUrl: "/committees/academ.png",
    isBlue: false,
    heroImage: "/images/Rectangle 15.png",
    heroImagePosition: "center 30%",
    statement: "Делаем так, чтобы голос студентов был услышан, а учебные процессы становились понятнее.",
    about: [
      "Комитет академической деятельности помогает выстраивать диалог между студентами и университетом по вопросам обучения.",
      "Мы собираем обратную связь, объясняем сложные процессы простым языком, поддерживаем образовательные инициативы и помогаем студентам ориентироваться в академической среде.",
    ],
    directions: [
      {
        title: "Обратная связь",
        description: "Собираем вопросы и предложения студентов, чтобы системно работать с ними.",
      },
      {
        title: "Навигация",
        description: "Помогаем разобраться в учебных процедурах и найти нужную информацию.",
      },
      {
        title: "Образовательные проекты",
        description: "Поддерживаем форматы, которые помогают учиться осознаннее и эффективнее.",
      },
    ],
    gallery: [
      { src: "/images/Rectangle 15.png", alt: "Студенческая команда AITUSA", position: "center 32%" },
      { src: "/images/Container(3).png", alt: "Представитель академического направления", position: "center 25%" },
      { src: "/images/IMG.png", alt: "Совместная работа над инициативой", position: "center" },
    ],
    cta: "Хочешь улучшать образовательную среду и помогать студентам находить ответы? Мы ждём тебя.",
  },
  {
    id: 6,
    slug: "digital",
    title: "Цифровизация",
    cardDescription:
      "Создаём цифровые решения и автоматизируем процессы студенческого самоуправления.",
    imageUrl: "/committees/soc_cul_dig.png",
    isBlue: true,
    heroImage: "/images/IMG.png",
    heroImagePosition: "center",
    statement: "Превращаем идеи в цифровые продукты, которыми удобно пользоваться студентам и команде AITUSA.",
    about: [
      "Комитет цифровизации проектирует и развивает инструменты, которые упрощают работу студенческого самоуправления и взаимодействие со студентами.",
      "Здесь дизайнеры, разработчики и аналитики работают одной продуктовой командой: изучают задачу, создают прототип, запускают решение и улучшают его по обратной связи.",
    ],
    directions: [
      {
        title: "Продуктовый дизайн",
        description: "Исследуем сценарии студентов и проектируем понятные интерфейсы.",
      },
      {
        title: "Разработка",
        description: "Создаём сайты, сервисы и внутренние инструменты для команды.",
      },
      {
        title: "Автоматизация",
        description: "Убираем рутину и выстраиваем процессы, которые экономят время.",
      },
    ],
    gallery: [
      { src: "/images/IMG.png", alt: "Совместная работа продуктовой команды", position: "center" },
      { src: "/images/Rectangle 15.png", alt: "Команда AITUSA", position: "center 34%" },
      { src: "/images/Container.png", alt: "Участница команды AITUSA", position: "center 28%" },
    ],
    cta: "Хочешь создавать продукты не для учебного кейса, а для реальных пользователей? Начни здесь.",
  },
  {
    id: 7,
    slug: "science-and-innovation",
    title: "Научная и инновационная деятельность",
    cardDescription:
      "Объединяем молодых исследователей, поддерживаем научные идеи и помогаем запускать инновационные проекты.",
    imageUrl: "/committees/sciense.png",
    isBlue: false,
    wide: true,
    heroImage: "/images/Rectangle 15.png",
    heroImagePosition: "center 32%",
    statement: "Помогаем любопытству стать исследованием, а сильной идее — проектом с будущим.",
    about: [
      "Комитет научной и инновационной деятельности объединяет студентов, которым интересно исследовать, экспериментировать и находить новые решения.",
      "Мы создаём среду для обмена знаниями, поддерживаем первые исследовательские шаги и помогаем идеям пройти путь от обсуждения до презентации и командной реализации.",
    ],
    directions: [
      {
        title: "Исследования",
        description: "Объединяем студентов вокруг научных интересов и помогаем начать работу над темой.",
      },
      {
        title: "Инновации",
        description: "Развиваем идеи, которые могут стать прототипами, проектами и новыми решениями.",
      },
      {
        title: "Сообщество",
        description: "Создаём площадки для обмена опытом, дискуссий и междисциплинарной работы.",
      },
    ],
    gallery: [
      { src: "/images/Rectangle 15.png", alt: "Команда молодых лидеров AITUSA", position: "center 32%" },
      { src: "/images/IMG.png", alt: "Студенты работают над общей идеей", position: "center" },
      { src: "/images/Container(3).png", alt: "Представитель научного направления", position: "center 24%" },
    ],
    cta: "Есть идея, исследовательский интерес или желание собрать команду? Давай начнём.",
  },
];

type CommitteeTranslation = {
  title: string;
  cardDescription: string;
  statement: string;
  about: string[];
  directions: CommitteeDirection[];
  galleryAlt: string[];
  cta: string;
};

const englishTranslations: Record<string, CommitteeTranslation> = {
  social: {
    title: "Social Affairs",
    cardDescription: "We support students, grow volunteer initiatives, and create meaningful social projects.",
    statement: "We help students feel supported and turn care into meaningful action.",
    about: [
      "The Social Affairs Committee brings together students who want to make the university environment more attentive, welcoming, and accessible to everyone.",
      "We launch volunteer initiatives, support charity projects, and create a space where every student can ask for help or contribute to a good cause.",
    ],
    directions: [
      { title: "Volunteering", description: "We build teams for social initiatives and help everyone find a cause that matters to them." },
      { title: "Student support", description: "We listen to student needs and work together on clear, human-centered solutions." },
      { title: "Community projects", description: "We organize initiatives that unite the university around important values." },
    ],
    galleryAlt: ["AITUSA team", "Students joining forces", "AITUSA team representative"],
    cta: "Want to help people and see the impact of your work? You belong with us.",
  },
  media: {
    title: "Media",
    cardDescription: "We tell the university's stories, create content, and shape the recognizable voice of AITUSA.",
    statement: "We notice what matters, find the right voice, and show student life as it truly is.",
    about: [
      "The Media Committee is AITUSA's editorial team, production crew, and creative lab in one. We turn events and ideas into stories people want to watch, read, and discuss.",
      "Here you can try photography, video, design, copywriting, or social media and build your first strong portfolio projects.",
    ],
    directions: [
      { title: "Photo and video", description: "We capture events, portraits, and short formats about university life." },
      { title: "Design", description: "We create visual identities, posters, and content for digital platforms." },
      { title: "Editorial", description: "We write, plan publications, and share the stories of our students." },
    ],
    galleryAlt: ["Student government team", "AITUSA team member", "AITUSA team member"],
    cta: "If you love storytelling and visual creation, come make media with us.",
  },
  culture: {
    title: "Culture and Events",
    cardDescription: "We create events that bring students together and turn into lasting memories.",
    statement: "We create events that leave students with new connections, emotions, and shared memories.",
    about: [
      "The Culture and Events Committee shapes the atmosphere of university life, from the first idea to the final light on stage.",
      "Our team learns to develop concepts, build programs, manage stages, coordinate participants, and turn an ordinary day into a campus-wide experience.",
    ],
    directions: [
      { title: "Concepts", description: "We develop themes, formats, and details that make every event distinctive." },
      { title: "Production", description: "We build plans, coordinate teams, and manage events from start to finish." },
      { title: "Atmosphere", description: "We shape the script, visual setting, and experience of every guest." },
    ],
    galleryAlt: ["AITUSA team photoshoot", "Students working together", "AITUSA team representative"],
    cta: "Love bringing people together and creating emotions? Let's make the biggest campus events together.",
  },
  "external-relations": {
    title: "External Relations",
    cardDescription: "We develop partnerships, represent AITUSA beyond the university, and open new opportunities.",
    statement: "We connect student ideas with people and organizations that can help them grow.",
    about: [
      "The External Relations Committee builds communication between AITUSA, partners, student organizations, and the professional community.",
      "Members learn business communication, proposal writing, project presentation, and relationship management — skills valuable in any career.",
    ],
    directions: [
      { title: "Partnerships", description: "We identify opportunities for collaboration and prepare proposals for joint projects." },
      { title: "Communication", description: "We represent AITUSA initiatives and maintain professional dialogue." },
      { title: "New opportunities", description: "We expand our network and open new ways for students to participate." },
    ],
    galleryAlt: ["Team joining forces", "AITUSA representatives", "AITUSA team representative"],
    cta: "Want to connect, negotiate, and create opportunities for others? Join us.",
  },
  academic: {
    title: "Academic Affairs",
    cardDescription: "We help solve academic questions and make the learning environment clearer and more comfortable.",
    statement: "We make sure student voices are heard and academic processes become easier to understand.",
    about: [
      "The Academic Affairs Committee helps build dialogue between students and the university on matters related to learning.",
      "We collect feedback, explain complex processes clearly, support educational initiatives, and help students navigate the academic environment.",
    ],
    directions: [
      { title: "Feedback", description: "We collect student questions and suggestions and work with them systematically." },
      { title: "Guidance", description: "We help students understand academic procedures and find the information they need." },
      { title: "Learning projects", description: "We support formats that help students learn more consciously and effectively." },
    ],
    galleryAlt: ["AITUSA student team", "Academic affairs representative", "Working together on an initiative"],
    cta: "Want to improve learning and help students find answers? We are waiting for you.",
  },
  digital: {
    title: "Digital Transformation",
    cardDescription: "We build digital solutions and automate student government processes.",
    statement: "We turn ideas into digital products that are useful for students and the AITUSA team.",
    about: [
      "The Digital Transformation Committee designs and develops tools that simplify student government work and interaction with students.",
      "Designers, developers, and analysts work as one product team: they study the problem, prototype, launch, and improve solutions through feedback.",
    ],
    directions: [
      { title: "Product design", description: "We study student journeys and design clear, accessible interfaces." },
      { title: "Development", description: "We build websites, services, and internal tools for the team." },
      { title: "Automation", description: "We remove repetitive work and build processes that save time." },
    ],
    galleryAlt: ["Product team collaboration", "AITUSA team", "AITUSA team member"],
    cta: "Want to create products for real users rather than a classroom case? Start here.",
  },
  "science-and-innovation": {
    title: "Science and Innovation",
    cardDescription: "We unite young researchers, support scientific ideas, and help launch innovative projects.",
    statement: "We help curiosity become research and a strong idea become a project with a future.",
    about: [
      "The Science and Innovation Committee brings together students who want to research, experiment, and discover new solutions.",
      "We create an environment for knowledge exchange, support first research steps, and help ideas move from discussion to presentation and team implementation.",
    ],
    directions: [
      { title: "Research", description: "We unite students around scientific interests and help them begin exploring a topic." },
      { title: "Innovation", description: "We develop ideas that can become prototypes, projects, and new solutions." },
      { title: "Community", description: "We create spaces for experience sharing, discussion, and interdisciplinary work." },
    ],
    galleryAlt: ["AITUSA young leaders", "Students working on an idea", "Science committee representative"],
    cta: "Have an idea, a research interest, or a wish to build a team? Let's begin.",
  },
};

const kazakhTranslations: Record<string, CommitteeTranslation> = {
  social: {
    title: "Әлеуметтік қызмет",
    cardDescription: "Студенттерді қолдаймыз, волонтерлік бастамаларды дамытып, пайдалы әлеуметтік жобалар жасаймыз.",
    statement: "Студенттердің қолдауды сезінуіне көмектесіп, қамқорлықты нақты іске айналдырамыз.",
    about: [
      "Әлеуметтік қызмет комитеті университет ортасын әр адам үшін мейірімді, жайлы және қолжетімді еткісі келетін студенттерді біріктіреді.",
      "Біз волонтерлік бастамаларды іске қосып, қайырымдылық жобаларын қолдаймыз және әр студент көмек сұрай алатын немесе игі іске қатыса алатын орта құрамыз.",
    ],
    directions: [
      { title: "Волонтерлік", description: "Әлеуметтік бастамалар үшін командалар жинап, әркімге жақын істі табуға көмектесеміз." },
      { title: "Студенттерді қолдау", description: "Студенттердің сұранысын тыңдап, түсінікті әрі адамға бағытталған шешімдер табамыз." },
      { title: "Ізгі жобалар", description: "Университетті маңызды құндылықтар төңірегінде біріктіретін акциялар өткіземіз." },
    ],
    galleryAlt: ["AITUSA командасы", "Студенттер күш біріктіруде", "AITUSA командасының өкілі"],
    cta: "Адамдарға көмектесіп, еңбегіңіздің нәтижесін көргіңіз келе ме? Бізге қосылыңыз.",
  },
  media: {
    title: "Медиа",
    cardDescription: "Университет өмірі туралы айтып, контент жасап, AITUSA-ның танымал бейнесін қалыптастырамыз.",
    statement: "Маңызды сәттерді байқап, өз үнімізді тауып, студенттік өмірді шынайы көрсетеміз.",
    about: [
      "Медиа комитеті — AITUSA редакциясы, түсірілім тобы және шығармашылық зертханасы. Біз оқиғалар мен идеяларды көргің, оқығың және талқылағың келетін хикаяларға айналдырамыз.",
      "Мұнда фото, видео, дизайн, мәтін жазу немесе әлеуметтік желілер саласында өзіңізді сынап, алғашқы мықты портфолио жобаларын жинай аласыз.",
    ],
    directions: [
      { title: "Фото және видео", description: "Іс-шараларды, портреттерді және университет өмірі туралы қысқа форматтарды түсіреміз." },
      { title: "Дизайн", description: "Жобалардың визуалды тілін, афишалар мен цифрлық алаңдардың безендірілуін жасаймыз." },
      { title: "Редакция", description: "Мәтін жазып, жарияланымдарды жоспарлап, студенттердің оқиғаларын баяндаймыз." },
    ],
    galleryAlt: ["Студенттік өзін-өзі басқару командасы", "AITUSA командасының мүшесі", "AITUSA командасының мүшесі"],
    cta: "Оқиға айтып, визуал жасауды ұнатсаңыз — медианы бірге жасайық.",
  },
  culture: {
    title: "Мәдени-бұқаралық қызмет",
    cardDescription: "Студенттерді біріктіріп, жарқын естелікке айналатын іс-шаралар ұйымдастырамыз.",
    statement: "Студенттерге жаңа таныстық, эмоция және ортақ естелік сыйлайтын іс-шаралар жасаймыз.",
    about: [
      "Мәдени-бұқаралық қызмет комитеті алғашқы идеядан сахнадағы соңғы жарыққа дейін университет өмірінің атмосферасына жауап береді.",
      "Біздің командада тұжырымдама ойлап, бағдарлама құрып, сахнамен жұмыс істеуді, қатысушыларды үйлестіруді және қарапайым күнді бүкіл кампус оқиғасына айналдыруды үйренуге болады.",
    ],
    directions: [
      { title: "Тұжырымдамалар", description: "Әр іс-шараны ерекше ететін тақырыптар, форматтар мен бөлшектерді ойластырамыз." },
      { title: "Ұйымдастыру", description: "Жоспар құрып, командаларды үйлестіріп, іс-шара барысына жауап береміз." },
      { title: "Атмосфера", description: "Сценариймен, безендірумен және әр қонақтың әсерімен жұмыс істейміз." },
    ],
    galleryAlt: ["AITUSA командасының фотосессиясы", "Студенттердің бірлескен жұмысы", "AITUSA командасының өкілі"],
    cta: "Адамдарды біріктіріп, эмоция сыйлауды ұнатасыз ба? Кампустың басты іс-шараларын бірге жасайық.",
  },
  "external-relations": {
    title: "Сыртқы байланыстар",
    cardDescription: "Серіктестіктерді дамытып, AITUSA-ны университеттен тыс таныстырып, жаңа мүмкіндіктер ашамыз.",
    statement: "Студенттік идеяларды олардың өсуіне көмектесетін адамдар және ұйымдармен байланыстырамыз.",
    about: [
      "Сыртқы байланыстар комитеті AITUSA, серіктестер, студенттік ұйымдар және кәсіби қауымдастық арасында байланыс орнатады.",
      "Қатысушылар іскерлік хат алмасуды, ұсыныс дайындауды, жобаны таныстыруды және ұзақ мерзімді қарым-қатынас орнатуды үйренеді.",
    ],
    directions: [
      { title: "Серіктестік", description: "Ынтымақтастық нүктелерін тауып, ортақ жобаларға ұсыныстар дайындаймыз." },
      { title: "Коммуникация", description: "AITUSA бастамаларын таныстырып, кәсіби диалогты қолдаймыз." },
      { title: "Жаңа мүмкіндіктер", description: "Байланыс аясын кеңейтіп, студенттерге жаңа қатысу форматтарын ашамыз." },
    ],
    galleryAlt: ["Команда күш біріктіруде", "AITUSA өкілдері", "AITUSA командасының өкілі"],
    cta: "Танысып, келіссөз жүргізіп, басқаларға мүмкіндік ашқыңыз келе ме? Қосылыңыз.",
  },
  academic: {
    title: "Академиялық қызмет",
    cardDescription: "Оқу мәселелерін шешуге көмектесіп, білім беру ортасын түсінікті әрі жайлы етеміз.",
    statement: "Студенттердің үні естіліп, оқу үдерістерінің түсінікті болуына ықпал етеміз.",
    about: [
      "Академиялық қызмет комитеті оқу мәселелері бойынша студенттер мен университет арасындағы диалогты қалыптастырады.",
      "Біз кері байланыс жинап, күрделі үдерістерді қарапайым тілмен түсіндіреміз, білім беру бастамаларын қолдап, студенттерге академиялық ортада бағдарлануға көмектесеміз.",
    ],
    directions: [
      { title: "Кері байланыс", description: "Студенттердің сұрақтары мен ұсыныстарын жинап, олармен жүйелі жұмыс істейміз." },
      { title: "Бағдарлау", description: "Оқу рәсімдерін түсініп, қажетті ақпаратты табуға көмектесеміз." },
      { title: "Білім беру жобалары", description: "Саналы әрі тиімді оқуға көмектесетін форматтарды қолдаймыз." },
    ],
    galleryAlt: ["AITUSA студенттік командасы", "Академиялық бағыт өкілі", "Бастама бойынша бірлескен жұмыс"],
    cta: "Білім беру ортасын жақсартып, студенттерге жауап табуға көмектескіңіз келе ме? Біз сізді күтеміз.",
  },
  digital: {
    title: "Цифрландыру",
    cardDescription: "Цифрлық шешімдер жасап, студенттік өзін-өзі басқару үдерістерін автоматтандырамыз.",
    statement: "Идеяларды студенттер мен AITUSA командасына ыңғайлы цифрлық өнімдерге айналдырамыз.",
    about: [
      "Цифрландыру комитеті студенттік өзін-өзі басқару жұмысын және студенттермен байланысты жеңілдететін құралдарды жобалап, дамытады.",
      "Дизайнерлер, әзірлеушілер және талдаушылар бір өнімдік командада жұмыс істейді: мәселені зерттеп, прототип жасап, шешімді іске қосып, кері байланыс арқылы жетілдіреді.",
    ],
    directions: [
      { title: "Өнім дизайны", description: "Студенттердің әрекет жолдарын зерттеп, түсінікті интерфейстер жобалаймыз." },
      { title: "Әзірлеу", description: "Команда үшін сайттар, сервистер және ішкі құралдар жасаймыз." },
      { title: "Автоматтандыру", description: "Күнделікті қайталанатын жұмысты азайтып, уақыт үнемдейтін үдерістер құрамыз." },
    ],
    galleryAlt: ["Өнімдік команданың бірлескен жұмысы", "AITUSA командасы", "AITUSA командасының мүшесі"],
    cta: "Оқу кейсі емес, нақты пайдаланушыларға арналған өнім жасағыңыз келе ме? Осы жерден бастаңыз.",
  },
  "science-and-innovation": {
    title: "Ғылыми және инновациялық қызмет",
    cardDescription: "Жас зерттеушілерді біріктіріп, ғылыми идеяларды қолдап, инновациялық жобаларды іске қосуға көмектесеміз.",
    statement: "Қызығушылықты зерттеуге, ал мықты идеяны болашағы бар жобаға айналдыруға көмектесеміз.",
    about: [
      "Ғылыми және инновациялық қызмет комитеті зерттеуге, тәжірибе жасауға және жаңа шешімдер табуға қызығатын студенттерді біріктіреді.",
      "Біз білім алмасу ортасын құрып, алғашқы зерттеу қадамдарын қолдаймыз және идеялардың талқылаудан таныстырылым мен командалық іске асыруға дейін өтуіне көмектесеміз.",
    ],
    directions: [
      { title: "Зерттеу", description: "Студенттерді ғылыми қызығушылықтар төңірегінде біріктіріп, тақырыппен жұмысты бастауға көмектесеміз." },
      { title: "Инновация", description: "Прототипке, жобаға және жаңа шешімге айналатын идеяларды дамытамыз." },
      { title: "Қауымдастық", description: "Тәжірибе алмасу, пікірталас және пәнаралық жұмыс үшін алаңдар құрамыз." },
    ],
    galleryAlt: ["AITUSA жас көшбасшылар командасы", "Студенттер ортақ идеямен жұмыс істеуде", "Ғылыми бағыт өкілі"],
    cta: "Идеяңыз, зерттеу қызығушылығыңыз немесе команда құру ниетіңіз бар ма? Бастайық.",
  },
};

export const committeeSlugs = committees.map(({ slug }) => slug);

export function getCommittees(locale: Locale): Committee[] {
  if (locale === "ru") return committees;

  const translations = locale === "en" ? englishTranslations : kazakhTranslations;

  return committees.map((committee) => {
    const translation = translations[committee.slug];

    return {
      ...committee,
      ...translation,
      gallery: committee.gallery.map((photo, index) => ({
        ...photo,
        alt: translation.galleryAlt[index] ?? photo.alt,
      })),
    };
  });
}

export function getCommittee(slug: string, locale: Locale = "ru") {
  return getCommittees(locale).find((committee) => committee.slug === slug);
}
import type { Locale } from "@/i18n/config";
