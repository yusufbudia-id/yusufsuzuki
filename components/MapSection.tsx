import { Clock, MapPin, Phone } from "lucide-react";

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

export default function MapSection({ cityName }: { cityName?: string }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="container-main relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-label">Lokasi Showroom</span>
            <h2 className="section-title mt-4">Kunjungi Dealer Kami</h2>
            <p className="section-subtitle">
              Datang langsung ke showroom pusat untuk melihat unit display secara detail. Kami juga siap melayani pengiriman unit dan test drive untuk wilayah <strong className="text-gray-950">{cityName ? cityName : "Yogyakarta dan sekitarnya"}</strong>.
            </p>

            <div className="mt-10 space-y-6">
              {infoItems.map((item) => (
                <div key={item.title} className="group flex items-start gap-5">
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

          <div className="red-edge relative h-[420px] overflow-hidden border border-gray-200 bg-gray-100 shadow-card-hover transition-colors duration-500 hover:border-red-600 lg:h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-black uppercase tracking-[0.2em] text-gray-400">
              Memuat Peta...
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Suzuki%20Mlati%20Sumber%20Baru%20Mobil&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Suzuki Sumber Baru Mobil"
              className="relative z-10 h-full w-full grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
