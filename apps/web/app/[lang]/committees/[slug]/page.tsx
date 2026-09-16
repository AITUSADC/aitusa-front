import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import Header from "@/components/layout/Header";
import { committeeSlugs, getCommittee } from "@/data/committees";
import { getCommitteeLeadTelegramLink } from "@/data/contacts";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";

type CommitteePageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

const sectionShell =
  "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16";

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
  const committeeLeadTelegramLink = getCommitteeLeadTelegramLink(slug);

  return (
    <>
      <Header locale={lang} labels={dictionary.header} variant="solid" />

      <main className="bg-[#f5f5f5] text-[#171717]">
        <section className={`${sectionShell} pb-12 pt-6 md:pb-20 md:pt-10`}>
          <Link
            href={`/${lang}/#committees`}
            className="inline-flex items-center gap-2 py-2 text-sm font-medium text-[#666] transition-colors hover:text-[#1285E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1285E5]"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            {labels.all}
          </Link>

          <div className="mb-8 mt-8 max-w-5xl md:mb-10 md:mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1285E5]">
              {labels.badge}
            </p>
            <h1 className="mt-4 text-balance text-[clamp(36px,5.5vw,76px)] font-semibold leading-[1.04] tracking-[-0.045em]">
              {committee.title}
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-[#666] md:text-lg">
              {committee.cardDescription}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#e9e9e9] md:aspect-[16/8] md:rounded-[32px]">
            <Image
              src={committee.heroImage}
              alt={committee.title}
              fill
              preload
              sizes="(min-width: 1440px) 1312px, (min-width: 1024px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
              className="object-cover"
              style={{ objectPosition: committee.heroImagePosition ?? "center" }}
            />
          </div>
        </section>

        <section
          aria-labelledby="committee-about-title"
          className={`${sectionShell} pb-14 md:pb-24`}
        >
          <div className="grid gap-7 border-b border-black/10 pb-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pb-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1285E5]">
                {labels.about}
              </p>
              <h2
                id="committee-about-title"
                className="mt-4 max-w-xl text-balance text-[clamp(26px,3vw,42px)] font-semibold leading-[1.15] tracking-[-0.035em]"
              >
                {committee.statement}
              </h2>
            </div>

            <div>
              <div className="space-y-5 text-pretty text-base leading-relaxed text-[#666] md:text-lg">
                {committee.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={committeeLeadTelegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#1285E5] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0873cc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1285E5]"
              >
                {labels.contact}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="committee-gallery-title"
          className={`${sectionShell} pb-16 md:pb-24`}
        >
          <div className="mb-7 md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1285E5]">
              {labels.inside}
            </p>
            <h2
              id="committee-gallery-title"
              className="mt-3 text-[clamp(32px,4vw,52px)] font-semibold leading-tight tracking-[-0.04em]"
            >
              {labels.moments}
            </h2>
          </div>

          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {committee.gallery.map((photo, index) => (
              <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e9e9e9] md:rounded-3xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1440px) 424px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, calc(100vw - 40px)"
                    className="object-cover"
                    style={{ objectPosition: photo.position ?? "center" }}
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-3 text-sm leading-relaxed text-[#666]">
                  <span className="shrink-0 text-xs tabular-nums text-[#1285E5]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
