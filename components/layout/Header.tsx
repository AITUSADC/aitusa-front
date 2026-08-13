"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { contactLinks } from "@/data/contacts";

const navLinks = [
    { label: "Главная", href: "/" },
    { label: "Клубы", href: "/clubs" },
    { label: "Галерея", href: "/gallery" },
    { label: "Рекрутинг", href: "/recruiting" },
    { label: "Контакты", href: "/#footer" },
];

interface HeaderProps {
    variant?: "transparent" | "solid";
}

export default function Header({ variant = "transparent" }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const isTransparent = variant === "transparent";


    const closeMenu = () => setIsOpen(false);

    return (
      <header
        className={`
                w-full z-[100] transition-all duration-300
                ${
                  isTransparent && !isOpen
                    ? "absolute top-0 left-0 right-0 bg-transparent"
                    : "relative bg-[#1285E5] md:bg-[#f5f5f5] border-b border-gray-100"
                }
            `}
      >
        <div className="max-w-[1728px] mx-auto flex items-center justify-between h-[70px] sm:h-[90px] px-4 sm:px-8 lg:px-14">
          <Link href="/" className="shrink-0 z-[110]" onClick={closeMenu}>
            <img
              src="/aitu_white.svg"
              alt="Astana IT University"
              className={`h-10 w-auto sm:h-[52px] ${
                isTransparent || isOpen
                  ? "block"
                  : "block md:hidden"
              }`}
            />
            {!isTransparent && !isOpen && (
              <img
                src="/aitu_blue.svg"
                alt=""
                aria-hidden="true"
                className="hidden h-10 w-auto sm:h-[52px] md:block"
              />
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`
                                text-sm lg:text-base font-medium no-underline transition-colors
                                ${
                                  isTransparent
                                    ? "text-white hover:text-white/80"
                                    : "text-gray-700 hover:text-[#1285E5]"
                                }
                            `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0 z-[110]">
            <div className="hidden sm:block">
              <Button
                href={contactLinks.telegramContact}
                variant={isTransparent || isOpen ? "white" : "blue"}
                target="_blank"
              >
                Связаться
              </Button>
            </div>

            <img
              src="/Flag.svg"
              alt="RU"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            >
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        <div
          className={`
                    fixed inset-0 bg-[#1285E5] z-[105] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden
                    ${isOpen ? "translate-y-0" : "-translate-y-full"}
                `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-white text-2xl font-bold no-underline hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
          <div className="sm:hidden">
            <Button
              href={contactLinks.telegramContact}
              variant="white"
              onClick={closeMenu}
              target="_blank"
            >
              Связаться
            </Button>
          </div>
        </div>
      </header>
    );
}
