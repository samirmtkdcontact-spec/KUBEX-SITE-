import Reveal from "./Reveal";
import { contextStats } from "@/lib/data";

export default function Context() {
  return (
    <section id="contexte" className="py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Le contexte</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            1,3 million d'installations. Le marché accélère. Êtes-vous visible ?
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Le photovoltaïque bat des records, mais les réformes 2025-2026 ont
            rebattu les cartes : sans flux régulier de leads, chaque changement
            de prime ou de TVA se subit de plein fouet. La demande est là — le
            vrai sujet, c'est qu'elle vous trouve. Voici les chiffres, sources à
            l'appui.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contextStats.map((stat, i) => (
            <Reveal key={stat.value + stat.label} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-3xl border border-kubex-ink/10 bg-kubex-light/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-kubex-accent/30 hover:shadow-kubex">
                {stat.icon && (
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm"
                    aria-hidden
                  >
                    {stat.icon}
                  </span>
                )}
                <p className="mt-6 font-display text-5xl font-bold gradient-text">
                  {stat.value}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-kubex-ink">
                  {stat.label}
                </h3>
                {stat.detail && (
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-kubex-ink/65">
                    {stat.detail}
                  </p>
                )}
                <p className="mt-5 border-t border-kubex-ink/10 pt-4 text-xs font-medium text-kubex-ink/40">
                  Source : {stat.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-3xl text-center text-sm text-kubex-ink/50">
            Ces données décrivent le marché du photovoltaïque et son évolution.
            Elles ne constituent pas une promesse de résultat : les performances
            d'une campagne dépendent de votre zone, de votre offre et du budget.
            Les chiffres du marché, les aides et les taux de TVA évoluent selon
            les sources, les périodes citées et les textes en vigueur.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
