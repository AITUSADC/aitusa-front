export type EventTemporalStatus = "current" | "upcoming" | "past";

export type EventItem = {
  id: string;
  slug: string;
  startsAt: string;
  endsAt: string;
  imageUrl: string | null;
  temporalStatus: EventTemporalStatus;
  title: string;
  shortDescription: string;
  description: string;
  location: string;
};
