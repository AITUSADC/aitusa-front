
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Committess from "@/components/sections/Committess";
import Team from "@/components/sections/Team";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return (
    <>
      <Header locale={lang} labels={dictionary.header} variant="transparent" />
      <About labels={dictionary.home.about} />
      <Team labels={dictionary.home.team} />
      <Committess locale={lang} labels={dictionary.home.committees} />
    </>
  );
}
