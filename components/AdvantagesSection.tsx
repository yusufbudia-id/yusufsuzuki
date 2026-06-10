import { BadgePercent, CarFront, CreditCard, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

const baseAdvantages = [
  {
    icon: ShieldCheck,
    title: "Dealer Resmi",
    desc: "Unit bergaransi resmi pabrik, proses pembelian transparan, dan layanan purna jual terarah.",
  },
  {
    icon: MapPin,
    title: "Area Jogja & Sekitarnya",
    desc: "Melayani Yogyakarta, Magelang, Klaten, Purworejo, dan area sekitar dengan koordinasi cepat.",
  },
  {
    icon: CreditCard,
    title: "Kredit Mudah",
    desc: "Simulasi kredit rapi, tenor fleksibel, dan pendampingan pengajuan ke leasing rekanan.",
  },
  {
    icon: BadgePercent,
    title: "DP Ringan",
    desc: "Pilihan skema DP dan cicilan yang bisa disesuaikan dengan kebutuhan budget bulanan.",
  },
  {
    icon: CarFront,
    title: "Test Drive Gratis",
    desc: "Coba unit Suzuki pilihan Anda sebelum membeli dengan jadwal yang bisa dikonsultasikan.",
  },
  {
    icon: MessageCircle,
    title: "Fast Response",
    desc: "Yusuf Suzuki siap membantu via WhatsApp untuk info unit, promo, kredit, dan test drive.",
  },
];

export default function AdvantagesSection({ cityName }: { cityName?: string }) {
  const advantages = baseAdvantages.map((item) => {
    if (item.title === "Area Jogja & Sekitarnya") {
      return {
        ...item,
        title: `Area ${cityName ? cityName : "Jogja"} & Sekitarnya`,
        desc: `Melayani pengiriman dan layanan sales untuk warga ${cityName ? cityName : "Yogyakarta, Magelang, Klaten, Purworejo, dan sekitarnya"}.`,
      };
    }
    return item;
  });

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 bg-red-600/5 blur-3xl" />

      <div className="container-main relative">
        <div className="motion-enter-up mx-auto mb-8 max-w-3xl text-center md:mb-16">
          <span className="section-label justify-center">Mengapa Kami?</span>
          <h2 className="section-title mt-4">
            <span className="md:hidden">Kenapa Pilih Yusuf Suzuki?</span>
            <span className="hidden md:inline">Keunggulan Dealer Resmi Suzuki {cityName ? cityName : "Jogja"}</span>
          </h2>
          <p className="section-subtitle mx-auto hidden sm:block">
            Beli mobil Suzuki impian dengan proses jelas, harga transparan, harga OTR mudah dicek, dan arahan langsung dari konsultan yang responsif.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-6 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {advantages.map((item, index) => (
            <article
              key={item.title}
              className={`card-sharp red-edge motion-enter-up group flex w-[78vw] shrink-0 snap-center flex-col p-5 sm:w-auto md:p-8 stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="mb-6 grid h-14 w-14 place-items-center border border-gray-200 bg-gray-950 text-white transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600">
                <item.icon size={24} strokeWidth={1.7} />
              </div>
              <p className="mb-3 text-lg font-black uppercase leading-tight tracking-tight text-gray-950 transition-colors group-hover:text-red-600">
                {item.title}
              </p>
              <p className="hidden text-sm leading-relaxed text-gray-500 sm:block">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
