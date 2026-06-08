import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, CarFront, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
import { Car } from "@/data/cars";
import { buildWhatsAppUrl } from "@/lib/utils";

interface CarCardProps {
  car: Car;
  index?: number;
  cityName?: string;
}

export default function CarCard({ car, cityName }: CarCardProps) {
  const customWaMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan tertarik dengan mobil ${car.name}. Mohon info harga OTR dan promo terbarunya.`
    : car.whatsappMessage;

  const formatMaskedDiscount = (amount: number) => {
    const millions = Math.floor(amount / 1000000).toString();
    return millions.length > 1 ? `${millions[0]}x.000.000` : `${millions}.000.000`;
  };

  return (
    <article className="card-sharp red-edge group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-gray-100 sm:h-64">
        <Link href={`/mobil/${car.slug}`} className="absolute inset-0 z-10">
          <span className="sr-only">Lihat detail mobil Suzuki {car.name}</span>
        </Link>

        <Image
          src={car.heroImage || "/logo.png"}
          alt={`Mobil Suzuki ${car.name} di Jogja`}
          fill
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_42%,rgba(227,6,19,0.18)_43%,transparent_47%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
          <span className="h-2 w-2 bg-red-600 shadow-[0_0_12px_rgba(227,6,19,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white drop-shadow">
            {car.category}
          </span>
        </div>

        <div className="absolute right-4 top-4 z-20 flex flex-col items-end gap-2">
          {car.isNew && (
            <span className="inline-flex items-center gap-1 bg-red-600 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white shadow-red-glow">
              <Sparkles size={10} /> Baru
            </span>
          )}
          {car.isBestSeller && (
            <span className="inline-flex items-center gap-1 border border-white/25 bg-black/55 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <TrendingUp size={10} /> Laris
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-4 border-t border-white/15 pt-3">
          <p className="text-[9px] font-black uppercase tracking-[0.24em] text-white/60">Suzuki lineup</p>
          <CarFront size={18} className="text-red-500" />
        </div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col bg-white p-5 sm:p-6">
        <div className="mb-5 flex-1">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-red-600">
            Harga mulai
          </p>
          <p className="mb-4 text-xl font-black uppercase leading-tight tracking-tighter text-gray-950 transition-colors group-hover:text-red-600 sm:text-2xl">
            <Link href={`/mobil/${car.slug}`}>
              {car.name}
            </Link>
          </p>

          <div className="grid gap-3 border-y border-gray-100 py-4">
            <div>
              <p className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{car.startingPrice}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Angsuran {car.monthlyInstallment}/bln
              </p>
            </div>

            {car.maxDiscount && car.maxDiscount > 0 ? (
              <div className="inline-flex w-fit items-center gap-2 bg-red-50 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-red-600">
                <BadgePercent size={13} /> Diskon s/d {formatMaskedDiscount(car.maxDiscount)}
              </div>
            ) : (
              <div className="inline-flex w-fit items-center gap-2 bg-gray-100 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-gray-500">
                <BadgePercent size={13} /> Promo tersedia
              </div>
            )}
          </div>
        </div>

        <div className="relative z-20 grid grid-cols-2 gap-2">
          <Link
            href={`/mobil/${car.slug}`}
            className="group/btn inline-flex items-center justify-center gap-2 border border-gray-200 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-gray-700 transition-all hover:border-gray-950 hover:bg-gray-950 hover:text-white"
          >
            Detail {car.name}
            <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>

          <a
            href={buildWhatsAppUrl(customWaMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-red-600 bg-red-600 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:border-gray-950 hover:bg-gray-950"
            title={`Tanya mobil Suzuki ${car.name} via WhatsApp`}
          >
            <MessageCircle size={13} /> Tanya {car.name}
          </a>
        </div>
      </div>
    </article>
  );
}
