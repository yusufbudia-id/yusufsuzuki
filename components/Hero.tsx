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
  ChevronDown
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

// --- DAFTAR BANNER HERO FULLSCREEN ---
// Pastikan gambar ini beresolusi tinggi (widescreen/landscape) agar tidak pecah.
const banners = [
  "/hero/xl7-hero.jpg", 
  "/hero/jimny-hero.jpg", // Gambar Jimny yang baru Anda upload
  "/hero/banner-3.jpg",   // Ganti dengan gambar mentahan lain jika ada
];

const trustBadges = [
  {
    id: 1,
    title: "Beli Suzuki Pasti Untung",
    desc: "Harga Terbaik & Nilai Jual Tinggi",
    icon: TrendingUp,
    iconColor: "text-green-400",
    hoverContainer: "hover:border-green-500 hover:bg-white/10",
    hoverIconBox: "group-hover:border-green-500/50",
    hoverTitle: "group-hover:text-green-400",
    activeBorder: "border-green-500",
  },
  {
    id: 2,
    title: "Garansi Baterai 8 Thn",
    desc: "Lithium-Ion s/d 160.000 KM",
    icon: BatteryCharging,
    iconColor: "text-blue-400",
    hoverContainer: "hover:border-suzuki-blue hover:bg-white/10",
    hoverIconBox: "group-hover:border-suzuki-blue/50",
    hoverTitle: "group-hover:text-blue-400",
    activeBorder: "border-suzuki-blue",
  },
  {
    id: 3,
    title: "Smart Hybrid Vehicle",
    desc: "Teknologi ISG Hemat Energi",
    icon: Cpu,
    iconColor: "text-blue-400",
    hoverContainer: "hover:border-suzuki-blue hover:bg-white/10",
    hoverIconBox: "group-hover:border-suzuki-blue/50",
    hoverTitle: "group-hover:text-blue-400",
    activeBorder: "border-suzuki-blue",
  },
  {
    id: 4,
    title: "Gratis Servis Berkala",
    desc: "Jasa & Suku Cadang s/d 50.000 KM",
    icon: Wrench,
    iconColor: "text-red-400",
    hoverContainer: "hover:border-suzuki-red hover:bg-white/10",
    hoverIconBox: "group-hover:border-suzuki-red/50",
    hoverTitle: "group-hover:text-red-400",
    activeBorder: "border-suzuki-red",
  }
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  })
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
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= banners.length) return 0;
      if (nextIndex < 0) return banners.length - 1;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000); // Diperlambat sedikit jadi 6 detik agar pengunjung bisa menikmati foto
    return () => clearInterval(timer);
  }, []);

  return (
    // Menggunakan h-screen agar memenuhi layar penuh
    <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-center overflow-hidden bg-[#050B14]">
      
      {/* ========================================= */}
      {/* 1. BACKGROUND SLIDER (FULL SCREEN) */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0">
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
              if (offset.x < -swipeThreshold) {
                paginate(1);
              } else if (offset.x > swipeThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={banners[currentIndex]}
              alt={`Promo Mobil Suzuki ${cityName ? cityName : "Jogja"}`}
              fill
              priority
              quality={100}
              className="object-cover object-center pointer-events-none" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================= */}
      {/* 2. GRADIENT OVERLAY & TEKSTUR NOISE */}
      {/* ========================================= */}
      {/* Gelap di kiri (untuk teks), memudar ke kanan, tapi bawahnya juga gelap sedikit */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent md:bg-gradient-to-r md:from-[#050B14]/90 md:via-[#050B14]/60 md:to-transparent pointer-events-none" />
      
      {/* Tekstur dots/grid halus untuk kesan premium */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_6px)] pointer-events-none z-10" />

      {/* ========================================= */}
      {/* 3. KONTEN UTAMA MENGAMBANG DI ATAS GAMBAR */}
      {/* ========================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* --- KOLOM KIRI (TEKS & TOMBOL) --- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex flex-wrap gap-3 mb-5 mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 border border-white/20 px-3 py-1.5 bg-black/30 backdrop-blur-md"
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                </div>
                <span className="tracking-[0.15em] uppercase text-[10px] sm:text-[11px] font-bold text-gray-300">
                  Layanan Penjualan Terpercaya
                </span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4 tracking-tighter uppercase"
            >
              {cityName 
                ? `Dealer Resmi Mobil Suzuki ${cityName}` 
                : "Dealer Suzuki Jogja Resmi Terpercaya"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-wide uppercase"
            >
              Pusat Promo & Harga Terbaru &bull; Proses Kredit Mudah
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 font-medium text-sm sm:text-base max-w-lg leading-relaxed mb-10 drop-shadow-md"
            >
              Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif di wilayah {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon eksklusif bulanan, serta layanan purna jual yang terjamin bersama <strong className="text-white">Yusuf Suzuki</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 w-full"
            >
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-black hover:bg-white font-black py-4 px-8 transition-colors uppercase tracking-[0.2em] text-[11px] inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-none shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <MessageCircle size={18} />
                Chat Sekarang
              </a>

              <Link 
                href="/test-drive" 
                className="bg-black/40 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 font-black py-4 px-8 transition-all duration-300 uppercase tracking-[0.2em] text-[11px] inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-none"
              >
                <CalendarCheck size={18} />
                Test Drive
              </Link>
            </motion.div>
          </div>

          {/* --- KOLOM KANAN (BADGES KEUNGGULAN) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 w-full flex flex-col mt-8 lg:mt-0"
          >
            <div className="flex items-center gap-2 mb-4 lg:mb-5 border-b border-white/20 pb-3">
              <ShieldCheck className="text-gray-300" size={18} />
              <h3 className="text-white uppercase tracking-widest text-[10px] font-bold drop-shadow-md">
                Keunggulan Resmi Suzuki
              </h3>
            </div>

            {/* Desktop Badges */}
            <div className="hidden lg:flex flex-col gap-3">
              {trustBadges.map((badge) => (
                <div key={badge.id} className={`flex items-center gap-4 bg-[#050B14]/60 backdrop-blur-md border border-white/20 p-4 transition-all duration-300 rounded-none group cursor-default ${badge.hoverContainer}`}>
                  <div className={`bg-[#050B14] p-2.5 border border-white/20 transition-colors ${badge.hoverIconBox}`}>
                    <badge.icon size={22} className={badge.iconColor} />
                  </div>
                  <div>
                    <h4 className={`text-white font-bold text-[11px] uppercase tracking-wider mb-1 transition-colors ${badge.hoverTitle}`}>
                      {badge.title}
                    </h4>
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Badges (Grid) */}
            <div className="flex lg:hidden flex-col gap-3">
              <div className="grid grid-cols-4 gap-2">
                {trustBadges.map((badge, idx) => (
                  <button
                    key={badge.id}
                    onClick={() => setActiveMobileBadge(activeMobileBadge === idx ? null : idx)}
                    className={`flex justify-center items-center p-3 bg-black/40 backdrop-blur-sm border transition-all duration-300 rounded-none focus:outline-none ${
                      activeMobileBadge === idx ? `${badge.activeBorder} bg-white/20` : 'border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <div className={`bg-[#050B14] p-1.5 border transition-colors ${
                      activeMobileBadge === idx ? badge.activeBorder : 'border-white/20'
                    }`}>
                      <badge.icon size={22} className={badge.iconColor} />
                    </div>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeMobileBadge !== null && (
                  <motion.div
                    key={activeMobileBadge}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className={`bg-[#050B14]/80 backdrop-blur-md border p-4 text-center rounded-none border-t-2 ${trustBadges[activeMobileBadge].activeBorder}`}>
                      <h4 className={`font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-1.5 ${trustBadges[activeMobileBadge].iconColor}`}>
                        {trustBadges[activeMobileBadge].title}
                      </h4>
                      <p className="text-gray-300 font-medium text-[10px] sm:text-[11px] uppercase tracking-widest">
                        {trustBadges[activeMobileBadge].desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 4. NAVIGASI SLIDER (BULLETS) & INDIKATOR SCROLL */}
      {/* ========================================= */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center gap-6">
        {/* Indikator Titik (Bullets) */}
        <div className="flex gap-2 bg-black/30 px-4 py-2 backdrop-blur-md rounded-full">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Indikator Scroll */}
        <motion.div 
          className="flex flex-col items-center gap-1 opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-[9px] text-white uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown className="text-white" size={16} />
        </motion.div>
      </div>
      
    </section>
  );
}