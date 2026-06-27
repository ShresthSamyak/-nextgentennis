type TennisRacketProps = {
  className?: string;
};

/**
 * A clean, single-color tennis racket outline (uses currentColor) with a strung
 * head, throat, and wrapped grip. Decorative — set color + size via className.
 */
export default function TennisRacket({ className = "" }: TennisRacketProps) {
  return (
    <svg
      viewBox="0 0 160 440"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="ng-racket-face">
          <ellipse cx="80" cy="104" rx="56" ry="76" />
        </clipPath>
      </defs>

      {/* strings */}
      <g
        clipPath="url(#ng-racket-face)"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      >
        {[36, 50, 64, 80, 96, 110, 124].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="190" />
        ))}
        {[40, 56, 72, 88, 104, 120, 136, 152, 168].map((y) => (
          <line key={`h${y}`} x1="16" y1={y} x2="144" y2={y} />
        ))}
      </g>

      {/* head rim */}
      <ellipse
        cx="80"
        cy="104"
        rx="64"
        ry="84"
        stroke="currentColor"
        strokeWidth="9"
      />
      <ellipse
        cx="80"
        cy="104"
        rx="56"
        ry="76"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* throat */}
      <path
        d="M52 182 C 58 214, 102 214, 108 182"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M80 196 L80 250"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
      />

      {/* shaft + grip */}
      <path
        d="M80 250 L80 408"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
      />
      {/* grip wrap */}
      <g stroke="currentColor" strokeWidth="2" opacity="0.45">
        {[316, 332, 348, 364, 380, 396].map((y) => (
          <line key={y} x1="71" y1={y} x2="89" y2={y - 10} />
        ))}
      </g>
      {/* butt cap */}
      <path
        d="M70 410 L90 410"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  );
}
