import Header from "@/components/layout/Header";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Gallery({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return (
    <>
      <Header locale={lang} labels={dictionary.header} variant="solid" />
      <main className="mx-auto min-h-[55vh] w-full max-w-[1569px] px-5 py-20 md:px-20 md:py-32">
        <h1 className="text-[clamp(40px,7vw,96px)] font-semibold leading-none tracking-[-0.045em]">
          {dictionary.gallery.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#555] md:text-2xl">
          {dictionary.gallery.description}
        </p>
      </main>
    </>
  );
}
