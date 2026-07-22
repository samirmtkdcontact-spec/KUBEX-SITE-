"use client";

import { useEffect, useState } from "react";

const GRADIENT_V = "linear-gradient(to bottom, #00AAFF, #0078C8, #003F5C)";
const GRADIENT_H = "linear-gradient(to right, #00AAFF, #0078C8, #003F5C)";

/**
 * Barre de progression du scroll : une piste verticale à gauche qui se remplit
 * de haut en bas, et une barre horizontale fine au-dessus de la nav. La
 * progression est calculée via requestAnimationFrame pour rester fluide.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const pct = `${(progress * 100).toFixed(2)}%`;

  return (
    <>
      {/* Barre verticale — piste à gauche */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: "rgba(255,255,255,0.15)",
          zIndex: 999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: pct,
            background: GRADIENT_V,
          }}
        />
      </div>

      {/* Barre horizontale — en haut, au-dessus de la nav */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            width: pct,
            background: GRADIENT_H,
          }}
        />
      </div>
    </>
  );
}
