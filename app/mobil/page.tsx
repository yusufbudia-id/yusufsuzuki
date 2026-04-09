"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cars, carCategories } from "@/data/cars";
import CarCard from "@/components/CarCard";

export default function MobilPage() {
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
    /* pt-20 dihapus agar konten naik ke paling atas layar */
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Diperketat jaraknya agar lebih padat */}
      <div className="bg-gray-900 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/5 text-gray-400 text-[10px] font-bold px-3 py-1 rounded-none mb-4 uppercase tracking-[0.2em] border border-white/10">
              Semua Produk
            </span>
            
            {/* Jarak Judul (mb-2) diperkecil dari mb-4 */}
            <h1 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">
              Lineup Suzuki Terlengkap
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed opacity-80">
              Temukan mobil Suzuki impian Anda. Dari SUV tangguh hingga City Car yang efisien.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters & Search - Sticky di bawah Navbar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Kategori Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none flex-grow">
            {carCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 px-5 py-3 rounded-none text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  category === cat 
                    ? "bg-gray-900 border-gray-900 text-white shadow-lg" 
                    : "bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Tajam */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="CARI MOBIL..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-none text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:bg-white transition-colors placeholder:text-gray-400"
            />
          </div>

        </div>
      </div>

      {/* Grid Produk */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-none mt-8">
            <p className="text-gray-900 font-bold uppercase tracking-widest text-sm mb-2">Mobil tidak ditemukan</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Silakan coba kata kunci lain.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8 border-l-4 border-gray-900 pl-4">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Menampilkan <span className="text-gray-900">{filtered.length}</span> dari {cars.length} mobil
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {filtered.map((car, i) => <CarCard key={car.slug} car={car} index={i} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}