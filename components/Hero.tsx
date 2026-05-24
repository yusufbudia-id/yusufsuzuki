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

// --- GAMBAR BACKGROUND/MOBIL (Sesuai Konsep Dark/Red Suzuki) ---
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
    iconColor: "text-red-500", // Diubah ke merah untuk aksen
    hoverContainer: "hover:border-red-600 hover:bg-black/50",
    hoverIconBox: "group-hover:border-red-600/50",
    hoverTitle: "group-hover:text-red-500",
    activeBorder: "border-red-600",
  },
  {
    id: 2,
    title: "Garansi Baterai 8 Thn",
    desc: "Lithium-Ion s/d 160.000 KM",
    icon: BatteryCharging,
    iconColor: "text-red-500",
    hoverContainer: "hover:border-red-600 hover:bg-black/50",
    hoverIconBox: "group-hover:border-red-600/50",
    hoverTitle: "group-hover:text-red-500",
    activeBorder: "border-red-600",
  },
  {
    id: 3,
    title: "Smart Hybrid Vehicle",
    desc: "Teknologi ISG Hemat Energi",
    icon: Cpu,
    iconColor: "text-red-500",
    hoverContainer: "hover:border-red-600 hover:bg-black/50",
    hoverIconBox: "group-hover:border-red-600/50",
    hoverTitle: "group-hover:text-red-500",
    activeBorder: "border-red-600",
  },
  {
    id: 4,
    title: "Gratis Servis Berkala",
    desc: "Jasa & Suku Cadang s/d 50.000 KM",
    icon: Wrench,
    iconColor: "text-red-500",
    hoverContainer: "hover:border-red-600 hover:bg-black/50",
    hoverIconBox: "group-hover:border-red-600/50",
    hoverTitle: "group-hover:text-red-500",
    activeBorder: "border-red-600",
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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-start pt-16 md:pt-20 bg-[#0a0a0a] overflow-hidden font-manrope">
      
      {/* ========================================================= */}
      {/* 1. BACKGROUND GEOMETRIS & GAMBAR MOBIL (DESAIN BARU)      */}
      {/* ========================================================= */}
      
      {/* A. Grid Garis Tipis (Technical Grid) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* B. Aksen Geometris Sudut Kanan Atas */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] border-l border-b border-red-600/20 bg-gradient-to-bl from-red-900/10 to-transparent z-0 pointer-events-none transform translate-x-10 -translate-y-10 rotate-12" />

      {/* C. Kotak Area Gambar Mobil (Kanan) */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-10 overflow-hidden">
        {/* Sudut potong diagonal ala technical UI */}
        <div className="absolute inset-0 bg-[#0a0a0a]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
          
          {/* Slider Mobil */}
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
                alt={`Suzuki Premium Hero ${cityName ? cityName : "Jogja"}`}
                fill
                priority
                quality={90}
                className="object-cover object-center pointer-events-none mix-blend-lighten" // Efek cinematic blending
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Overlay Asap / Vignette pada gambar */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
          
          {/* Garis Merah Vertikal Pembatas (Kiri gambar) */}
          <div className="absolute top-0 bottom-0 left-[15%] w-px bg-red-600/50 shadow-[0_0_10px_rgba(220,38,38,0.8)] z-20 hidden lg:block" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. KONTEN UTAMA (KIRI TETAP SAMA, STYLING DIPERBARUI)     */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full">
            
            {/* --- KOLOM KIRI (Headline & Tombol) --- */}
            <div className="lg:col-span-6 flex flex-col items-start text-left z-30">
              
              <div className="flex flex-wrap gap-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 border-l-2 border-red-600 px-4 py-2 bg-black/40 backdrop-blur-md"
                >
                  <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
                  </div>
                  <span className="tracking-[0.2em] uppercase text-[10px] font-bold text-gray-300">
                    Layanan Penjualan Terpercaya
                  </span>
                </motion.div>
              </div>

              {/* Teks persis sama seperti sebelumnya */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] mb-5 tracking-tighter uppercase"
              >
                {cityName 
                  ? `Dealer Resmi Mobil Suzuki ${cityName}` 
                  : "Dealer Suzuki Jogja Resmi Terpercaya"}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base font-bold text-red-500 mb-6 tracking-[0.1em] uppercase flex items-center gap-3"
              >
                Pusat Promo & Harga Terbaru 
                <span className="w-1.5 h-1.5 bg-gray-500 rotate-45 inline-block" /> 
                Proses Kredit Mudah
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 font-medium text-sm sm:text-base max-w-lg leading-relaxed mb-10"
              >
                Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif di wilayah {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon eksklusif bulanan, serta layanan purna jual yang terjamin kualitasnya bersama <strong className="text-white">Yusuf Suzuki</strong>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 w-full"
              >
                {/* Tombol dengan style kotak / boxy solid */}
                <a
                  href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white hover:bg-red-700 font-bold py-4 px-8 transition-colors uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-none border border-red-500 shadow-[0_4px_20px_rgba(220,38,38,0.2)]"
                >
                  <MessageCircle size={16} />
                  Chat Sekarang
                </a>

                {/* Tombol dengan style kotak / boxy outline */}
                <Link 
                  href="/test-drive" 
                  className="bg-black/50 backdrop-blur-md text-white border border-gray-600 hover:border-white font-bold py-4 px-8 transition-all uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-none"
                >
                  <CalendarCheck size={16} />
                  Test Drive
                </Link>

                <Link 
                  href="/mobil" 
                  className="text-gray-400 hover:text-white font-bold py-4 px-2 transition-colors uppercase tracking-[0.1em] text-[10px] inline-flex items-center justify-center gap-2 w-full sm:w-auto group mt-2 sm:mt-0"
                >
                  Lihat Katalog
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* --- KOLOM KANAN (BADGES - STYLING BOXY & GEOMETRIC) --- */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 lg:col-start-9 w-full flex flex-col mt-10 lg:mt-0 z-30"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-3">
                <div className="w-1.5 h-1.5 bg-red-600 rotate-45" />
                <h3 className="text-white uppercase tracking-[0.2em] text-[10px] font-bold">
                  Keunggulan Resmi Suzuki
                </h3>
              </div>

              {/* Desktop Boxy Badges */}
              <div className="hidden lg:flex flex-col gap-3">
                {trustBadges.map((badge) => (
                  <div key={badge.id} className={`flex items-center gap-4 bg-black/60 backdrop-blur-md border border-gray-800 p-4 transition-all duration-300 rounded-none group cursor-default ${badge.hoverContainer}`}>
                    <div className={`bg-gray-900/50 p-2.5 border border-gray-700 transition-colors ${badge.hoverIconBox}`}>
                      <badge.icon size={20} className={badge.iconColor} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className={`text-white font-bold text-[11px] uppercase tracking-widest mb-1 transition-colors ${badge.hoverTitle}`}>
                        {badge.title}
                      </h4>
                      <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Badges (Grid Boxy) */}
              <div className="flex lg:hidden flex-col gap-3">
                <div className="grid grid-cols-4 gap-2">
                  {trustBadges.map((badge, idx) => (
                    <button
                      key={badge.id}
                      onClick={() => setActiveMobileBadge(activeMobileBadge === idx ? null : idx)}
                      className={`flex justify-center items-center p-3 bg-black/60 backdrop-blur-md border transition-all duration-300 rounded-none focus:outline-none ${
                        activeMobileBadge === idx ? `${badge.activeBorder} bg-gray-900/80` : 'border-gray-800 hover:border-gray-600'
                      }`}
                    >
                      <div className={`p-1.5 transition-colors`}>
                        <badge.icon size={20} className={badge.iconColor} />
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
                      <div className={`bg-black/80 backdrop-blur-md border p-4 text-center rounded-none border-t-2 ${trustBadges[activeMobileBadge].activeBorder}`}>
                        <h4 className={`font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-1.5 ${trustBadges[activeMobileBadge].iconColor}`}>
                          {trustBadges[activeMobileBadge].title}
                        </h4>
                        <p className="text-gray-400 font-medium text-[10px] sm:text-[11px] uppercase tracking-wider">
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
      </div>

      {/* ========================================================= */}
      {/* 3. NAVIGASI BAWAH (Kotak Geometris)                       */}
      {/* ========================================================= */}
      <div className="absolute bottom-0 left-0 w-full z-30 border-t border-gray-800/50 bg-black/20 backdrop-blur-sm hidden md:flex items-center justify-between px-8 py-4">
        
        {/* Indikator Slider */}
        <div className="flex gap-1.5">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-8 bg-red-600" : "w-4 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Discover More</span>
          <div className="border border-gray-700 p-1 flex items-center justify-center">
            <ChevronDown className="text-red-500 animate-bounce" size={14} strokeWidth={3} />
          </div>
        </div>
      </div>
      
    </section>
  );
}