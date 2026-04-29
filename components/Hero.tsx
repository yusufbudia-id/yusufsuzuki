"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, CalendarCheck, Award, ThumbsUp, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cars } from "@/data/cars"; // Mengambil data aslimu
import { WA_BASE_URL } from "@/lib/utils";

const banners = [
  "/hero/banner-1.jpg", 
  "/hero/banner-2.jpg", 
  "/hero/banner-3.jpg", 
];

export default function Hero({ cityName }: { cityName?: string }) {
  // --- LOGIKA BANNER ATAS ---
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- LOGIKA FEATURED CARS (EMBLA) ---
  const heroFeatured = cars.slice(0, 5); // Ambil 5 mobil untuk slider hero
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start" 
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Autoplay Slider Mobil
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); 
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const waMessage = cityName 
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-16 md:pt-20 bg-[#050B14] overflow-hidden">
      
      {/* ======================= */}
      {/* BAGIAN 1: BANNER SLIDER */}
      {/* ======================= */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-gray-900 z-10 overflow-hidden shadow-xl border-b border-white/10">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={banners[currentIndex]}
              alt={`Promo Mobil Suzuki ${cityName ? cityName : "Jogja"}`}
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Indikator Slider Gambar Atas */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 px-3 py-2 backdrop-blur-sm">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 rounded-none ${
                currentIndex === idx ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-suzuki-blue via-suzuki-red to-suzuki-blue z-20 relative" />

      {/* ============================= */}
      {/* BAGIAN 2: GRID KONTEN BAWAH */}
      {/* ============================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full flex-1 flex flex-col justify-start">
        
        {/* Tekstur Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* --- KOLOM KIRI (7 Kolom): Teks & Tombol CTA --- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 mb-5 bg-white/5 backdrop-blur-sm"
            >
              <div className="h-1.5 w-1.5 bg-blue-500 rounded-none"></div>
              <span className="tracking-[0.15em] uppercase text-[11px] font-semibold text-gray-300">
                Dealer Resmi Suzuki {cityName ? cityName : "Yogyakarta"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 tracking-tight"
            >
              Temukan Suzuki Impian Anda di {cityName ? cityName : "Jogja"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg sm:text-xl font-medium text-blue-400 mb-5 tracking-wide"
            >
              Dealer Resmi &bull; Promo Terbaru &bull; Proses Kredit Mudah
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-normal text-sm sm:text-base max-w-xl leading-relaxed mb-10"
            >
              Dapatkan penawaran harga terbaik, diskon eksklusif, serta kemudahan proses pembelian mobil baru Anda bersama <strong className="text-gray-200">Yusuf Suzuki</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 w-full"
            >
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-black hover:bg-[#1EBE5D] font-bold py-3.5 px-7 transition-colors uppercase tracking-wider text-xs sm:text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
              >
                <MessageCircle size={18} />
                Chat Sekarang
              </a>
              <Link 
                href="/test-drive" 
                className="bg-transparent text-white border border-white/40 hover:bg-white hover:text-black font-semibold py-3.5 px-7 transition-colors uppercase tracking-wider text-xs sm:text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-none"
              >
                <CalendarCheck size={18} />
                Test Drive
              </Link>
            </motion.div>

            {/* Statistik */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-14 sm:mt-16 flex flex-wrap gap-8 sm:gap-12 w-full border-t border-white/10 pt-8"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-1">
                  <Car className="text-gray-500" size={20} strokeWidth={2} />
                  <p className="text-2xl font-bold text-white">500+</p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Mobil Terjual</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-1">
                  <Award className="text-gray-500" size={20} strokeWidth={2} />
                  <p className="text-2xl font-bold text-white">10+ <span className="text-sm font-normal text-gray-500 uppercase tracking-wide">Thn</span></p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Pengalaman</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-1">
                  <ThumbsUp className="text-gray-500" size={20} strokeWidth={2} />
                  <p className="text-2xl font-bold text-white">98%</p>
                </div>
                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-medium">Pelanggan Puas</p>
              </div>
            </motion.div>
          </div>

          {/* --- KOLOM KANAN (5 Kolom): SLIDER FEATURED CARS --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 w-full flex flex-col mt-8 lg:mt-0"
          >
            {/* Header Slider Mobil */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h3 className="text-white uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                <div className="w-1 h-3 bg-suzuki-blue"></div>
                Pilihan Terbaik
              </h3>
              
              {/* Navigasi Embla Mini */}
              <div className="flex items-center gap-2">
                <Link href="/mobil" className="text-gray-400 hover:text-white text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors mr-3">
                  Lihat Semua
                </Link>
                <button onClick={scrollPrev} className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1 border border-white/10 rounded-none">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={scrollNext} className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1 border border-white/10 rounded-none">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Container Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 pt-2 pb-6">
                
                {heroFeatured.map((car) => (
                  <div 
                    key={car.slug} 
                    // Mengambil 80% lebar kolom agar card selanjutnya "mengintip" sedikit
                    className="flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_85%] min-w-0"
                  >
                    <Link 
                      href={`/mobil/${car.slug}`} 
                      className="group block bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 rounded-none flex flex-col overflow-hidden h-full"
                    >
                      {/* Area Gambar */}
                      <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-white/5 to-transparent overflow-hidden p-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        
                        <div className="relative w-full h-full z-10 transition-transform duration-500 group-hover:scale-105">
                          {/* Sesuaikan property car.image dengan struktur datamu, misal: car.images[0] */}
                          <Image
                            src={car.images?.[0] || "/placeholder-car.png"}
                            alt={car.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Area Teks */}
                      <div className="p-5 border-t border-white/5 flex flex-col flex-1 justify-between bg-black/40">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide group-hover:text-blue-400 transition-colors line-clamp-1">{car.name}</h4>
                          <p className="text-gray-400 text-xs uppercase tracking-widest">{car.price || "Harga Hubungi Kami"}</p>
                        </div>
                        
                        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                           <span className="text-blue-400 text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                            Lihat Detail
                           </span>
                           <ArrowRight size={16} className="text-blue-400 transform -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}