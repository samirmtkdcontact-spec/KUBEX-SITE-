import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Context from "@/components/Context";
import System from "@/components/System";
import DoDont from "@/components/DoDont";
import Offers from "@/components/Offers";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Context />
        <System />
        <DoDont />
        <Offers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
