"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MessageCircle, SlidersHorizontal, BadgePercent, ShieldCheck, CarFront } from "lucide-react";
import { cars, carCategories } from "@/data/cars";
import CarCard from "@/components/CarCard";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import EmptyState from "@/components/EmptyState";
import { buildWhatsAppUrl } from "@/lib/utils";

const catalogStats = [
  { icon: CarFront, value: `${cars.length}+`, label: "Model Suzuki" },
  { icon: BadgePercent, value: "Promo", label: "Diskon Bulanan" },
  { icon: ShieldCheck, value: "Resmi", label: "Dealer Suzuki" },
];

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
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Katalog Unit Suzuki"
        title="Lineup Suzuki Terlengkap"
        description="Pilih mobil Suzuki sesuai kebutuhan Anda. Cek harga OTR, promo, varian, dan konsultasikan skema kredit langsung bersama Yusuf Suzuki."
        stats={[
          { value: `${cars.length}+`, label: "Unit Pilihan" },
          { value: "AB / AA", label: "Area Harga OTR" },
          { value: "DP", label: "Bisa Disesuaikan" },
          { value: "WA", label: "Konsultasi Cepat" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin konsultasi pilihan mobil Suzuki yang cocok untuk kebutuhan saya.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Chat Pilih Mobil
        </a>
        <Link href="/simulasi-kredit" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Hitung Kredit
        </Link>
      </PageHero>

      <section className="motion-section border-b border-gray-200 bg-white">
        <div className="container-main grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
          {catalogStats.map((stat) => (
            <div key={stat.label} className="motion-card motion-hover-lift group flex items-center gap-4 border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-red-600 hover:bg-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-gray-900 shadow-sm transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <stat.icon size={20} strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-xl font-black uppercase tracking-tighter text-gray-950">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="motion-section sticky top-16 z-30 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md md:top-20">
        <div className="container-main flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-gray-400 md:w-auto">
            <SlidersHorizontal size={15} /> Filter Unit
          </div>

          <div className="flex flex-1 gap-2 overflow-x-auto pb-2 md:pb-0">
            {carCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 border px-5 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  category === cat
                    ? "border-red-600 bg-red-600 text-white shadow-red-glow"
                    : "border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-900 hover:bg-white hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full shrink-0 md:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="CARI MOBIL..."
              className="input-sharp bg-gray-50 pl-11 pr-4 py-3 text-xs font-black uppercase tracking-widest placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      <section className="container-main motion-section py-12 md:py-16">
        {filtered.length === 0 ? (
          <EmptyState
            title="Mobil tidak ditemukan"
            description="Silakan coba kategori lain, hapus kata kunci pencarian, atau chat Yusuf Suzuki untuk rekomendasi unit yang paling cocok."
            action={
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("Semua");
                }}
                className="btn-dark"
              >
                Reset Filter
              </button>
            }
          />
        ) : (
          <>
            <div className="mb-8 flex flex-col gap-4 border-l-4 border-red-600 bg-white p-5 shadow-card md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Hasil Katalog</p>
                <h2 className="mt-1 text-2xl font-black uppercase tracking-tighter text-gray-950">
                  {category === "Semua" ? "Semua Mobil Suzuki" : `Kategori ${category}`}
                </h2>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                Menampilkan <span className="text-red-600">{filtered.length}</span> dari {cars.length} mobil
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-10">
              {filtered.map((car, i) => <CarCard key={car.slug} car={car} index={i} />)}
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="motion-section motion-shine mt-20 border border-gray-200 bg-white p-6 shadow-card md:p-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-red-600">
            <span className="h-2 w-2 bg-red-600" /> Area Layanan Resmi
          </div>
          <h2 className="mb-5 text-2xl font-black uppercase tracking-tighter text-gray-950 md:text-3xl">
            Katalog Dealer Resmi Suzuki Jogja & Jawa Tengah
          </h2>
          <p className="max-w-4xl text-sm font-medium leading-relaxed text-gray-500 md:text-base">
            Selamat datang di pusat informasi dan katalog resmi <strong className="text-gray-900">Suzuki Sumber Baru Mobil</strong>. Kami melayani penjualan seluruh <em>line-up</em> mobil Suzuki terbaru mencakup wilayah <strong className="text-gray-900">Daerah Istimewa Yogyakarta (Plat AB)</strong> meliputi Kota Jogja, Sleman, Bantul, Gunungkidul, Kulon Progo, serta wilayah <strong className="text-gray-900">Kedu dan Magelang (Plat AA)</strong>. Dapatkan penawaran harga OTR terbaik, promo diskon, dan simulasi kredit dengan DP yang dapat disesuaikan.
          </p>
        </motion.div>
      </section>

      <ContactCTA />
    </div>
  );
}
