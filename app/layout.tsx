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
  title: "KUBEX — Acquisition de clients pour les artisans du bâtiment",
  description:
    "KUBEX est une agence Meta Ads spécialisée dans l'acquisition de clients qualifiés pour les artisans du BTP. Méthode transparente, accompagnement honnête, sans promesse de miracle.",
  keywords: [
    "Meta Ads",
    "artisans BTP",
    "acquisition clients",
    "publicité Facebook",
    "agence marketing bâtiment",
  ],
  openGraph: {
    title: "KUBEX — Meta Ads pour artisans du bâtiment",
    description:
      "Des campagnes Meta Ads ciblées pour remplir le carnet de commandes des artisans du BTP.",
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
