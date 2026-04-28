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

  // 1. Ambil Promo Aktif & Urutkan berdasarkan waktu berakhir terdekat
  const activePromos = promos
    .filter((promo) => parseIndonesianDate(promo.validUntil) >= today)
    .sort((a, b) => parseIndonesianDate(a.validUntil).getTime() - parseIndonesianDate(b.validUntil).getTime());

  // 2. Ambil Promo Kedaluwarsa & Urutkan berdasarkan yang paling baru lewat
  const expiredPromos = promos
    .filter((promo) => parseIndonesianDate(promo.validUntil) < today)
    .sort((a, b) => parseIndonesianDate(b.validUntil).getTime() - parseIndonesianDate(a.validUntil).getTime());

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Tema Gelap Premium */}
      <div className="bg-gray-900 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white/10 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-[0.2em] border border-white/10">
              Penawaran Eksklusif
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Promo Suzuki Terbaru
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              Jangan lewatkan promo spesial dan penawaran terbatas yang hanya ada di Suzuki Sumber Baru Mobil Jogja.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Promo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* --- BAGIAN 1: PROMO AKTIF --- */}
        {activePromos.length > 0 ? (
          <>
            <div className="flex items-center gap-4 mb-10 border-l-4 border-gray-900 pl-4">
              <p className="text-gray-900 font-bold text-xs uppercase tracking-widest">
                Daftar Promo Aktif Bulan Ini
              </p>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
              {activePromos.map((promo, i) => (
                <PromoCard key={promo.slug} promo={promo} index={i} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 font-medium">Belum ada promo baru untuk saat ini. Silakan hubungi kami untuk penawaran menarik lainnya.</p>
          </div>
        )}

        {/* --- BAGIAN 2: PROMO KEDALUWARSA (Ditaruh Bawah) --- */}
        {expiredPromos.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-10 border-l-4 border-gray-400 pl-4 mt-8">
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                Promo Terdahulu (Telah Berakhir)
              </p>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>

            {/* Tambahkan opacity-60 atau grayscale pada kontainer ini jika ingin promo lama terlihat sedikit pudar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
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