import Button from "@/components/ui/Button";
import { contactLinks } from "@/data/contacts";
import type { Dictionary } from "@/i18n/dictionaries";

type HeroProps = {
    labels: Dictionary["home"]["about"];
};

export default function Hero({ labels }: HeroProps) {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#1285E5]">

             <img
                src="/Back.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

              <div className="absolute inset-0 bg-black/10 z-0" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">


                <h1
                    className="text-white font-bold leading-[0.8] tracking-tighter uppercase select-none"
                    style={{
                        fontSize: "clamp(60px, 18vw, 300px)",
                        margin: "0 auto"
                    }}
                >
                    AITUSA
                </h1>


                <p
                    className="text-white/90 max-w-[320px] sm:max-w-[600px] mt-4 sm:mt-8"
                    style={{
                        fontSize: "clamp(14px, 1.5vw, 22px)",
                        lineHeight: 1.4
                    }}
                >
                    {labels.description}
                </p>


                <div className="mt-8">
                    <Button
                        href={contactLinks.telegramContact}
                        variant="white"
                        target="_blank"
                    >
                        {labels.join}
                    </Button>
                </div>

            </div>
        </section>
    );
}
