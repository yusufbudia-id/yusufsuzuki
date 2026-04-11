"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, CalendarCheck, ChevronDown } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image: Dioptimasi menggunakan next/image dengan priority */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/bg-hero.jpg"
          alt="Dealer Resmi Suzuki Jogja - Sumber Baru Mobil"
          fill
          priority // Sangat penting: Memaksa browser memuat ini paling pertama (LCP Fix)
          quality={85} // Kompresi otomatis tanpa mengurangi kualitas visual
          className="object-cover object-center"
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10" />

      {/* Blue accent line at top - Dipertahankan sebagai identitas tipis Suzuki */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 w-full">
        <div className="max-w-2xl">
          {/* Badge: Diubah ke gaya Glassmorphism Elegan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-xl"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Dealer Resmi Suzuki Yogyakarta
          </motion.div>

          {/* Heading: Teks kuning dihilangkan, full putih agar menyatu dan mewah */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5"
          >
            Dealer Resmi Suzuki
            <br />
            Jogja & Sekitarnya
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Dapatkan mobil Suzuki impian dengan promo terbaik, simulasi kredit mudah, dan pelayanan ramah dari{" "}
            <span className="text-white font-semibold">Yusuf Suzuki</span>.
          </motion.p>

          {/* CTA Buttons: Direvamp menjadi tema Monochrome Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {/* Tombol Utama: Putih Solid */}
            <Link 
              href="/mobil" 
              className="bg-white text-black hover:bg-gray-200 font-bold py-3.5 px-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:scale-95 inline-flex items-center gap-2 text-base"
            >
              <Car size={18} />
              Lihat Mobil
            </Link>

            {/* Tombol WA: Transparan dengan aksen hijau yang menyala saat dihover */}
            <a
              href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20tentang%20mobil%20Suzuki`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-[#25D366] hover:border-[#25D366] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95 inline-flex items-center gap-2 text-base"
            >
              <MessageCircle size={18} className="text-[#25D366] group-hover:text-white transition-colors" />
              Chat Yusuf Suzuki
            </a>

            {/* Tombol Test Drive: Outline yang sangat tipis dan halus */}
            <Link 
              href="/test-drive" 
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-3.5 px-7 rounded-xl transition-all duration-300 active:scale-95 inline-flex items-center gap-2 text-base backdrop-blur-sm"
            >
              <CalendarCheck size={18} />
              Booking Test Drive
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-sm"
          >
            {[
              { value: "500+", label: "Mobil Terjual" },
              { value: "10+", label: "Tahun Pengalaman" },
              { value: "98%", label: "Pelanggan Puas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 z-10"
      >
        <span className="text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}