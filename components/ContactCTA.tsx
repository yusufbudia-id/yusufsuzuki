import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

const proofPoints = [
  "Konsultasi unit & varian",
  "Simulasi kredit cepat",
  "Info promo berjalan",
];

export default function ContactCTA({ cityName }: { cityName?: string }) {
  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan butuh bantuan memilih mobil Suzuki yang tepat.`
    : "Halo Yusuf Suzuki, saya butuh bantuan memilih mobil Suzuki yang tepat.";

  return (
    <section className="surface-dark motion-section scan-line relative overflow-hidden border-t border-white/5 py-14 font-manrope md:py-28">
      <div className="surface-grid absolute inset-0 opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_76%,rgba(227,6,19,0.18),transparent_34%),linear-gradient(135deg,#050505_0%,#080808_100%)]" />
      <div className="absolute bottom-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-red-600 via-red-600/40 to-transparent" />
      <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-red-600/40 to-transparent" />

      <div className="container-main relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-16">
          <div className="motion-enter-left relative hidden md:col-span-4 md:block lg:col-span-3">
            <div
              className="absolute -inset-3 border border-red-600/25 bg-red-600/5"
              style={{ clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
            />
            <div className="motion-float-slow relative aspect-[3/4] overflow-hidden border border-white/10 bg-black shadow-dark-glow">
              <img
                src="/kontak/photo.jpg"
                alt={`Yusuf Suzuki - Konsultan penjualan dealer mobil Suzuki ${cityName ? cityName : "Jogja"}`}
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 border-l-2 border-red-600 pl-4">
                <p className="text-lg font-black uppercase tracking-[0.18em] text-white">Yusuf</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">Sales Executive</p>
              </div>
            </div>
          </div>

          <div className="motion-enter-up text-center md:col-span-8 md:text-left lg:col-span-9">
            <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-red-600 shadow-[0_0_8px_rgba(227,6,19,0.9)]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/75">Konsultasi Gratis</span>
            </div>

            <div className="motion-pop relative mx-auto mb-8 w-full max-w-[230px] md:hidden">
              <div
                className="absolute -inset-2 border border-red-600/25 bg-red-600/5"
                style={{ clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
              />
              <div className="motion-float-slow relative aspect-[4/5] overflow-hidden border border-white/10 bg-black shadow-dark-glow">
                <img
                  src="/kontak/photo.jpg"
                  alt={`Yusuf Suzuki - Konsultan penjualan dealer mobil Suzuki ${cityName ? cityName : "Jogja"}`}
                  className="h-full w-full object-cover object-top opacity-95"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 border-l-2 border-red-600 pl-3 text-left">
                  <p className="text-base font-black uppercase tracking-[0.16em] text-white">Yusuf</p>
                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/55">Sales Executive</p>
                </div>
              </div>
            </div>

            <h2 className="section-title-dark mx-auto max-w-4xl md:mx-0">
              Masih bingung pilih mobil Suzuki yang tepat?
            </h2>

            <p className="mx-auto mt-6 hidden max-w-2xl text-sm leading-8 text-white/62 sm:block md:mx-0 md:text-base">
              Diskusikan kebutuhan Anda langsung dengan Yusuf Suzuki. Fast response, ramah, dan siap membantu memilih unit terbaik sesuai anggaran, harga OTR, serta promo spesial untuk wilayah <strong className="text-white">{cityName ? cityName : "Jogja dan sekitarnya"}</strong>.
            </p>

            <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3 lg:max-w-3xl">
              {proofPoints.map((point) => (
                <div key={point} className="motion-card motion-hover-lift flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 md:justify-start">
                  <CheckCircle2 size={14} className="text-red-500" />
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer" className="btn-red w-full sm:w-auto">
                <MessageCircle size={16} />
                Hubungi Yusuf Suzuki
                <ArrowRight size={14} className="hidden transition-transform group-hover:translate-x-1 sm:block" />
              </a>

              <a
                href="tel:+6282174635218"
                title="Telepon Yusuf Suzuki 082174635218"
                aria-label="Telepon Yusuf Suzuki 082174635218"
                className="inline-flex w-full items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                <Phone size={16} strokeWidth={1.5} className="text-white/70" />
                0821 7463 5218
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
