import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { contactLinks } from "@/data/contacts";
import type { Dictionary } from "@/i18n/dictionaries";

const socialLinks = [
  {
    label: "Instagram",
    href: contactLinks.instagram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: contactLinks.telegram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M21.73 4.13 18.5 19.34c-.24 1.08-.88 1.34-1.78.84l-4.92-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.36-5 9.1-8.22c.4-.36-.09-.56-.61-.2L6.02 13 1.18 11.49c-1.05-.33-1.07-1.05.22-1.56L20.32 2.64c.88-.33 1.64.2 1.41 1.49Z"
        />
      </svg>
    ),
  },
];

type FooterProps = {
  labels: Dictionary["footer"];
};

export default function Footer({ labels }: FooterProps) {
  return (
    <footer
      id="footer"
      className="mt-16 scroll-mt-6 overflow-hidden bg-[#f5f5f5] sm:mt-48"
    >
      <section
        aria-labelledby="footer-cta-title"
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#168ee8] px-4 py-14 sm:min-h-[520px] sm:px-8 sm:py-16 lg:min-h-[635px] lg:px-20"
      >
        <Image
          src="/images/footer/feedback-bg.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#1285E5]/10" />

        <div className="relative w-full max-w-[1050px] rounded-[32px] border border-white/20 bg-black/10 px-5 py-10 text-center text-white shadow-2xl shadow-sky-950/20 backdrop-blur-md sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-[140px] lg:py-20">
          <h3
            id="footer-cta-title"
            className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl"
          >
            {labels.questions}
          </h3>
          <p
            id="footer-cta-description"
            className="mx-auto mt-3 max-w-[760px] text-sm font-medium leading-snug text-white/90 sm:text-xl lg:text-2xl"
          >
            {labels.description}
          </p>

          <a
            href={contactLinks.telegramContact}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="footer-cta-description"
            className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1285E5] shadow-lg shadow-sky-950/10 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/40 sm:mt-10 sm:px-8 sm:py-4 sm:text-lg"
          >
            {labels.telegramButton}
            <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="bg-[linear-gradient(105deg,#82bee8_0%,#1285e5_15%,#edf6fc_48%,#f5f5f5_100%)] px-4 py-6 sm:px-6 sm:py-6 lg:px-20">
        <div className="mx-auto max-w-[1555px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                {labels.online}
              </p>
              <p className="mt-1 text-sm text-white/75">
                {labels.socialDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[#444] sm:gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/35 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/65 hover:text-[#1285E5] focus:outline-none focus:ring-4 focus:ring-[#1285E5]/20"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
