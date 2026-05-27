"use client";

import { motion } from "framer-motion";
import { promos } from "@/data/promos";
import { PromoCard } from "@/components/PromoSection";
import ContactCTA from "@/components/ContactCTA";

// --- FUNGSI PEMBANTU: PARSE TANGGAL INDONESIA KE DATE OBJECT ---
const parseIndonesianDate = (dateStr: string) => {
  const months: { [key: string]: number } = {
    januari: 0, februari: 1, maret: 2, april: 3, mei: 4, juni: 5,
    juli: 6, agustus: 7, september: 8, oktober: 9, november: 10, desember: 11
  };

  const parts = dateStr.toLowerCase().split(" ");
  if (parts.length !== 3) return new Date(8640000000000000);

  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);

  return new Date(year, month, day, 23, 59, 59);
};

export default function PromoPage() {
  // --- LOGIKA PENGURUTAN PROMO ---
  const today = new Date();

  // 1. Ambil Promo Aktif & Urutkan agar yang TERBARU di kiri/atas
  const activePromos = [...promos]
    .reverse() 
    .filter((promo) => parseIndonesianDate(promo.validUntil) >= today)
    .sort((a, b) => parseIndonesianDate(b.validUntil).getTime() - parseIndonesianDate(a.validUntil).getTime()); 

  // 2. Ambil Promo Kedaluwarsa & Urutkan berdasarkan yang paling baru lewat
  const expiredPromos = [...promos]
    .reverse()
    .filter((promo) => parseIndonesianDate(promo.validUntil) < today)
    .sort((a, b) => parseIndonesianDate(b.validUntil).getTime() - parseIndonesianDate(a.validUntil).getTime());

  return (
    <div className="bg-gray-50 min-h-screen font-manrope">
      
      {/* ========================================================= */}
      {/* HEADER SECTION (DARK TECH REDESIGN)                       */}
      {/* ========================================================= */}
      <div className="relative bg-[#050505] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/10">
        
        {/* Background Grids & Glows */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_40%,rgba(220,38,38,0.15),transparent_40%),linear-gradient(135deg,#050505_0%,#0a0a0a_100%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

        {/* Thin Technical Lines */}
        <div className="pointer-events-none absolute left-6 top-20 z-10 hidden h-[calc(100%-120px)] w-px bg-red-600/40 md:block" />
        <div className="pointer-events-none absolute left-6 top-20 z-10 hidden w-24 border-t border-red-600/40 md:block" />
        <div className="pointer-events-none absolute right-0 top-32 z-10 hidden h-px w-64 bg-gradient-to-r from-transparent via-red-600/30 to-red-600/50 lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge Red Style */}
            <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/40 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                Penawaran Eksklusif
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bank-gothic font-black text-white mb-6 uppercase tracking-tight leading-[1.05]">
              Promo Suzuki Terbaru
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
              Jangan lewatkan promo spesial dan penawaran terbatas yang hanya ada di Suzuki Sumber Baru Mobil Jogja.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GRID PROMO SECTION                                        */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* --- BAGIAN 1: PROMO AKTIF --- */}
        {activePromos.length > 0 ? (
          <>
            <div className="flex items-center gap-4 mb-10 border-l-4 border-red-600 pl-4">
              <p className="text-gray-900 font-black text-xs sm:text-sm uppercase tracking-widest">
                Daftar Promo Aktif Bulan Ini
              </p>
              <div className="h-px bg-red-600/20 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
              {activePromos.map((promo, i) => (
                <PromoCard key={promo.slug} promo={promo} index={i} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10 border border-gray-200 bg-white">
            <p className="text-gray-500 font-medium">Belum ada promo baru untuk saat ini. Silakan hubungi kami untuk penawaran menarik lainnya.</p>
          </div>
        )}

        {/* --- BAGIAN 2: PROMO KEDALUWARSA --- */}
        {expiredPromos.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-10 border-l-4 border-gray-400 pl-4 mt-8">
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                Promo Terdahulu (Telah Berakhir)
              </p>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0">
              {expiredPromos.map((promo, i) => (
                <PromoCard key={promo.slug} promo={promo} index={i} />
              ))}
            </div>
          </>
        )}

      </div>

      <ContactCTA />
    </div>
  );
}