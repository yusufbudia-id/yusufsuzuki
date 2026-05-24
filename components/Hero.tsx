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
    title: "Beli Suzuki Pasti Untung",
    desc: "Harga Terbaik & Nilai Jual Tinggi",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Garansi Baterai 8 Thn",
    desc: "Lithium-Ion s/d 160.000 KM",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "Smart Hybrid Vehicle",
    desc: "Teknologi ISG Hemat Energi",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Gratis Servis Berkala",
    desc: "Jasa & Suku Cadang s/d 50.000 KM",
    icon: Wrench,
  },
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.05,
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
    scale: 0.95,
  }),
};

export default function Hero({ cityName }: { cityName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-16 md:pt-20 font-manrope text-white">
      
      {/* ========================================================= */}
      {/* 1. DARK PREMIUM BACKGROUND (GRID & GLOW)                  */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_40%,rgba(220,38,38,0.08),transparent_40%),linear-gradient(135deg,#050505_0%,#0a0a0a_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:16px_16px] opacity-[0.05]" />

      {/* ========================================================= */}
      {/* 2. RIGHT VISUAL AREA (SKEWED GEOMETRIC CAR CUTOUT)        */}
      {/* ========================================================= */}
      {/* Container ini dibuat miring (skew) untuk menghasilkan garis diagonal yang tajam */}
      <div className="absolute right-[-15%] top-0 z-0 h-full w-[115%] md:right-[-10%] md:w-[75%] lg:w-[65%] transform md:-skew-x-[12deg] overflow-hidden border-l-[4px] border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.15)]">
        
        {/* Konten di dalamnya di-unskew agar gambar mobil tetap proporsional */}
        <div className="absolute inset-0 transform md:skew-x-[12deg] origin-center scale-[1.2]">
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
                quality={90}
                className="object-cover object-center pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Gradient overlay di atas gambar mobil agar menyatu dengan background hitam */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. LEFT MAIN CONTENT (TEXT & BUTTONS - UNCHANGED)         */}
      {/* ========================================================= */}
      <div className="relative z-20 flex min-h-screen w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-[180px] md:pb-[120px] pt-10 lg:pt-0">
          
          <div className="w-full max-w-2xl lg:w-[60%]">
            
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/40 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.26em] text-white/80">
                Layanan Penjualan Terpercaya
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl text-4xl sm:text-5xl lg:text-[4.2rem] font-black uppercase leading-[1.05] tracking-tight text-white mb-5"
            >
              {cityName
                ? `Dealer Resmi Mobil Suzuki ${cityName}`
                : "Dealer Suzuki Jogja Resmi Terpercaya"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-red-500 mb-6"
            >
              Pusat Promo & Harga Terbaru
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-white/35" />
              Proses Kredit Mudah
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-gray-400 mb-10"
            >
              Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif di wilayah {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon eksklusif bulanan, serta layanan purna jual yang terjamin kualitasnya bersama <strong className="text-white">Yusuf Suzuki</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full"
            >
              {/* Button Solid Red */}
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-red-500 bg-red-600 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all hover:-translate-y-0.5 hover:bg-red-700"
              >
                Chat Sekarang
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              {/* Button Transparent Boxy */}
              <Link
                href="/test-drive"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/40"
              >
                <CalendarCheck size={16} />
                Test Drive
              </Link>

              {/* Text Link */}
              <Link
                href="/mobil"
                className="group inline-flex w-full sm:w-auto mt-2 sm:mt-0 items-center justify-center gap-2 px-2 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-gray-400 transition-colors hover:text-white"
              >
                Lihat Katalog
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-red-500" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM BAR UI (TRUST BADGES & SLIDER CONTROLS)         */}
      {/* ========================================================= */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col md:flex-row items-stretch border-t border-white/10 bg-black/80 backdrop-blur-xl">
        
        {/* A. Scroll Indicator (Desktop Only) */}
        <div className="hidden md:flex w-24 flex-col items-center justify-center border-r border-white/10 py-6">
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-2">Scroll</span>
          <div className="border border-white/15 bg-black p-1">
            <ChevronDown className="animate-bounce text-red-500" size={14} />
          </div>
        </div>

        {/* B. Trust Badges Grid */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="group relative flex flex-col items-start justify-center border-r border-b md:border-b-0 border-white/5 p-5 md:p-6 transition-colors hover:bg-white/5"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <badge.icon size={22} className="text-red-500 mb-3" strokeWidth={2} />
              <h3 className="text-[10px] font-black uppercase leading-snug tracking-[0.12em] text-white mb-1">
                {badge.title}
              </h3>
              <p className="text-[9px] font-bold uppercase leading-snug tracking-[0.08em] text-gray-500">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* C. Slider Controls (Desktop Only) */}
        <div className="hidden lg:flex w-auto items-center justify-center gap-8 border-l border-white/10 px-8">
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-black text-red-500">0{currentIndex + 1}</span>
            <div className="h-[2px] w-16 bg-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / banners.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-black text-white/40">03</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              className="border border-white/15 bg-black p-2.5 text-white transition-colors hover:border-red-600 hover:text-red-500"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="border border-white/15 bg-black p-2.5 text-white transition-colors hover:border-red-600 hover:text-red-500"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
      
    </section>
  );
}