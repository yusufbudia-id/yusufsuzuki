import Image from "next/image";
import { ArrowRight, Camera, Quote, Star, User } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection({ cityName }: { cityName?: string }) {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 bg-red-600/5 blur-3xl" />

      <div className="container-main relative">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="section-label justify-center">Testimoni Pelanggan</span>
          <h2 className="section-title mt-4">Review Pembeli Suzuki {cityName ? cityName : "Jogja"}</h2>
          <p className="section-subtitle mx-auto">
            Bukti pelayanan Yusuf Suzuki dari pelanggan yang sudah melakukan pembelian dan serah terima unit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
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
                  <a
                    href={testimonial.deliveryPhoto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mb-6 flex w-full items-center justify-between border border-red-100 bg-red-50 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <Camera size={14} />
                      Lihat Foto Serah Terima {testimonial.name}
                    </span>
                    <ArrowRight size={14} className="-translate-x-3 opacity-0 transition-all group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                  </a>
                )}

                <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-gray-200 bg-gray-100">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={`Review pembeli Suzuki ${testimonial.name}`}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
