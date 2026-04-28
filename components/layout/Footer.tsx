import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import ButtonArrow from "../ui/ButtonArrow";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Клубы", href: "/clubs" },
  { label: "Галерея", href: "/gallery" },
  { label: "Рекрутинг", href: "/recruiting" },
  { label: "Контакты", href: "/contacts" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.53 1.49-3.93 3.78-3.93 1.09 0 2.24.2 2.24.2v2.48H15.2c-1.24 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        />
      </svg>
    ),
  },
  {
    label: "VK",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M13.08 17.7c-6.62 0-10.4-4.54-10.56-12.1h3.32c.11 5.55 2.55 7.9 4.48 8.38V5.6h3.13v4.78c1.9-.2 3.9-2.38 4.57-4.78h3.13a9.2 9.2 0 0 1-4.21 6c1.9 1.15 4.43 3.76 5.39 6.1h-3.45c-.73-2.3-2.56-4.08-5.43-4.31v4.31h-.37Z"
        />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M21.73 4.13 18.5 19.34c-.24 1.08-.88 1.34-1.78.84l-4.92-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.36-5 9.1-8.22c.4-.36-.09-.56-.61-.2L6.02 13 1.18 11.49c-1.05-.33-1.07-1.05.22-1.56L20.32 2.64c.88-.33 1.64.2 1.41 1.49Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
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
            Остались вопросы?
          </h3>
          <p
            id="footer-cta-description"
            className="mx-auto mt-3 max-w-[760px] text-sm font-medium leading-snug text-white/90 sm:text-xl lg:text-2xl"
          >
            Оставь свой tg username, и мы расскажем, как присоединиться к
            интересующему тебя направлению.
          </p>

          <form
            className="mx-auto mt-9 flex max-w-[760px] items-center gap-0 sm:mt-10 sm:gap-7"
            action="#footer"
          >
            <label className="sr-only" htmlFor="footer-telegram">
              Telegram username
            </label>
            <input
              id="footer-telegram"
              name="telegram"
              type="text"
              inputMode="text"
              autoComplete="off"
              aria-describedby="footer-cta-description"
              placeholder="@example"
              className="h-12 min-w-0 flex-1 rounded-full border-0 bg-white px-4 text-base font-medium text-neutral-900 shadow-lg shadow-sky-950/10 outline-none placeholder:text-[#a5a5a5] focus:ring-4 focus:ring-white/40 sm:h-20 sm:px-8 sm:text-2xl"
            />
            <ButtonArrow
              type="submit"
              ariaLabel="Отправить"
              className="h-12 w-12    sm:h-20 sm:w-20"
            />
          </form>
        </div>
      </section>

      <section className="bg-[linear-gradient(105deg,#82bee8_0%,#1285e5_15%,#edf6fc_48%,#f5f5f5_100%)] px-4 py-6 sm:px-6 sm:py-6 lg:px-20">
        <div className="mx-auto max-w-[1555px]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <Link
              href="/"
              className="inline-flex w-fit rounded-md focus:outline-none focus:ring-4 focus:ring-white/40"
              aria-label="Astana IT University"
            >
              <Image
                src="/aitu_white.svg"
                alt="Astana IT University"
                width={280}
                height={56}
                className="h-12 w-auto sm:h-14"
              />
            </Link>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-7 gap-y-3 text-md font-medium text-[#444] sm:gap-x-8 sm:text-lg"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-md rounded-md transition hover:text-[#1285E5] focus:outline-none focus:ring-4 focus:ring-[#1285E5]/20"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6  mb-6 h-px w-full bg-black/10" />

          <div className="mt-6 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:info@logoipsum.com"
              className="flex min-w-0 items-center gap-3 text-lg font-medium text-white transition hover:text-white/80 focus:outline-none focus:ring-4 focus:ring-white/40 sm:text-xl"
            >
              <EnvelopeIcon
                className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
                aria-hidden="true"
              />
              <span className="min-w-0 break-all">info@logoipsum.com</span>
            </a>

            <div className="flex items-center gap-3 text-[#444] sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/40 hover:text-[#1285E5] focus:outline-none focus:ring-4 focus:ring-[#1285E5]/20"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
