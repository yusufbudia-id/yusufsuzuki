import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; // Pastikan Image di-import
import { Download, CheckCircle2, ChevronRight, Gauge, Settings, ShieldCheck, Car, Calendar } from "lucide-react"; // Tambahkan Calendar
import { cars } from "@/data/cars";
import { articles } from "@/data/articles"; // Import data artikel
import { formatCurrency, WA_BASE_URL } from "@/lib/utils";
import PricelistTable from "@/components/PricelistTable";
import FadeIn from "@/components/FadeIn";
import OtherCarsCarousel from "@/components/OtherCarsCarousel";

type Props = {
  params: Promise<{ slug: string }>;
};

// --- FUNGSI BANTUAN UNTUK SEO & SORTING TANGGAL ---
function parseIndonesianDate(dateStr: string) {
  const months: { [key: string]: number } = {
    "Januari": 0, "Februari": 1, "Maret": 2, "April": 3, "Mei": 4, "Juni": 5,
    "Juli": 6, "Agustus": 7, "September": 8, "Oktober": 9, "November": 10, "Desember": 11
  };
  const parts = dateStr.split(" ");
  if (parts.length !== 3) return 0;
  const day = parseInt(parts[0], 10);
  const month = months[parts[1]] || 0;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day).getTime();
}

