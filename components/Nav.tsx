"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#section-pac", label: "Le marché PAC" },
  { href: "#section-pv", label: "Le marché PV" },
  { href: "#systeme", label: "Notre méthode" },
  { href: "#honnetete", label: "Honnêteté" },
  { href: "#contact", label: "Contact" },
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

  // Fond dégradé : opaque en haut de page, légèrement translucide au scroll
  const background = scrolled
    ? "linear-gradient(90deg, rgba(0,150,214,0.95) 0%, rgba(0,85,164,0.95) 50%, rgba(0,63,92,0.95) 100%)"
    : "linear-gradient(90deg, #0096D6 0%, #0055A4 50%, #003F5C 100%)";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 shadow-sm"
          : "border-b border-transparent"
      }`}
      style={{ background }}
    >
      <nav className="container-kubex flex h-16 items-center justify-between">
        <a href="#top" aria-label="Accueil KUBEX">
          <Logo wordmarkClassName="text-white" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 underline-offset-4 transition-opacity hover:text-white hover:underline hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0078C8] transition-colors duration-200 hover:bg-white/90"
          >
            Réserver un audit gratuit
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-white/15 md:hidden" style={{ background }}>
          <ul className="container-kubex flex flex-col py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-white/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0078C8] transition-colors duration-200 hover:bg-white/90"
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
