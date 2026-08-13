import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

export type Memory = {
    url: string;
    description: string;
};

const memoryImages = ["/images/Rectangle 15.png", "/images/IMG.png"];

type MemoriesProps = {
    labels: Dictionary["home"]["memories"];
};

export default function Memories({ labels }: MemoriesProps) {
    const memories: Memory[] = memoryImages.map((url, index) => ({
        url,
        description: labels.descriptions[index],
    }));

    return (
        <section
            id="memories"
            aria-labelledby="memories-heading"
            className="mx-auto w-full max-w-[1729px] px-5 pb-20 pt-4 md:px-20 md:pb-[200px] md:pt-20"
        >
            <h2
                id="memories-heading"
                className="mb-10 text-center text-[32px] font-semibold md:mb-20 md:text-[40px]"
            >
                {labels.title}
            </h2>

            <div className="grid gap-3 md:grid-cols-2 md:gap-5">
                {memories.map((memory, index) => (
                    <figure
                        key={`${memory.url}-${index}`}
                        tabIndex={0}
                        aria-label={memory.description}
                        className="group relative aspect-video overflow-hidden rounded-[24px] bg-gray-100 outline-none md:rounded-[32px]"
                    >
                        <Image
                            src={memory.url}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                        />
                        <div className="absolute inset-0 flex items-end bg-[#1285E5]/90 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 md:p-8">
                            <figcaption className="text-base font-semibold leading-tight text-white md:text-2xl">
                                {memory.description}
                            </figcaption>
                        </div>
                    </figure>
                ))}
            </div>
        </section>
    );
}
