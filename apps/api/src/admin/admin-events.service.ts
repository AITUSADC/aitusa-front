import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { EventLocale } from "../generated/prisma/client";
import type { CreateEventInput } from "./admin-events.types";

@Injectable()
export class AdminEventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateEventInput) {
    try {
      return await this.prisma.event.create({
        data: {
          slug: input.slug,
          startsAt: input.startsAt,
          endsAt: input.endsAt,
          imageUrl: input.imageUrl,
          status: input.status,
          translations: {
            create: Object.entries(input.translations).map(
              ([locale, translation]) => ({
                locale: locale as EventLocale,
                ...translation,
              }),
            ),
          },
        },
        select: {
          id: true,
          slug: true,
          status: true,
          createdAt: true,
        },
      });
    } catch (error: unknown) {
      if (hasPrismaCode(error, "P2002")) {
        throw new ConflictException("An event with this slug already exists.");
      }
      throw error;
    }
  }
}

function hasPrismaCode(error: unknown, code: string) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === code
  );
}
