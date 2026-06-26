import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette officielle KUBEX
        kubex: {
          light: "#EAF7FF", // Fond clair
          ink: "#0A1628", // Texte principal
          accent: "#00B4FF", // Accent
          from: "#00B4FF", // Début dégradé
          to: "#003F5C", // Fin dégradé
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "kubex-gradient":
          "linear-gradient(135deg, #00B4FF 0%, #003F5C 100%)",
      },
      boxShadow: {
        kubex: "0 20px 50px -20px rgba(0, 63, 92, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
