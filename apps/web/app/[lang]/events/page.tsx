import Header from "@/components/layout/Header";
import EventsView from "@/components/sections/events/EventsView";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { EventItem } from "@/types/event";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getEvents(lang: string): Promise<EventItem[]> {
  const apiUrl = process.env.API_URL ?? "http://localhost:3001";
  const response = await fetch(`${apiUrl}/api/events?lang=${lang}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Events API returned ${response.status}.`);
  }

  return response.json() as Promise<EventItem[]>;
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  let events: EventItem[] = [];
  let hasError = false;

  try {
    events = await getEvents(lang);
  } catch {
    hasError = true;
  }

  return (
    <div className="bg-[#f5f5f5]">
      <Header locale={lang} labels={dictionary.header} variant="solid" />
      <EventsView
        events={events}
        locale={lang}
        labels={dictionary.events}
        hasError={hasError}
      />
    </div>
  );
}
