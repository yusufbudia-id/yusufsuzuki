"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CalendarCheck, ArrowRight } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

const banners = [
  "/hero/banner-1.jpg", 
  "/hero/banner-2.jpg", 
  "/hero/banner-3.jpg", 
];

export default function Hero({ cityName }: { cityName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const waMessage = cityName 
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-16 md:pt-20 bg-[#050B14] overflow-hidden">
      
      {/* ======================= */}
      {/* BAGIAN 1: BANNER SLIDER */}
      {/* ======================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-gray-900 z-10 overflow-hidden shadow-xl">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={banners[currentIndex]}
              alt={`Promo Mobil Suzuki ${cityName ? cityName : "Jogja"}`}
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Indikator Slider */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 px-3 py-2 backdrop-blur-sm">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Garis Aksen Bawah Banner */}
      <div className="w-full h-1.5 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-20 relative" />

      {/* ============================= */}
      {/* BAGIAN 2: KONTEN TEKS & TOMBOL */}
      {/* ============================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full flex-1 flex flex-col justify-start">
        
        {/* Tekstur Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

        <div className="flex flex-col items-start text-left max-w-2xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 mb-5 bg-white/5 backdrop-blur-sm"
          >
            <div className="h-1.5 w-1.5 bg-blue-500 rounded-none"></div>
            <span className="tracking-[0.15em] uppercase text-[11px] font-semibold text-gray-300">
              Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 tracking-tight"
          >
            Temukan Suzuki Impian Anda di {cityName ? cityName : "Jogja"}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg sm:text-xl font-medium text-blue-400 mb-5 tracking-wide"
          >
            Dealer Resmi &bull; Promo Terbaru &bull; Proses Kredit Mudah
          </motion.p>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-normal text-sm sm:text-base max-w-xl leading-relaxed mb-10"
          >
            Dapatkan penawaran harga terbaik, diskon eksklusif, serta kemudahan proses pembelian mobil baru Anda bersama <strong className="text-gray-200">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA Buttons */}
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
      </div>
    </section>
  );
}