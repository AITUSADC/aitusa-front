import MembershipCard from "@/components/layout/MembershipCard";
import React from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type JoinClubSectionProps = {
  labels: Dictionary["clubs"];
};

export default function JoinClubSection({ labels }: JoinClubSectionProps) {
  return (
    <section className="mx-4 mb-14 mt-8 sm:mx-8 sm:mb-16 md:mt-10 md:mb-20 lg:mx-20 lg:mb-24">
      <h2 className="text-center text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
        {labels.looking}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <MembershipCard key={index} labels={labels} />
        ))}
      </div>
    </section>
  );
}
