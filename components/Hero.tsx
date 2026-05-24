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
  ShieldCheck,
  TrendingUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

const banners = [
  "/hero/banner-1.jpg",
  "/hero/banner-2.jpg",
  "/hero/banner-3.jpg",
];

const trustBadges = [
  {
    id: 1,
    title: "Beli Suzuki Pasti",
    desc: "Harga Terbaik & Jual Tinggi",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Garansi 8 Thn",
    desc: "Baterai Lithium-Ion",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "Smart Hybrid",
    desc: "Teknologi ISG Irit",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Gratis Servis",
    desc: "Jasa & Part 50rb KM",
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

  const waMessage = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

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
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505] pt-20 font-manrope text-white md:pt-24 lg:pt-0">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_40%,rgba(220,38,38,0.08),transparent_40%),linear-gradient(135deg,#050505_0%,#0a0a0a_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />

      {/* --- RIGHT VISUAL AREA (SKEWED CAR CUTOUT - DESKTOP ONLY) --- */}
      <div className="pointer-events-none absolute right-[-15%] top-0 z-0 hidden h-full w-[115%] transform overflow-hidden border-l-[4px] border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.15)] md:right-[-10%] md:block md:w-[75%] md:-skew-x-[12deg] lg:w-[65%]">
        <div className="absolute inset-0 origin-center scale-[1.2] transform md:skew-x-[12deg]">
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
                alt={`Suzuki Hero ${cityName ? cityName : "Jogja"}`}
                fill
                priority
                quality={90}
                className="object-cover object-center grayscale contrast-125 opacity-25 mix-blend-luminosity"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
          
          {/* Glowing Silhouette Decoration */}
          <div className="absolute bottom-[15%] right-[5%] h-[30%] w-[74%]">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-red-600/15 blur-[40px]" />
            <div
              className="absolute bottom-8 left-4 h-28 w-[82%] border border-red-500/50 bg-gradient-to-r from-red-600/30 via-red-500/10 to-transparent shadow-[0_0_50px_rgba(220,38,38,0.25)]"
              style={{ clipPath: "polygon(7% 22%, 22% 0, 76% 0, 94% 28%, 100% 64%, 96% 100%, 5% 100%, 0 62%)" }}
            />
          </div>
        </div>
      </div>

      {/* --- KONTEN UTAMA --- */}
      {/* Gunakan flex-1 agar memenuhi ruang. Pada HP flex-col (mengalir ke bawah), pada desktop justify-center */}
      <div className="relative z-20 flex flex-1 w-full flex-col justify-start lg:justify-center pb-12 lg:pb-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-8">
          
          {/* ====================================================== */}
          {/* 1. BAGIAN GAMBAR HP (PALING ATAS)                        */}
          {/* ====================================================== */}
          <div className="w-full block lg:hidden pt-2">
            <div className="relative h-[220px] sm:h-[300px] w-full overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold) paginate(1);
                    else if (offset.x > swipeThreshold) paginate(-1);
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={banners[currentIndex]}
                    alt={`Suzuki Hero ${cityName ? cityName : "Jogja"}`}
                    fill
                    priority
                    quality={80}
                    className="object-cover opacity-60 mix-blend-luminosity"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse bg-red-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">Suzuki Visual</span>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* 2. BAGIAN TEKS UTAMA                                     */}
          {/* ====================================================== */}
          <div className="w-full lg:col-span-6 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 sm:mb-6 inline-flex self-start items-center gap-2.5 border-l-2 border-red-600 bg-black/40 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                Layanan Penjualan Terpercaya
              </span>
            </motion.div>

            {/* HEADLINE: Diperkecil & Menggunakan font-bank-gothic */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl text-[28px] sm:text-4xl lg:text-[3.4rem] font-bank-gothic uppercase leading-[1.1] tracking-tight text-white mb-4 lg:mb-5"
            >
              {cityName
                ? `Dealer Resmi Mobil Suzuki ${cityName}`
                : "Dealer Suzuki Jogja Resmi Terpercaya"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-red-500 mb-4 sm:mb-6"
            >
              Pusat Promo & Harga 
              <span className="inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rotate-45 bg-white/35" />
              Kredit Mudah
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="max-w-xl text-xs sm:text-sm lg:text-base font-medium leading-relaxed text-gray-400 mb-8 lg:mb-10"
            >
              Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif di wilayah {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon eksklusif bulanan, serta layanan purna jual yang terjamin kualitasnya bersama <strong className="text-white">Yusuf Suzuki</strong>.
            </motion.p>

            {/* TOMBOL */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
            >
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-red-500 bg-red-600 px-6 sm:px-8 py-3.5 sm:py-4 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all hover:-translate-y-0.5 hover:bg-red-700"
              >
                <MessageCircle size={15} />
                Chat Sekarang
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/test-drive"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/40"
              >
                <CalendarCheck size={15} />
                Test Drive
              </Link>
            </motion.div>
          </div>

        </div>

        {/* ====================================================== */}
        {/* 3. BOTTOM BADGES (Mengalir normal di HP)                 */}
        {/* ====================================================== */}
        <div className="relative z-30 mx-auto mt-10 lg:mt-0 w-full max-w-7xl px-4 sm:px-6 lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 lg:px-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:max-w-3xl lg:grid-cols-4">
            {trustBadges.map((badge, idx) => (
              <button
                key={badge.id}
                type="button"
                onClick={() => setActiveMobileBadge(activeMobileBadge === idx ? null : idx)}
                className="group relative flex flex-col min-h-[110px] lg:min-h-[120px] overflow-hidden border border-white/10 bg-[#070707]/80 p-3 sm:p-4 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:border-red-600/60 hover:bg-black/90"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-600 via-red-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="mb-2 sm:mb-3 inline-flex border border-white/10 bg-black p-2 transition-colors group-hover:border-red-600/50">
                  <badge.icon size={16} className="text-red-500" strokeWidth={2.2} />
                </div>
                <h3 className="text-[9px] sm:text-[10px] font-black uppercase leading-tight tracking-[0.1em] text-white transition-colors group-hover:text-red-500">
                  {badge.title}
                </h3>
                <p className="mt-1.5 text-[8px] sm:text-[9px] font-bold uppercase leading-tight tracking-wider text-gray-500">
                  {badge.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- DESKTOP SLIDER CONTROLS --- */}
      <div className="absolute bottom-6 right-8 z-40 hidden lg:flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-red-500">0{currentIndex + 1}</span>
          <div className="h-px w-24 bg-white/15 overflow-hidden">
            <div
              className="h-px bg-red-600 transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / banners.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">03</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => paginate(-1)}
            className="border border-white/15 bg-black p-2 text-white transition-colors hover:border-red-600 hover:text-red-500"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="border border-white/15 bg-black p-2 text-white transition-colors hover:border-red-600 hover:text-red-500"
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

    </section>
  );
}