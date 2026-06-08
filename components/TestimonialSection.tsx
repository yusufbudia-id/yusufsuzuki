"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Camera, Quote, Star, User, X } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection({ cityName }: { cityName?: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 bg-red-600/5 blur-3xl" />

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="section-label justify-center">Testimoni Pelanggan</span>
          <h2 className="section-title mt-4">Review Pembeli Suzuki {cityName ? cityName : "Jogja"}</h2>
          <p className="section-subtitle mx-auto">
            Bukti pelayanan Yusuf Suzuki dari pelanggan yang sudah melakukan pembelian dan serah terima unit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="card-sharp red-edge group relative flex h-full flex-col overflow-hidden p-7"
            >
              <Quote size={130} className="absolute -bottom-8 -right-8 z-0 -rotate-12 text-gray-50 transition-colors duration-700 group-hover:text-red-50" />
              <span className="absolute right-0 top-0 z-20 bg-gray-950 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white group-hover:bg-red-600">
                {testimonial.car}
              </span>

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mb-6 line-clamp-6 flex-grow text-sm font-medium italic leading-relaxed text-gray-700">
                  “{testimonial.review}”
                </p>

                {testimonial.deliveryPhoto && (
                  <button
                    onClick={() => setSelectedImage(testimonial.deliveryPhoto as string)}
                    className="group/btn mb-6 flex w-full items-center justify-between border border-red-100 bg-red-50 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                    type="button"
                  >
                    <span className="flex items-center gap-2">
                      <Camera size={14} />
                      Lihat Serah Terima
                    </span>
                    <ArrowRight size={14} className="-translate-x-3 opacity-0 transition-all group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                  </button>
                )}

                <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-gray-200 bg-gray-100">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={`Review dari ${testimonial.name}`}
                        fill
                        sizes="48px"
                        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gray-950 text-white transition-colors group-hover:bg-red-600">
                        <User size={22} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-black uppercase tracking-[0.18em] text-gray-950 transition-colors group-hover:text-red-600">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center border border-white/10 bg-white/10 text-white/70 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
              aria-label="Tutup Foto"
              type="button"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative flex h-[72vh] w-full max-w-4xl items-center justify-center md:h-[85vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={selectedImage} alt="Foto serah terima kendaraan" fill className="object-contain" sizes="100vw" quality={90} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
