"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

// 1. Tambahkan penerima cityName
export default function ContactCTA({ cityName }: { cityName?: string }) {
  
  // 2. Buat pesan WA dinamis
  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan butuh bantuan memilih mobil Suzuki yang tepat.`
    : `Halo Yusuf Suzuki, saya butuh bantuan memilih mobil Suzuki yang tepat.`;

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 group font-manrope border-t border-white/5">
      
      {/* ========================================================= */}
      {/* BACKGROUND GRID & GLOW EFFECTS                          */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.1),transparent_40%),linear-gradient(135deg,#050505_0%,#0a0a0a_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      
      {/* Garis Aksen Bawah & Kanan */}
      <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-red-600 via-red-600/50 to-transparent" />
      <div className="absolute top-1/4 right-0 h-1/2 w-px bg-gradient-to-b from-transparent via-red-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* ========================================================= */}
          {/* SISI KIRI: FOTO YUSUF SUZUKI                              */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/3 lg:w-1/4 flex-none relative"
          >
            {/* Bingkai Teknis di Belakang Foto */}
            <div className="absolute -inset-2 border border-red-600/20 bg-red-600/5 z-0" style={{ clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }} />
            
            <div className="aspect-[3/4] overflow-hidden bg-black rounded-none shadow-[0_0_40px_rgba(220,38,38,0.1)] relative z-10 border-l border-b border-white/10">
              <img 
                src="/kontak/photo.jpg" 
                alt={`Yusuf Suzuki - Konsultan Penjualan Suzuki ${cityName ? cityName : "Jogja"}`} 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105 opacity-90 hover:opacity-100" 
              />
              {/* Vignette Gelap di Bawah Foto */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
              
              {/* Nama Tag */}
              <div className="absolute bottom-4 left-4 border-l-2 border-red-600 pl-3">
                <p className="font-bank-gothic font-black text-white text-sm tracking-widest uppercase">Yusuf</p>
                <p className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase">Sales Executive</p>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* SISI KANAN: KONTEN TEKS & TOMBOL                          */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-grow text-center md:text-left"
          >
            {/* Badge Berkedip Merah */}
            <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/40 px-3 py-1.5 backdrop-blur-md mx-auto md:mx-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                Konsultasi Gratis
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bank-gothic font-black text-white mb-6 uppercase tracking-tight leading-tight">
              Masih bingung pilih
              <br className="hidden md:block" />
              mobil Suzuki yang tepat?
            </h2>
            
            {/* 3. Sisipkan nama kota di paragraf deskripsi */}
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Diskusikan kebutuhan Anda dengan Yusuf Suzuki. *Fast response*, ramah, dan profesional siap membantu Anda menemukan spesifikasi mobil terbaik sesuai anggaran dan promo spesial bulan ini, khusus untuk wilayah <strong className="text-white">{cityName ? cityName : "Jogja dan sekitarnya"}</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              {/* 4. Gunakan pesan WA dinamis & Tombol Merah Solid */}
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-red-500 bg-red-600 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_15px_30px_rgba(220,38,38,0.25)] transition-all hover:-translate-y-0.5 hover:bg-red-700 w-full sm:w-auto"
              >
                <MessageCircle size={16} />
                Hubungi Sekarang
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 hidden sm:block" />
              </a>
              
              {/* 5. Tombol Telepon dengan Trik SEO (aria-label) */}
              <a
                href="tel:+6282174635218"
                title="Telepon Yusuf Suzuki 082174635218"
                aria-label="Telepon Yusuf Suzuki 082174635218"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto"
              >
                <Phone size={16} strokeWidth={1.5} className="text-gray-300 group-hover:text-white" />
                0821 7463 5218
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}