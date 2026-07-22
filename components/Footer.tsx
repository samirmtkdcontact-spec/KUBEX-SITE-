import Logo from "./Logo";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Pompe à chaleur",
    links: [
      { href: "#section-pac", label: "Le marché PAC" },
      { href: "#contact", label: "Générer des leads PAC" },
    ],
  },
  {
    title: "Photovoltaïque",
    links: [
      { href: "#section-pv", label: "Le marché PV" },
      { href: "#contact", label: "Générer des leads PV" },
    ],
  },
  {
    title: "Méthode",
    links: [
      { href: "#systeme", label: "Le Système Kube" },
      { href: "#honnetete", label: "Honnêteté" },
      { href: "#pourquoi", label: "Pourquoi KUBEX" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "#contact", label: "Réserver un audit" },
      { href: "#faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-kubex-ink/10 bg-transparent">
      <div className="container-kubex py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr,2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 font-display text-sm font-semibold text-kubex-to">
              L'agence Meta Ads des installateurs énergie RGE.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-kubex-ink/60">
              Photovoltaïque et pompe à chaleur : on construit des campagnes
              Meta Ads ciblées pour générer des leads de propriétaires qualifiés,
              avec une méthode claire et des engagements qu'on peut tenir.
            </p>
          </div>

          <nav
            aria-label="Pied de page"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-kubex-ink/50">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-kubex-ink/65 transition-colors hover:text-kubex-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-kubex-ink/10 pt-6 text-xs text-kubex-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KUBEX. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a href="#" className="transition-colors hover:text-kubex-accent">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-kubex-accent">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-kubex-ink/35">
          Les données présentées sur ce site sont issues de sources officielles
          et d'études sectorielles. Elles reflètent des tendances de marché et ne
          constituent pas une promesse de résultat. KUBEX est une agence
          indépendante, non affiliée à Meta Platforms, Inc. ni à un organisme
          public. Meta est une marque de Meta Platforms, Inc.
        </p>
      </div>
    </footer>
  );
}
