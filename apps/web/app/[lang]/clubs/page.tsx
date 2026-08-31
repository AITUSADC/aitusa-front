import Header from "@/components/layout/Header";
import ClubsView from "@/components/sections/Clubs";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Clubs({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return (
    <div className="bg-[#f5f5f5]">
      <Header locale={lang} labels={dictionary.header} variant="solid" />
      <ClubsView locale={lang} labels={dictionary.clubs} />
    </div>
  );
}
