import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  stats?: PageHeroStat[];
  children?: ReactNode;
  align?: "left" | "center";
  compact?: boolean;
  breadcrumb?: {
    label: string;
    href: string;
  };
}

export default function PageHero({
  eyebrow,
  title,
  description,
  stats,
  children,
  align = "left",
  compact = false,
  breadcrumb,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className={`relative overflow-hidden border-b border-white/10 bg-[#050505] text-white ${
        compact ? "pt-28 pb-14 md:pt-36 md:pb-16" : "pt-32 pb-20 md:pt-40 md:pb-28"
      }`}
    >
      <div className="absolute inset-0 bg-dark-hero" />
      <div className="absolute inset-0 bg-red-radial" />
      <div className="absolute inset-0 bg-automotive-grid bg-[size:56px_56px] opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-20 hidden h-[calc(100%-120px)] w-px bg-red-600/40 md:block" />
      <div className="pointer-events-none absolute left-6 top-20 hidden w-24 border-t border-red-600/40 md:block" />

      <div className={`container-main relative z-10 ${isCenter ? "text-center" : ""}`}>
        {breadcrumb && (
          <Link
            href={breadcrumb.href}
            className={`mb-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-red-500 ${
              isCenter ? "justify-center" : ""
            }`}
          >
            {breadcrumb.label}
            <ArrowRight size={13} />
          </Link>
        )}

        <div className={`${isCenter ? "mx-auto" : ""} max-w-4xl`}>
          <div
            className={`mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/40 px-3 py-1.5 backdrop-blur-md ${
              isCenter ? "border-l-0 border-t-2" : ""
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/75">
              {eyebrow}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-tighter text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className={`${isCenter ? "mx-auto" : ""} mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-lg`}>
            {description}
          </p>

          {children && <div className={`mt-9 flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}>{children}</div>}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 md:grid-cols-4 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <p className="text-2xl font-black tracking-tighter text-white md:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.22em] text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
