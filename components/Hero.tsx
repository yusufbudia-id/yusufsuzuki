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
  TrendingUp
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

// VARIANT ANIMASI UNTUK SLIDER (Kiri / Kanan)
const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
  })
};

export default function Hero({ cityName }: { cityName?: string }) {
  // Tambahan state `direction` untuk mendeteksi arah gesekan
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeMobileBadge, setActiveMobileBadge] = useState<number | null>(null);

  const waMessage = cityName 
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  // FUNGSI UNTUK PINDAH SLIDE
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-16 md:pt-20 bg-[#050B14] overflow-hidden">
      
      {/* ======================= */}
      {/* BAGIAN 1: BANNER SLIDER */}
      {/* ======================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-gray-900 z-20 overflow-hidden shadow-xl border-b border-white/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            // --- FITUR DRAG / SWIPE DITAMBAHKAN DI SINI ---
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset }) => {
              const swipeThreshold = 50; // Jarak minimal gesekan agar slide berpindah
              if (offset.x < -swipeThreshold) {
                paginate(1); // Geser ke kiri -> Slide Selanjutnya
              } else if (offset.x > swipeThreshold) {
                paginate(-1); // Geser ke kanan -> Slide Sebelumnya
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={banners[currentIndex]}
              alt={`Promo Mobil Suzuki ${cityName ? cityName : "Jogja"}`}
              fill
              priority
              quality={90}
              className="object-cover object-center pointer-events-none" // pointer-events-none agar tidak ganggu drag
            />
          </motion.div>
        </AnimatePresence>

        {/* Indikator Titik (Bullets) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/40 px-3 py-2 backdrop-blur-sm">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-30 relative" />

      {/* ============================= */}
      {/* BAGIAN 2: KONTEN BAWAH BERTEKSTUR */}
      {/* ============================= */}
      <div className="relative w-full flex-1 flex flex-col justify-start">
        
        {/* TEKSTUR BACKGROUND LEBIH TEBAL */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none z-0 mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14] pointer-events-none z-0 opacity-80" />

        {/* CONTAINER KONTEN */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full">
            
            {/* --- KOLOM KIRI --- */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div className="flex flex-wrap gap-3 mb-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 border border-white/20 px-3 py-1.5 bg-white/5 backdrop-blur-sm"
                >
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  </div>
                  <span className="tracking-[0.15em] uppercase text-[11px] font-semibold text-gray-300">
                    Layanan Penjualan Terpercaya
                  </span>
                </motion.div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 tracking-tight uppercase"
              >
                Dealer Resmi Mobil Suzuki {cityName ? cityName : "Jogja"}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg sm:text-xl font-medium text-white mb-5 tracking-wide"
              >
                Pusat Promo & Harga Terbaru &bull; Proses Kredit Mudah
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 font-normal text-sm sm:text-base max-w-xl leading-relaxed mb-10"
              >
                Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif, diskon eksklusif bulanan, serta layanan purna jual yang terjamin kualitasnya bersama <strong className="text-gray-200">Yusuf Suzuki</strong>.
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
                  className="bg-[#25D366] text-black hover:bg-[#1EBE5D] font-bold py-3.5 px-7 transition-colors uppercase tracking-wider text-xs sm:text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
                >
                  <MessageCircle size={18} />
                  Chat Sekarang
                </a>

                <Link 
                  href="/test-drive" 
                  className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-black font-semibold py-3.5 px-7 transition-colors uppercase tracking-wider text-xs sm:text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
                >
                  <CalendarCheck size={18} />
                  Test Drive
                </Link>

                <Link 
                  href="/mobil" 
                  className="text-gray-400 hover:text-white font-medium py-3.5 px-4 sm:px-2 transition-colors text-xs sm:text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto group mt-1 sm:mt-0"
                >
                  Lihat Katalog
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* --- KOLOM KANAN --- */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 lg:col-start-8 w-full flex flex-col mt-2 lg:mt-0"
            >
              <div className="flex items-center gap-2 mb-4 lg:mb-5 border-b border-white/10 pb-3">
                <ShieldCheck className="text-gray-400" size={18} />
                <h3 className="text-gray-300 uppercase tracking-widest text-[10px] font-bold">
                  Keunggulan Resmi Suzuki
                </h3>
              </div>

              {/* Desktop */}
              <div className="hidden lg:flex flex-col gap-2.5">
                {trustBadges.map((badge) => (
                  <div key={badge.id} className={`flex items-center gap-4 bg-[#050B14]/60 backdrop-blur-sm border border-white/10 p-3.5 transition-all duration-300 rounded-none group cursor-default ${badge.hoverContainer}`}>
                    <div className={`bg-[#050B14] p-2 border border-white/10 transition-colors ${badge.hoverIconBox}`}>
                      <badge.icon size={22} className={badge.iconColor} />
                    </div>
                    <div>
                      <h4 className={`text-white font-bold text-xs uppercase tracking-wide mb-0.5 transition-colors ${badge.hoverTitle}`}>
                        {badge.title}
                      </h4>
                      <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile */}
              <div className="flex lg:hidden flex-col gap-3">
                <div className="grid grid-cols-4 gap-2">
                  {trustBadges.map((badge, idx) => (
                    <button
                      key={badge.id}
                      onClick={() => setActiveMobileBadge(activeMobileBadge === idx ? null : idx)}
                      className={`flex justify-center items-center p-3 bg-white/5 border transition-all duration-300 rounded-none focus:outline-none ${
                        activeMobileBadge === idx ? `${badge.activeBorder} bg-white/10` : 'border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className={`bg-[#050B14] p-1.5 border transition-colors ${
                        activeMobileBadge === idx ? badge.activeBorder : 'border-white/10'
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
                      <div className={`bg-[#050B14]/80 backdrop-blur-sm border p-4 text-center rounded-none border-t-2 ${trustBadges[activeMobileBadge].activeBorder}`}>
                        <h4 className={`font-bold text-xs sm:text-sm uppercase tracking-wide mb-1 ${trustBadges[activeMobileBadge].iconColor}`}>
                          {trustBadges[activeMobileBadge].title}
                        </h4>
                        <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
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
    </section>
  );
}