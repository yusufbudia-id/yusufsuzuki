"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // <-- Import next/image
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CarGallery({ images, name }: { images: string[]; name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  // 1. Fungsi untuk mensinkronkan indikator (dots) dengan slide aktif
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Pantau perubahan slide dari Embla
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // 2. FITUR AUTO SLIDING (AUTOPLAY)
  useEffect(() => {
    if (!emblaApi) return;
    
    // Ganti slide setiap 4000 milidetik (4 detik)
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollTo = (i: number) => {
    emblaApi?.scrollTo(i);
  };

  return (
    <>
      {/* Container Utama Galeri */}
      <div className="relative rounded-none border border-gray-200 overflow-hidden bg-gray-100 shadow-sm group">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((src, i) => (
              <div key={i} className="embla__slide relative flex-[0_0_100%] cursor-zoom-in h-[300px] md:h-[450px]" onClick={() => setLightbox(src)}>
                {/* Menggunakan Image dari next/image dengan properti priority HANYA pada gambar pertama */}
                <Image 
                  src={src} 
                  alt={`${name} - Gambar ${i + 1}`} 
                  fill
                  priority={i === 0} // Penting: Hanya gambar pertama yang di-load duluan agar LCP cepat!
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigasi Kiri */}
        <button 
          onClick={() => emblaApi?.scrollPrev()} 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 rounded-none border border-gray-200"
          aria-label="Gambar Sebelumnya"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        
        {/* Navigasi Kanan */}
        <button 
          onClick={() => emblaApi?.scrollNext()} 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 rounded-none border border-gray-200"
          aria-label="Gambar Selanjutnya"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => scrollTo(i)} 
              aria-label={`Ke gambar ${i + 1}`}
              className={`h-1.5 rounded-none transition-all duration-300 shadow-sm ${i === current ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"}`} 
            />
          ))}
        </div>
      </div>

      {/* Thumbnails Bawah */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((src, i) => (
          <button 
            key={i} 
            onClick={() => scrollTo(i)} 
            aria-label={`Thumbnail ${i + 1}`}
            className={`relative shrink-0 w-20 h-20 overflow-hidden border-2 transition-all duration-300 rounded-none ${i === current ? "border-gray-900 opacity-100" : "border-transparent opacity-50 hover:opacity-100"}`}
          >
            {/* Thumbnail menggunakan Image dengan resolusi lebih kecil */}
            <Image 
              src={src} 
              alt={`Thumbnail ${name} ${i + 1}`} 
              fill
              sizes="80px"
              className="object-cover" 
            />
          </button>
        ))}
      </div>

      {/* Lightbox (Pop-up Gambar Besar) */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gambar Lightbox: Dibiarkan unoptimized karena ini butuh resolusi full */}
              <Image
                src={lightbox}
                alt={`${name} Fullscreen`}
                fill
                unoptimized // Membiarkan gambar popup ini sesuai aslinya tanpa dipotong/dikompres
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
            <button 
              onClick={() => setLightbox(null)} 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors rounded-none"
              aria-label="Tutup Galeri"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}