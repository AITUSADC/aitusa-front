import type { ClubGoal } from "@/types/club";

type ClubGoalsSectionProps = {
  description: string;
  list: ClubGoal[];
  title: string;
};

export default function ClubGoalsSection({ description, list, title }: ClubGoalsSectionProps) {
  return (
    <section aria-labelledby="club-about-title" className="mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-24 lg:px-16">
      <div className="grid gap-7 border-b border-black/10 pb-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pb-20">
        <div>
          <h2 id="club-about-title" className="text-[clamp(28px,3vw,42px)] font-semibold leading-tight tracking-[-0.035em]">{title}</h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#666] md:text-lg">{description}</p>
        </div>
        <div className="space-y-6">
          {list.map((goal) => (
            <article key={goal.id}>
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">{goal.title}</h3>
              <p className="mt-2 text-pretty text-base leading-relaxed text-[#666] md:text-lg">{goal.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
