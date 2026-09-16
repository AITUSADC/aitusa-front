"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, locales, type Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  solid?: boolean;
};

export default function LocaleSwitcher({
  locale,
  label,
  solid = false,
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  const pathForLocale = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex items-center rounded-full p-1 text-[10px] font-bold tracking-[0.04em] sm:text-xs ${
        solid ? "bg-white/15 md:bg-black/5" : "bg-white/15"
      }`}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={pathForLocale(item)}
            replace
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-2 py-1.5 transition-colors sm:px-2.5 ${
              isActive
                ? solid
                  ? "bg-white text-[#1285E5] shadow-sm md:bg-[#1285E5] md:text-white"
                  : "bg-white text-[#1285E5] shadow-sm"
                : solid
                  ? "text-white/75 hover:text-white md:text-[#666] md:hover:text-[#1285E5]"
                  : "text-white/75 hover:text-white"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
