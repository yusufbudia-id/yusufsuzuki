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
  ChevronRight
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
    <section className="relative h-screen min-h-[750px] w-full flex flex-col justify-center bg-black overflow-hidden font-manrope">
      
      {/* ========================================================= */}
      {/* 1. BACKGROUND SLIDER (FULLSCREEN CINEMATIC)               */}
      {/* ========================================================= */}
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
              alt={`Suzuki Premium Hero ${cityName ? cityName : "Jogja"}`}
              fill
              priority
              quality={100}
              className="object-cover object-center md:object-right pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* GRADIENT OVERLAY (Gelap Kiri, Memudar ke Kanan) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent pointer-events-none" />
      
      {/* ========================================================= */}
      {/* 2. KONTEN UTAMA (LAYOUT SEPERTI REFERENSI)                */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col pt-24 pb-16">
        
        <div className="flex-1 flex flex-col lg:flex-row items-end lg:items-center justify-between gap-8 h-full">
          
          {/* --- KOLOM KIRI (Headline & Tombol) --- */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left pt-10 lg:pt-0">
            
            {/* Tag / Label Minimalis */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 border border-white/30 px-3 py-1 bg-white/5 backdrop-blur-sm mb-6"
            >
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              <span className="tracking-[0.2em] uppercase text-[10px] font-bold text-white">
                Layanan Penjualan Terpercaya
              </span>
            </motion.div>

            {/* Headline Asli */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.05] mb-5 tracking-tighter uppercase"
            >
              {cityName 
                ? `Dealer Resmi Mobil Suzuki ${cityName}` 
                : "Dealer Suzuki Jogja Resmi Terpercaya"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm sm:text-base font-bold text-gray-300 mb-6 tracking-[0.1em] uppercase"
            >
              Pusat Promo & Harga Terbaru <span className="text-red-600 mx-2">•</span> Proses Kredit Mudah
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-medium text-sm sm:text-base max-w-lg leading-relaxed mb-10"
            >
              Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan mobil impian dengan penawaran harga paling kompetitif di wilayah {cityName ? cityName : "Daerah Istimewa Yogyakarta"}, diskon eksklusif bulanan, serta layanan purna jual yang terjamin kualitasnya bersama <strong className="text-white">Yusuf Suzuki</strong>.
            </motion.p>

            {/* Tombol Aksi */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white hover:bg-red-700 font-bold py-4 px-8 transition-colors uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-none"
              >
                Chat Sekarang
                <ChevronRight size={16} strokeWidth={3} />
              </a>

              <Link 
                href="/test-drive" 
                className="bg-transparent text-white border border-white hover:bg-white/10 font-bold py-4 px-8 transition-all uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-none"
              >
                <CalendarCheck size={16} />
                Test Drive
              </Link>
            </motion.div>
          </div>

          {/* --- KOLOM KANAN BAWAH (PANEL UI KEUNGGULAN) --- */}
          {/* Mirip dengan kotak panel statistik di sudut kanan referensi */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-[35%] flex flex-col justify-end mt-10 lg:mt-0"
          >
            <div className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 w-full shadow-2xl relative overflow-hidden">
              
              {/* Garis aksen merah tipis di atas panel */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />

              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <h3 className="text-white uppercase tracking-[0.15em] text-xs font-bold">
                  Keunggulan Resmi
                </h3>
                <ShieldCheck className="text-red-500" size={20} />
              </div>

              {/* Grid 2x2 untuk Badges (UI Data Dashboard Style) */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {trustBadges.map((badge) => (
                  <div key={badge.id} className="flex flex-col items-start gap-2">
                    <badge.icon size={20} className="text-red-500" strokeWidth={2} />
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-wider leading-tight mb-1">
                        {badge.title}
                      </h4>
                      <p className="text-gray-400 text-[9px] uppercase tracking-widest leading-tight">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Link bawah panel */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link 
                  href="/mobil" 
                  className="text-gray-300 hover:text-white font-bold uppercase tracking-[0.1em] text-[10px] flex items-center justify-between w-full group"
                >
                  Lihat Katalog Mobil
                  <ArrowRight size={14} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. NAVIGASI BAWAH / SLIDER CONTROLS                       */}
      {/* ========================================================= */}
      <div className="absolute bottom-6 left-0 w-full z-30 flex items-center justify-between px-4 sm:px-8">
        
        {/* Indikator Slider (Kiri Bawah) */}
        <div className="flex gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-8 bg-white" : "w-3 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator (Tengah Bawah) */}
        <div className="hidden md:flex flex-col items-center gap-1 absolute left-1/2 -translate-x-1/2">
          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown className="text-gray-400 animate-bounce" size={16} />
        </div>
      </div>
      
    </section>
  );
}