import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MessageCircle, AlertCircle } from "lucide-react";
import { promos } from "@/data/promos"; 
import { WA_BASE_URL } from "@/lib/utils";
import type { Metadata } from "next";

interface PromoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PromoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const promo = promos.find((p) => p.slug === slug);
  if (!promo) return { title: "Promo Tidak Ditemukan" };

  return {
    title: `${promo.title} | Dealer Resmi Suzuki Jogja`,
    description: promo.highlight,
  };
}

export async function generateStaticParams() {
  return promos.map((promo) => ({
    slug: promo.slug,
  }));
}

export default async function PromoDetailPage({ params }: PromoPageProps) {
  const { slug } = await params;
  
  const promo = promos.find((p) => p.slug === slug);
  if (!promo) notFound();

  // Ambil maksimal 4 promo lainnya
  const otherPromos = promos.filter((p) => p.slug !== slug).slice(0, 4);
  const waMsg = `Halo Yusuf Suzuki, saya tertarik dengan promo: *${promo.title}* yang saya lihat di website. Mohon info lengkapnya.`;

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-red-600 to-blue-700 z-[60] md:hidden" />

      {/* Kontainer diperlebar menjadi max-w-7xl agar 3 kolom tidak sempit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-bold text-[10px] uppercase tracking-[0.2em] mb-8"
        >
          <ArrowLeft size={14} />
          Kembali ke Beranda
        </Link>

        {/* PEMBAGIAN 3 KOLOM DI LAYAR BESAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* KOLOM 1: GAMBAR (5 Kolom) */}
          <div className="lg:col-span-5">
            <div className="relative w-full bg-gray-100 border border-gray-200 overflow-hidden shadow-sm sticky top-28">
              <div className="relative aspect-square md:aspect-[4/5] w-full">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-contain p-2 md:p-0"
                  priority
                />
              </div>
              <div className="absolute top-6 left-6">
                <span className="bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-2xl">
                  {promo.badge}
                </span>
              </div>
            </div>
          </div>

          {/* KOLOM 2: TEKS & TOMBOL (4 Kolom) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-4">
              <Calendar size={14} />
              Berlaku s/d {promo.validUntil}
            </div>

            <h1 className="text-3xl xl:text-4xl font-black text-gray-900 leading-[1.1] uppercase tracking-tighter mb-6">
              {promo.title}
            </h1>

            <div className="h-1 w-20 bg-gray-900 mb-8" />

            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm xl:text-base font-medium">
                {promo.description}
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-black text-white py-5 px-8 flex justify-center items-center gap-3 transition-all font-black text-xs uppercase tracking-[0.3em] shadow-xl active:scale-95"
              >
                <MessageCircle size={20} />
                Klaim Promo 
              </a>
              
              <div className="flex items-start gap-3 bg-gray-50 p-5 border-l-4 border-gray-900">
                <AlertCircle className="text-gray-400 shrink-0 mt-0.5" size={18} />
                <p className="text-[10px] text-gray-500 font-bold uppercase leading-relaxed tracking-wider">
                  Syarat & ketentuan berlaku. Promo dapat berubah sewaktu-waktu tergantung ketersediaan unit di dealer.
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM 3: SIDEBAR PROMO LAINNYA (3 Kolom) */}
          {otherPromos.length > 0 && (
            <div className="lg:col-span-3 mt-12 lg:mt-0 lg:pl-6 xl:pl-8 lg:border-l border-gray-200">
              <div className="sticky top-28">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-900 m-0">
                    Promo Lainnya
                  </h3>
                </div>
                
                <div className="flex flex-col gap-6">
                  {otherPromos.map((other) => (
                    <Link 
                      key={other.slug} 
                      href={`/promo/${other.slug}`} 
                      className="group flex flex-row lg:flex-col xl:flex-row gap-4 items-start"
                    >
                      {/* Thumbnail (Diperkecil sedikit agar pas di sidebar) */}
                      <div className="relative w-24 h-16 lg:w-full lg:h-32 xl:w-20 xl:h-14 shrink-0 bg-gray-100 overflow-hidden border border-gray-200">
                        <Image 
                          src={other.image} 
                          alt={other.title} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                      </div>
                      
                      {/* Teks */}
                      <div className="flex flex-col justify-center">
                        <span className="text-[8px] text-red-600 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                          <Calendar size={10} /> s/d {other.validUntil}
                        </span>
                        <h4 className="text-[11px] font-black text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug tracking-wider uppercase">
                          {other.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}