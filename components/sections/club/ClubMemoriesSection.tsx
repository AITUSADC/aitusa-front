import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import type { Dictionary } from "@/i18n/dictionaries";

interface ClubMemoriesSectionProps {
  memories: string[];
  labels: Dictionary["clubs"];
}

export default function ClubMemoriesSection({
  memories,
  labels,
}: ClubMemoriesSectionProps) {
  return (
    <section className="mx-4 mb-14 mt-8 sm:mx-8 sm:mb-16 md:mt-10 md:mb-20 lg:mx-20 lg:mb-24">
      <h2 className="text-center text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
        {labels.memories}
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4 md:grid-cols-3 md:gap-5 lg:mt-10 lg:grid-cols-4">
        {memories.map((imageUrl, index) => (
          <div
            key={`${imageUrl}-${index}`}
            className="overflow-hidden rounded-xl bg-white shadow-md sm:rounded-2xl lg:rounded-3xl"
          >
            <Image
              src={imageUrl}
              alt={`${labels.memoryAlt} ${index + 1}`}
              width={300}
              height={300}
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
              className="h-full w-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center pt-8 sm:pt-10">
        <div className="w-full sm:w-auto">
          <Button>{labels.archive}</Button>
        </div>
      </div>
    </section>
  );
}
