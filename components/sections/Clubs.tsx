"use client";
import { ClubListItem } from "@/types/club";
import React, { useState, useEffect } from "react";
import ClubCard from "../layout/ClubCard";
import ClubsFilter from "../layout/ClubsFilter";

export default function ClubsView() {
  const [clubs, setClubs] = useState<ClubListItem[]>([]);
  useEffect(() => {
    fetch("/api/clubs-mock-data")
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);
  return (
    <section className="mx-4 sm:mx-10 lg:mx-20 mb-48">
      <ClubsFilter />
      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#444444] font-bold mb-5">
        Clubs
      </h3>
      {clubs.map((club) => (
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