// 1. META DATA SEO PRODUK SUPER KUAT
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);
  
  if (!car) {
    return { title: "Mobil Tidak Ditemukan - Suzuki Sumber Baru" };
  }

  const carUrl = `https://www.suzukiautojogja.com/mobil/${car.slug}`;
  const fullImageUrl = `https://www.suzukiautojogja.com${car.heroImage || "/logo.png"}`;

  return {
    title: `Harga & Promo Suzuki ${car.name} Jogja Terbaru 2026`,
    description: `Dapatkan informasi lengkap spesifikasi, harga OTR terbaru, dan promo kredit DP ringan untuk Suzuki ${car.name} di Yogyakarta & Magelang. Hubungi Yusuf Suzuki 0821-7463-5218.`,
    keywords: [
      `suzuki ${car.name.toLowerCase()} jogja`,
      `harga suzuki ${car.name.toLowerCase()} jogja`,
      `kredit suzuki ${car.name.toLowerCase()} magelang`,
      `promo dp ringan suzuki ${car.name.toLowerCase()}`,
      `spesifikasi suzuki ${car.name.toLowerCase()}`,
      `dealer suzuki mlati`,
      `beli suzuki ${car.name.toLowerCase()} plat ab`
    ].join(", "),
    alternates: {
      canonical: carUrl,
    },
    openGraph: {
      title: `Suzuki ${car.name} - Harga & Promo Jogja Terkini`,
      description: `Beli Suzuki ${car.name} di Jogja sekarang. DP Ringan, angsuran bisa disesuaikan, dan gratis test drive ke rumah Anda.`,
      url: carUrl,
      siteName: "Suzuki Auto Jogja",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `Promo Suzuki ${car.name} di Jogja`,
        },
      ],
      locale: "id_ID",
      type: "website", 
    },
    twitter: {
      card: "summary_large_image",
      title: `Harga Suzuki ${car.name} OTR Jogja`,
      description: `Cek promo DP ringan dan spesifikasi lengkap Suzuki ${car.name} di dealer resmi Suzuki Sumber Baru Mobil.`,
      images: [fullImageUrl],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);

  if (!car) {
    notFound();
  }

  const specs = [
    { icon: Gauge, label: "Mesin", value: car.specifications.mesin },
    { icon: Settings, label: "Transmisi", value: car.specifications.transmisi },
    { icon: Car, label: "Dimensi", value: car.specifications.dimensi },
    { icon: ShieldCheck, label: "Konsumsi BBM", value: car.specifications.konsumsiBBM },
  ];

  const variants = car.variants || [];
  const otherCars = cars.filter((c) => c.slug !== car.slug);
  const waMsg = `Halo Yusuf Suzuki, saya ingin menanyakan detail, promo, dan ketersediaan unit untuk mobil *${car.name}*.`;

  let brochureLink = car.brochureUrl;
  if (!brochureLink) {
    const fileName = car.slug === "carry-pickup" ? "carry" : car.slug;
    brochureLink = `/brosur/${fileName}.pdf`;
  }

  // Mengambil 3 Artikel Terbaru
  const latestArticles = [...articles]
    .sort((a, b) => parseIndonesianDate(b.date) - parseIndonesianDate(a.date))
    .slice(0, 3);

  // 2. SCHEMA MARKUP PRODUCT & AGGREGATE OFFER
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Suzuki ${car.name}`,
    "image": `https://www.suzukiautojogja.com${car.heroImage || "/logo.png"}`,
    "description": car.description || `Spesifikasi dan harga OTR Yogyakarta untuk Suzuki ${car.name}.`,
    "brand": {
      "@type": "Brand",
      "name": "Suzuki"
    },
    "category": car.category,
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": car.startingPriceNum,
      "priceCurrency": "IDR",
      "offerCount": variants.length > 0 ? variants.length : 1,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Suzuki Sumber Baru Mobil Jogja",
        "url": "https://www.suzukiautojogja.com"
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - SPACING DIPERBAIKI */}
      <div className="relative bg-[#050B14] pt-24 pb-20 md:pt-28 md:pb-32 overflow-hidden border-b border-gray-900">
        
        {/* Ornamen Latar Belakang agar tidak flat */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-bl from-gray-800/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-8 md:mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-700" />
            <Link href="/mobil" className="hover:text-white transition-colors">Produk</Link>
            <ChevronRight size={12} className="text-gray-700" />
            <span className="text-white">{car.name}</span>
          </nav>

          {/* Menggunakan proporsi 5 kolom untuk teks, 7 kolom untuk gambar mobil */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* BAGIAN TEKS KIRI */}
            <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
              <FadeIn delay={0.1} direction="left">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-gray-300 text-[10px] font-bold px-3 py-1 rounded-none mb-6 uppercase tracking-[0.2em] border border-white/10">
                  {car.category || "Mobil Suzuki"}
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[1.1]">
                  {car.name}
                </h1>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  {car.description || `Temukan ketangguhan dan kenyamanan berkendara bersama Suzuki ${car.name}. Dirancang khusus untuk memenuhi gaya hidup dan kebutuhan Anda di setiap perjalanan.`}
                </p>

                <div className="mb-10 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-red-600"></div>
                  <div className="pl-5">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Mulai Dari</p>
                    <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                      {formatCurrency(car.startingPriceNum)}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 font-medium">OTR Yogyakarta (Plat AB)</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-200 text-gray-900 py-4 px-8 flex justify-center items-center gap-3 transition-all font-black text-[10px] uppercase tracking-[0.2em] rounded-none shadow-lg shadow-white/10 hover:shadow-white/20"
                  >
                    <CheckCircle2 size={16} />
                    Minta Penawaran
                  </a>
                  <Link
                    href="/test-drive"
                    className="bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white py-4 px-8 flex justify-center items-center gap-3 transition-all font-black text-[10px] uppercase tracking-[0.2em] rounded-none backdrop-blur-sm"
                  >
                    Booking Test Drive
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* BAGIAN GAMBAR KANAN (Floating Car) */}
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              <FadeIn delay={0.3} direction="none">
                <div className="relative w-full aspect-video lg:aspect-[4/3] flex items-center justify-center">
                  {/* Efek Glow di belakang mobil */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-white/5 blur-3xl rounded-full"></div>
                  
                  {car.heroImage ? (
                    <img 
                      src={car.heroImage} 
                      alt={`Suzuki ${car.name}`} 
                      className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  ) : (
                    <h1 className="text-gray-700 text-4xl font-black uppercase tracking-widest relative z-10">FOTO {car.name}</h1>
                  )}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

      {/* 2. SPESIFIKASI UMUM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-200">
        <FadeIn>
          <h2 className="text-2xl font-black text-gray-900 mb-10 uppercase tracking-tighter">Highlight Spesifikasi</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-6 border border-gray-200 rounded-none hover:border-gray-900 transition-colors duration-300 group h-full">
                <spec.icon size={28} strokeWidth={1.5} className="text-gray-400 group-hover:text-gray-900 mb-4 transition-colors" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{spec.label}</p>
                <p className="font-black text-gray-900 text-sm">{spec.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4}>
          <div className="mt-10 flex justify-start">
            <a
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 px-8 font-black text-[10px] uppercase tracking-[0.2em] rounded-none transition-colors border border-gray-200"
            >
              <Download size={16} />
              Unduh E-Brosur (PDF)
            </a>
          </div>
        </FadeIn>
      </div>

      {/* 3. PRICELIST, VARIAN & ARTIKEL TERBARU */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <FadeIn direction="left">
              <span className="inline-block bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-none mb-4 uppercase tracking-[0.2em]">
                Pricelist 2026
              </span>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Daftar Harga Varian</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Pilih area plat nomor Anda untuk melihat harga On The Road (OTR) yang akurat. Harga tidak mengikat dan dapat berubah sewaktu-waktu.
              </p>
              <Link
                href={`/simulasi-kredit?mobil=${car.slug}`}
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white w-full py-4 font-black text-[10px] uppercase tracking-[0.2em] rounded-none transition-colors"
              >
                Hitung Simulasi Kredit
              </Link>

              {/* MUNCULKAN 3 ARTIKEL TERBARU DI SINI */}
              <div className="mt-16 border-t border-gray-200 pt-10">
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">
                  Berita & Update Terbaru
                </h3>
                <div className="flex flex-col gap-5">
                  {latestArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/berita/${article.slug}`}
                      className="group flex gap-4 items-start"
                    >
                      <div className="relative w-20 h-16 shrink-0 bg-gray-100 overflow-hidden border border-gray-200">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[8px] text-red-600 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                          <Calendar size={10} /> {article.date}
                        </span>
                        <h4 className="text-[11px] font-bold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
                          {article.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/berita" 
                  className="inline-block mt-6 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-all pb-1"
                >
                  Lihat Semua Berita &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={0.2} direction="up">
              {variants.length > 0 ? (
                <PricelistTable variants={variants} carName={car.name} />
              ) : (
                <div className="bg-gray-50 border border-gray-200 p-10 text-center">
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Belum Ada Data Harga</p>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 4. REKOMENDASI MOBIL LAIN (CAROUSEL KARTU) */}
      {otherCars.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Eksplorasi Model Lainnya</h2>
                  <p className="text-gray-500 text-sm mt-2">Temukan kendaraan Suzuki yang paling sesuai dengan kebutuhan Anda.</p>
                </div>
                <Link href="/mobil" className="hidden sm:inline-block font-bold text-[10px] text-gray-400 hover:text-gray-900 uppercase tracking-widest border-b border-transparent hover:border-gray-900 transition-colors pb-1">
                  Lihat Semua Mobil &rarr;
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <OtherCarsCarousel cars={otherCars} />
            </FadeIn>

            <div className="mt-8 text-center sm:hidden">
              <FadeIn delay={0.3}>
                <Link href="/mobil" className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] rounded-none transition-colors w-full">
                  Lihat Semua Mobil
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}