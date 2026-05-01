"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { articles } from "@/data/articles";
import ContactCTA from "@/components/ContactCTA";

export default function BeritaPage() {
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
              Informasi Otomotif
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Berita & Tips Suzuki
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              Kumpulan informasi terbaru, tips perawatan, dan panduan membeli mobil Suzuki impian Anda langsung dari pakarnya.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Artikel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Gambar Artikel */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#050B14] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest z-10">
                  {article.category}
                </div>
              </div>

              {/* Konten Artikel */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 mb-4 text-xs font-medium">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {/* Link ini disiapkan menuju halaman detail artikel nantinya */}
                  <Link href={`/berita/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tombol Baca */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={`/berita/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Bagian Bawah Tetap Menggunakan ContactCTA */}
      <ContactCTA />
    </div>
  );
}