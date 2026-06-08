import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, Navigation, UserRoundCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontak – Suzuki Sumber Baru Mobil Jogja | Yusuf Suzuki 0821 7463 5218",
  description: "Hubungi Yusuf Suzuki di Suzuki Sumber Baru Mobil, Jl. Magelang KM 8 Yogyakarta. WhatsApp: 0821 7463 5218. Senin–Sabtu 08.00–17.00.",
};

const contactItems = [
  { icon: Phone, label: "Nomor WhatsApp", value: "0821 7463 5218\n(Yusuf Suzuki)" },
  { icon: MapPin, label: "Alamat Showroom", value: "Suzuki Sumber Baru Mobil\nJl. Magelang KM 8, Sendangadi, Mlati, Sleman, Yogyakarta" },
  { icon: Clock, label: "Jam Operasional", value: "Senin – Sabtu: 08.00 – 17.00 WIB\nMinggu: Tutup (Bisa Janjian)" },
];

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Hubungi Kami"
        title="Kontak & Lokasi Dealer"
        description="Kunjungi showroom Suzuki Sumber Baru Mobil atau hubungi Yusuf Suzuki untuk konsultasi unit, promo, test drive, dan simulasi kredit."
        stats={[
          { value: "08-17", label: "Jam Layanan" },
          { value: "KM 8", label: "Jl. Magelang" },
          { value: "WA", label: "Respon Cepat" },
          { value: "DIY", label: "Area Layanan" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki dan promo yang tersedia.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Chat Yusuf
        </a>
        <a
          href="https://maps.google.com/maps?q=Suzuki%20Mlati%20Sumber%20Baru%20Mobil,%20Sleman"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
        >
          <Navigation size={16} /> Buka Maps
        </a>
      </PageHero>

      <section className="container-main py-16 md:py-24">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="red-edge border border-gray-200 bg-white p-8 shadow-card md:p-12">
              <p className="section-label mb-4">Informasi Dealer</p>
              <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter text-gray-950 md:text-3xl">Detail Kontak Resmi</h2>
              <div className="space-y-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="group flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gray-200 bg-gray-50 text-gray-900 shadow-sm transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-black uppercase tracking-widest text-gray-900">{item.label}</p>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-gray-500">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark w-full py-5"
            >
              <MessageCircle size={18} /> Chat Yusuf Via WhatsApp
            </a>
          </div>

          <div className="relative min-h-[500px] overflow-hidden border border-gray-200 bg-gray-200 shadow-card-hover">
            <iframe
              src="https://maps.google.com/maps?q=Suzuki%20Mlati%20Sumber%20Baru%20Mobil,%20Sleman&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Suzuki Sumber Baru Mobil – Jl. Magelang KM 8"
            />
          </div>
        </div>

        <div className="relative overflow-hidden border border-gray-800 bg-[#050505] p-8 text-white shadow-dark-glow md:p-16">
          <div className="absolute inset-0 bg-red-radial opacity-70" />
          <div className="absolute inset-0 bg-automotive-grid bg-[size:56px_56px] opacity-30" />
          <div className="absolute right-0 top-0 h-full w-64 translate-x-32 skew-x-12 bg-white/5 transition-transform duration-1000" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-16">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden border border-white/10 bg-gray-900 shadow-2xl md:mx-0">
              <img
                src="/kontak/photo.jpg"
                alt="Yusuf Suzuki Sales Executive"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="text-center md:col-span-2 md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-red-500">
                <UserRoundCheck size={14} /> Sales Executive
              </div>
              <h3 className="mb-6 text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">Yusuf Suzuki</h3>
              <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/55 md:mx-0 md:text-base">
                Konsultan penjualan Suzuki yang siap membantu Anda menganalisis kebutuhan, memilih varian, menghitung simulasi kredit, dan memastikan proses pembelian berjalan jelas dari awal sampai serah terima unit.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-6 py-3.5">
                  <Phone size={16} className="text-red-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-200">0821 7463 5218</span>
                </div>
                <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-6 py-3.5">
                  <MapPin size={16} className="text-red-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-200">Jl. Magelang KM 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
