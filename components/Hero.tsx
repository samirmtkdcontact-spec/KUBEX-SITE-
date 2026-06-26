import Reveal from "./Reveal";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-kubex-light pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* Décor d'arrière-plan */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-kubex-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-kubex-to/10 blur-3xl"
      />

      <div className="container-kubex relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Agence Meta Ads · Artisans du bâtiment</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-kubex-ink sm:text-5xl lg:text-6xl">
              Remplissez votre carnet de commandes avec des clients{" "}
              <span className="gradient-text">qualifiés</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-kubex-ink/70">
              Un carnet de commandes en dents de scie, c'est le quotidien de
              trop d'artisans du BTP. KUBEX construit des campagnes{" "}
              <strong className="font-semibold text-kubex-ink">
                Meta Ads ciblées
              </strong>{" "}
              pour faire venir à vous des prospects de votre zone, au bon moment
              — et transformer l'incertitude en demandes régulières.
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
