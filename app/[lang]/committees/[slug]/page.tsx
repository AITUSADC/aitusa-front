import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import Header from "@/components/layout/Header";
import { committeeSlugs, getCommittee } from "@/data/committees";
import { contactLinks } from "@/data/contacts";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";

type CommitteePageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

const sectionShell =
  "mx-auto w-full max-w-[1729px] px-5 md:px-10 lg:px-20";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    committeeSlugs.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({
  params,
}: CommitteePageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) return {};

  const committee = getCommittee(slug, lang);
  const dictionary = getDictionary(lang);

  if (!committee) {
    return { title: `${dictionary.committeePage.notFound} | AITUSA` };
  }

  return {
    title: `${committee.title} | AITUSA`,
    description: committee.cardDescription,
  };
}

export default async function CommitteePage({ params }: CommitteePageProps) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) notFound();

  const committee = getCommittee(slug, lang);

  if (!committee) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const labels = dictionary.committeePage;

  return (
    <>
      <Header locale={lang} labels={dictionary.header} variant="solid" />

      <main className="overflow-hidden bg-[#f5f5f5] text-black">
        <section className={`${sectionShell} pb-10 pt-6 md:pb-16 md:pt-10`}>
          <Link
            href={`/${lang}/#committees`}
            className="mb-6 inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-semibold text-[#444] transition-colors hover:text-[#1285E5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1285E5]/20 md:mb-10 md:text-base"
          >
            <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
            {labels.all}
          </Link>

          <div className="relative min-h-[560px] overflow-hidden rounded-[32px] bg-[#1285E5] shadow-[0_24px_80px_rgba(18,133,229,0.16)] md:min-h-[680px] md:rounded-[48px]">
            <Image
              src={committee.heroImage}
              alt=""
              fill
              priority
              sizes="(min-width: 1729px) 1569px, 100vw"
              className="object-cover"
              style={{ objectPosition: committee.heroImagePosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,26,54,0.9)_0%,rgba(0,39,76,0.7)_48%,rgba(0,32,64,0.18)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="relative z-10 flex min-h-[560px] flex-col justify-end p-6 text-white md:min-h-[680px] md:p-12 lg:p-16">
              <div className="max-w-[1050px]">
                <h1 className="max-w-[1000px] text-balance text-[clamp(40px,7vw,104px)] font-semibold leading-[0.93] tracking-[-0.045em]">
                  {committee.title}
                </h1>
                <p className="mt-6 max-w-[760px] text-pretty text-base font-medium leading-relaxed text-white/85 md:mt-8 md:text-xl lg:text-2xl">
                  {committee.cardDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="committee-about-title"
          className={`${sectionShell} py-20 md:py-28`}
        >
          <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#666]">
            {labels.about}
          </span>

          <h2
            id="committee-about-title"
            className="mt-7 max-w-[1320px] text-balance text-[clamp(34px,4.4vw,68px)] font-semibold leading-[1.02] tracking-[-0.04em] md:mt-9"
          >
            {committee.statement}
          </h2>

          <div className="mt-10 grid gap-7 border-t border-black/10 pt-8 md:mt-14 md:grid-cols-2 md:gap-x-14 md:pt-10 lg:mt-16 lg:gap-x-20">
            {committee.about.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[660px] text-pretty text-base leading-relaxed text-[#555] md:text-lg lg:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="committee-directions-title"
          className={`${sectionShell} py-10 md:py-20`}
        >
          <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1285E5]">
                {labels.whatWeDo}
              </span>
              <h2
                id="committee-directions-title"
                className="mt-3 text-balance text-[clamp(32px,4vw,64px)] font-semibold leading-none tracking-[-0.04em]"
              >
                {labels.directions}
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {committee.directions.map((direction, index) => (
              <article
                key={direction.title}
                className="group flex min-h-[300px] flex-col justify-between rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_14px_50px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(18,133,229,0.12)] md:min-h-[360px] md:rounded-[36px] md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#1285E5]">
                    0{index + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f7fd] text-[#1285E5] transition-colors group-hover:bg-[#1285E5] group-hover:text-white">
                    <ArrowUpRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">
                    {direction.title}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-[#666] md:text-base">
                    {direction.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="committee-gallery-title"
          className={`${sectionShell} py-20 md:py-28`}
        >
          <div className="mb-8 md:mb-12">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1285E5]">
              {labels.inside}
            </span>
            <h2
              id="committee-gallery-title"
              className="mt-3 text-balance text-[clamp(32px,4vw,64px)] font-semibold leading-none tracking-[-0.04em]"
            >
              {labels.moments}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
            {committee.gallery.map((photo, index) => (
              <figure
                key={photo.src}
                className={`group relative overflow-hidden rounded-[28px] bg-[#e9e9e9] md:rounded-[40px] ${
                  index === 0
                    ? "aspect-[4/3] lg:col-span-7 lg:row-span-2 lg:aspect-auto"
                    : "aspect-[16/10] lg:col-span-5"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 58vw, 100vw"
                      : "(min-width: 1024px) 42vw, 100vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  style={{ objectPosition: photo.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </figure>
            ))}
          </div>

          <div className="mt-10 md:mt-14">
            <Link
              href={`/${lang}/#committees`}
              className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#444] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#1285E5]/30 hover:text-[#1285E5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1285E5]/20 md:px-7 md:py-4 md:text-base"
            >
              <ArrowLeftIcon
                className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              {labels.all}
            </Link>
          </div>
        </section>

        <section className={`${sectionShell} pb-10 md:pb-20`}>
          <div className="relative overflow-hidden rounded-[32px] bg-[#1285E5] px-6 py-14 text-white md:rounded-[48px] md:px-14 md:py-20 lg:px-20 lg:py-24">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[64px] border-white/10 md:h-[520px] md:w-[520px] md:border-[90px]" />
            <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

            <div className="relative max-w-[1040px]">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                {labels.join}
              </span>
              <h2 className="mt-4 max-w-[1040px] text-balance text-[clamp(34px,5vw,76px)] font-semibold leading-[1.02] tracking-[-0.04em]">
                {committee.cta}
              </h2>
              <div className="mt-9 flex flex-wrap gap-3 md:mt-12">
                <Link
                  href={contactLinks.telegramContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1285E5] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 md:px-8 md:py-4 md:text-base"
                >
                  {labels.contact}
                  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
