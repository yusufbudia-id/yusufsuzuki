"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, CalendarCheck, Award, ThumbsUp, ArrowRight } from "lucide-react";
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

        {/* Indikator Slider - Clean & Sharp */}
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

      {/* Garis Aksen Bawah Banner - Identitas Suzuki (Biru & Merah) */}
      <div className="w-full h-1.5 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-20 relative" />

      {/* ============================= */}
      {/* BAGIAN 2: KONTEN TEKS & TOMBOL */}
      {/* ============================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-1 flex flex-col justify-start">
        
        {/* Tekstur Background Tipis (Navy pattern, bukan neon) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

        <div className="flex flex-col items-center text-center">
          
          {/* Badge: Minimalis dengan warna Suzuki Blue */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-white/20 px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm"
          >
            <div className="h-1.5 w-1.5 bg-blue-500 rounded-none"></div>
            <span className="tracking-[0.15em] uppercase text-xs font-semibold text-gray-300">
              Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
            </span>
          </motion.div>

          {/* Heading Utama: Bold tapi enak dibaca (Natural Case) */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight"
          >
            Temukan Suzuki Impian Anda di {cityName ? cityName : "Jogja"}
          </motion.h1>

          {/* Subheading: Medium weight, sebagai hook cepat */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl sm:text-2xl font-medium text-blue-400 mb-6 tracking-wide"
          >
            Dealer Resmi &bull; Promo Terbaru &bull; Proses Kredit Mudah
          </motion.p>

          {/* Body Text: Lebih soft, abu-abu, dan tidak berebut fokus */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-normal text-base sm:text-lg max-w-2xl leading-relaxed mb-12"
          >
            Dapatkan penawaran harga terbaik, diskon eksklusif, serta kemudahan proses pembelian mobil baru Anda bersama <strong className="text-gray-200">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA Buttons: Hierarchy Jelas (Primary, Secondary, Tertiary) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
          >
            {/* 1. PRIMARY: Hijau Solid (The Winner) */}
            <a
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black hover:bg-[#1EBE5D] font-bold py-4 px-8 transition-colors uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
            >
              <MessageCircle size={18} />
              Chat Sekarang
            </a>

            {/* 2. SECONDARY: Outline Test Drive */}
            <Link 
              href="/test-drive" 
              className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-black font-semibold py-4 px-8 transition-colors uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
            >
              <CalendarCheck size={18} />
              Test Drive
            </Link>

            {/* 3. TERTIARY: Ghost Button / Text Link (Lebih subtle) */}
            <Link 
              href="/mobil" 
              className="text-gray-400 hover:text-white font-medium py-4 px-4 sm:px-2 transition-colors text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto group mt-2 sm:mt-0"
            >
              Lihat Katalog
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats Section: Diberi konteks dan icon, spacing lebih premium (mt-24) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 w-full max-w-4xl border-t border-white/10 pt-12"
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center sm:border-r border-white/10">
              <Car className="text-gray-500 mb-3" size={28} strokeWidth={1.5} />
              <p className="text-4xl font-bold text-white mb-1">500+</p>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">Mobil Terjual</p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center sm:border-r border-white/10">
              <Award className="text-gray-500 mb-3" size={28} strokeWidth={1.5} />
              <p className="text-4xl font-bold text-white mb-1">10+ <span className="text-xl font-normal text-gray-500 uppercase tracking-wide">Tahun</span></p>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">Pengalaman</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <ThumbsUp className="text-gray-500 mb-3" size={28} strokeWidth={1.5} />
              <p className="text-4xl font-bold text-white mb-1">98%</p>
              <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">Pelanggan Puas</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}