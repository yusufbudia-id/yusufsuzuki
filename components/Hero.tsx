import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  BatteryCharging,
  Cpu,
  Wrench,
  TrendingUp,
  CarFront,
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

const heroImage = "/mobil/fronx-1.jpg";

const trustBadges = [
  {
    id: 1,
    metric: "Harga",
    title: "Pasti Untung",
    desc: "Harga OTR transparan & promo resmi dealer",
    icon: TrendingUp,
  },
  {
    id: 2,
    metric: "8 Tahun",
    title: "Garansi Baterai",
    desc: "Lithium-ion s/d 160.000 km",
    icon: BatteryCharging,
  },
  {
    id: 3,
    metric: "Hybrid",
    title: "Smart Hybrid Vehicle",
    desc: "Teknologi ISG hemat energi",
    icon: Cpu,
  },
  {
    id: 4,
    metric: "50.000 KM",
    title: "Gratis Servis Berkala",
    desc: "Jasa & suku cadang terjamin",
    icon: Wrench,
  },
];

export default function Hero({ cityName }: { cityName?: string }) {
  const locationName = cityName || "Jogja";
  const regionName = cityName || "Yogyakarta";
  const titleLines = cityName
    ? ["Dealer Mobil", `Suzuki ${cityName}`, "Resmi Terpercaya"]
    : ["Dealer Mobil", "Suzuki Jogja", "Resmi Terpercaya"];

  const waMessage = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya harga OTR, promo terbaru, serta kredit mobil Suzuki.`
    : "Halo Yusuf Suzuki, saya ingin tanya harga OTR, promo terbaru, dan kredit mobil Suzuki di Jogja.";

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-16 font-manrope text-white md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(220,38,38,0.13),transparent_30%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.055),transparent_24%),linear-gradient(135deg,#050505_0%,#0a0c0f_48%,#020202_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/88 to-[#050505]/45" />
      <div className="pointer-events-none absolute left-6 top-8 z-10 hidden h-[calc(100%-96px)] w-px bg-red-600/35 md:block" />
      <div className="pointer-events-none absolute left-6 top-8 z-10 hidden w-24 border-t border-red-600/35 md:block" />
      <div className="pointer-events-none absolute right-12 top-28 z-10 hidden h-px w-64 bg-gradient-to-r from-transparent via-red-600/30 to-transparent lg:block" />

      <div className="absolute inset-y-0 right-0 z-10 hidden w-[58%] lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-transparent to-[#050505]" />
        <div
          className="absolute right-10 top-[18%] h-[48%] w-[72%] overflow-hidden border border-white/10 bg-[#0c0f12]/75 shadow-2xl"
          style={{ clipPath: "polygon(5% 0, 94% 0, 100% 9%, 100% 100%, 0 100%, 0 10%)" }}
        >
          <Image
            src={heroImage}
            alt={`Dealer mobil Suzuki ${locationName} resmi dengan promo terbaru dan harga OTR`}
            fill
            priority
            quality={88}
            sizes="58vw"
            className="object-cover opacity-90 contrast-125 saturate-90 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/5 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_44%,rgba(220,38,38,0.12)_45%,transparent_48%)]" />
          <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-red-600/60 via-white/25 to-transparent" />
          <div className="absolute left-8 top-8 flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/75">
              Harga OTR & Promo Terbaru
            </span>
          </div>
        </div>

        <div className="absolute right-12 top-[18%] z-20 border border-red-600/30 bg-black/65 px-8 py-6 backdrop-blur-md">
          <p className="text-xl font-black uppercase tracking-widest text-red-500">Suzuki</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">Built for more</p>
        </div>
      </div>

      <div className="relative z-20 flex min-h-[calc(100vh-80px)] w-full items-center lg:pb-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="order-first lg:hidden">
            <div className="relative mb-8 h-[300px] overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
              <Image
                src={heroImage}
                alt={`Dealer mobil Suzuki ${locationName} resmi dengan promo terbaru dan harga OTR`}
                fill
                priority
                quality={88}
                sizes="100vw"
                className="object-cover opacity-90 contrast-125 saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-red-600/35 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/75">Suzuki Jogja</span>
                <span className="text-xs font-black text-red-500">Harga OTR</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:-translate-y-4 xl:-translate-y-8">
            <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/45 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/75">
                Dealer Resmi Suzuki Sumber Baru Mobil
              </span>
            </div>

            <h1 className="max-w-3xl text-[2.55rem] font-bank-gothic uppercase leading-[1.08] tracking-[-0.04em] text-white sm:text-[3.25rem] lg:text-[3.9rem] xl:text-[4.15rem]">
              {titleLines.map((line, index) => (
                <span key={line} className="block">
                  {line}{index < titleLines.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            <p className="mt-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-red-500 sm:text-sm">
              Promo Resmi & Harga Terbaik
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-white/35" />
              Kredit Mudah
            </p>

            <p className="mt-6 hidden max-w-2xl text-base font-medium leading-8 text-gray-300 sm:block md:text-lg">
              Dealer mobil Suzuki {locationName} resmi terpercaya untuk cek harga OTR, promo terbaru, DP ringan, kredit mudah, dan test drive di wilayah {regionName} bersama <strong className="text-white">Yusuf Suzuki</strong>.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-red-500 bg-red-600 px-7 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(220,38,38,0.25)] transition-all hover:-translate-y-0.5 hover:bg-red-700 sm:w-auto"
              >
                <MessageCircle size={16} />
                Chat Harga OTR
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/test-drive"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-black/45 px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500 hover:bg-white/[0.03] sm:w-auto"
              >
                <CalendarCheck size={16} />
                Jadwalkan Test Drive
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/mobil"
                className="group inline-flex items-center justify-center gap-3 border border-transparent bg-transparent px-4 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-white/65 transition-all hover:-translate-y-0.5 hover:text-white sm:w-auto"
              >
                <CarFront size={16} />
                Lihat Katalog Suzuki
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative z-30 mt-4 lg:col-span-12 lg:mt-10">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
                {trustBadges.map((badge) => (
                  <article
                    key={badge.id}
                    className="group relative min-h-[166px] overflow-hidden border border-white/10 bg-black/68 p-5 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:border-red-600/65 hover:bg-black/85 sm:p-6"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600/70 via-white/20 to-transparent opacity-70" />
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="inline-flex border border-white/10 bg-[#0b0d10] p-3 transition-colors group-hover:border-red-600/50">
                        <badge.icon size={24} className="text-red-500" strokeWidth={2.2} />
                      </div>
                      <span className="max-w-[96px] text-right text-lg font-black uppercase leading-none tracking-[-0.04em] text-red-500 sm:text-xl">
                        {badge.metric}
                      </span>
                    </div>
                    <p className="text-xs font-black uppercase leading-[1.35] tracking-[0.1em] text-white transition-colors group-hover:text-red-400">
                      {badge.title}
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase leading-[1.6] tracking-[0.06em] text-gray-400">
                      {badge.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
