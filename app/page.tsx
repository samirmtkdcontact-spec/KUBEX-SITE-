import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MarketSection from "@/components/MarketSection";
import System from "@/components/System";
import DoDont from "@/components/DoDont";
import WhyKubex from "@/components/WhyKubex";
import WaveDivider from "@/components/WaveDivider";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  pvCards,
  pacCards,
  desamiantageCards,
  pvMarquee,
  pacMarquee,
  desamiantageMarquee,
} from "@/lib/data";

const PV_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80";
const PAC_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80";
const DESAMIANTAGE_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Chaque marché est suivi de sa bande défilante, qui le sépare du suivant */}
        <MarketSection
          id="section-desamiantage"
          index="01"
          name="Désamiantage"
          tagline="83 % de l'amiante est encore dans les bâtiments."
          subtitle="Tous les bâtiments construits avant 1997 sont potentiellement concernés. C'est une obligation légale, pas un choix — et les entreprises certifiées SS3/SS4 capables d'intervenir sont rares. KUBEX génère des leads qualifiés pour les professionnels du désamiantage via Meta Ads ciblées sur votre zone."
          image={DESAMIANTAGE_IMAGE}
          overlay="linear-gradient(rgba(10,30,15,0.80), rgba(20,60,30,0.88))"
          cards={desamiantageCards}
          ctaLabel="Générer des leads désamiantage"
          ctaHref="#contact"
        />

        <Marquee
          items={desamiantageMarquee}
          direction="left"
          background="linear-gradient(90deg, #1A4A2E, #2D7A4F)"
          label="Repères marché désamiantage"
        />

        <MarketSection
          id="section-pac"
          index="02"
          name="Pompe à chaleur"
          tagline="Les aides qui créent la demande."
          subtitle="MaPrimeRénov', CEE, éco-PTZ — les aides créent une demande massive. Le problème : les propriétaires ne savent pas que votre entreprise existe. KUBEX met votre offre face à ceux qui cherchent."
          image={PAC_IMAGE}
          overlay="linear-gradient(rgba(0,20,40,0.75), rgba(0,40,70,0.85))"
          cards={pacCards}
          ctaLabel="Générer des leads PAC"
          ctaHref="#contact"
        />

        <Marquee
          items={pacMarquee}
          direction="right"
          background="linear-gradient(90deg, #003F5C, #0078C8)"
          label="Repères marché pompe à chaleur"
        />

        <MarketSection
          id="section-pv"
          index="03"
          name="Photovoltaïque"
          tagline="Le marché qui bat des records."
          subtitle="Les installateurs RGE QualiPV sont au cœur d'un marché qui explose. Mais sans flux régulier de leads, chaque évolution réglementaire fragilise l'activité."
          image={PV_IMAGE}
          overlay="linear-gradient(rgba(0,20,40,0.75), rgba(0,63,92,0.85))"
          cards={pvCards}
          ctaLabel="Générer des leads PV"
          ctaHref="#contact"
        />

        <Marquee
          items={pvMarquee}
          direction="left"
          background="linear-gradient(90deg, #0078C8, #00B4FF)"
          label="Repères marché photovoltaïque"
        />

        <System />
        <WaveDivider />
        <DoDont />
        <WaveDivider flip />
        <WhyKubex />
        <WaveDivider />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
