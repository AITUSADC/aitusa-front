import Button from "@/components/ui/Button";
import { committees } from "@/data/committees";
import Image from "next/image";

export default function Committees() {
    return (
        <section
            id="committees"
            aria-labelledby="committees-heading"
            className="mx-auto w-full max-w-[1729px] px-5 py-16 md:px-20 md:pb-[120px]"
        >
            <h2
                id="committees-heading"
                className="mb-10 text-center text-[32px] font-semibold md:mb-20 md:text-[40px]"
            >
                Комитеты
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
                                className={`text-[13px] font-bold leading-tight sm:text-[16px] md:text-[22px] ${
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
                                href={`/committees/${committee.slug}`}
                                variant="white"
                                className="!w-fit !px-4 !py-2 !text-xs md:!px-5 md:!text-sm"
                            >
                                Подробнее
                            </Button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
