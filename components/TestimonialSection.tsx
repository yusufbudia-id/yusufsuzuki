"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Kepercayaan pelanggan adalah prioritas utama dan bukti nyata komitmen kami.
          </p>
        </motion.div>

        {/* Grid Kartu Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* Bingkai Kartu Tajam & Hover Hitam */
              className="bg-white rounded-none p-8 border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 relative flex flex-col group"
            >
              {/* Icon Kutipan yang berubah warna saat di-hover */}
              <Quote size={28} className="text-gray-200 mb-5 group-hover:text-gray-900 transition-colors duration-300" />
              
              {/* Bintang Emas Tetap Dipertahankan */}
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Teks Testimoni */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 italic flex-grow">
                "{t.review}"
              </p>
              
              {/* Info Pelanggan */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                {/* Foto Profil Kotak Tajam (dengan efek Hitam-Putih ke Berwarna) */}
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-none object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div>
                  <p className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1">{t.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>

              {/* Tag Mobil - Pita Hitam di Sudut Kanan Atas */}
              <span className="absolute top-0 right-0 bg-gray-900 text-white text-[9px] font-bold px-3 py-1.5 rounded-none uppercase tracking-widest">
                {t.car}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}