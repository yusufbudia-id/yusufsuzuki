import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Alamat Pusat",
    desc: "Suzuki Sumber Baru Mobil\nJl. Magelang KM 8, Mlati, Yogyakarta",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    desc: "Senin – Sabtu: 08.00 – 17.00 WIB\nMinggu: Tutup",
  },
  {
    icon: Phone,
    title: "Kontak",
    desc: "Yusuf Suzuki\n0821 7463 5218",
  },
];

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Suzuki%20Sumber%20Baru%20Mobil%20Jl.%20Magelang%20KM%208%20Mlati%20Yogyakarta";

export default function MapSection({ cityName }: { cityName?: string }) {
  return (
    <section className="motion-section relative overflow-hidden bg-white py-14 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="container-main relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="motion-enter-left">
            <span className="section-label">Lokasi Showroom</span>
            <h2 className="section-title mt-4">Kunjungi Dealer Kami</h2>
            <p className="section-subtitle hidden sm:block">
              Datang langsung ke showroom pusat untuk melihat unit display secara detail. Kami juga siap melayani pengiriman unit dan test drive untuk wilayah <strong className="text-gray-950">{cityName ? cityName : "Yogyakarta dan sekitarnya"}</strong>.
            </p>

            <div className="mt-10 space-y-6">
              {infoItems.map((item) => (
                <div key={item.title} className="motion-card group flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center border border-gray-200 bg-white text-gray-950 shadow-card transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-black uppercase tracking-[0.18em] text-gray-950">{item.title}</p>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="red-edge motion-reveal-right motion-shine relative min-h-[360px] overflow-hidden border border-gray-200 bg-[#050505] p-6 text-white shadow-card-hover transition-colors duration-500 hover:border-red-600 sm:p-8 lg:min-h-[520px]">
            <div className="surface-grid absolute inset-0 opacity-35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(227,6,19,0.18),transparent_32%)]" />
            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between lg:min-h-[460px]">
              <div>
                <span className="badge-red">Google Maps</span>
                <p className="mt-8 text-3xl font-black uppercase leading-tight tracking-tighter md:text-5xl">
                  Suzuki Sumber Baru Mobil Jogja
                </p>
                <p className="mt-5 hidden max-w-md text-sm leading-7 text-white/60 sm:block">
                  Buka lokasi showroom di Google Maps tanpa memuat script peta berat di halaman utama. Ini membantu halaman lebih ringan dan tetap mudah diakses pengunjung.
                </p>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 border border-white/20 bg-white px-6 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-gray-950 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white sm:w-auto"
              >
                Buka Lokasi Dealer Suzuki Jogja
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
