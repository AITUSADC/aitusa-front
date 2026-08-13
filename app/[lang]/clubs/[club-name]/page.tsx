import Header from "@/components/layout/Header";
import ClubPageClient from "@/components/sections/club/ClubPageClient";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Club({
  params,
}: {
  params: Promise<{ lang: string; "club-name": string }>;
}) {
  const { lang, "club-name": slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = getDictionary(lang);

  return (
    <>
      <Header locale={lang} labels={dictionary.header} variant="solid" />
      <ClubPageClient
        key={`${lang}:${slug}`}
        locale={lang}
        slug={slug}
        labels={dictionary.clubs}
      />
    </>
  );
}
