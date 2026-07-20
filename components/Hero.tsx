import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* Fond animé du Hero : grille de points + 3 orbes de lumière */}
      <div className="hero-bg" aria-hidden>
        <div className="hero-dots" />
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
      </div>

      <div className="container-kubex relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="block font-medium uppercase text-kubex-accent"
              style={{ fontSize: "11px", letterSpacing: "0.25em" }}
            >
              KUBEX · AGENCE META ADS · ÉNERGIE RENOUVELABLE &amp; THERMIQUE
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-kubex-ink sm:text-5xl lg:text-6xl">
              Remplissez votre carnet de commandes avec des clients{" "}
              <span className="gradient-text">qualifiés</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-kubex-ink/70">
              Deux marchés en pleine expansion, portés par des aides d'État et
              une demande structurelle forte. KUBEX génère des leads qualifiés
              pour les{" "}
              <strong className="font-semibold text-kubex-ink">
                installateurs photovoltaïques
              </strong>{" "}
              et les{" "}
              <strong className="font-semibold text-kubex-ink">
                poseurs de pompes à chaleur RGE
              </strong>{" "}
              — via des campagnes Meta Ads taillées pour votre métier et votre
              zone.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Réserver un audit gratuit
              </a>
              <a href="#systeme" className="btn-secondary w-full sm:w-auto">
                Découvrir la méthode
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div
              className="mt-6 flex flex-wrap items-center justify-center"
              style={{ gap: "12px" }}
            >
              <span className="trust-pill">✓ Données réelles sourcées</span>
              <span className="trust-pill">✓ Aucun résultat garanti inventé</span>
              <span className="trust-pill">✓ Sans engagement</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
