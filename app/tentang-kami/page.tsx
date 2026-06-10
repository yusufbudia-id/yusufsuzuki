import type { Metadata } from "next";
import Link from "next/link";
import { Users, Award, Car, ThumbsUp, MapPin, Phone, ArrowRight, MessageCircle } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import { areas } from "@/data/areas";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tentang Kami – Suzuki Sumber Baru Mobil Jogja",
  description: "Dealer resmi Suzuki Yogyakarta, Jl. Magelang KM 8. Lebih dari 10 tahun melayani pelanggan dengan profesional dan amanah.",
};

const stats = [
  { icon: Car, value: "500+", label: "Mobil Terjual" },
  { icon: ThumbsUp, value: "98%", label: "Pelanggan Puas" },
  { icon: Award, value: "10+", label: "Tahun Pengalaman" },
  { icon: Users, value: "1000+", label: "Pelanggan Setia" },
];

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Profil Dealer"
        title="Tentang Suzuki Sumber Baru"
        description="Dealer resmi Suzuki terpercaya di Yogyakarta dan sekitarnya. Fokus kami adalah pelayanan transparan, proses mudah, serta pendampingan pembelian dari konsultasi sampai serah terima unit."
        stats={[
          { value: "10+", label: "Tahun Melayani" },
          { value: "500+", label: "Mobil Terjual" },
          { value: "98%", label: "Pelanggan Puas" },
          { value: "DIY", label: "Area Layanan" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin konsultasi pembelian mobil Suzuki.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Konsultasi Sekarang
        </a>
        <Link href="/kontak" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Lokasi Dealer
        </Link>
      </PageHero>

      <section className="container-main motion-section py-20 md:py-28">
        <div className="motion-section mb-24 grid grid-cols-1 items-center gap-16 md:gap-20 lg:grid-cols-2">
          <div>
            <p className="section-label mb-6">Siapa Kami</p>
            <h2 className="mb-8 text-3xl font-black uppercase leading-tight tracking-tighter text-gray-950 md:text-4xl">
              Dealer Suzuki Terpercaya <br /> di Jantung Jogja
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-gray-500 md:text-base">
              <p>
                <strong className="text-gray-900">Suzuki Sumber Baru Mobil</strong> adalah dealer resmi PT Suzuki Indomobil Sales yang berlokasi strategis di <strong className="text-gray-900">Jl. Magelang KM 8, Yogyakarta</strong>. Kami hadir untuk melayani masyarakat Jogja dan sekitarnya dalam mendapatkan lini produk Suzuki terbaik.
              </p>
              <p>
                Dengan pengalaman lebih dari 10 tahun, kami telah membantu lebih dari 500 keluarga dan pelaku usaha mendapatkan kendaraan operasional maupun mobil impian mereka. Kepercayaan pelanggan adalah fondasi utama layanan kami.
              </p>
              <p>
                Kami tidak hanya menjual kendaraan — kami memastikan setiap pelanggan mendapatkan pengalaman berbelanja yang transparan, mudah, dan tanpa tekanan. Dari konsultasi awal hingga serah terima kunci, kami mendampingi Anda di setiap langkah.
              </p>
            </div>
          </div>

          <div className="motion-reveal-right group relative">
            <div className="overflow-hidden border border-gray-200 shadow-card-hover">
              <img
                src="/showroom/showroom.jpg"
                alt="Showroom Suzuki"
                className="h-[400px] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 border border-gray-800 bg-gray-950 px-8 py-6 text-white shadow-xl md:-left-8">
              <p className="mb-1 text-4xl font-black">10<span className="text-red-600">+</span></p>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Tahun Melayani</p>
            </div>
          </div>
        </div>

        <div className="motion-section mb-24 mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="motion-card motion-hover-lift group border border-gray-200 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-red-600 hover:shadow-card-hover md:p-8">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-gray-50 text-gray-900 transition-colors duration-500 group-hover:bg-red-600 group-hover:text-white">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <p className="mb-2 text-3xl font-black tracking-tighter text-gray-950">{s.value}</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="motion-section motion-shine relative mb-24 overflow-hidden border border-gray-800 bg-[#050505] p-8 text-white shadow-dark-glow md:p-16">
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
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Sales Executive</p>
              <h3 className="mb-6 text-3xl font-black uppercase tracking-tighter text-white md:text-5xl">Yusuf Suzuki</h3>
              <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/55 md:mx-0 md:text-base">
                Sebagai konsultan penjualan otomotif profesional, Yusuf siap membantu Anda memilih mobil, menyesuaikan skema kredit, mengecek promo, dan memastikan proses pembelian berjalan jelas.
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

        <div className="motion-section border-t border-gray-200 pt-16">
          <div className="mb-16 text-center">
            <p className="section-label mb-4 justify-center">Area Cover Penjualan</p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-gray-950 md:text-4xl">
              Hadir Lebih Dekat di Kota Anda
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 md:text-base">
              Kami melayani pembelian unit Suzuki, proses kredit, hingga pengiriman mobil langsung ke depan rumah Anda untuk wilayah berikut.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/dealer/${area.slug}`}
                className="motion-card motion-hover-lift group block border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-red-600 hover:shadow-card-hover"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-50 text-gray-900 transition-colors duration-500 group-hover:bg-red-600 group-hover:text-white">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="line-clamp-1 text-xl font-black uppercase tracking-tight text-gray-950 transition-colors group-hover:text-red-600">
                    Suzuki {area.name}
                  </h3>
                </div>
                <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-500">{area.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 transition-colors group-hover:text-red-600">
                  Kunjungi Dealer <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
