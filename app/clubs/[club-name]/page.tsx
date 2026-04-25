"use client";
import Header from "@/components/layout/Header";
import ClubGoalsSection from "@/components/sections/club/ClubGoalsSection";
import ClubHeroSection from "@/components/sections/club/ClubHeroSection";
import type { ClubBySlug } from "@/types/club";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
// localhost:3000/clubs/aitusa
export default function Club() {
  const [clubData, setClubData] = React.useState<ClubBySlug | null>(null);

  const params = useParams();
  const clubName = params["club-name"];

  useEffect(() => {
    fetch("/api/club-mock-data?slug=" + clubName)
      .then((response) => response.json())
      .then((data) => setClubData(data))
      .catch((error) => console.error("Error fetching club data:", error));
  }, []);
  console.log(clubData);
  
  return (
    <>
      <Header variant="solid" />
      {clubData && (
        <>
          <ClubHeroSection
            name={clubData.name}
            description={clubData.description}
            imageUrl={clubData.imageUrl || "/images/placeholder2.jpg"}
            status={"open"}
          />
          <ClubGoalsSection
            description={clubData.goals.description}
            list={clubData.goals.list}
          />
        </>
      )}
    </>
  );
}
