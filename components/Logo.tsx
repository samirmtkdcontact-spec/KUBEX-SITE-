type LogoProps = {
  /** Taille du carré en pixels */
  size?: number;
  /** Affiche le mot-symbole "KUBEX" à côté du carré */
  withWordmark?: boolean;
  className?: string;
  /** Classe appliquée au mot-symbole (couleur) — sombre par défaut */
  wordmarkClassName?: string;
};

/**
 * Logo KUBEX — un « K » blanc dans un carré arrondi rempli du dégradé officiel.
 * Le dégradé est défini inline pour rester autonome (utilisable hors Tailwind).
 */
export default function Logo({
  size = 40,
  withWordmark = true,
  className = "",
  wordmarkClassName = "text-kubex-ink",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        role="img"
        aria-label="Logo KUBEX"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="kubex-logo-gradient"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#00B4FF" />
            <stop offset="1" stopColor="#003F5C" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#kubex-logo-gradient)" />
        <path
          d="M17 13.5h4.4v8.1l7.3-8.1h5.3l-7.9 8.6 8.3 12.4h-5.2l-6-9.1-1.8 1.95v7.15H17z"
          fill="#FFFFFF"
        />
      </svg>
      {withWordmark && (
        <span
          className={`font-display text-xl font-bold tracking-tight ${wordmarkClassName}`}
        >
          KUBEX
        </span>
      )}
    </span>
  );
}
