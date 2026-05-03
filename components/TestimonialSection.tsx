"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// Tambahan import ArrowRight
import { Star, Quote, User, Camera, X, ArrowRight } from "lucide-react"; 
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection({ cityName }: { cityName?: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-600 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest border border-red-200">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-tight">
            Review Pembeli Suzuki {cityName ? cityName : "Jogja"}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Kepercayaan pelanggan adalah prioritas utama dan bukti nyata komitmen Yusuf Suzuki dalam memberikan pelayanan terbaik untuk warga {cityName ? cityName : "Jogja dan sekitarnya"}.
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-none p-8 border border-gray-200 hover:border-red-600 hover:shadow-[0_20px_40px_rgba(220,38,38,0.08)] transition-all duration-500 relative flex flex-col group h-full overflow-hidden"
            >
              <Quote 
                size={140} 
                className="absolute -bottom-8 -right-8 text-gray-50 -rotate-12 z-0 group-hover:text-red-50 transition-colors duration-700" 
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex mb-6 gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium italic flex-grow line-clamp-6">
                  "{t.review}"
                </p>

                {/* --- TOMBOL LIHAT FOTO YANG SUDAH DIROMBAK --- */}
                {t.deliveryPhoto && (
                  <div className="mb-6">
                    <button
                      onClick={() => setSelectedImage(t.deliveryPhoto as string)}
                      className="group/btn flex items-center justify-between w-full text-[10px] uppercase tracking-widest font-black text-red-600 bg-red-50 border border-red-100 px-4 py-3 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <span className="flex items-center gap-2">
                        <Camera size={14} className="group-hover/btn:scale-110 transition-transform duration-300" /> 
                        Lihat Momen Serah Terima
                      </span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                    </button>
                  </div>
                )}
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                  <div className="relative w-12 h-12 shrink-0 overflow-hidden border border-gray-100">
                    {t.avatar ? (
                      <Image 
                        src={t.avatar} 
                        alt={`Review dari ${t.name}`} 
                        fill
                        sizes="48px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center transition-colors duration-500 ${
                        t.gender === "male" 
                          ? "bg-slate-100 text-slate-400 group-hover:bg-slate-900 group-hover:text-white" 
                          : "bg-rose-50 text-rose-400 group-hover:bg-rose-600 group-hover:text-white"
                      }`}>
                        <User size={24} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xs uppercase tracking-widest mb-1 group-hover:text-red-600 transition-colors">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>

              <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-3 py-1.5 rounded-none uppercase tracking-widest z-20 shadow-sm">
                {t.car}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* --- MODAL / LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/10 hover:bg-red-600 transition-colors rounded-full z-10"
              aria-label="Tutup Foto"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl h-[70vh] md:h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Foto Serah Terima Kendaraan"
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}