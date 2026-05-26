"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CarFront,
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

const banners = [
  "/mobil/jimny-1.jpg",
  "/mobil/xl7-1.jpg",
  "/mobil/fronx-1.jpg",
];

const trustBadges = [
  {
    id: 1,
    title: "Beli Suzuki Pasti Untung",
    desc: "Harga terbaik & nilai jual tinggi",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Garansi Baterai 8 Tahun",
    desc: "Lithium-ion s/d 160.000 km",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "Smart Hybrid Vehicle",
    desc: "Teknologi ISG hemat energi",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Gratis Servis Berkala",
    desc: "Jasa & suku cadang s/d 50.000 km",
    icon: Wrench,
  },
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.02,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
};

export default function Hero({ cityName }: { cityName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeMobileBadge, setActiveMobileBadge] = useState<number | null>(null);

  const locationName = cityName || "Jogja";

  const waMessage = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : "Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.";

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= banners.length) return 0;
      if (nextIndex < 0) return banners.length - 1;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      paginate(1);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-16 font-manrope text-white md:pt-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(220,38,38,0.13),transparent_30%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.055),transparent_24%),linear-gradient(135deg,#050505_0%,#0a0c0f_48%,#020202_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/88 to-[#050505]/45" />

      {/* SUBTLE TECHNICAL LINES */}
      <div className="pointer-events-none absolute left-6 top-8 z-10 hidden h-[calc(100%-96px)] w-px bg-red-600/35 md:block" />
      <div className="pointer-events-none absolute left-6 top-8 z-10 hidden w-24 border-t border-red-600/35 md:block" />
      <div className="pointer-events-none absolute right-12 top-28 z-10 hidden h-px w-64 bg-gradient-to-r from-transparent via-red-600/30 to-transparent lg:block" />

      {/* RIGHT VISUAL AREA - DESKTOP */}
      <div className="absolute inset-y-0 right-0 z-10 hidden w-[58%] lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-transparent to-[#050505]" />

        <div
          className="absolute right-10 top-[18%] h-[48%] w-[72%] overflow-hidden border border-white/10 bg-[#0c0f12]/75 shadow-2xl"
          style={{
            clipPath:
              "polygon(5% 0, 94% 0, 100% 9%, 100% 100%, 0 100%, 0 10%)",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={banners[currentIndex]}
                alt={`Suzuki Hero ${locationName}`}
                fill
                priority
                quality={88}
                className="object-cover opacity-70 contrast-110 saturate-75"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-black/5" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_44%,rgba(220,38,38,0.12)_45%,transparent_48%)]" />
          <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-red-600/60 via-white/25 to-transparent" />

          <div className="absolute left-8 top-8 flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/75">
              Suzuki Visual Area
            </span>
          </div>
        </div>

        <div className="absolute right-12 top-[18%] z-20 border border-red-600/30 bg-black/65 px-8 py-6 backdrop-blur-md">
          <p className="text-xl font-black uppercase tracking-widest text-red-500">
            Suzuki
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
            Built for more
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex min-h-[calc(100vh-80px)] w-full items-center lg:pb-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          {/* MOBILE VISUAL CARD */}
          <div className="order-first lg:hidden">
            <div className="relative mb-8 h-[300px] overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={banners[currentIndex]}
                    alt={`Suzuki Hero ${locationName}`}
                    fill
                    priority
                    quality={88}
                    className="object-cover opacity-75 contrast-110 saturate-75"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-red-600/35 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/75">
                  Suzuki Visual
                </span>
                <span className="text-xs font-black text-red-500">
                  0{currentIndex + 1} / 03
                </span>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 lg:-translate-y-4 xl:-translate-y-8">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/45 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
              </span>

              <span className="text-[10px] font-bank-gothic uppercase tracking-[0.24em] text-white/75">
                Layanan Penjualan Terpercaya
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl text-[2.55rem] font-bank-gothic uppercase leading-[1.08] tracking-[-0.04em] text-white sm:text-[3.25rem] lg:text-[3.9rem] xl:text-[4.15rem]"
            >
              {cityName
                ? `Dealer Resmi Mobil Suzuki ${cityName}`
                : "Dealer Resmi Mobil Suzuki Jogja"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-red-500 sm:text-sm"
            >
              Pusat Promo & Harga Terbaru
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-white/35" />
              Proses Kredit Mudah
            </motion.h2>

            {/* DESKRIPSI: Disembunyikan di HP, dimunculkan di layar sm ke atas */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-6 hidden sm:block max-w-xl text-sm font-medium leading-8 text-gray-300 sm:text-base"
            >
              Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan
              mobil impian dengan penawaran harga paling kompetitif di wilayah{" "}
              {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon
              eksklusif bulanan, serta layanan purna jual yang terjamin
              kualitasnya bersama{" "}
              <strong className="text-white">Yusuf Suzuki</strong>.
            </motion.p>

            {/* Margin tombol disesuaikan untuk HP agar jaraknya pas saat teks hilang */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-8 sm:mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-red-500 bg-red-600 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(220,38,38,0.25)] transition-all hover:-translate-y-0.5 hover:bg-red-700 sm:w-auto"
              >
                <MessageCircle size={16} />
                Chat Sekarang
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/test-drive"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-black/45 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500 hover:bg-white/[0.03] sm:w-auto"
              >
                <CalendarCheck size={16} />
                Test Drive
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/mobil"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-6 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-white/75 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500 hover:text-white sm:w-auto"
              >
                <CarFront size={16} />
                Lihat Katalog
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* CENTERED TRUST BADGES */}
          <div className="relative z-30 mt-4 lg:col-span-12 lg:mt-10">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
                {trustBadges.map((badge) => (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="group relative min-h-[142px] overflow-hidden border border-white/10 bg-black/68 p-5 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:border-red-600/65 hover:bg-black/85"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600/70 via-white/20 to-transparent opacity-70" />

                    <div className="mb-4 inline-flex border border-white/10 bg-[#0b0d10] p-2.5 transition-colors group-hover:border-red-600/50">
                      <badge.icon
                        size={20}
                        className="text-red-500"
                        strokeWidth={2.2}
                      />
                    </div>

                    <h3 className="text-[11px] font-black uppercase leading-[1.45] tracking-[0.1em] text-white transition-colors group-hover:text-red-400">
                      {badge.title}
                    </h3>

                    <p className="mt-2 text-[10px] font-semibold uppercase leading-[1.6] tracking-[0.06em] text-gray-400">
                      {badge.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BADGES SECTION - DIHAPUS KARENA SUDAH ADA DI ATAS (CENTERED TRUST BADGES) */}
      
      {/* SLIDER CONTROL */}
      <div className="absolute bottom-6 right-4 z-40 flex items-center gap-4 sm:right-8">
        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
            0{currentIndex + 1}
          </span>

          <div className="h-px w-28 bg-white/15">
            <div
              className="h-px bg-red-600 transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / banners.length) * 100}%`,
              }}
            />
          </div>

          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            03
          </span>
        </div>

        <button
          type="button"
          onClick={() => paginate(-1)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:text-red-500"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={() => paginate(1)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:text-red-500"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* SCROLL HINT */}
      <div className="absolute bottom-6 left-4 z-40 hidden items-center gap-3 md:flex lg:left-8">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">
          Discover More
        </span>

        <div className="grid h-7 w-7 place-items-center border border-white/15 bg-black/60">
          <ChevronDown
            className="animate-bounce text-red-500"
            size={14}
            strokeWidth={3}
          />
        </div>
      </div>
    </section>
  );
}