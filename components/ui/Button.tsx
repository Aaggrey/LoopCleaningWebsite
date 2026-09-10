import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white" | "whatsapp" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";

  const variants = {
    primary: "bg-primary px-6 py-3 text-white hover:bg-primary-dark",
    outline:
      "border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white",
    white: "bg-white px-6 py-3 text-primary hover:bg-primary-lighter",
    whatsapp:
      "bg-[#25D366] px-6 py-3 text-white hover:bg-[#1fb457]",
    ghost: "px-4 py-2 text-primary hover:bg-primary-lighter",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}