import Reveal from "./Reveal";
import { contextStats } from "@/lib/data";

export default function Context() {
  return (
    <section id="contexte" className="bg-white py-20 sm:py-28">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Le contexte</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            Le marché PAC repart. Êtes-vous visible ?
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Les ventes redémarrent depuis octobre 2025 et les aides 2026 sont
            massives. La demande de particuliers est là — le vrai sujet, c'est
            qu'ils vous trouvent. Voici ce que disent les chiffres, sources à
            l'appui.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contextStats.map((stat, i) => (
            <Reveal key={stat.value + stat.label} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-kubex-ink/10 bg-kubex-light/60 p-6 transition-shadow duration-300 hover:shadow-kubex">
                <p className="font-display text-4xl font-bold gradient-text">
                  {stat.value}
                </p>
                <h3 className="mt-3 font-semibold text-kubex-ink">
                  {stat.label}
                </h3>
                {stat.detail && (
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-kubex-ink/65">
                    {stat.detail}
                  </p>
                )}
                <p className="mt-4 text-xs font-medium text-kubex-ink/40">
                  Source : {stat.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-3xl text-center text-sm text-kubex-ink/50">
            Ces données décrivent le marché de la PAC et les dispositifs
            d'aides. Elles ne constituent pas une promesse de résultat : les
            performances d'une campagne dépendent de votre zone, de votre offre
            et du budget. Les montants d'aides évoluent selon les barèmes ANAH
            en vigueur et la situation de chaque ménage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
