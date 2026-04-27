"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

// 1. Tambahkan penerima cityName
export default function ContactCTA({ cityName }: { cityName?: string }) {
  
  // 2. Buat pesan WA dinamis
  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan butuh bantuan memilih mobil Suzuki yang tepat.`
    : `Halo Yusuf Suzuki, saya butuh bantuan memilih mobil Suzuki yang tepat.`;

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden group">
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Sisi Kiri: Foto Yusuf Suzuki */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/3 lg:w-1/4 flex-none"
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-800 rounded-none shadow-2xl relative">
              <img 
                src="/kontak/photo.jpg" 
                alt={`Yusuf Suzuki - Konsultan Penjualan Suzuki ${cityName ? cityName : "Jogja"}`} 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            </div>
          </motion.div>

          {/* Sisi Kanan: Konten Teks & Tombol */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-grow text-center md:text-left"
          >
            <span className="inline-block bg-white/5 text-gray-300 text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-none mb-4 shadow-sm">
              Konsultasi Gratis Bersama Yusuf Suzuki
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              Masih bingung pilih
              <br />
              mobil Suzuki yang tepat?
            </h2>
            
            {/* 3. Sisipkan nama kota di paragraf deskripsi */}
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-12 leading-relaxed">
              Konsultasikan kebutuhan Anda dengan Yusuf Suzuki. Fast response, ramah, dan profesional membantu Anda menemukan mobil terbaik sesuai budget dan promo bulan ini khusus wilayah <strong className="text-white">{cityName ? cityName : "Jogja dan sekitarnya"}</strong>.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* 4. Gunakan pesan WA yang sudah dibuat dinamis */}
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-black text-[11px] uppercase tracking-widest font-bold px-8 py-4 rounded-none flex items-center justify-center gap-3 transition-colors duration-300 active:scale-95 shadow-xl"
              >
                <MessageCircle size={18} />
                Hubungi Yusuf Suzuki Sekarang
              </a>
              
              <a
                href="tel:082174635218"
                className="bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-[11px] uppercase tracking-widest font-bold px-8 py-4 rounded-none flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={16} strokeWidth={1.5} />
                0821 7463 5218
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}