import Button from "@/components/ui/Button";
import React from "react";

interface ClubHeroSectionProps {
  name: string;
  description: string;
  imageUrl: string;
  status?: "open" | null;
}

export default function ClubHeroSection({
  name,
  description,
  imageUrl,
  status,
}: ClubHeroSectionProps) {
  return (
    <section className="mx-4 mt-6 mb-16 rounded-[28px] bg-white p-5 sm:mx-8 sm:p-8 md:mt-8 md:mb-20 md:rounded-[36px] md:p-12 lg:mx-20 lg:mb-24 lg:mt-10 lg:flex lg:items-center lg:gap-16 lg:rounded-[40px] lg:p-16 xl:gap-20">
      <div className="lg:flex-1">
        {status == "open" && (
          <span className="bg-[#f5f5f5] px-2 py-1 text-sm font-semibold rounded-full ">
            Open call
          </span>
        )}
        <h2 className="mt-4 mb-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-4xl md:mb-4 md:text-5xl lg:mt-6">
          {name}
        </h2>
        <p className="mb-8 text-base text-[#444] sm:text-lg md:mb-10 md:text-xl lg:mb-11">
          {description}
        </p>

        {status == "open" && <Button>Join now</Button>}
      </div>
      <div className="mt-8 lg:mt-0 lg:flex-1">
        <img
          src={imageUrl}
          alt={name}
          className="block w-full rounded-3xl object-cover sm:rounded-4xl lg:ml-auto lg:rounded-[40px]"
          style={{ maxWidth: 730, aspectRatio: "730 / 587" }}
        />
      </div>
    </section>
  );
}
