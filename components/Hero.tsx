"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Download, ChevronDown } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

export default function Hero({ cityName = "Jogja" }: { cityName?: string }) {
  const waMsg = `Halo Yusuf Suzuki, saya ingin menjadwalkan test drive untuk Suzuki XL7 di area ${cityName}.`;

  return (
    <section className="relative h-screen min-h-[650px] w-full flex flex-col justify-center overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE (FULL SCREEN) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mobil/xl7-hero.jpg" // Pastikan gambar mentahan XL7 Anda bernama ini
          alt={`Promo Suzuki XL7 di ${cityName}`}
          fill
          priority
          quality={100}
          className="object-cover object-center md:object-right"
        />
      </div>

      {/* 2. GRADIENT OVERLAY (Agar Teks Putih Terbaca) */}
      {/* Gelap di bagian kiri dan bawah, transparan di area mobil */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />

      {/* 3. KONTEN UTAMA (Sesuai Referensi Poster) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* LABEL ATAS (Kotak Garis Putih) */}
            <span className="text-white border border-white/50 px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 backdrop-blur-sm bg-black/10">
              Suzuki XL7 Hybrid
            </span>

            {/* JUDUL UTAMA (Raksasa, Bold, Putih) */}
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-[1.05] mb-6">
              Gear To<br />Accomplish
            </h1>

            {/* DESKRIPSI SINGKAT */}
            <p className="text-gray-200 text-sm md:text-base font-medium max-w-md leading-relaxed mb-10 drop-shadow-md">
              SUV 7-Seater tangguh untuk keluarga modern di {cityName}. Dilengkapi dengan teknologi Smart Hybrid yang efisien dan fitur kenyamanan premium.
            </p>

            {/* DUA TOMBOL (Solid & Outline) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Tombol Primary (Solid Putih) */}
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300"
              >
                <Calendar size={16} strokeWidth={2.5} />
                Test Drive
              </a>
              
              {/* Tombol Secondary (Outline/Garis Tepi) */}
              <Link
                href="/brosur/xl7.pdf"
                target="_blank"
                className="bg-black/20 backdrop-blur-sm border border-white text-white hover:bg-white/20 px-8 py-4 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300"
              >
                <Download size={16} strokeWidth={2.5} />
                Unduh Brosur
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. INDIKATOR SCROLL (Ikon panah kecil beranimasi di bawah) */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="text-[9px] text-white/70 uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown className="text-white/70" size={20} strokeWidth={2} />
      </motion.div>

    </section>
  );
}