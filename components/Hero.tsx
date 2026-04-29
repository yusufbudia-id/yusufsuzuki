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
    <section className="relative min-h-screen flex flex-col justify-start pt-16 md:pt-20 bg-[#050B14]">
      
      {/* ======================= */}
      {/* BAGIAN 1: BANNER SLIDER */}
      {/* ======================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-gray-900 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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

        {/* Indikator Slider (Mengkotak/Garis Tegas) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Garis Aksen Bawah Banner - Tajam & Solid */}
      <div className="w-full h-1.5 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-10" />

      {/* ============================= */}
      {/* BAGIAN 2: KONTEN TEKS & TOMBOL */}
      {/* ============================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge: Kotak, Border Tajam, Typography Tegas */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border-2 border-cyan-500/80 px-4 py-1.5 mb-8 bg-[#050B14]"
          >
            <div className="h-2 w-2 bg-cyan-500"></div>
            <span className="tracking-[0.2em] uppercase text-xs font-bold text-cyan-400">
              Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
            </span>
          </motion.div>

          {/* Heading: Tidak banyak format aneh-aneh, murni tipografi tebal */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-wide"
          >
            Dealer Resmi Mobil Suzuki {cityName ? cityName : "Jogja"}
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 mt-2 block">
              Pusat Promo & Harga Terbaru
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-10"
          >
            Sebagai dealer resmi Suzuki di wilayah {cityName ? cityName : "Jogja"}, kami memberikan solusi pembelian mobil impian Anda dengan penawaran harga terbaik, promo eksklusif, serta kemudahan proses kredit bersama <strong className="text-white">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA Buttons: Kotak Tajam (rounded-none), Border Tebal, Efek Solid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/mobil" 
              className="bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 transition-colors uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none border-2 border-white"
            >
              <Car size={18} />
              Lihat Mobil
            </Link>

            <a
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-[#25D366] border-2 border-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-4 px-8 transition-colors uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none group"
            >
              <MessageCircle size={18} className="text-[#25D366] group-hover:text-white transition-colors" />
              Chat Yusuf Suzuki
            </a>

            <Link 
              href="/test-drive" 
              className="bg-transparent text-white border-2 border-white/50 hover:bg-white hover:text-black hover:border-white font-bold py-4 px-8 transition-colors uppercase tracking-wider text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
            >
              <CalendarCheck size={18} />
              Test Drive
            </Link>
          </motion.div>

          {/* Stats: Terstruktur dengan Grid yang dipisahkan oleh Garis Tajam */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-3 w-full max-w-3xl border-y border-white/20 py-8"
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
                <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}