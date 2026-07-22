import Reveal from "./Reveal";

function SunIcon() {
  return (
    <svg
      width="40"
      height="40"
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
      width="40"
      height="40"
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
  background: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  stat: string;
  cta: string;
  shadow: string;
};

function NicheCard({
  href,
  background,
  icon,
  title,
  subtitle,
  stat,
  cta,
  shadow,
}: NicheCardProps) {
  return (
    <a
      href={href}
      style={{ background, minHeight: "280px" }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[20px] p-8 text-white transition-transform duration-300 hover:scale-[1.02] ${shadow}`}
    >
      <div>
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
          {icon}
        </span>
        <h3 className="mt-5 font-display text-[28px] font-bold leading-tight">
          {title}
        </h3>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
      </div>

      <div className="mt-6">
        <p className="font-display text-3xl font-bold">{stat}</p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-kubex-to transition-transform duration-200 group-hover:translate-x-0.5">
          {cta} <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

/**
 * Choix parallèle des deux niches, immédiatement après le Hero.
 * Deux grandes cards côte à côte (stack vertical sur mobile) menant vers
 * les sections marché correspondantes.
 */
export default function NicheChoice() {
  return (
    <section className="pb-8 pt-4 sm:pb-12">
      <div className="container-kubex">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <NicheCard
              href="#section-pac"
              background="linear-gradient(135deg, #003F5C 0%, #001A2E 100%)"
              icon={<FlameIcon />}
              title="Pompe à chaleur"
              subtitle="Installateurs RGE QualiPAC"
              stat="10 800 € d'aides cumulables"
              cta="Voir le marché PAC"
              shadow="hover:shadow-[0_28px_70px_-20px_rgba(0,63,92,0.7)]"
            />
            <NicheCard
              href="#section-pv"
              background="linear-gradient(135deg, #00B4FF 0%, #003F5C 100%)"
              icon={<SunIcon />}
              title="Photovoltaïque"
              subtitle="Installateurs RGE QualiPV"
              stat="5,9 GW installés en 2025"
              cta="Voir le marché PV"
              shadow="hover:shadow-[0_28px_70px_-20px_rgba(0,180,255,0.6)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
