import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import IntroScreen from "@/components/IntroScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KUBEX — L'agence Meta Ads des installateurs isolation RGE",
  description:
    "KUBEX génère des leads de propriétaires qualifiés pour les installateurs d'isolation thermique RGE (ITE, ITI, combles, toiture), via Meta Ads. Méthode transparente, accompagnement honnête, sans promesse de miracle.",
  keywords: [
    "Meta Ads",
    "isolation thermique",
    "ITE",
    "ITI",
    "RGE",
    "passoire thermique",
    "MaPrimeRénov'",
    "leads isolation",
    "publicité Facebook",
  ],
  openGraph: {
    title: "KUBEX — Meta Ads pour installateurs isolation RGE",
    description:
      "Des campagnes Meta Ads ciblées pour transformer l'obligation légale de rénover les passoires thermiques en leads qualifiés pour les installateurs d'isolation RGE.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AnimatedBackground />
        <IntroScreen />
        {children}
      </body>
    </html>
  );
}
