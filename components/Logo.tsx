type LogoProps = {
  /** "dark" = dark text (light backgrounds), "light" = white text (dark backgrounds) */
  variant?: "dark" | "light";
  className?: string;
};

/** NEXTGEN TENNIS wordmark with a tennis-seam mark. */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const top = variant === "light" ? "text-white" : "text-navy";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="24" cy="24" r="20.5" className="fill-navy" />
        <circle
          cx="24"
          cy="24"
          r="20.5"
          className="stroke-brand"
          strokeWidth="3"
        />
        <path
          d="M10 16c8 1.5 13.5 7 15.5 15 1 4 1 8-.8 12"
          className="stroke-brand"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M38 32c-8-1.5-13.5-7-15.5-15-1-4-1-8 .8-12"
          className="stroke-brand"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-[0.82]">
        <span className={`block font-display text-[22px] ${top}`}>NEXTGEN</span>
        <span className="block font-display text-[13px] tracking-[0.34em] text-brand-dark">
          TENNIS
        </span>
      </span>
    </span>
  );
}
