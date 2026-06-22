import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Alamat Pusat",
    desc: "Suzuki Sumber Baru Mobil\nJl. Magelang KM 8.5, Sendangadi, Sleman, DIY 55285",
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

const mapsUrl = "https://maps.app.goo.gl/pedJovQizb3M2X1S7";
const mapEmbedUrl = "https://www.google.com/maps?q=Suzuki%20Sumber%20Baru%20Mobil%20Jl.%20Magelang%20KM%208.5%20Sendangadi%20Sleman%20DIY&z=15&output=embed";

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
              Datang langsung ke showroom pusat untuk melihat unit display secara detail. Kami juga siap melayani pengiriman unit dan test drive untuk wilayah <strong className="text-gray-950">{cityName || "Yogyakarta dan sekitarnya"}</strong>.
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

          <div className="red-edge motion-reveal-right relative min-h-[360px] overflow-hidden border border-gray-200 bg-gray-100 shadow-card-hover transition-colors duration-500 hover:border-red-600 lg:min-h-[520px]">
            <iframe
              src={mapEmbedUrl}
              title="Peta lokasi Suzuki Sumber Baru Mobil Jogja"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-20 text-white sm:p-8">
              <span className="inline-flex border border-white/30 bg-black/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">Google Maps</span>
              <p className="mt-3 max-w-md text-xl font-black uppercase leading-tight tracking-tighter sm:text-2xl">Suzuki Sumber Baru Mobil Jogja</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto mt-5 inline-flex items-center gap-2 border border-white/30 bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-gray-950 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                Buka di Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
