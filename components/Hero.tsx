"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, CalendarCheck } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-start pt-16 md:pt-20 bg-[#03070c] overflow-hidden">
      
      {/* ======================= */}
      {/* BAGIAN 1: BANNER SLIDER */}
      {/* ======================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-gray-900 z-10 overflow-hidden shadow-2xl">
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-black/30 px-4 py-2 backdrop-blur-sm border border-white/10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-10 bg-white" : "w-4 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Garis Aksen Bawah Banner */}
      <div className="w-full h-1.5 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-20 relative shadow-[0_5px_20px_rgba(0,0,0,0.5)]" />

      {/* ============================= */}
      {/* BAGIAN 2: KONTEN TEKS & TOMBOL */}
      {/* ============================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1 flex flex-col justify-center">
        
        {/* TEKSTUR BACKGROUND GRID: Ini yang bikin desain tidak flat! */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />
        {/* Gradient penutup grid agar atas/bawahnya halus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070c] via-transparent to-[#03070c] pointer-events-none -z-10" />

        <div className="flex flex-col items-center text-center">
          
          {/* Badge: Kontras diperbaiki */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-cyan-500/50 px-4 py-1.5 mb-8 bg-cyan-950/20 backdrop-blur-sm"
          >
            <div className="h-1.5 w-1.5 bg-cyan-400"></div>
            <span className="tracking-[0.2em] uppercase text-xs font-semibold text-cyan-300">
              Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 uppercase tracking-wider"
          >
            Dealer Resmi Mobil Suzuki {cityName ? cityName : "Jogja"}
            <br />
            {/* Warna Subheading diterangkan (text-gray-300) agar tidak terlalu gelap */}
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mt-2 block tracking-wide">
              Pusat Promo & Harga Terbaru
            </span>
          </motion.h1>

          {/* Subheading: Warna diterangkan dan font sedikit lebih tebal (font-medium) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-medium text-base sm:text-lg max-w-3xl leading-relaxed mb-10 tracking-wide"
          >
            Sebagai dealer resmi Suzuki di wilayah {cityName ? cityName : "Jogja"}, kami memberikan solusi pembelian mobil impian Anda dengan penawaran harga terbaik, promo eksklusif, serta kemudahan proses kredit bersama <strong className="text-white">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA Buttons: Keseimbangan visual diperbaiki */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
          >
            {/* Tombol Lihat Mobil: Putih tapi outline */}
            <Link 
              href="/mobil" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-bold py-3.5 px-8 transition-all uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
            >
              <Car size={18} />
              Lihat Mobil
            </Link>

            {/* Tombol WA: Background dibuat solid hijau agar seimbang dengan pentingnya CTA ini */}
            <a
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-[#050B14] border-2 border-[#25D366] hover:bg-[#1EBE5D] hover:border-[#1EBE5D] font-bold py-3.5 px-8 transition-all uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
            >
              <MessageCircle size={18} />
              Chat Yusuf Suzuki
            </a>

            {/* Tombol Test Drive: Abu-abu redup agar tidak berebut fokus dengan 2 tombol lainnya */}
            <Link 
              href="/test-drive" 
              className="bg-transparent text-gray-400 border-2 border-gray-600 hover:text-white hover:border-white font-bold py-3.5 px-8 transition-all uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
            >
              <CalendarCheck size={18} />
              Test Drive
            </Link>
          </motion.div>

          {/* Stats: Garis separator dibuat lebih jelas (white/20) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-3 w-full max-w-4xl border-y border-white/20 py-10 bg-white/[0.02]"
          >
            {[
              { value: "500+", label: "Mobil Terjual" },
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "98%", label: "Pelanggan Puas" },
            ].map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`text-center ${idx !== 2 ? 'border-r border-white/20' : ''}`}
              >
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-3 uppercase tracking-[0.15em] font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}