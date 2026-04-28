import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import type { MouseEventHandler, ReactNode } from "react";

interface ButtonArrowProps {
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  variant?: "white" | "blue";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  iconClassName?: string;
  icon?: ReactNode;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  prefetch?: boolean;
}

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function ButtonArrow({
  href,
  onClick,
  variant = "blue",
  size = "md",
  type = "button",
  disabled = false,
  ariaLabel,
  className,
  iconClassName,
  icon,
  target,
  rel,
  prefetch,
}: ButtonArrowProps) {
  const base =
    "inline-flex items-center justify-center rounded-full border border-transparent no-underline transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

  const sizeStyles =
    size === "sm" ? "h-10 w-10" : size === "lg" ? "h-20 w-20" : "h-12 w-12";

  const defaultIconSize =
    size === "sm" ? "h-5 w-5" : size === "lg" ? "h-8 w-8" : "h-6 w-6";

  const variantStyles =
    variant === "white"
      ? "bg-[#f5f5f5] text-black hover:bg-[#1285E5] hover:text-[#f5f5f5] hover:border-white focus-visible:ring-white/40"
      : "bg-[#1285E5] text-white hover:bg-white hover:text-[#1285E5] hover:border-[#1285E5] focus-visible:ring-[#1285E5]/30";

  const styles = cn(base, sizeStyles, variantStyles, className);
  const iconStyles = cn(defaultIconSize, iconClassName);
  const iconContent = icon ?? (
    <ArrowRightIcon className={iconStyles} aria-hidden="true" />
  );

  const isExternal = href ? /^(https?:)?\/\//.test(href) : false;
  const safeRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel;

  if (href)
    return (
      <Link
        href={href}
        className={cn(styles, disabled && "pointer-events-none")}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        target={target}
        rel={safeRel}
        prefetch={isExternal ? false : prefetch}
      >
        {iconContent}
      </Link>
    );

  return (
    <button
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
      className={styles}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {iconContent}
    </button>
  );
}
