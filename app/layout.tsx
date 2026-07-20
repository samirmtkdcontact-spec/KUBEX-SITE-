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
  title: "KUBEX — L'agence Meta Ads des audioprothésistes indépendants",
  description:
    "KUBEX génère des rendez-vous de patients malentendants qualifiés pour les audioprothésistes indépendants et centres auditifs, via Meta Ads. Méthode transparente, accompagnement honnête, sans promesse de miracle.",
  keywords: [
    "Meta Ads",
    "audioprothésiste",
    "centre auditif",
    "audioprothèse",
    "100% Santé",
    "malentendants",
    "leads patients",
    "publicité Facebook",
  ],
  openGraph: {
    title: "KUBEX — Meta Ads pour audioprothésistes indépendants",
    description:
      "Des campagnes Meta Ads ciblées pour amener des patients malentendants qualifiés dans votre centre auditif, avant que les grands réseaux ne les captent.",
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
