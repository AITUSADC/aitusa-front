import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  EventLocale,
  EventPublicationStatus,
  PrismaClient,
} from "../src/generated/prisma/client";

const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://aitusa:aitusa@localhost:5432/aitusa?schema=public";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: databaseUrl }),
});

const DAY = 24 * 60 * 60 * 1000;
const now = Date.now();

const events = [
  {
    slug: "aitu-spring-fest",
    startsAt: new Date(now - DAY),
    endsAt: new Date(now + DAY),
    imageUrl: "https://images.unsplash.com/photo-1527740051471-8e6434a9c767?auto=format&fit=crop&w=1800&q=85",
    translations: {
      en: ["AITU Spring Fest", "A campus festival of music, creativity, and student communities.", "Meet student organizations, enjoy live performances, and spend the day with the AITU community.", "Main atrium, Astana IT University"],
      ru: ["AITU Spring Fest", "Университетский фестиваль музыки, творчества и студенческих сообществ.", "Познакомьтесь со студенческими организациями, посетите выступления и проведите день вместе с сообществом AITU.", "Главный атриум Astana IT University"],
      kk: ["AITU Spring Fest", "Музыка, шығармашылық және студенттік қауымдастықтар фестивалі.", "Студенттік ұйымдармен танысып, жанды қойылымдарды тамашалап, күнді AITU қауымдастығымен бірге өткізіңіз.", "Astana IT University бас атриумы"],
    },
  },
  {
    slug: "student-leadership-meetup",
    startsAt: new Date(now + 10 * DAY),
    endsAt: new Date(now + 10 * DAY + 3 * 60 * 60 * 1000),
    imageUrl: "https://images.pexels.com/photos/34947131/pexels-photo-34947131.jpeg?auto=compress&fit=crop&w=1600",
    translations: {
      en: ["Student Leadership Meetup", "An open meeting for students who want to lead initiatives and build strong teams.", "A practical meetup with AITUSA leaders about launching initiatives, sharing responsibility, and growing a community.", "Coworking zone, C1 block"],
      ru: ["Встреча студенческих лидеров", "Открытая встреча для студентов, которые хотят развивать инициативы и создавать сильные команды.", "Практическая встреча с лидерами AITUSA о запуске инициатив, распределении ответственности и развитии сообщества.", "Коворкинг-зона, блок C1"],
      kk: ["Студенттік көшбасшылар кездесуі", "Бастамаларды дамытып, мықты команда құрғысы келетін студенттерге арналған ашық кездесу.", "AITUSA көшбасшыларымен бастамаларды іске қосу, жауапкершілікті бөлу және қауымдастықты дамыту туралы тәжірибелік кездесу.", "Коворкинг аймағы, C1 блогы"],
    },
  },
  {
    slug: "winter-charity-fair",
    startsAt: new Date(now - 45 * DAY),
    endsAt: new Date(now - 44 * DAY),
    imageUrl: "https://images.pexels.com/photos/6646946/pexels-photo-6646946.jpeg?auto=compress&fit=crop&w=1600",
    translations: {
      en: ["Winter Charity Fair", "A warm community fair supporting student-led charity projects.", "Students presented handmade goods, creative projects, and performances to raise support for local initiatives.", "Astana IT University"],
      ru: ["Зимняя благотворительная ярмарка", "Тёплая университетская ярмарка в поддержку студенческих благотворительных проектов.", "Студенты представили изделия ручной работы, творческие проекты и выступления, чтобы поддержать местные инициативы.", "Astana IT University"],
      kk: ["Қысқы қайырымдылық жәрмеңкесі", "Студенттік қайырымдылық жобаларын қолдауға арналған жылы қауымдастық жәрмеңкесі.", "Студенттер жергілікті бастамаларды қолдау үшін қолдан жасалған бұйымдарын, шығармашылық жобаларын және қойылымдарын ұсынды.", "Astana IT University"],
    },
  },
] as const;

async function main() {
  for (const event of events) {
    await prisma.event.upsert({
      where: { slug: event.slug },
      update: {
        startsAt: event.startsAt,
        endsAt: event.endsAt,
        imageUrl: event.imageUrl,
        status: EventPublicationStatus.PUBLISHED,
        translations: {
          deleteMany: {},
          create: Object.entries(event.translations).map(([locale, values]) => ({
            locale: locale as EventLocale,
            title: values[0],
            shortDescription: values[1],
            description: values[2],
            location: values[3],
          })),
        },
      },
      create: {
        slug: event.slug,
        startsAt: event.startsAt,
        endsAt: event.endsAt,
        imageUrl: event.imageUrl,
        status: EventPublicationStatus.PUBLISHED,
        translations: {
          create: Object.entries(event.translations).map(([locale, values]) => ({
            locale: locale as EventLocale,
            title: values[0],
            shortDescription: values[1],
            description: values[2],
            location: values[3],
          })),
        },
      },
    });
  }
}

main()
  .finally(async () => prisma.$disconnect())
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
