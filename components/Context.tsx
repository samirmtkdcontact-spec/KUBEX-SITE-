import Reveal from "./Reveal";
import { contextStats } from "@/lib/data";

export default function Context() {
  return (
    <section id="contexte" className="py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Le contexte</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            5,8 millions de logements doivent être rénovés. Êtes-vous visible ?
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            L'urgence n'est pas marketing, elle est légale : interdiction de
            louer les passoires thermiques, gel des loyers, décote à la revente.
            La demande de propriétaires est là — le vrai sujet, c'est qu'ils vous
            trouvent. Voici ce que disent les chiffres, sources à l'appui.
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
            Ces données décrivent le cadre réglementaire, le marché de
            l'isolation et les dispositifs d'aides. Elles ne constituent pas une
            promesse de résultat : les performances d'une campagne dépendent de
            votre zone, de votre offre et du budget. Les montants d'aides et les
            échéances légales évoluent selon les barèmes et textes en vigueur et
            la situation de chaque ménage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
