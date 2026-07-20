import Reveal from "./Reveal";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-32"
    >
      <div className="container-kubex relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="block font-medium uppercase text-kubex-accent"
              style={{ fontSize: "11px", letterSpacing: "0.25em" }}
            >
              KUBEX · AGENCE META ADS · SPÉCIALISTE AUDIOPROTHÈSE
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-kubex-ink sm:text-5xl lg:text-6xl">
              Remplissez votre agenda avec des patients{" "}
              <span className="gradient-text">qualifiés</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-kubex-ink/70">
              <strong className="font-semibold text-kubex-ink">
                6,5 millions de Français
              </strong>{" "}
              sont malentendants et{" "}
              <strong className="font-semibold text-kubex-ink">
                65 % cherchent leur audioprothésiste en ligne
              </strong>
              . Le problème : sans stratégie digitale, ils ne trouvent que les
              grandes enseignes. KUBEX construit des campagnes{" "}
              <strong className="font-semibold text-kubex-ink">
                Meta Ads ciblées
              </strong>{" "}
              pour amener des patients dans votre centre, chaque mois.
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

          <Reveal delay={280}>
            <div
              className="mt-6 flex flex-wrap items-center justify-center"
              style={{ gap: "12px" }}
            >
              <span className="trust-pill">✓ Données réelles sourcées</span>
              <span className="trust-pill">✓ Aucun faux témoignage</span>
              <span className="trust-pill">✓ Sans engagement</span>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mx-auto mt-6 max-w-xl text-sm text-kubex-ink/60">
              Impossible de rivaliser avec Amplifon ou Audika sur le SEO et la
              notoriété de marque. Meta Ads est le terrain où un indépendant
              cible chirurgicalement sa zone — <strong className="font-semibold text-kubex-ink">KUBEX vous aide à l'exploiter</strong>.
            </p>
          </Reveal>
        </div>

        {/* Bloc « Pourquoi Meta Ads ? » — 3 stats réelles sourcées */}
        <Reveal delay={120} className="mt-16">
          <div className="rounded-2xl border border-kubex-ink/10 bg-white/70 p-6 shadow-kubex backdrop-blur-sm sm:p-8">
            <p className="text-center font-display text-sm font-semibold uppercase tracking-wider text-kubex-to">
              Pourquoi Meta Ads ?
            </p>
            <dl className="mt-6 grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="text-center sm:border-l sm:border-kubex-ink/10 sm:first:border-l-0"
                >
                  <dt className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mx-auto mt-2 max-w-[16rem] text-sm leading-snug text-kubex-ink/70">
                    {stat.label}
                  </dd>
                  <dd className="mt-1.5 text-xs text-kubex-ink/45">
                    ({stat.source})
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
