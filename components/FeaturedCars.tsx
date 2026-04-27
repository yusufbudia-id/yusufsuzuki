"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import CarCard from "./CarCard";
import { cars } from "@/data/cars";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCars({ cityName }: { cityName?: string }) {
  const featured = cars.slice(0, 6);
  
  // Mengganti useRef manual dengan Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Fitur Auto Sliding
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        // Jika sudah mentok kanan (di kartu "Lihat Semua"), kembali ke awal
        emblaApi.scrollTo(0);
      }
    }, 4000); // Geser otomatis setiap 4 detik

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="pt-24 pb-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Nav Buttons Wrapper */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left max-w-2xl"
          >
            <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest">
              Produk Unggulan
            </span>
            {/* Heading SEO: Menggunakan kata kunci Harga Mobil Suzuki Jogja */}
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              Harga Mobil Suzuki Jogja Terbaru
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Temukan mobil Suzuki impian Anda dengan teknologi terkini dan harga terbaik di Jogja.
            </p>
          </motion.div>

          {/* Tombol Navigasi Manual */}
          <div className="hidden lg:flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 bg-transparent flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-red-500 transition-all duration-300 rounded-none active:scale-95"
              aria-label="Geser Kiri"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 bg-transparent flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-red-500 transition-all duration-300 rounded-none active:scale-95"
              aria-label="Geser Kanan"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel / Slider Container menggunakan Embla */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 pb-12 pt-4">
              
              {featured.map((car, i) => (
                <div 
                  key={car.slug} 
                  className="flex-[0_0_85vw] sm:flex-[0_0_340px] lg:flex-[0_0_380px] min-w-0"
                >
                  <CarCard car={car} index={i} />
                </div>
              ))}
              
              {/* Kartu "Lihat Semua" di akhir slider */}
              <div className="flex-[0_0_85vw] sm:flex-[0_0_340px] lg:flex-[0_0_380px] min-w-0 flex items-center justify-center p-6 bg-gray-100/50 border border-dashed border-gray-300">
                <Link 
                  href="/mobil" 
                  className="flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-gray-900 transition-colors group w-full h-full min-h-[300px]"
                >
                  <div className="w-16 h-16 rounded-none border-2 border-dashed border-gray-300 group-hover:border-gray-900 flex items-center justify-center transition-colors">
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-bold">Lihat Semua Mobil</span>
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}