"use client";

import { motion } from "framer-motion";
import { promos } from "@/data/promos";
import { PromoCard } from "@/components/PromoSection";
import ContactCTA from "@/components/ContactCTA";

export default function PromoPage() {
  return (
    /* pt-20 dihapus agar konten naik ke paling atas layar (Under Navbar) */
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Tema Gelap Premium (Menempel ke atas) */}
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
        {/* Sub-header kecil untuk informasi jumlah promo */}
        <div className="flex items-center gap-4 mb-10 border-l-4 border-gray-900 pl-4">
          <p className="text-gray-900 font-bold text-xs uppercase tracking-widest">
            Daftar Promo Aktif Bulan Ini
          </p>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {promos.map((promo, i) => (
            <PromoCard key={promo.slug} promo={promo} index={i} />
          ))}
        </div>
      </div>

      {/* Bagian Bawah tetap menggunakan ContactCTA yang sudah kita desain premium sebelumnya */}
      <ContactCTA />
    </div>
  );
}