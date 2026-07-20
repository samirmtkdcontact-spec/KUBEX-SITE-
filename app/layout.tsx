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
  title: "KUBEX — L'agence Meta Ads des installateurs énergie RGE (PV & PAC)",
  description:
    "KUBEX génère des leads de propriétaires qualifiés pour les installateurs photovoltaïques et les poseurs de pompes à chaleur RGE, via des campagnes Meta Ads taillées pour votre métier et votre zone.",
  keywords: [
    "Meta Ads",
    "photovoltaïque",
    "pompe à chaleur",
    "RGE QualiPV",
    "RGE QualiPAC",
    "MaPrimeRénov'",
    "leads installateur énergie",
    "panneaux solaires",
  ],
  openGraph: {
    title: "KUBEX — Meta Ads pour installateurs énergie RGE (PV & PAC)",
    description:
      "Des campagnes Meta Ads ciblées pour générer des leads de propriétaires qualifiés — photovoltaïque et pompe à chaleur.",
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
