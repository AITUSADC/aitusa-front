import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { EventItem } from "@/types/event";

type EventCardProps = {
  event: EventItem;
  locale: Locale;
  labels: Dictionary["events"];
  featured?: boolean;
  muted?: boolean;
};

const dateLocales: Record<Locale, string> = {
  en: "en-US",
  ru: "ru-RU",
  kk: "kk-KZ",
};

function formatEventDate(event: EventItem, locale: Locale) {
  const startsAt = new Date(event.startsAt);
  const endsAt = new Date(event.endsAt);
  const formatter = new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Almaty",
  });

  return formatter.formatRange(startsAt, endsAt);
}

export default function EventCard({
  event,
  locale,
  labels,
  featured = false,
  muted = false,
}: EventCardProps) {
  const badge =
    event.temporalStatus === "current"
      ? labels.currentBadge
      : event.temporalStatus === "upcoming"
        ? labels.upcomingBadge
        : labels.pastBadge;

  return (
    <article
      className={`group overflow-hidden rounded-[28px] bg-white md:rounded-[40px] ${
        featured ? "lg:grid lg:grid-cols-[1.08fr_0.92fr]" : "flex h-full flex-col"
      } ${muted ? "bg-white/65" : "shadow-sm"}`}
    >
      <div
        className={`relative overflow-hidden bg-[#dceaf4] ${
          featured ? "min-h-[300px] lg:min-h-[520px]" : "aspect-[16/10]"
        }`}
      >
        {/* Event images can come from an admin-configured storage provider. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.imageUrl ?? "/images/Placeholder.png"}
          alt={event.title}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] ${
            muted ? "grayscale-[25%] opacity-80" : ""
          }`}
        />
        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-md md:left-7 md:top-7 ${
            event.temporalStatus === "current"
              ? "bg-[#1285E5] text-white"
              : "bg-white/90 text-[#1285E5]"
          }`}
        >
          {badge}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-7 md:p-10 lg:p-14" : "p-6 md:p-8"}`}>
        <div className="space-y-3 text-sm font-medium text-[#666]">
          <p className="flex items-start gap-2.5">
            <CalendarDaysIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1285E5]" aria-hidden="true" />
            <span>{formatEventDate(event, locale)}</span>
          </p>
          <p className="flex items-start gap-2.5">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1285E5]" aria-hidden="true" />
            <span><span className="sr-only">{labels.location}: </span>{event.location}</span>
          </p>
        </div>

        <h3 className={`mt-7 font-semibold leading-[1.05] tracking-[-0.035em] ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>
          {event.title}
        </h3>
        <p className={`mt-4 leading-relaxed text-[#555] ${featured ? "text-lg md:text-xl" : "text-base"}`}>
          {event.shortDescription}
        </p>

      </div>
    </article>
  );
}
