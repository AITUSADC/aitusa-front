import type { ClubGoal } from "@/types/club";
import Image from "next/image";
import React from "react";

interface ClubGoalsSectionProps {
  description: string;
  list: ClubGoal[];
}

export default function ClubGoalsSection({
  description,
  list,
}: ClubGoalsSectionProps) {
  return (
    <section className="mx-4 mb-16 mt-8 sm:mx-8 md:mt-10 md:mb-20 lg:mx-20 lg:mb-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Ключевые цели
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#444] sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative">
          <span
            className="absolute left-0 top-5 hidden h-full w-px bg-[#1d90f5] lg:block"
            aria-hidden
          />

          <div className="space-y-12 lg:space-y-20">
            {list.map((goal) => (
              <div
                key={goal.id}
                className="grid lg:grid-cols-[24px_minmax(0,1fr)] lg:gap-8"
              >
                <div className="relative hidden lg:block" aria-hidden>
                  <span className="absolute left-0 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1d90f5]" />
                </div>
                <ClubGoalItem
                  title={goal.title}
                  description={goal.description}
                  imageUrl={goal.imageUrl}
                  id={goal.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClubGoalItem({ title, description, imageUrl }: ClubGoal) {
  const imageSrc = imageUrl ?? null;

  return (
    <article>
      <h3 className="text-2xl font-semibold leading-tight text-neutral-900 md:text-4xl">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#444] sm:text-xl">
        {description}
      </p>

      {imageSrc ? (
        <div className="mt-8 overflow-hidden rounded-2xl sm:rounded-3xl">
          <Image
            src={imageSrc}
            alt={title}
            width={952}
            height={318}
            className="h-auto w-full object-cover aspect-10/4"
          />
        </div>
      ) : null}
    </article>
  );
}
