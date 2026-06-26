/**
 * Fond animé premium — base #EAF7FF + 3 orbes de lumière qui dérivent
 * lentement en boucle infinie. Rendu en position fixe derrière tout le
 * contenu (z-index -1, pointer-events none). 100 % CSS keyframes.
 */
export default function AnimatedBackground() {
  return (
    <div className="kubex-bg" aria-hidden>
      <div className="kubex-orb kubex-orb--1" />
      <div className="kubex-orb kubex-orb--2" />
      <div className="kubex-orb kubex-orb--3" />
    </div>
  );
}
