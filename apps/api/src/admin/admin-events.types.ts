import { BadRequestException } from "@nestjs/common";
import {
  EventLocale,
  EventPublicationStatus,
} from "../generated/prisma/client";

type TranslationInput = {
  title: string;
  shortDescription: string;
  description: string;
  location: string;
};

export type CreateEventInput = {
  slug: string;
  startsAt: Date;
  endsAt: Date;
  imageUrl: string | null;
  status: EventPublicationStatus;
  translations: Record<EventLocale, TranslationInput>;
};

const locales = [EventLocale.en, EventLocale.ru, EventLocale.kk] as const;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const canonicalIsoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

export function parseCreateEventInput(value: unknown): CreateEventInput {
  if (!isRecord(value)) {
    throw new BadRequestException("Request body must be an object.");
  }

  const translationsValue = value.translations;
  if (!isRecord(translationsValue)) {
    throw new BadRequestException("translations must be an object.");
  }

  const translations = Object.fromEntries(
    locales.map((locale) => [
      locale,
      parseTranslation(translationsValue[locale], locale),
    ]),
  ) as Record<EventLocale, TranslationInput>;

  const startsAt = parseDate(value.startsAt, "startsAt");
  const endsAt = parseDate(value.endsAt, "endsAt");

  if (endsAt < startsAt) {
    throw new BadRequestException("endsAt must not be earlier than startsAt.");
  }

  const requestedSlug = optionalString(value.slug, "slug", 120);
  const slug = requestedSlug || slugify(translations.en.title);

  if (!slug || !slugPattern.test(slug)) {
    throw new BadRequestException(
      "slug must contain lowercase Latin letters, numbers, and hyphens only.",
    );
  }

  const imageUrl = optionalString(value.imageUrl, "imageUrl", 2048);
  if (imageUrl && !isHttpUrl(imageUrl)) {
    throw new BadRequestException("imageUrl must be an http or https URL.");
  }

  if (
    value.status !== EventPublicationStatus.DRAFT &&
    value.status !== EventPublicationStatus.PUBLISHED
  ) {
    throw new BadRequestException("status must be DRAFT or PUBLISHED.");
  }

  return {
    slug,
    startsAt,
    endsAt,
    imageUrl: imageUrl || null,
    status: value.status,
    translations,
  };
}

function parseTranslation(value: unknown, locale: EventLocale): TranslationInput {
  if (!isRecord(value)) {
    throw new BadRequestException(`translations.${locale} is required.`);
  }

  return {
    title: requiredString(value.title, `translations.${locale}.title`, 160),
    shortDescription: requiredString(
      value.shortDescription,
      `translations.${locale}.shortDescription`,
      320,
    ),
    description: requiredString(
      value.description,
      `translations.${locale}.description`,
      10_000,
    ),
    location: requiredString(
      value.location,
      `translations.${locale}.location`,
      240,
    ),
  };
}

function parseDate(value: unknown, field: string) {
  if (typeof value !== "string" || !canonicalIsoPattern.test(value)) {
    throw new BadRequestException(
      `${field} must be a canonical ISO date string in UTC.`,
    );
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime()) || date.toISOString() !== value) {
    throw new BadRequestException(`${field} must be a valid ISO date string.`);
  }

  return date;
}

function requiredString(value: unknown, field: string, maxLength: number) {
  const parsed = optionalString(value, field, maxLength);
  if (!parsed) throw new BadRequestException(`${field} is required.`);
  return parsed;
}

function optionalString(value: unknown, field: string, maxLength: number) {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value !== "string") {
    throw new BadRequestException(`${field} must be a string.`);
  }

  const parsed = value.trim();
  if (parsed.length > maxLength) {
    throw new BadRequestException(`${field} must be at most ${maxLength} characters.`);
  }
  return parsed;
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120)
    .replace(/-+$/g, "");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
