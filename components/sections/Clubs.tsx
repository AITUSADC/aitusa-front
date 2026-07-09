"use client";
import { ClubListItem } from "@/types/club";
import React, { useState, useEffect } from "react";
import ClubCard from "../layout/ClubCard";
import ClubsFilter, { ClubFilterType } from "../layout/ClubsFilter";

export default function ClubsView() {
  const [clubs, setClubs] = useState<ClubListItem[]>([]);
  const [filter, setFilter] = useState<ClubFilterType>({ searchTerm: "", selectedOptions: [] });
  const [filteredClubs, setFilteredClubs] = useState<ClubListItem[]>([]);
  useEffect(() => {
    fetch("/api/clubs-mock-data")
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);


  useEffect(() => {
    const filteredClubs = clubs.filter((club) => {
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
    });
    setFilteredClubs(filteredClubs);
  }, [filter, clubs]);

  return (
    <section className="mx-4 sm:mx-10 lg:mx-20 mb-48">
      <ClubsFilter filter={filter} onFilterChange={setFilter} />
      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#444444] font-bold mb-5">
        Clubs
      </h3>
      {filteredClubs.map((club) => (
        <ClubCard
          key={club.id}
          name={club.name}
          description={club.description}
          slug={club.slug || ""}
          imageUrl={club.imageUrl || "/images/Placeholder.png"}
        />
      ))}
    </section>
  );
}
