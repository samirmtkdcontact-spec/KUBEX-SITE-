import Reveal from "./Reveal";

function SunIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-1.6.7-3 1.5-4 .2 1.2 1 2 2 2 .6-2.4-.5-5-1.5-7 1.5.5 3 1.5 3 0Z" />
    </svg>
  );
}

type NicheCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  stat: string;
  cta: string;
};

function NicheCard({ href, icon, title, subtitle, stat, cta }: NicheCardProps) {
  return (
    <a
      href={href}
      className="group flex flex-col justify-between rounded-2xl border p-6 text-white transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.25)",
      }}
    >
      <div>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
          {icon}
        </span>
        <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
      </div>
      <div className="mt-5">
        <p className="font-display text-2xl font-bold">{stat}</p>
        <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#003F5C] transition-transform duration-200 group-hover:translate-x-0.5">
          {cta} <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20"
    >
      {/* Fond animé du Hero : bandes « KUBEX » sur fond bleu logo + orbes */}
      <div className="hero-bg" aria-hidden>
        <div className="hero-bands">
          {Array.from({ length: 40 }).map((_, row) => (
            <div key={row} className="hero-band">
              {Array.from({ length: 28 }).map((__, w) => (
                <span key={w} className="hero-band-word">
                  KUBEX
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
      </div>

      {/* Dégradé de transition : la nav se fond dans le Hero (aucune coupure) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          zIndex: 0,
          background: "linear-gradient(to bottom, #0067B8 0%, #0078C8 100%)",
        }}
      />

      <div className="container-kubex relative z-[1]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="block font-medium uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              KUBEX · AGENCE META ADS · ÉNERGIE RENOUVELABLE &amp; THERMIQUE
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Remplissez votre carnet de commandes avec des clients{" "}
              <span style={{ color: "#00E5FF" }}>qualifiés</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Deux marchés en pleine expansion, portés par des aides d'État et
              une demande structurelle forte. KUBEX génère des leads qualifiés
              pour les{" "}
              <strong className="font-semibold text-white">
                installateurs photovoltaïques
              </strong>{" "}
              et les{" "}
              <strong className="font-semibold text-white">
                poseurs de pompes à chaleur RGE
              </strong>{" "}
              — via des campagnes Meta Ads taillées pour votre métier et votre
              zone.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-[#0078C8] shadow-kubex transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Réserver un audit gratuit
              </a>
              <a
                href="#systeme"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/70 bg-transparent px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
              >
                Découvrir la méthode
              </a>
            </div>
          </Reveal>
        </div>

        {/* Cards PAC / PV intégrées en bas du Hero */}
        <Reveal delay={200} className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <NicheCard
              href="#section-pac"
              icon={<FlameIcon />}
              title="Pompe à chaleur"
              subtitle="Installateurs RGE QualiPAC"
              stat="10 800 € d'aides cumulables"
              cta="Voir le marché PAC"
            />
            <NicheCard
              href="#section-pv"
              icon={<SunIcon />}
              title="Photovoltaïque"
              subtitle="Installateurs RGE QualiPV"
              stat="5,9 GW installés en 2025"
              cta="Voir le marché PV"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
