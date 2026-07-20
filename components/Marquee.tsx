type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  /** Sens du dégradé de fond */
  gradient: "pv" | "pac";
  label: string;
};

/**
 * Bandeau défilant en continu (marquee CSS), séparateur visuel entre sections.
 * Le contenu est dupliqué deux fois pour une boucle sans couture (translate 50%).
 */
export default function Marquee({
  items,
  direction = "left",
  gradient,
  label,
}: MarqueeProps) {
  const background =
    gradient === "pv"
      ? "linear-gradient(135deg, #00B4FF 0%, #003F5C 100%)"
      : "linear-gradient(135deg, #003F5C 0%, #00B4FF 100%)";

  // Deux copies identiques du contenu pour un défilement continu
  const sequence = [...items, ...items];

  return (
    <div
      className="marquee py-3.5 text-white"
      style={{ background }}
      aria-label={label}
      aria-hidden
    >
      <div
        className={`marquee__track ${
          direction === "left" ? "marquee__track--left" : "marquee__track--right"
        }`}
      >
        {sequence.map((item, i) => (
          <span
            key={i}
            className="mx-5 text-sm font-semibold uppercase tracking-wider"
          >
            {item}
            <span className="ml-10 text-white/50" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
