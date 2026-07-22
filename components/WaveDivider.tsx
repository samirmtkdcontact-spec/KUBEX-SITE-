/**
 * Séparateur décoratif en vague douce entre deux sections.
 * `flip` inverse l'ondulation (haut/bas) pour créer un flux continu.
 */
export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      style={{ lineHeight: 0 }}
      className={flip ? "-scale-y-100" : ""}
    >
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        width="100%"
        height="40"
        role="presentation"
      >
        <path
          d="M0,20 C240,40 480,0 720,18 C960,36 1200,4 1440,20 L1440,40 L0,40 Z"
          fill="rgba(0,150,214,0.12)"
        />
      </svg>
    </div>
  );
}
