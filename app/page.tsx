import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MarketSection from "@/components/MarketSection";
import System from "@/components/System";
import DoDont from "@/components/DoDont";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pvCards, pacCards, pvMarquee, pacMarquee } from "@/lib/data";

const PV_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80";
const PAC_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Marquee
          items={pvMarquee}
          direction="left"
          gradient="pv"
          label="Repères marché photovoltaïque"
        />

        <MarketSection
          id="photovoltaique"
          eyebrow="Marché photovoltaïque"
          title={
            <>
              <span className="text-kubex-accent">1,3 million</span>{" "}
              d'installations. Le marché bat des records.
            </>
          }
          subtitle="Les installateurs RGE QualiPV sont au cœur d'un marché qui explose. Mais sans flux régulier de leads, chaque évolution réglementaire fragilise l'activité."
          image={PV_IMAGE}
          overlay="linear-gradient(rgba(0,20,40,0.75), rgba(0,63,92,0.85))"
          cards={pvCards}
          ctaLabel="Générer des leads PV"
          ctaHref="#contact"
        />

        <Marquee
          items={pacMarquee}
          direction="right"
          gradient="pac"
          label="Repères marché pompe à chaleur"
        />

        <MarketSection
          id="pompe-a-chaleur"
          eyebrow="Marché pompe à chaleur"
          title={
            <>
              <span className="text-kubex-accent">10 800 €</span> d'aides
              cumulables. Les propriétaires doivent agir.
            </>
          }
          subtitle="MaPrimeRénov', CEE, éco-PTZ — les aides créent une demande massive. Le problème : les propriétaires ne savent pas que votre entreprise existe. KUBEX met votre offre face à ceux qui cherchent."
          image={PAC_IMAGE}
          overlay="linear-gradient(rgba(0,20,40,0.75), rgba(0,40,70,0.85))"
          cards={pacCards}
          ctaLabel="Générer des leads PAC"
          ctaHref="#contact"
        />

        <System />
        <DoDont />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
