import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { EventItem, EventTemporalStatus } from "@/types/event";

import EventCard from "./EventCard";

type EventsViewProps = {
  events: EventItem[];
  locale: Locale;
  labels: Dictionary["events"];
  hasError?: boolean;
};

const sectionShell = "mx-auto w-full max-w-[1569px] px-5 md:px-10 lg:px-20";

export default function EventsView({ events, locale, labels, hasError = false }: EventsViewProps) {
  const byStatus = (status: EventTemporalStatus) =>
    events.filter((event) => event.temporalStatus === status);

  const current = byStatus("current");
  const upcoming = byStatus("upcoming");
  const past = byStatus("past").reverse();

  if (hasError) {
    return (
      <main className={`${sectionShell} py-24 md:py-36`}>
        <div className="rounded-[28px] bg-white p-8 text-lg text-[#555] md:rounded-[40px] md:p-12">
          {labels.error}
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="overflow-hidden bg-[#1285E5] text-white">
        <div className={`${sectionShell} py-20 md:py-28 lg:py-36`}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{labels.eyebrow}</p>
          <h1 className="mt-6 max-w-[1250px] text-balance text-[clamp(48px,8vw,122px)] font-semibold leading-[0.92] tracking-[-0.055em]">
            {labels.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
            {labels.description}
          </p>
        </div>
      </section>

      <EventSection title={labels.current} description={labels.currentDescription} empty={labels.emptyCurrent} hasItems={current.length > 0}>
        {current.map((event) => (
          <EventCard key={event.id} event={event} locale={locale} labels={labels} featured />
        ))}
      </EventSection>

      <EventSection title={labels.upcoming} description={labels.upcomingDescription} empty={labels.emptyUpcoming} hasItems={upcoming.length > 0} blue>
        <div className="grid gap-6 md:grid-cols-2">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} locale={locale} labels={labels} />
          ))}
        </div>
      </EventSection>

      <EventSection title={labels.past} description={labels.pastDescription} empty={labels.emptyPast} hasItems={past.length > 0}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {past.map((event) => (
            <EventCard key={event.id} event={event} locale={locale} labels={labels} muted />
          ))}
        </div>
      </EventSection>
    </main>
  );
}

function EventSection({
  title,
  description,
  empty,
  hasItems,
  blue = false,
  children,
}: {
  title: string;
  description: string;
  empty: string;
  hasItems: boolean;
  blue?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={blue ? "bg-[#eaf4fb]" : "bg-[#f5f5f5]"}>
      <div className={`${sectionShell} py-20 md:py-28`}>
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{title}</h2>
          <p className="max-w-xl text-base leading-relaxed text-[#666] md:text-lg">{description}</p>
        </div>
        {hasItems ? children : (
          <div className="rounded-[28px] border border-black/5 bg-white/70 px-6 py-16 text-center text-lg text-[#777] md:rounded-[40px]">
            {empty}
          </div>
        )}
      </div>
    </section>
  );
}
