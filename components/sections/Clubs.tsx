"use client";
import { Club } from "@/types/club";
import React, { useState, useEffect } from "react";
import ClubCard from "../layout/ClubCard";
import ClubsFilter from "../layout/ClubsFilter";

export default function ClubsView() {
  const [clubs, setClubs] = useState<Club[]>([]);
  useEffect(() => {
    fetch("/api/clubs-mock-data")
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);
  return (
    <section className="mx-20 ">
      <ClubsFilter />
      <h3 className="text-4xl text-[#444444] font-bold mb-5">Clubs</h3>
      {clubs.map((club) => (
        <ClubCard
          key={club.id}
          name={club.name}
          description={club.description}
          nameUrl={club.nameUrl || ""}
          imageUrl={club.imageUrl || "/images/placeholders/Placeholder.png"}
        />
      ))}
    </section>
  );
}
