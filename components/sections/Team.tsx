"use client";

import { useEffect, useMemo, useRef } from "react";

import Button from "@/components/ui/Button";
import { contactLinks } from "@/data/contacts";
import type { Dictionary } from "@/i18n/dictionaries";

const fi: React.CSSProperties = {
    fontFamily: 'SF Pro Display, SF Pro, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(20px, 3vw, 42px)',
    lineHeight: '120%',
    color: '#000000'
};

const op: React.CSSProperties = {
    fontFamily: 'SF Pro Display, SF Pro, sans-serif',
    fontWeight: 100,
    fontSize: 'clamp(14px, 1.5vw, 24px)',
    lineHeight: '120%',
    color: '#444444',
    marginTop: '8px'
};

type TeamProps = {
    labels: Dictionary["home"]["team"];
};

const memberImages = [
    "/images/Container.png",
    "/images/Container(1).png",
    "/images/Container(3).png",
];

const sectionShell =
    "mx-auto w-full max-w-[1729px] px-5 md:px-10 lg:px-20";

export default function Team({ labels }: TeamProps) {
    const revealHeadingRef = useRef<HTMLHeadingElement>(null);
    const revealWords = useMemo(
        () => labels.revealText.split(" ").map((word) => Array.from(word)),
        [labels.revealText]
    );

    useEffect(() => {
        const heading = revealHeadingRef.current;

        if (!heading) return;

        const characters = Array.from(
            heading.querySelectorAll<HTMLElement>("[data-reveal-character]")
        );
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let animationFrame: number | null = null;

        const updateText = () => {
            animationFrame = null;

            if (reducedMotion.matches) {
                characters.forEach((character) => {
                    character.style.opacity = "1";
                });
                return;
            }

            const rect = heading.getBoundingClientRect();
            const startPosition = window.innerHeight * 0.85;
            const endPosition = window.innerHeight * 0.55 - rect.height;
            const progress = Math.min(
                Math.max((startPosition - rect.top) / (startPosition - endPosition), 0),
                1
            );
            const lastCharacter = Math.max(characters.length - 1, 1);

            characters.forEach((character, index) => {
                const characterPosition = index / lastCharacter;
                const reveal = Math.min(
                    Math.max((progress - characterPosition * 0.8) / 0.2, 0),
                    1
                );

                character.style.opacity = String(0.2 + reveal * 0.8);
            });
        };

        const scheduleUpdate = () => {
            if (animationFrame === null) {
                animationFrame = window.requestAnimationFrame(updateText);
            }
        };

        scheduleUpdate();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        reducedMotion.addEventListener("change", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            reducedMotion.removeEventListener("change", scheduleUpdate);

            if (animationFrame !== null) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, [labels.revealText]);

    return (
        <div className="bg-[#F5F5F5]">


            <section className={`${sectionShell} py-20 md:py-28`}>
                <div className="mx-auto grid w-full max-w-[1569px] grid-cols-1 gap-12 md:grid-cols-3 md:gap-5">
                    {labels.members.map((member, i) => (
                        <div key={i} className="flex flex-col w-full">
                            <div className="aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-gray-100 md:rounded-[40px]">
                                <img
                                    src={memberImages[i]}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex w-full flex-col items-center pt-5 text-center">
                                <h3
                                    style={fi}
                                    className="text-balance md:flex md:min-h-[102px] md:items-center md:justify-center"
                                >
                                    {member.name}
                                </h3>
                                <p style={op} className="max-w-[440px] text-pretty">
                                    {member.role}
                                    {member.brand && (
                                        <> <span style={{color: '#1285E5'}}>&quot;{member.brand}&quot;</span></>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div className={sectionShell}>
                <div className="mx-auto w-full max-w-[1569px] overflow-hidden rounded-[28px] md:rounded-[40px]">
                    <img
                        src="/images/Rectangle 15.png"
                        className="block h-auto w-full"
                        alt={labels.bannerAlt}
                    />
                </div>
            </div>


            <section className={`${sectionShell} py-20 md:py-28`}>
                <div className="mx-auto flex w-full max-w-[1569px] flex-col items-center rounded-[28px] bg-white p-6 shadow-sm sm:p-8 md:rounded-[40px] md:p-12 lg:p-16">
                    <div className="mb-10 text-center md:mb-12">
                        <span className="block text-gray-400 text-sm md:text-base mb-4 uppercase tracking-[0.2em] font-medium">
                            {labels.eyebrow}
                        </span>
                        <h2
                            ref={revealHeadingRef}
                            aria-label={labels.revealText}
                            className="max-w-[1200px] text-balance font-semibold leading-[1.1] tracking-tight text-[#000000]"
                            style={{ fontSize: 'clamp(24px, 4.5vw, 64px)' }}
                        >
                            <span aria-hidden="true">
                                {revealWords.map((characters, wordIndex) => (
                                    <span key={wordIndex}>
                                        <span className="inline-block">
                                            {characters.map((character, characterIndex) => (
                                                <span
                                                    key={characterIndex}
                                                    data-reveal-character
                                                    style={{ opacity: 0.2 }}
                                                >
                                                    {character}
                                                </span>
                                            ))}
                                        </span>
                                        {wordIndex < revealWords.length - 1 && " "}
                                    </span>
                                ))}
                            </span>
                        </h2>
                    </div>

                    <div className="relative w-full">
                        <div className="aspect-video w-full overflow-hidden rounded-[24px] md:aspect-[21/9] md:rounded-[32px]">
                            <img
                                src="/images/IMG.png"
                                alt={labels.joinImageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12">
                            <Button
                                href={contactLinks.telegramContact}
                                variant="blue"
                                target="_blank"
                            >
                                {labels.join}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>




            <div className={sectionShell}>
                <div className="mx-auto w-full max-w-[1569px] overflow-hidden rounded-[28px] md:rounded-[40px]">
                    <img
                        src="/images/Rectangle 14.svg"
                        className="block h-auto w-full"
                        alt={labels.footerBannerAlt}
                    />
                </div>
            </div>

        </div>
    );
}
