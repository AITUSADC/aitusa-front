import Button from "@/components/ui/Button";
import { getCommittees } from "@/data/committees";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import Image from "next/image";

type CommitteesProps = {
    locale: Locale;
    labels: Dictionary["home"]["committees"];
};

export default function Committees({ locale, labels }: CommitteesProps) {
    const committees = getCommittees(locale);

    return (
        <section
            id="committees"
            aria-labelledby="committees-heading"
            className="mx-auto w-full max-w-[1729px] px-5 py-20 md:px-10 md:py-28 lg:px-20"
        >
            <h2
                id="committees-heading"
                className="mb-10 text-balance text-center text-[clamp(32px,4vw,56px)] font-semibold leading-none tracking-[-0.035em] md:mb-14"
            >
                {labels.title}
            </h2>

            <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
                {committees.map((committee) => (
                    <article
                        key={committee.id}
                        className={`group relative aspect-square overflow-hidden rounded-[24px] transition-all duration-500 hover:-translate-y-1 focus-within:-translate-y-1 md:rounded-[32px] ${
                            committee.isBlue
                                ? "bg-[#3182CE]"
                                : "border border-gray-100 bg-white shadow-sm"
                        } ${committee.wide ? "lg:col-span-2 lg:aspect-auto" : ""}`}
                    >
                        <Image
                            src={committee.imageUrl}
                            alt=""
                            fill
                            sizes={
                                committee.wide
                                    ? "(min-width: 1024px) 50vw, 50vw"
                                    : "(min-width: 1024px) 25vw, 50vw"
                            }
                            className="object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105"
                        />

                        <div className="relative z-10 flex h-full flex-col justify-end p-4 text-left transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 md:p-8">
                            <h3
                                className={`text-balance text-[13px] font-bold leading-tight sm:text-[16px] md:text-[22px] ${
                                    committee.isBlue ? "text-white" : "text-black"
                                }`}
                            >
                                {committee.title}
                            </h3>
                        </div>

                        <div className="absolute inset-0 z-20 flex flex-col justify-between bg-[#1285E5] p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:p-8">
                            <p className="text-xs font-medium leading-snug text-white sm:text-sm md:text-base md:leading-relaxed">
                                {committee.cardDescription}
                            </p>
                            <Button
                                href={`/${locale}/committees/${committee.slug}`}
                                variant="white"
                                className="!w-fit !px-4 !py-2 !text-xs md:!px-5 md:!text-sm"
                            >
                                {labels.details}
                            </Button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
