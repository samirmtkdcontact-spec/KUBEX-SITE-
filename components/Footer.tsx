import Logo from "./Logo";

const nav = [
  { href: "#contexte", label: "Le contexte" },
  { href: "#systeme", label: "Notre méthode" },
  { href: "#honnetete", label: "Honnêteté" },
  { href: "#offres", label: "Offres" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-kubex-ink/10 bg-white">
      <div className="container-kubex py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-kubex-ink/60">
              Agence Meta Ads dédiée aux artisans du bâtiment. On construit des
              campagnes ciblées pour faire venir des clients qualifiés — avec une
              méthode claire et des promesses qu'on peut tenir.
            </p>
          </div>

          <nav aria-label="Pied de page">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-kubex-ink/50">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-kubex-ink/65 transition-colors hover:text-kubex-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-kubex-ink/10 pt-6 text-xs text-kubex-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KUBEX. Tous droits réservés.</p>
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
            <li>
              <a href="#" className="transition-colors hover:text-kubex-accent">
                CGV
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-kubex-ink/35">
          KUBEX est une agence indépendante, non affiliée à Meta Platforms, Inc.
          Facebook, Instagram et Meta sont des marques de Meta Platforms, Inc.
          Les statistiques mentionnées sur ce site proviennent de sources
          publiques citées (NapoleonCat, SQ Magazine, Batiweb, CAPEB, Effinity)
          et décrivent des tendances de marché, sans constituer une promesse de
          résultat.
        </p>
      </div>
    </footer>
  );
}
