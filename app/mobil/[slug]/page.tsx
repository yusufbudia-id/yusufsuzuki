import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, CheckCircle2, ChevronRight, Gauge, Settings, ShieldCheck, Car } from "lucide-react";
import { cars } from "@/data/cars";
import { formatCurrency, WA_BASE_URL } from "@/lib/utils";
import PricelistTable from "@/components/PricelistTable";
import FadeIn from "@/components/FadeIn";
import OtherCarsCarousel from "@/components/OtherCarsCarousel";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);
  
  if (!car) {
    return { title: "Mobil Tidak Ditemukan - Suzuki Sumber Baru" };
  }

  return {
    title: `Harga & Promo ${car.name} Jogja 2026 | Dealer Resmi Suzuki`,
    description: `Dapatkan informasi lengkap spesifikasi, harga terbaru, dan promo kredit DP ringan untuk Suzuki ${car.name} di Yogyakarta. Hubungi Yusuf Suzuki 0821-7463-5218.`,
    keywords: [
      `suzuki ${car.name.toLowerCase()} jogja`,
      `promo mobil suzuki jogja`,
      `kredit mobil suzuki ${car.name.toLowerCase()} jogja`,
      `harga suzuki ${car.name.toLowerCase()} jogja`,
      `dealer suzuki mlati`,
      `spesifikasi ${car.name.toLowerCase()}`
    ].join(", "),
    openGraph: {
      title: `Promo Suzuki ${car.name} Jogja Terbaru`,
      description: `Beli Suzuki ${car.name} di Jogja sekarang. DP Ringan, angsuran bisa disesuaikan, dan gratis test drive ke rumah Anda.`,
      images: [car.heroImage || "/logo.png"],
    },
    alternates: {
      canonical: `https://suzukiautojogja.com/mobil/${car.slug}`,
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

  // --- LOGIKA PINTAR UNTUK AUTO-LINK BROSUR ---
  // Jika di data cars.ts sudah ada link spesifik, gunakan itu. 
  // Jika belum, buat link otomatis ke folder /brosur/
  let brochureLink = car.brochureUrl;
  if (!brochureLink) {
    // Menyesuaikan jika slug-nya 'carry-pickup' tapi nama file-nya 'carry.pdf'
    const fileName = car.slug === "carry-pickup" ? "carry" : car.slug;
    brochureLink = `/brosur/${fileName}.pdf`;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-gray-900 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/mobil" className="hover:text-white transition-colors">Produk</Link>
            <ChevronRight size={12} />
            <span className="text-white">{car.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn delay={0.1} direction="left">
                <span className="inline-block bg-white/5 text-gray-400 text-[10px] font-bold px-3 py-1 rounded-none mb-6 uppercase tracking-[0.2em] border border-white/10">
                  {car.category || "Mobil Suzuki"}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
                  {car.name}
                </h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                  {car.description || `Temukan ketangguhan dan kenyamanan berkendara bersama Suzuki ${car.name}. Dirancang khusus untuk memenuhi gaya hidup dan kebutuhan Anda di setiap perjalanan.`}
                </p>

                <div className="mb-10">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Harga Mulai Dari</p>
                  <p className="text-3xl font-black text-white tracking-tighter">
                    {formatCurrency(car.startingPriceNum)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">*OTR Yogyakarta (Plat AB)</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-200 text-gray-900 py-4 px-8 flex justify-center items-center gap-3 transition-all font-black text-[10px] uppercase tracking-[0.2em] rounded-none shadow-xl"
                  >
                    <CheckCircle2 size={16} />
                    Minta Penawaran
                  </a>
                  <Link
                    href="/test-drive"
                    className="bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white py-4 px-8 flex justify-center items-center gap-3 transition-all font-black text-[10px] uppercase tracking-[0.2em] rounded-none"
                  >
                    Booking Test Drive
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="relative group">
              <FadeIn delay={0.3} direction="none">
                <div className="aspect-[4/3] bg-gray-800 rounded-none overflow-hidden border border-gray-700 shadow-2xl relative flex items-center justify-center p-8">
                  {car.heroImage ? (
                    <img 
                      src={car.heroImage} 
                      alt={`Suzuki ${car.name}`} 
                      className="w-full h-full object-contain scale-100 group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : (
                    <h1 className="text-gray-700 text-4xl font-black uppercase tracking-widest">FOTO {car.name}</h1>
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
              // Menggunakan variabel brochureLink yang sudah pintar mendeteksi file
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

      {/* 3. PRICELIST & VARIAN */}
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
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={0.2} direction="up">
              {variants.length > 0 ? (
                <PricelistTable variants={variants} />
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