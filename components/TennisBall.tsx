type TennisBallProps = {
  className?: string;
  /** add a slow idle spin */
  spin?: boolean;
};

/**
 * A real tennis ball: optic-yellow felt with soft top-light shading and the
 * classic curved white seam. Not a flat disc.
 */
export default function TennisBall({
  className = "",
  spin = false,
}: TennisBallProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${spin ? "spin-slow" : ""} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ng-felt" cx="36%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#f1ff7a" />
          <stop offset="48%" stopColor="#d4ec1f" />
          <stop offset="84%" stopColor="#bcd400" />
          <stop offset="100%" stopColor="#9bb000" />
        </radialGradient>
        <radialGradient id="ng-shine" cx="34%" cy="26%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* felt */}
      <circle cx="50" cy="50" r="48" fill="url(#ng-felt)" />
      {/* bottom contact shadow inside the ball */}
      <circle cx="50" cy="50" r="48" fill="url(#ng-shine)" />
      <path
        d="M50 50 m0 48 a48 48 0 0 1 0 -96"
        fill="none"
        stroke="rgba(0,0,0,0.10)"
        strokeWidth="6"
        transform="rotate(28 50 50)"
        opacity="0.5"
      />

      {/* the two seam curves */}
      <path
        d="M13 24 C 41 41, 41 59, 13 76"
        fill="none"
        stroke="#fffef2"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M87 24 C 59 41, 59 59, 87 76"
        fill="none"
        stroke="#fffef2"
        strokeWidth="4.2"
        strokeLinecap="round"
      />

      {/* crisp rim */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
