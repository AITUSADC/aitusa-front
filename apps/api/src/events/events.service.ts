import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import {
  EventLocale,
  EventPublicationStatus,
} from "../generated/prisma/client";
import type {
  EventLocaleCode,
  EventTemporalStatus,
} from "./events.types";

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async findPublished(locale: EventLocaleCode) {
    const events = await this.prisma.event.findMany({
      where: { status: EventPublicationStatus.PUBLISHED },
      orderBy: { startsAt: "asc" },
      include: {
        translations: {
          where: {
            locale: { in: [locale, EventLocale.en] },
          },
        },
      },
    });

    const now = new Date();

    return events.map((event) => {
      const translation =
        event.translations.find((item) => item.locale === locale) ??
        event.translations.find((item) => item.locale === EventLocale.en);

      if (!translation) {
        throw new Error(`Published event "${event.slug}" has no translation.`);
      }

      return {
        id: event.id,
        slug: event.slug,
        startsAt: event.startsAt.toISOString(),
        endsAt: event.endsAt.toISOString(),
        imageUrl: event.imageUrl,
        temporalStatus: this.getTemporalStatus(
          event.startsAt,
          event.endsAt,
          now,
        ),
        title: translation.title,
        shortDescription: translation.shortDescription,
        description: translation.description,
        location: translation.location,
      };
    });
  }

  private getTemporalStatus(
    startsAt: Date,
    endsAt: Date,
    now: Date,
  ): EventTemporalStatus {
    if (now < startsAt) return "upcoming";
    if (now > endsAt) return "past";
    return "current";
  }
}
