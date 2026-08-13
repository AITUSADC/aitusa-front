import type { ClubGoal } from "@/types/club";
import type { Locale } from "@/i18n/config";

type ClubCopy = { name: string; description: string };

const russian: Record<string, ClubCopy> = {
  "chess-club": { name: "Шахматный клуб", description: "Сообщество любителей шахмат для партий, обучения, разбора стратегий и дружеских турниров." },
  "book-club": { name: "Книжный клуб", description: "Пространство для чтения, обсуждения книг, обмена рекомендациями и вдумчивых разговоров." },
  "cooking-club": { name: "Кулинарный клуб", description: "Клуб для знакомства с кухнями мира, обмена рецептами и совместных тематических встреч." },
  "hiking-club": { name: "Туристический клуб", description: "Походы, прогулки на природе и поездки выходного дня с вниманием к безопасности и экологии." },
  "photography-club": { name: "Фотоклуб", description: "Творческое сообщество для развития навыков съёмки, фотопрогулок и совместных выставок." },
  "coding-club": { name: "Клуб программирования", description: "Среда для разработчиков любого уровня: реальные проекты, алгоритмы и современные технологии." },
  "music-club": { name: "Музыкальный клуб", description: "Сообщество музыкантов, вокалистов и продюсеров для репетиций и выступлений на кампусе." },
  "art-club": { name: "Арт-клуб", description: "Открытое пространство для рисунка, живописи, смешанных техник и творческих мастерских." },
  "robotics-club": { name: "Клуб робототехники", description: "Проектирование, сборка и программирование роботов, электроника и командные соревнования." },
  "drama-club": { name: "Театральный клуб", description: "Актёрское мастерство, режиссура, сценическая работа и постановки для университетской аудитории." },
  "debate-club": { name: "Дебатный клуб", description: "Практика публичных выступлений, аргументации и критического мышления в структурированных дебатах." },
  "science-club": { name: "Научный клуб", description: "Эксперименты, демонстрации и обсуждения, связывающие учебные знания с реальными открытиями." },
  "gaming-club": { name: "Игровой клуб", description: "Дружеское и соревновательное сообщество для командных игр, турниров и общения." },
  "dance-club": { name: "Танцевальный клуб", description: "Хореография, техника, совместные номера и выступления для танцоров любого уровня." },
  "entrepreneurship-club": { name: "Клуб предпринимательства", description: "Сообщество будущих основателей для проверки идей, бизнес-моделей и подготовки презентаций." },
};

const kazakh: Record<string, ClubCopy> = {
  "chess-club": { name: "Шахмат клубы", description: "Шахмат ойнауға, үйренуге, стратегия талдауға және достық турнирлерге арналған қауымдастық." },
  "book-club": { name: "Кітап клубы", description: "Кітап оқу, талқылау, ұсыныстармен бөлісу және мазмұнды әңгіме құруға арналған орта." },
  "cooking-club": { name: "Аспаздық клубы", description: "Әлем асханаларын танып, рецепт алмасып, тақырыптық кездесулерде бірге тағам дайындайтын клуб." },
  "hiking-club": { name: "Туризм клубы", description: "Қауіпсіздік пен табиғатты қорғауға мән беретін жорықтар, серуендер және демалыс күнгі сапарлар." },
  "photography-club": { name: "Фотография клубы", description: "Түсірілім дағдыларын жетілдіруге, фотосеруендер мен көрмелерге арналған шығармашылық қауымдастық." },
  "coding-club": { name: "Бағдарламалау клубы", description: "Кез келген деңгейдегі әзірлеушілерге арналған нақты жобалар, алгоритмдер және заманауи технологиялар ортасы." },
  "music-club": { name: "Музыка клубы", description: "Репетиция жасап, кампус іс-шараларында өнер көрсететін музыканттар, вокалистер және продюсерлер қауымы." },
  "art-club": { name: "Өнер клубы", description: "Сурет, кескіндеме, аралас техника және шығармашылық шеберханаларға арналған ашық орта." },
  "robotics-club": { name: "Робототехника клубы", description: "Роботтарды жобалау, құрастыру және бағдарламалау, электроника мен командалық жарыстар." },
  "drama-club": { name: "Театр клубы", description: "Актерлік шеберлік, режиссура, сахналық жұмыс және университет көрермендеріне арналған қойылымдар." },
  "debate-club": { name: "Пікірсайыс клубы", description: "Құрылымды пікірсайыс арқылы көпшілік алдында сөйлеу, дәлелдеу және сыни ойлау тәжірибесі." },
  "science-club": { name: "Ғылым клубы", description: "Оқу білімін нақты жаңалықтармен байланыстыратын тәжірибелер, көрсетілімдер және талқылаулар." },
  "gaming-club": { name: "Ойын клубы", description: "Командалық ойындар, турнирлер және қарым-қатынас үшін достық әрі бәсекелі қауымдастық." },
  "dance-club": { name: "Би клубы", description: "Кез келген деңгейдегі бишілерге арналған хореография, техника, ортақ нөмірлер және қойылымдар." },
  "entrepreneurship-club": { name: "Кәсіпкерлік клубы", description: "Идеяларды тексеру, бизнес-модель құру және таныстырылым дайындауға арналған болашақ негізін қалаушылар қауымы." },
};

export function getClubCopy(
  slug: string,
  locale: Locale,
  fallback: ClubCopy,
): ClubCopy {
  if (locale === "en") return fallback;
  return (locale === "ru" ? russian : kazakh)[slug] ?? fallback;
}

export function getClubGoals(clubName: string, locale: Locale): {
  description: string;
  list: ClubGoal[];
} {
  const imageUrl = "/images/Placeholder.png";

  if (locale === "ru") {
    return {
      description: `В этом семестре ${clubName} развивает практические навыки и регулярное участие сообщества.`,
      list: [
        { id: 1, title: "Основные навыки", description: "Проводить регулярные занятия и помогать участникам развиваться через практику." },
        { id: 2, title: "Командные проекты", description: "Создавать совместные проекты, решать задачи и учиться друг у друга.", imageUrl },
        { id: 3, title: "Открытая презентация", description: "Показывать результаты, делиться прогрессом и развивать уверенность.", imageUrl: "/images/placeholder2.jpg" },
      ],
    };
  }

  if (locale === "kk") {
    return {
      description: `Осы семестрде ${clubName} практикалық дағдылар мен қауымдастықтың тұрақты қатысуын дамытады.`,
      list: [
        { id: 1, title: "Негізгі дағдылар", description: "Тұрақты сабақтар өткізіп, қатысушылардың тәжірибе арқылы дамуына көмектесу." },
        { id: 2, title: "Командалық жобалар", description: "Ортақ жобалар жасап, міндеттерді шешіп, бір-бірінен үйрену.", imageUrl },
        { id: 3, title: "Ашық таныстырылым", description: "Нәтижелерді көрсетіп, ілгерілеумен бөлісіп, сенімділікті арттыру.", imageUrl: "/images/placeholder2.jpg" },
      ],
    };
  }

  return {
    description: `This semester, ${clubName} is focused on practical growth and consistent participation.`,
    list: [
      { id: 1, title: "Core Skills", description: `Run regular sessions and help members build practical ${clubName.toLowerCase()} skills.` },
      { id: 2, title: "Team Projects", description: "Create collaborative projects where members solve challenges and learn from peers.", imageUrl },
      { id: 3, title: "Public Showcase", description: "Present outcomes, share progress, and help members build confidence.", imageUrl: "/images/placeholder2.jpg" },
    ],
  };
}
