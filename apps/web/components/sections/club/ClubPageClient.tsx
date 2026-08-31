"use client";

import { useEffect, useState } from "react";

import ClubGoalsSection from "@/components/sections/club/ClubGoalsSection";
import ClubHeroSection from "@/components/sections/club/ClubHeroSection";
import ClubMemoriesSection from "@/components/sections/club/ClubMemoriesSection";
import JoinClubSection from "@/components/sections/club/JoinClubSection";
import type { ClubBySlug } from "@/types/club";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type ClubPageClientProps = {
  locale: Locale;
  slug: string;
  labels: Dictionary["clubs"];
};

export default function ClubPageClient({
  locale,
  slug,
  labels,
}: ClubPageClientProps) {
  const [clubData, setClubData] = useState<ClubBySlug | null>(null);
  const [hasError, setHasError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/club-mock-data?slug=${encodeURIComponent(slug)}&lang=${locale}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Club request failed");
        return response.json();
      })
      .then((data) => {
        setClubData(data);
        setHasError(null);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setHasError(`${locale}:${slug}`);
      });

    return () => controller.abort();
  }, [locale, slug]);

  if (hasError === `${locale}:${slug}`) {
    return <p className="mx-5 py-24 text-center text-lg text-[#555]">{labels.error}</p>;
  }

  if (!clubData) {
    return <p className="mx-5 py-24 text-center text-lg text-[#555]">{labels.loading}</p>;
  }

  return (
    <>
      <ClubHeroSection
        name={clubData.name}
        description={clubData.description}
        imageUrl={clubData.imageUrl || "/images/placeholder2.jpg"}
        status="open"
        labels={labels}
      />
      <ClubGoalsSection
        description={clubData.goals.description}
        list={clubData.goals.list}
        title={labels.goals}
      />
      <ClubMemoriesSection memories={clubData.memories} labels={labels} />
      <JoinClubSection labels={labels} />
    </>
  );
}
