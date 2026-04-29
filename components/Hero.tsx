"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, CalendarCheck } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

// Daftar gambar banner (Silakan sesuaikan path/nama filenya)
const banners = [
  "/hero/banner-1.jpg", // Gambar 1 (Misal: Fronx seperti gambar di atas)
  "/hero/banner-2.jpg", // Gambar 2
  "/hero/banner-3.jpg", // Gambar 3
];

export default function Hero({ cityName }: { cityName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const waMessage = cityName 
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  // Logika Auto-slide setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#050B14] min-h-screen">
      
      {/* ======================= */}
      {/* BAGIAN 1: BANNER SLIDER */}
      {/* ======================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] overflow-hidden bg-gray-900 mt-16 md:mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
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

        {/* Gradient overlay opsional agar tidak terlalu flat */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />

        {/* Indikator Titik (Dots) di bawah banner */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Garis Aksen Suzuki */}
      <div className="w-full h-1 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-0" />

      {/* ============================= */}
      {/* BAGIAN 2: KONTEN TEKS & TOMBOL */}
      {/* ============================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge: Modern Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="cursor-default inline-flex items-center gap-3 bg-[#0a192f]/60 backdrop-blur-md border border-cyan-500/30 px-5 py-2.5 rounded-full mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.9)]"></span>
            </div>
            
            <span className="tracking-widest uppercase text-[10px] font-bold text-cyan-50">
              Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
            </span>
          </motion.div>

          {/* Heading SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5"
          >
            Dealer Resmi Mobil Suzuki {cityName ? cityName : "Jogja"}
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 mt-3 block">
              Pusat Promo & Harga Terbaru
            </span>
          </motion.h1>

          {/* Subheading SEO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10"
          >
            Sebagai <strong className="text-white font-normal">dealer resmi Suzuki di wilayah {cityName ? cityName : "Jogja"}</strong>, kami hadir memberikan solusi pembelian mobil impian Anda dengan penawaran harga terbaik, promo eksklusif, serta kemudahan proses kredit bersama <strong className="text-white font-semibold">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/mobil" 
              className="bg-white text-black hover:bg-gray-200 font-bold py-3.5 px-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:scale-95 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <Car size={18} />
              Lihat Mobil
            </Link>

            <a
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366]/10 border border-[#25D366]/50 text-white hover:bg-[#25D366] hover:border-[#25D366] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <MessageCircle size={18} className="text-[#25D366] group-hover:text-white transition-colors" />
              Chat Yusuf Suzuki
            </a>

            <Link 
              href="/test-drive" 
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-3.5 px-7 rounded-xl transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              <CalendarCheck size={18} />
              Booking Test Drive
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl border-t border-white/10 pt-10"
          >
            {[
              { value: "500+", label: "Mobil Terjual" },
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "98%", label: "Pelanggan Puas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}