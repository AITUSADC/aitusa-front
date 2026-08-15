export const contactLinks = {
  // Общий контакт для вопросов, не связанных с конкретным комитетом.
  telegramContact:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_CONTACT || "https://t.me/Akend0",

  // Официальные социальные сети AITUSA.
  telegram:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM || "https://t.me/aitusanews",
  instagram:
    process.env.NEXT_PUBLIC_AITUSA_INSTAGRAM || "https://www.instagram.com/astana_it_students?igsh=NGpxbGp6aG0yYjZs",
} as const;

export const committeeLeadTelegramLinks = {
  social:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_SOCIAL_LEAD ||
    contactLinks.telegramContact,
  media:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_MEDIA_LEAD ||
    contactLinks.telegramContact,
  culture:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_CULTURE_LEAD ||
    contactLinks.telegramContact,
  "external-relations":
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_EXTERNAL_RELATIONS_LEAD ||
    contactLinks.telegramContact,
  academic:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_ACADEMIC_LEAD ||
    contactLinks.telegramContact,
  digital:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_DIGITAL_LEAD ||
    contactLinks.telegramContact,
  "science-and-innovation":
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_SCIENCE_LEAD ||
    contactLinks.telegramContact,
} as const;

export type CommitteeContactSlug = keyof typeof committeeLeadTelegramLinks;

export function getCommitteeLeadTelegramLink(slug: string) {
  if (slug in committeeLeadTelegramLinks) {
    return committeeLeadTelegramLinks[slug as CommitteeContactSlug];
  }

  return contactLinks.telegramContact;
}
