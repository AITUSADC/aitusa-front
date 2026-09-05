export const eventLocales = ["en", "ru", "kk"] as const;

export type EventLocaleCode = (typeof eventLocales)[number];
export type EventTemporalStatus = "current" | "upcoming" | "past";

export function isEventLocale(value?: string): value is EventLocaleCode {
  return eventLocales.includes(value as EventLocaleCode);
}
