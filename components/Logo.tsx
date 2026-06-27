type LogoProps = {
  /** "dark" = dark text (light backgrounds), "light" = white text (dark backgrounds) */
  variant?: "dark" | "light";
  className?: string;
};

/** NEXTGEN TENNIS wordmark with a swooshing tennis-ball mark. */
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
        <circle cx="24" cy="24" r="21" className="fill-navy" />
        <circle cx="24" cy="24" r="21" className="stroke-brand" strokeWidth="3" />
        <path
          d="M9 17c8 1 14 6 16 14 1 4 1 8-1 12"
          className="stroke-brand"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M39 31c-8-1-14-6-16-14-1-4-1-8 1-12"
          className="stroke-brand"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="font-display leading-none">
        <span
          className={`block text-[20px] font-extrabold tracking-tight ${top}`}
        >
          NEXTGEN
        </span>
        <span className="block text-[12px] font-bold tracking-[0.25em] text-brand-dark">
          TENNIS
        </span>
      </span>
    </span>
  );
}
