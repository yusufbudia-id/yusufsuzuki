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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-16 md:pt-20 font-manrope text-white">
      
      {/* ========================================================= */}
      {/* 1. DARK PREMIUM BACKGROUND & TECH GRIDS                     */}
      {/* ========================================================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(220,38,38,0.12),transparent_28%),radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.04),transparent_26%),linear-gradient(135deg,#050505_0%,#0a0c0f_45%,#020202_100%)] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:18px_18px] opacity-[0.06] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/40 z-0" />

      {/* THIN TECHNICAL LINES (Animasi Masuk) */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <div className="pointer-events-none absolute left-6 top-8 z-10 hidden h-[calc(100%-96px)] w-px bg-red-600/50 md:block" />
        <div className="pointer-events-none absolute left-6 top-8 z-10 hidden w-24 border-t border-red-600/50 md:block" />
        <div className="pointer-events-none absolute right-12 top-28 z-10 hidden h-px w-72 bg-gradient-to-r from-transparent via-red-600/40 to-transparent lg:block" />
        <div className="pointer-events-none absolute bottom-16 left-10 z-10 hidden h-px w-[48%] bg-gradient-to-r from-red-600/45 via-white/10 to-transparent lg:block" />
      </motion.div>

      {/* ANGULAR LARGE FRAMES */}
      <div
        className="pointer-events-none absolute left-4 top-28 z-10 hidden h-[590px] w-[58%] border border-white/10 lg:block"
        style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0 100%, 0 8%)" }}
      />
      <div
        className="pointer-events-none absolute right-8 top-36 z-10 hidden h-[520px] w-[50%] border border-red-600/25 bg-black/20 lg:block backdrop-blur-[2px]"
        style={{ clipPath: "polygon(8% 0, 92% 0, 100% 8%, 100% 100%, 0 100%, 0 10%)" }}
      />

      {/* ========================================================= */}
      {/* 2. RIGHT VISUAL AREA (WIRE-FRAME & CAR SILHOUETTE)          */}
      {/* ========================================================= */}
      <div className="absolute inset-y-0 right-0 z-10 hidden w-[58%] lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-[#050505]" />

        {/* Kotak Slider Gambar Placeholder */}
        <div
          className="absolute right-10 top-[18%] h-[48%] w-[72%] overflow-hidden border border-white/10 bg-[#0c0f12]/80 shadow-2xl"
          style={{ clipPath: "polygon(7% 0, 93% 0, 100% 10%, 100% 100%, 0 100%, 0 11%)" }}
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
              {/* Gambar aslinya diredupkan jadi abu-abu agar siluet merahnya menonjol */}
              <Image
                src={banners[currentIndex]}
                alt={`Suzuki Hero ${cityName ? cityName : "Jogja"}`}
                fill
                priority
                quality={80}
                className="object-cover opacity-20 grayscale contrast-125 mix-blend-luminosity"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/40" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(220,38,38,0.16)_43%,transparent_46%)]" />
          <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-red-600/70 via-white/20 to-transparent" />
          <div className="absolute left-8 top-8 flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/70">Suzuki Visual Area</span>
          </div>
        </div>

        {/* Siluet Mobil Merah Bersinar (Glowing Car Wireframe) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-[15%] right-[5%] h-[30%] w-[74%]"
        >
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-red-600/15 blur-[40px]" />
          <div
            className="absolute bottom-8 left-4 h-28 w-[82%] border border-red-500/50 bg-gradient-to-r from-red-600/30 via-red-500/10 to-transparent shadow-[0_0_50px_rgba(220,38,38,0.25)]"
            style={{ clipPath: "polygon(7% 22%, 22% 0, 76% 0, 94% 28%, 100% 64%, 96% 100%, 5% 100%, 0 62%)" }}
          />
          {/* Roda Kiri */}
          <div className="absolute bottom-5 left-[14%] h-20 w-20 rounded-full border-[6px] border-red-500/30 bg-[#050505] shadow-[inset_0_0_15px_rgba(220,38,38,0.3)] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-red-500/50" />
          </div>
          {/* Roda Kanan */}
          <div className="absolute bottom-5 right-[18%] h-20 w-20 rounded-full border-[6px] border-red-500/30 bg-[#050505] shadow-[inset_0_0_15px_rgba(220,38,38,0.3)] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-red-500/50" />
          </div>
          {/* Sasis & Aksesoris */}
          <div className="absolute bottom-[72px] left-[18%] h-px w-[62%] bg-red-500/40" />
          <div className="absolute bottom-[96px] left-[35%] h-16 w-[24%] border border-red-500/20 bg-red-900/10" />
        </motion.div>

        {/* Suzuki Mini Brand Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute right-12 top-[18%] z-20 border border-red-600/40 bg-black/80 px-10 py-8 backdrop-blur-md"
          style={{ clipPath: "polygon(10% 0, 90% 0, 100% 14%, 100% 100%, 0 100%, 0 14%)" }}
        >
          <p className="text-2xl font-black uppercase tracking-widest text-red-600">Suzuki</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">Built for more</p>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* 3. MAIN CONTENT (LEFT SIDE)                               */}
      {/* ========================================================= */}
      <div className="relative z-20 flex min-h-[calc(100vh-80px)] w-full items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          
          <div className="lg:col-span-6 z-30">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/60 px-4 py-2 backdrop-blur-md"
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
              className="max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4.6rem]"
            >
              {cityName
                ? `Dealer Resmi Mobil Suzuki ${cityName}`
                : "Dealer Suzuki Jogja Resmi Terpercaya"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-red-500 sm:text-sm"
            >
              Pusat Promo & Harga Terbaru
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gray-600" />
              Proses Kredit Mudah
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-gray-400 sm:text-base"
            >
              Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif di wilayah {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon eksklusif bulanan, serta layanan purna jual yang terjamin kualitasnya bersama <strong className="text-white">Yusuf Suzuki</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-10 flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 border border-red-500 bg-red-600 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)] transition-all hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.4)] sm:w-auto"
              >
                <MessageCircle size={16} />
                Chat Sekarang
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/test-drive"
                className="group inline-flex w-full items-center justify-center gap-3 border border-white/20 bg-black/45 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500 hover:bg-white/5 sm:w-auto"
              >
                <CalendarCheck size={16} />
                Test Drive
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 text-red-500" />
              </Link>

              <Link
                href="/mobil"
                className="group inline-flex w-full items-center justify-center gap-2 px-2 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-gray-400 transition-colors hover:text-white sm:w-auto"
              >
                Lihat Katalog
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL ON MOBILE (Tampil jika layar kecil) */}
          <div className="lg:col-span-6 z-20">
            <div className="relative h-[320px] overflow-hidden border border-white/10 bg-black/50 lg:hidden shadow-2xl">
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
                    quality={80}
                    className="object-cover opacity-35 grayscale contrast-125"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-red-600/40 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/70">Suzuki Visual</span>
                <span className="text-xs font-black text-red-500">0{currentIndex + 1} / 03</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM BADGES (GRID 4 KOLOM)                           */}
      {/* ========================================================= */}
      <div className="relative z-40 mx-auto -mt-10 w-full max-w-7xl px-4 pb-24 sm:px-6 lg:absolute lg:bottom-16 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:px-8 lg:pb-0">
        <div className="grid grid-cols-2 gap-3 lg:max-w-3xl lg:grid-cols-4">
          {trustBadges.map((badge, idx) => (
            <button
              key={badge.id}
              type="button"
              onClick={() => setActiveMobileBadge(activeMobileBadge === idx ? null : idx)}
              className="group relative min-h-[132px] overflow-hidden border border-white/10 bg-[#070707]/80 p-4 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:border-red-600/60 hover:bg-black/90 shadow-lg"
            >
              {/* Garis atas bercahaya saat hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600 via-red-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              
              <div className="mb-4 inline-flex border border-white/10 bg-black p-2.5 transition-colors group-hover:border-red-600/50 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
                <badge.icon size={20} className="text-red-500" strokeWidth={2.2} />
              </div>
              <h3 className="text-[10px] font-black uppercase leading-4 tracking-[0.12em] text-white transition-colors group-hover:text-red-500">
                {badge.title}
              </h3>
              <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.08em] text-gray-500">
                {badge.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. SLIDER CONTROLS & SCROLL HINT                          */}
      {/* ========================================================= */}
      <div className="absolute bottom-6 right-4 z-40 flex items-center gap-4 sm:right-8">
        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-red-500">0{currentIndex + 1}</span>
          <div className="h-px w-28 bg-white/15 overflow-hidden">
            <div
              className="h-px bg-red-600 transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / banners.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">03</span>
        </div>

        <button
          type="button"
          onClick={() => paginate(-1)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-black/80 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:text-red-500 hover:bg-black"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-black/80 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:text-red-500 hover:bg-black"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute bottom-6 left-4 z-40 hidden items-center gap-3 md:flex lg:left-8">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">Discover More</span>
        <div className="grid h-7 w-7 place-items-center border border-white/15 bg-black/80 backdrop-blur-md">
          <ChevronDown className="animate-bounce text-red-500" size={14} strokeWidth={3} />
        </div>
      </div>
      
    </section>
  );
}