import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "white" | "blue";
  children: React.ReactNode;
}

export default function Button({
  href,
  onClick,
  variant = "blue",
  children,
}: ButtonProps) {
  const base =
    "px-7 py-2.5 rounded-full font-semibold text-[15px] no-underline inline-block cursor-pointer transition-all duration-200 ease-in-out border border-transparent";

  const styles =
    variant === "white"
      ? `${base} bg-white text-[#1285E5] hover:bg-[#1285E5] hover:text-white hover:border-white`
      : `${base} bg-[#1285E5] text-white hover:bg-white hover:text-[#1285E5] hover:border-[#1285E5]`;

  if (href)
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={styles} type="button">
      {children}
    </button>
  );
}
