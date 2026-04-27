"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, CalendarCheck, ChevronDown } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

export default function Hero({ cityName }: { cityName?: string }) {
  
  const waMessage = cityName 
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/bg-hero.jpg"
          alt={`Dealer Resmi Suzuki ${cityName ? cityName : "Jogja"} - Sumber Baru Mobil`}
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10" />

      {/* Blue accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 w-full">
        <div className="max-w-2xl">
          
          {/* Badge: Modern Premium */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-default inline-flex items-center gap-3 bg-[#0a192f]/60 backdrop-blur-md border border-cyan-500/30 px-5 py-2.5 rounded-full mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.9)] group-hover:bg-cyan-400 transition-colors"></span>
            </div>
            
            <span className="tracking-widest uppercase text-[10px] font-bold text-cyan-50 group-hover:text-white transition-colors">
              Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
            </span>
          </motion.div>

          {/* Heading SEO: Menambahkan kata "Mobil" dan "Terbaru" agar sinkron dengan Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5"
          >
            Dealer Resmi Mobil Suzuki {cityName ? cityName : "Jogja"}
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mt-2 block">
              Pusat Promo & Harga Terbaru
            </span>
          </motion.h1>

          {/* Subheading SEO: Digabungkan menjadi 1 kalimat panjang yang mengalir (28 kata) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Sebagai <strong className="text-white font-normal">dealer resmi Suzuki di wilayah {cityName ? cityName : "Jogja"}</strong>, kami hadir memberikan solusi pembelian mobil impian Anda dengan penawaran harga terbaik, promo eksklusif, serta kemudahan proses kredit bersama <strong className="text-white font-semibold">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href="/mobil" 
              className="bg-white text-black hover:bg-gray-200 font-bold py-3.5 px-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:scale-95 inline-flex items-center gap-2 text-base"
            >
              <Car size={18} />
              Lihat Mobil
            </Link>

            <a
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-[#25D366] hover:border-[#25D366] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95 inline-flex items-center gap-2 text-base"
            >
              <MessageCircle size={18} className="text-[#25D366] group-hover:text-white transition-colors" />
              Chat Yusuf Suzuki
            </a>

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