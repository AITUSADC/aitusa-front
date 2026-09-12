import AdminEventForm from "@/components/admin/AdminEventForm";
import { hasLocale } from "@/i18n/config";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Events Admin — AITUSA",
  robots: { index: false, follow: false },
};

export default async function AdminEventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  if (lang !== "ru") redirect("/ru/admin/events");

  return (
    <main className="min-h-screen bg-[#f5f5f5] [&+footer]:hidden">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-5 py-5 md:px-10 lg:px-16">
          <Link href={`/${lang}`} className="text-xl font-bold tracking-[-0.04em] text-[#0A66C2]">
            AITUSA
          </Link>
          <Link
            href={`/${lang}/events`}
            className="rounded-full border border-[#0A66C2]/25 px-5 py-2 text-sm font-semibold text-[#0A66C2] transition hover:bg-[#0A66C2] hover:text-white"
          >
            Открыть Events
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1480px] px-5 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mb-10 max-w-4xl md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0A66C2]">
            Панель управления
          </p>
          <h1 className="mt-4 text-[clamp(42px,6vw,82px)] font-semibold leading-[0.95] tracking-[-0.055em]">
            Новое мероприятие
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#666]">
            Заполните общие данные и все три языковые версии. Опубликованное мероприятие сразу появится на странице Events.
          </p>
        </div>

        <AdminEventForm />
      </section>
    </main>
  );
}
