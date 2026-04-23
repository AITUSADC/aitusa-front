import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ButtonArrowProps {
  href?: string;
  onClick?: () => void;
  variant?: "white" | "blue";
}

export default function ButtonArrow({
  href,
  onClick,
  variant = "blue",
}: ButtonArrowProps) {
  const base =
    "p-4 rounded-full font-semibold text-[15px] no-underline inline-block cursor-pointer transition-all duration-200 ease-in-out border border-transparent";

  const styles =
    variant === "white"
      ? `${base} bg-[#f5f5f5] text-black hover:bg-[#1285E5] hover:text-[#f5f5f5] hover:border-white`
      : `${base} bg-[#1285E5] text-white hover:bg-white hover:text-[#1285E5] hover:border-[#1285E5]`;

  if (href)
    return (
      <Link href={href} className={styles}>
        <ArrowRightIcon className="size-6 " />
      </Link>
    );
  return (
    <button onClick={onClick} className={styles} type="button">
      {" "}
      <ArrowRightIcon className="size-6 " />
    </button>
  );
}
