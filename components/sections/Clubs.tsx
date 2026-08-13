"use client";
import { ClubListItem } from "@/types/club";
import { useMemo, useState, useEffect } from "react";
import ClubCard from "../layout/ClubCard";
import ClubsFilter, { ClubFilterType } from "../layout/ClubsFilter";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type ClubsViewProps = {
  locale: Locale;
  labels: Dictionary["clubs"];
};

export default function ClubsView({ locale, labels }: ClubsViewProps) {
  const [clubs, setClubs] = useState<ClubListItem[]>([]);
  const [filter, setFilter] = useState<ClubFilterType>({ searchTerm: "", selectedOptions: [] });
  useEffect(() => {
    fetch(`/api/clubs-mock-data?lang=${locale}`)
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, [locale]);


  const filteredClubs = useMemo(
    () => clubs.filter((club) => {
      const matchesSearchTerm =
        filter.searchTerm === "" ||
        club.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
        club.description.toLowerCase().includes(filter.searchTerm.toLowerCase());
      
      const hasAllOption = filter.selectedOptions.some((option) => option.value === "all");
      const matchesSelectedOptions =
        filter.selectedOptions.length === 0 ||
        hasAllOption ||
        filter.selectedOptions.some((option) => club.categories.includes(option.value));
       
      return matchesSearchTerm && matchesSelectedOptions;
    }),
    [filter, clubs],
  );

  return (
    <section className="mx-4 sm:mx-10 lg:mx-20 mb-48">
      <ClubsFilter filter={filter} onFilterChange={setFilter} labels={labels} />
      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#444444] font-bold mb-5">
        {labels.title}
      </h3>
      {filteredClubs.map((club) => (
        <ClubCard
          key={club.id}
          name={club.name}
          description={club.description}
          slug={club.slug || ""}
          imageUrl={club.imageUrl || "/images/Placeholder.png"}
          locale={locale}
        />
      ))}
    </section>
  );
}
