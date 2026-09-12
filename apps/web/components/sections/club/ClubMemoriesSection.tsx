import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

type ClubMemoriesSectionProps = {
  memories: string[];
  labels: Dictionary["clubs"];
};

export default function ClubMemoriesSection({ memories, labels }: ClubMemoriesSectionProps) {
  if (memories.length === 0) return null;

  return (
    <section aria-labelledby="club-memories-title" className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24 lg:px-16">
      <h2 id="club-memories-title" className="mb-7 text-[clamp(32px,4vw,52px)] font-semibold leading-tight tracking-[-0.04em] md:mb-10">{labels.memories}</h2>
      <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((imageUrl, index) => (
          <figure key={`${imageUrl}-${index}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e9e9e9] md:rounded-3xl">
              <Image
                src={imageUrl}
                alt={`${labels.memoryAlt} ${index + 1}`}
                fill
                sizes="(min-width: 1440px) 424px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-[#666]">
              {labels.memoryAlt} {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
