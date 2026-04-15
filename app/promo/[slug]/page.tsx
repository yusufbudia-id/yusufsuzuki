import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MessageCircle, AlertCircle } from "lucide-react";
import { promos } from "@/data/promos"; 
import { WA_BASE_URL } from "@/lib/utils";
import type { Metadata } from "next";

// Ubah parameter dari id menjadi slug
interface PromoPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PromoPageProps): Metadata {
  const promo = promos.find((p) => p.slug === params.slug);
  
  if (!promo) {
    return { title: "Promo Tidak Ditemukan" };
  }

  return {
    title: `${promo.title} | Promo Suzuki Jogja`,
    description: promo.highlight,
  };
}

export function generateStaticParams() {
  return promos.map((promo) => ({
    slug: promo.slug,
  }));
}

export default function PromoDetailPage({ params }: PromoPageProps) {
  const promo = promos.find((p) => p.slug === params.slug);

  if (!promo) {
    notFound();
  }

  const waMsg = `Halo Yusuf Suzuki, saya tertarik dengan promo: *${promo.title}*. Mohon info lebih lanjut ya.`;

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-semibold text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-gray-900">
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              className="object-contain md:object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-red-50 text-red-600 border border-red-100 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                {promo.badge}
              </span>
              <span className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                <Calendar size={14} />
                Berlaku s/d {promo.validUntil}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-8">
              {promo.title}
            </h1>

            <div className="prose prose-gray max-w-none mb-10">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {promo.description}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 mb-10">
              <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-blue-800 leading-relaxed">
                Promo ini memiliki kuota terbatas dan syarat ketentuan berlaku. Segera hubungi wiraniaga kami sebelum masa promo berakhir.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8">
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-xl flex justify-center items-center gap-3 transition-all font-bold text-sm uppercase tracking-widest shadow-lg shadow-[#25D366]/30 active:scale-95"
              >
                <MessageCircle size={20} />
                Klaim Promo via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}