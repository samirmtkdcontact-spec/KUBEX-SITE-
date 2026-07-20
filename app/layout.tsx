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
  title: "KUBEX — L'agence Meta Ads des installateurs photovoltaïque RGE",
  description:
    "KUBEX génère des leads de propriétaires qualifiés en continu pour les installateurs photovoltaïque RGE QualiPV, via Meta Ads — indépendamment des aides du moment. Méthode transparente, accompagnement honnête, sans promesse de miracle.",
  keywords: [
    "Meta Ads",
    "photovoltaïque",
    "panneaux solaires",
    "RGE QualiPV",
    "autoconsommation",
    "leads photovoltaïque",
    "installateur solaire",
    "publicité Facebook",
  ],
  openGraph: {
    title: "KUBEX — Meta Ads pour installateurs photovoltaïque RGE",
    description:
      "Des campagnes Meta Ads ciblées pour générer des leads de propriétaires qualifiés en continu, quelles que soient les aides du moment.",
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
