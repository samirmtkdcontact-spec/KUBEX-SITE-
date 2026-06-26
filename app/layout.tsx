import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "KUBEX — L'agence Meta Ads des installateurs de PAC RGE",
  description:
    "KUBEX génère des leads de particuliers qualifiés pour les installateurs de pompes à chaleur RGE QualiPAC, via Meta Ads. Méthode transparente, accompagnement honnête, sans promesse de miracle.",
  keywords: [
    "Meta Ads",
    "pompe à chaleur",
    "PAC",
    "RGE QualiPAC",
    "MaPrimeRénov'",
    "leads installateur PAC",
    "publicité Facebook",
  ],
  openGraph: {
    title: "KUBEX — Meta Ads pour installateurs de PAC RGE",
    description:
      "Des campagnes Meta Ads ciblées pour générer des leads de particuliers éligibles aux aides et remplir le carnet de commandes des installateurs PAC RGE.",
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
      <body>{children}</body>
    </html>
  );
}
