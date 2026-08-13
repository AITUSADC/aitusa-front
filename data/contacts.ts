export const contactLinks = {
  // Замените ссылку на Telegram человека, который отвечает на вопросы студентов.
  telegramContact:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM_CONTACT ?? "https://t.me/Akend0",

  // Официальные социальные сети AITUSA.
  telegram:
    process.env.NEXT_PUBLIC_AITUSA_TELEGRAM ?? "https://t.me/aitusanews",
  instagram:
    process.env.NEXT_PUBLIC_AITUSA_INSTAGRAM ?? "https://www.instagram.com/",
} as const;
