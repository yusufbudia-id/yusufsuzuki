"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cars, carCategories } from "@/data/cars";
import CarCard from "@/components/CarCard";
import ContactCTA from "@/components/ContactCTA";

export default function KatalogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      const matchCat = category === "Semua" || c.category === category;
      const matchQ = c.name.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, category]);

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
                Semua Produk
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bank-gothic font-black text-white mb-6 uppercase tracking-tight leading-[1.05]">
              Lineup Suzuki Terlengkap
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed opacity-80">
              Temukan mobil Suzuki impian Anda. Dari SUV tangguh hingga City Car yang efisien.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FILTERS & SEARCH SECTION (LIGHT MODE UNTUK KEJELASAN)     */}
      {/* ========================================================= */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none flex-grow">
            {carCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 px-5 py-3 rounded-none text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  category === cat 
                    ? "bg-red-600 border-red-600 text-white shadow-[0_4px_15px_rgba(220,38,38,0.3)]" 
                    : "bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="CARI MOBIL..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 focus:bg-white transition-colors placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GRID PRODUK                                               */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-none mt-8">
            <p className="text-gray-900 font-bold uppercase tracking-widest text-sm mb-2">Mobil tidak ditemukan</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Silakan coba kata kunci lain.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8 border-l-4 border-red-600 pl-4">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Menampilkan <span className="text-gray-900">{filtered.length}</span> dari {cars.length} mobil
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {filtered.map((car, i) => <CarCard key={car.slug} car={car} index={i} />)}
            </div>
          </>
        )}

        {/* --- SUNTIKAN ON-PAGE SEO LOKAL --- */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h2 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Katalog Dealer Resmi Suzuki Jogja & Jawa Tengah
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            Selamat datang di pusat informasi dan katalog resmi <strong>Suzuki Sumber Baru Mobil</strong>. Kami melayani penjualan seluruh <em>line-up</em> mobil Suzuki terbaru mencakup wilayah <strong>Daerah Istimewa Yogyakarta (Plat AB)</strong> meliputi Kota Jogja, Sleman, Bantul, Gunungkidul, Kulon Progo, serta wilayah <strong>Kedu dan Magelang (Plat AA)</strong>. Dapatkan penawaran harga OTR terbaik, promo diskon maksimal puluhan juta rupiah, dan simulasi kredit dengan DP sangat ringan untuk setiap pembelian mobil impian Anda bersama kami.
          </p>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}