import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

/* ---------------- Button ---------------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "lime" | "gold" | "navy" | "ghost";
  className?: string;
  withArrow?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  lime: "bg-brand text-ink hover:bg-brand-dark",
  gold: "bg-gold text-ink hover:brightness-[0.97]",
  navy: "bg-navy text-white hover:bg-navy-600",
  ghost: "border border-white/30 text-white hover:bg-white hover:text-navy",
};

export function Button({
  href,
  children,
  variant = "lime",
  className = "",
  withArrow = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300 ease-out hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/* ---------------- Icon mark ---------------- */
type Tone = "emerald" | "gold" | "sky" | "navy" | "brand";

const tones: Record<Tone, string> = {
  emerald: "text-emerald",
  gold: "text-gold",
  sky: "text-sky",
  navy: "text-navy",
  brand: "text-brand-dark",
};

/** Minimal icon mark — ring, not a filled template badge. */
export function IconBadge({
  children,
  tone = "emerald",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-current/25 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
