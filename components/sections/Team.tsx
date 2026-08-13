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
        <div className="bg-[#F5F5F5] min-h-screen">


            <section className="w-full py-20 md:py-[200px] px-6 md:px-[80px] flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1569px]">
                    {labels.members.map((member, i) => (
                        <div key={i} className="flex flex-col w-full">
                            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-[40px]">
                                <img
                                    src={memberImages[i]}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full flex flex-col items-center pt-4 text-center">
                                <h3 style={fi}>{member.name}</h3>
                                <p style={op}>
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


            <div className="w-full">
                <img
                    src="/images/Rectangle 15.png"
                    className="w-full h-auto block"
                    alt={labels.bannerAlt}
                />
            </div>


            <section className="w-full py-20 md:py-[200px] px-6 md:px-[80px] flex justify-center">
                <div className="w-full max-w-[1569px] bg-white rounded-[40px] p-8 md:p-[64px] flex flex-col items-center shadow-sm">
                    <div className="text-center mb-12">
                        <span className="block text-gray-400 text-sm md:text-base mb-4 uppercase tracking-[0.2em] font-medium">
                            {labels.eyebrow}
                        </span>
                        <h2
                            ref={revealHeadingRef}
                            aria-label={labels.revealText}
                            className="text-[#000000] font-semibold leading-[1.1] tracking-tight max-w-[1200px]"
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

                    <div className="w-full relative">
                        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[32px] md:rounded-[40px]">
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




            <div className="w-full">
                <img
                    src="/images/Rectangle 14.svg"
                    className="w-full h-auto block"
                    alt={labels.footerBannerAlt}
                />
            </div>

        </div>
    );
}
