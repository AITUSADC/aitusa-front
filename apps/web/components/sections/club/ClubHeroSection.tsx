import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type ClubHeroSectionProps = {
  name: string;
  description: string;
  imageUrl: string;
  locale: Locale;
  labels: Dictionary["clubs"];
};

export default function ClubHeroSection({ name, description, imageUrl, locale, labels }: ClubHeroSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-6 md:px-10 md:pb-20 md:pt-10 lg:px-16">
      <Link href={`/${locale}/clubs`} className="inline-flex items-center gap-2 py-2 text-sm font-medium text-[#666] transition-colors hover:text-[#0A66C2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A66C2]">
        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        {labels.all}
      </Link>
      <div className="mb-8 mt-8 max-w-5xl md:mb-10 md:mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A66C2]">AITUSA · {labels.title}</p>
        <h1 className="mt-4 text-balance text-[clamp(36px,5.5vw,76px)] font-semibold leading-[1.04] tracking-[-0.045em]">{name}</h1>
        <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-[#666] md:text-lg">{description}</p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#e9e9e9] md:aspect-[16/8] md:rounded-[32px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          preload
          sizes="(min-width: 1440px) 1312px, (min-width: 1024px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
          className="object-cover"
        />
      </div>
    </section>
  );
}
