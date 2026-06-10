import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle, Timer } from "lucide-react";
import { promos } from "@/data/promos";
import { buildWhatsAppUrl } from "@/lib/utils";

const parseIndonesianDate = (dateStr: string) => {
  const months: { [key: string]: number } = {
    januari: 0,
    februari: 1,
    maret: 2,
    april: 3,
    mei: 4,
    juni: 5,
    juli: 6,
    agustus: 7,
    september: 8,
    oktober: 9,
    november: 10,
    desember: 11,
  };

  const parts = dateStr.toLowerCase().trim().split(" ");
  if (parts.length !== 3) return new Date(8640000000000000);

  const day = Number.parseInt(parts[0], 10);
  const month = months[parts[1]];
  const year = Number.parseInt(parts[2], 10);

  if (Number.isNaN(day) || month === undefined || Number.isNaN(year)) {
    return new Date(8640000000000000);
  }

  return new Date(year, month, day, 23, 59, 59);
};

export function PromoCard({ promo, cityName }: { promo: typeof promos[0]; index?: number; cityName?: string }) {
  const waText = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan tertarik dengan promo: ${promo.title}. Mohon info syarat dan ketersediaannya.`
    : `Halo Yusuf Suzuki, saya tertarik dengan promo: ${promo.title}. Mohon info syarat dan ketersediaannya.`;

  return (
    <article className="card-sharp red-edge motion-enter-up group relative flex h-full flex-col overflow-hidden">
      <Link href={`/promo/${promo.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Lihat detail promo Suzuki {promo.title}</span>
      </Link>

      <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
        <Image
          src={promo.image}
          alt={`Promo Suzuki ${promo.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute left-4 top-4 z-20">
          <span className="badge-red">{promo.badge}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-20 border-t border-white/15 pt-3">
          <p className="text-sm font-black uppercase leading-tight tracking-tight text-white sm:text-base">
            {promo.highlight}
          </p>
        </div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col bg-white p-5">
        <p className="mb-3 line-clamp-2 text-lg font-black uppercase leading-tight tracking-tight text-gray-950 transition-colors group-hover:text-red-600">
          {promo.title}
        </p>

        <div className="mb-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
          <Calendar size={13} />
          Berlaku s.d. {promo.validUntil}
        </div>

        <div className="relative z-20 mt-auto grid grid-cols-[1fr_auto] gap-2 border-t border-gray-100 pt-4">
          <Link
            href={`/promo/${promo.slug}`}
            className="group/btn inline-flex items-center justify-center gap-2 border border-gray-200 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-gray-700 transition-all hover:border-gray-950 hover:bg-gray-950 hover:text-white"
          >
            Detail {promo.title}
            <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
          <a
            href={buildWhatsAppUrl(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center border border-red-600 bg-red-600 text-white transition-all hover:border-whatsapp hover:bg-whatsapp"
            aria-label={`Tanya promo Suzuki ${promo.title} via WhatsApp`}
          >
            <span className="sr-only">Tanya promo Suzuki {promo.title} via WhatsApp</span>
            <MessageCircle size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PromoSection({ cityName }: { cityName?: string }) {
  if (!promos || promos.length === 0) return null;

  const today = new Date();
  const validPromos = promos.filter((promo) => parseIndonesianDate(promo.validUntil) >= today);
  if (validPromos.length === 0) return null;

  const sortedPromos = [...validPromos].sort(
    (a, b) => parseIndonesianDate(a.validUntil).getTime() - parseIndonesianDate(b.validUntil).getTime()
  );

  const displayPromos = sortedPromos.slice(0, 5);
  const featuredPromo = displayPromos[0];
  const regularPromos = displayPromos.slice(1);

  const featuredWaText = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin ambil promo: ${featuredPromo.title}. Mohon info detailnya.`
    : `Halo Yusuf Suzuki, saya ingin ambil promo: ${featuredPromo.title}. Mohon info detailnya.`;

  return (
    <section className="surface-dark relative overflow-hidden py-14 md:py-28">
      <div className="surface-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />
      <div className="absolute -right-20 top-20 h-80 w-80 bg-red-600/10 blur-3xl" />

      <div className="container-main relative z-10">
        <div className="motion-enter-up mx-auto mb-8 max-w-3xl text-center md:mb-16">
          <span className="section-label justify-center">Penawaran Terbatas</span>
          <h2 className="section-title-dark mt-4">
            Promo Dealer Suzuki {cityName ? cityName : "Jogja"}
          </h2>
          <p className="section-subtitle-dark mx-auto hidden sm:block">
            Penawaran promo terbaru mobil Suzuki dengan konsultasi unit, estimasi kredit, dan detail syarat promo langsung via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <article className="motion-enter-left group relative flex min-h-[360px] overflow-hidden border border-white/10 bg-black shadow-dark-glow md:min-h-[540px] lg:col-span-8">
            <Link href={`/promo/${featuredPromo.slug}`} className="absolute inset-0 z-20">
              <span className="sr-only">Lihat detail promo Suzuki {featuredPromo.title}</span>
            </Link>

            <Image
              src={featuredPromo.image}
              alt={`Promo terbaru Suzuki ${featuredPromo.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-top opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/48 to-black/10" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_44%,rgba(227,6,19,0.18)_45%,transparent_49%)]" />

            <div className="relative z-30 mt-auto max-w-3xl p-6 md:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="badge-red">{featuredPromo.badge}</span>
                <span className="badge-dark">
                  <Timer size={13} /> Berlaku s.d. {featuredPromo.validUntil}
                </span>
              </div>

              <p className="max-w-3xl text-2xl font-black uppercase leading-[1.02] tracking-tighter text-white sm:text-3xl md:text-5xl">
                {featuredPromo.title}
              </p>
              <p className="mt-4 hidden max-w-2xl text-sm font-semibold uppercase leading-relaxed tracking-[0.08em] text-white/70 sm:block md:text-base">
                {featuredPromo.highlight}
              </p>

              <div className="relative z-30 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppUrl(featuredWaText)} target="_blank" rel="noopener noreferrer" className="btn-red w-full sm:w-auto">
                  <MessageCircle size={16} /> <span className="sm:hidden">Ambil Promo</span><span className="hidden sm:inline">Ambil Promo {featuredPromo.title}</span>
                </a>
                <Link href={`/promo/${featuredPromo.slug}`} className="inline-flex w-full items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-white hover:text-gray-950 sm:w-auto">
                  Detail <span className="hidden sm:inline">Penawaran</span> <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {regularPromos.slice(0, 2).map((promo, index) => (
              <PromoCard key={promo.slug} promo={promo} index={index + 1} cityName={cityName} />
            ))}
          </div>
        </div>

        {regularPromos.length > 2 && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-8">
            {regularPromos.slice(2, 4).map((promo, index) => (
              <PromoCard key={promo.slug} promo={promo} index={index + 3} cityName={cityName} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link href="/promo" className="btn-white w-full sm:w-auto">
            Lihat Semua Promo Suzuki
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
