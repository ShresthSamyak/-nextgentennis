import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

/* ---------------- Button ---------------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "lime" | "gold" | "navy" | "outline";
  className?: string;
  withArrow?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  lime: "bg-brand text-navy hover:bg-brand-dark",
  gold: "bg-gold text-navy hover:brightness-95",
  navy: "bg-navy text-white hover:bg-navy-700",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
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
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide shadow-sm transition-all hover:scale-[1.03] ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/* ---------------- Icon badge ---------------- */
type Tone = "emerald" | "gold" | "sky" | "navy";

const tones: Record<Tone, string> = {
  emerald: "bg-emerald text-white",
  gold: "bg-gold text-navy",
  sky: "bg-sky text-white",
  navy: "bg-navy text-brand",
};

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
      className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------------- Photo placeholder ----------------
   Styled stand-in for real photography. Drop a real <Image> here later. */
export function Photo({
  label,
  emoji = "🎾",
  className = "",
  rounded = "rounded-2xl",
}: {
  label: string;
  emoji?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`photo ${rounded} ${className}`}>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <span className="text-4xl drop-shadow">{emoji}</span>
        <span className="max-w-[14rem] text-xs font-semibold uppercase tracking-wider text-white/70">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ---------------- Eyebrow / section label ---------------- */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-xs font-extrabold uppercase tracking-[0.2em] text-emerald ${className}`}
    >
      {children}
    </span>
  );
}
