type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  label: string;
};

/**
 * Bandeau défilant en continu (marquee CSS), 48px de haut, fond bleu logo.
 * Deux bandes adjacentes (PAC + PV) forment un bloc visuel continu.
 */
export default function Marquee({
  items,
  direction = "left",
  label,
}: MarqueeProps) {
  // Deux copies identiques du contenu pour un défilement continu
  const sequence = [...items, ...items];

  return (
    <div
      className="marquee flex h-12 items-center"
      style={{ background: "#0078C8" }}
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
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {item}
            <span className="ml-10" style={{ color: "rgba(255,255,255,0.35)" }} aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
