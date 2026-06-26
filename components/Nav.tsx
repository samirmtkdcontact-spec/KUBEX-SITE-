"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#contexte", label: "Le contexte" },
  { href: "#systeme", label: "Méthode" },
  { href: "#honnetete", label: "Honnêteté" },
  { href: "#offres", label: "Offres" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-kubex-ink/10 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-kubex flex h-16 items-center justify-between">
        <a href="#top" aria-label="Accueil KUBEX">
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-kubex-ink/70 transition-colors hover:text-kubex-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Réserver un audit gratuit
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-kubex-ink/10 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-kubex-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-kubex-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-kubex-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-kubex-ink/10 bg-white md:hidden">
          <ul className="container-kubex flex flex-col py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-kubex-ink/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Réserver un audit gratuit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
