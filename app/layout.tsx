import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import IntroScreen from "@/components/IntroScreen";
import ScrollProgress from "@/components/ScrollProgress";
import SectionAccents from "@/components/SectionAccents";

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
  title:
    "KUBEX — L'agence de publicité digitale ciblée des installateurs énergie RGE (PV & PAC)",
  description:
    "KUBEX génère des leads de propriétaires qualifiés pour les installateurs photovoltaïques et les poseurs de pompes à chaleur RGE, via des campagnes digitales ciblées taillées pour votre métier et votre zone.",
  keywords: [
    "publicité digitale ciblée",
    "photovoltaïque",
    "pompe à chaleur",
    "RGE QualiPV",
    "RGE QualiPAC",
    "MaPrimeRénov'",
    "leads installateur énergie",
    "panneaux solaires",
  ],
  openGraph: {
    title:
      "KUBEX — Publicité digitale ciblée pour installateurs énergie RGE (PV & PAC)",
    description:
      "Des campagnes digitales ciblées pour générer des leads de propriétaires qualifiés — photovoltaïque et pompe à chaleur.",
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
        <ScrollProgress />
        <SectionAccents />
        <IntroScreen />
        {children}
      </body>
    </html>
  );
}
