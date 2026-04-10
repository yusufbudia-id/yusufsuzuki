"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Calendar, MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { promos } from "@/data/promos";
import { buildWhatsAppUrl } from "@/lib/utils";

// Komponen Kartu Promo (Sharp & Minimalist)
export function PromoCard({ promo, index = 0 }: { promo: typeof promos[0]; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      // TAMBAHKAN CLASS opacity-0 DI SINI 👇
      className="opacity-0 group bg-white rounded-none overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Menggunakan aspect-[2/1] agar lebih pendek & pipih dari sebelumnya */}
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-gray-100">
        <img 
          src={promo.image} 
          alt={promo.title} 
          /* Menggunakan object-top agar gambar fokus ke bagian atas */
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
        
        {/* Badge: Frosted glass elegan */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none shadow-sm">
            {promo.badge}
          </span>
        </div>
        
        {/* Highlight Teks (dengan gradasi hitam agar mudah dibaca) */}
        <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 text-white font-black text-lg md:text-xl uppercase tracking-tight leading-tight">
          {promo.highlight}
        </p>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight mb-2 line-clamp-2">{promo.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">{promo.description}</p>
        
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-6">
          <Calendar size={14} />
          Berlaku s.d. {promo.validUntil}
        </div>
        
        {/* Tombol Action Tajam */}
        <a
          // Menggunakan trik encodeURIComponent untuk format teks WA yang rapi
          onClick={(e) => {
            e.preventDefault();
            // Mengambil URL website saat ini (berguna saat sudah online)
            const domain = window.location.origin;
            const imageUrl = `${domain}${promo.image}`;
            
            // Merakit pesan WA
            const waText = `Halo Yusuf Suzuki, saya tertarik dengan promo ini:\n\n*${promo.title}*\nHighlight: ${promo.highlight}\n\nCek promo: ${imageUrl}\n\nBisa minta info lebih lanjut?`;
            
            // Membuka tab baru ke WhatsApp
            window.open(buildWhatsAppUrl(waText), "_blank");
          }}
          href="#"
          className="w-full bg-gray-900 hover:bg-black text-white text-[11px] uppercase tracking-widest font-bold py-4 rounded-none flex justify-center items-center gap-2 transition-colors mt-auto"
        >
          <MessageCircle size={16} />
          Tanya Yusuf Suzuki
        </a>
      </div>
    </motion.div>
  );
}

// Komponen Utama Section Promo
export default function PromoSection() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );

  return (
    <section className="pt-8 pb-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Nav Buttons Wrapper */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          {/* Teks Rata Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // TAMBAHKAN CLASS opacity-0 DI SINI 👇
            className="opacity-0 text-left max-w-2xl"
          >
            <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest">
              Promo Bulan Ini
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              Penawaran Terbaik
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Jangan lewatkan promo eksklusif yang terbatas untuk wilayah Jogja dan sekitarnya.
            </p>
          </motion.div>

          {/* Tombol Navigasi (Melayang / Tanpa Border) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-14 h-14 bg-transparent flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-red-500 transition-all duration-300 rounded-none active:scale-95"
              aria-label="Promo Sebelumnya"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-14 h-14 bg-transparent flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-red-500 transition-all duration-300 rounded-none active:scale-95"
              aria-label="Promo Selanjutnya"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Area Slider Carousel */}
        <div className="embla overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="embla__container flex gap-6 pb-4">
            {promos.map((promo, i) => (
              <div 
                key={promo.id} 
                className="embla__slide flex-none w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <PromoCard promo={promo} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Lihat Semua Promo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // TAMBAHKAN CLASS opacity-0 DI SINI 👇
          className="opacity-0 text-center mt-8 md:mt-12"
        >
          <Link 
            href="/promo" 
            className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-none transition-all duration-300 inline-flex items-center gap-2"
          >
            Lihat Semua Promo <ArrowRight size={18} />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
