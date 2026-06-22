import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Calendar, ArrowRight, MessageCircle, CalendarCheck } from "lucide-react";
import { cars, type DetailedSpecification } from "@/data/cars";
import { getCarSeoContent } from "@/data/carSeo";
import { promos } from "@/data/promos";
import { formatCurrency, WA_BASE_URL } from "@/lib/utils";
import PricelistTable from "@/components/PricelistTable";
import FadeIn from "@/components/FadeIn";
import OtherCarsCarousel from "@/components/OtherCarsCarousel";
import ContactCTA from "@/components/ContactCTA";
import LeadCaptureCard from "@/components/LeadCaptureCard";
import CarDetailStickyCTA from "@/components/CarDetailStickyCTA";
import MapSection from "@/components/MapSection";
import SpecificationShowcase from "@/components/SpecificationShowcase";

type Props = {
  params: Promise<{ slug: string }>;
};

// --- UTILITAS PROMO: TANGGAL BERAKHIR MENGIKUTI ZONA WAKTU JAKARTA ---
function parseIndonesianDate(dateStr: string) {
  const months: Record<string, number> = {
    Januari: 1, Februari: 2, Maret: 3, April: 4, Mei: 5, Juni: 6,
    Juli: 7, Agustus: 8, September: 9, Oktober: 10, November: 11, Desember: 12,
  };
  const [dayText, monthText, yearText] = dateStr.trim().split(/\s+/);
  const day = Number(dayText);
  const month = months[monthText];
  const year = Number(yearText);

  if (!day || !month || !year) return 0;
  return new Date(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T23:59:59+07:00`).getTime();
}

function normalizePromoCarSlug(slug?: string) {
  return slug === "carry-pick-up" ? "carry-pickup" : slug;
}

// =========================================================================
// 1. GENERATE METADATA (OPTIMASI JUDUL & DESKRIPSI LOKAL)
// =========================================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);

  if (!car) return { title: "Mobil Tidak Ditemukan - Suzuki Sumber Baru" };

  const carUrl = `https://www.suzukiautojogja.com/mobil/${car.slug}`;
  const fullImageUrl = `https://www.suzukiautojogja.com${car.heroImage || "/logo.png"}`;
  const carName = car.name;
  const carNameLower = carName.toLowerCase();
  const startingPriceLabel = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(car.startingPriceNum / 1_000_000).replace(/,0$/, "");

  return {
    title: `Harga ${carName} Jogja 2026 | Promo DP Ringan & OTR Mulai Rp ${startingPriceLabel} Juta`,
    description: `Cek harga OTR, promo pembelian, simulasi kredit, dan spesifikasi ${carName} terbaru untuk Yogyakarta, Magelang, Kedu, dan Banyumas.`,
    keywords: [
      `${carNameLower} jogja`,
      `harga ${carNameLower} jogja`,
      `kredit ${carNameLower} magelang`,
      `promo ${carNameLower} jogja`,
      `simulasi kredit ${carNameLower} kedu`,
      `cicilan ${carNameLower} banyumas`,
      `dealer suzuki jl magelang sleman`,
    ].join(", "),
    alternates: { canonical: carUrl },
    openGraph: {
      title: `Harga ${carName} Jogja 2026 | OTR Mulai Rp ${startingPriceLabel} Juta`,
      description: `Cek harga OTR, stok, pilihan varian, dan simulasi kredit ${carName} di dealer Suzuki Yogyakarta.`,
      url: carUrl,
      siteName: "Suzuki Auto Jogja",
      images: [{ url: fullImageUrl, width: 1200, height: 630, alt: `${carName} di dealer resmi Yogyakarta` }],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Harga ${carName} Jogja | OTR Mulai Rp ${startingPriceLabel} Juta`,
      description: `Lihat harga OTR, spesifikasi, dan simulasi kredit ${carName} di Yogyakarta dan Jawa Tengah.`,
      images: [fullImageUrl],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);

  if (!car) notFound();

  const seoContent = getCarSeoContent(car.slug);
  const detailedSpecs = seoContent?.detailedSpecifications ?? car.detailedSpecifications ?? [];
  const detailedSpecGroups = detailedSpecs.reduce<Record<string, DetailedSpecification[]>>((groups, specification) => {
    const category = specification.category ?? "Detail Teknis";
    (groups[category] ??= []).push(specification);
    return groups;
  }, {});
  const detailedSpecGroupOrder = [
    "Performa",
    "Dimensi & Kapasitas",
    "Sasis & Pengereman",
    "Keselamatan",
    "Kenyamanan & Teknologi",
    "Informasi Karoseri",
    "Detail Teknis",
  ];
  const orderedDetailedSpecGroups = detailedSpecGroupOrder
    .filter((category) => detailedSpecGroups[category]?.length)
    .map((category) => ({ category, specifications: detailedSpecGroups[category] }));

  const variants = car.variants || [];
  const otherCars = cars.filter((c) => c.slug !== car.slug);
  const waMsg = `Halo Yusuf Suzuki, saya ingin menanyakan detail, promo, dan ketersediaan unit untuk mobil *${car.name}*.`;

  let brochureLink = car.brochureUrl;
  if (!brochureLink) {
    const fileName = car.slug === "carry-pickup" ? "carry" : car.slug;
    brochureLink = `/brosur/${fileName}.pdf`;
  }

  // --- FILTER PROMO OTOMATIS ---
  const now = Date.now();
  const activePromos = promos.filter(p => parseIndonesianDate(p.validUntil) >= now);
  const relatedPromos = activePromos.filter((promo) => normalizePromoCarSlug(promo.carSlug) === car.slug);
  // Jangan menampilkan promo model lain di halaman produk ini. Bila belum ada promo aktif
  // untuk model terkait, section sengaja disembunyikan agar halaman tetap relevan.
  const latestPromos = relatedPromos.slice(0, 3);

  // --- MENGHITUNG HARGA TERTINGGI & TERENDAH ---
  const prices = variants.length > 0 ? variants.map((v) => v.priceAB) : [car.startingPriceNum];
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);

  const faqs = [
    {
      question: `Berapa harga OTR ${car.name} terbaru untuk wilayah DIY dan Jawa Tengah?`,
      answer: `Harga OTR ${car.name} untuk wilayah Yogyakarta (plat AB) mulai dari ${car.startingPrice}. Harga Magelang dan Kedu (plat AA) atau Banyumas (plat R) dapat berbeda karena penyesuaian BBN. Hubungi kami untuk perhitungan harga nett dan promo yang berlaku saat ini.`,
    },
    ...(seoContent?.faqs ?? []),
    {
      question: `Apakah melayani tukar tambah mobil lama untuk pembelian ${car.name}?`,
      answer: `Ya. Kami melayani konsultasi tukar tambah mobil lama untuk pembelian ${car.name}. Tim appraisal akan meninjau kondisi unit dan menyampaikan estimasi penawaran secara transparan untuk area Jogja, Magelang, Kedu, dan sekitarnya.`,
    },
    {
      question: `Bagaimana syarat kredit ${car.name} dan proses pengajuannya?`,
      answer: `Dokumen umum yang biasanya diperlukan meliputi KTP, KK, NPWP bila tersedia, serta bukti penghasilan atau mutasi rekening. Kelengkapan syarat dan waktu proses mengikuti profil pengajuan serta keputusan leasing.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.suzukiautojogja.com/mobil/${car.slug}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.suzukiautojogja.com/" },
          { "@type": "ListItem", "position": 2, "name": "Produk", "item": "https://www.suzukiautojogja.com/mobil" },
          { "@type": "ListItem", "position": 3, "name": car.name, "item": `https://www.suzukiautojogja.com/mobil/${car.slug}` },
        ],
      },
      {
        "@type": "Product",
        "@id": `https://www.suzukiautojogja.com/mobil/${car.slug}#product`,
        "name": car.name,
        "url": `https://www.suzukiautojogja.com/mobil/${car.slug}`,
        "image": `https://www.suzukiautojogja.com${car.heroImage || "/logo.png"}`,
        "description": car.description || `Spesifikasi dan harga OTR ${car.name} untuk Yogyakarta, Magelang, Kedu, dan Banyumas.`,
        "sku": car.slug,
        "brand": { "@type": "Brand", "name": "Suzuki" },
        "category": car.category,
        "additionalProperty": detailedSpecs.map((specification) => ({
          "@type": "PropertyValue",
          "name": specification.label,
          "value": specification.value,
        })),
        "itemCondition": "https://schema.org/NewCondition",
        "offers": {
          "@type": "AggregateOffer",
          "url": `https://www.suzukiautojogja.com/mobil/${car.slug}`,
          "priceCurrency": "IDR",
          "lowPrice": lowPrice,
          "highPrice": highPrice,
          "offerCount": variants.length > 0 ? variants.length : 1,
          "seller": { "@id": "https://www.suzukiautojogja.com/#dealer" },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.suzukiautojogja.com/mobil/${car.slug}#faq`,
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ========================================================= */}
      {/* 1. HERO SECTION (DARK TECH REDESIGN)                      */}
      {/* ========================================================= */}
      <div className="motion-section relative bg-[#050505] pt-24 pb-20 md:pt-28 md:pb-32 overflow-hidden border-b border-white/10 font-manrope">
        
        {/* Background Grids & Glows */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_40%,rgba(220,38,38,0.15),transparent_40%),linear-gradient(135deg,#050505_0%,#0a0a0a_100%)] motion-glow-breathe" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 scan-line" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />

        {/* Thin Technical Lines */}
        <div className="pointer-events-none absolute left-6 top-20 z-10 hidden h-[calc(100%-120px)] w-px bg-red-600/40 md:block" />
        <div className="pointer-events-none absolute left-6 top-20 z-10 hidden w-24 border-t border-red-600/40 md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          {/* Breadcrumb Navigator */}
          <nav className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-8 md:mb-10">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-700" />
            <Link href="/mobil" className="hover:text-red-500 transition-colors">Produk</Link>
            <ChevronRight size={12} className="text-gray-700" />
            <span className="text-white">{car.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Teks Kiri */}
            <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
              <FadeIn delay={0.1} direction="left">
                
                {/* Category Badge Red Style */}
                <div className="mb-6 inline-flex items-center gap-3 border-l-2 border-red-600 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                    {car.category || "Mobil Suzuki"}
                  </span>
                </div>
                
                <h1 className="flex flex-col text-4xl md:text-5xl lg:text-[4rem] font-bank-gothic font-black text-white mb-6 uppercase tracking-tight leading-[1.05]">
                  <span className="text-lg md:text-xl text-gray-400 font-normal tracking-widest mb-2 block">HARGA OTR & PROMO {car.name.split(" ").slice(1).join(" ")} JOGJA</span>
                  {car.name}
                </h1>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                  {car.description || `Temukan ketangguhan dan kenyamanan berkendara bersama Suzuki ${car.name}. Dirancang khusus untuk memenuhi gaya hidup dan kebutuhan Anda di setiap perjalanan.`}
                </p>

                {/* Harga OTR Section */}
                <div className="mb-10 relative bg-white/5 border border-white/10 backdrop-blur-sm p-5 max-w-sm border-l-4 border-l-red-600 group hover:bg-white/10 transition-colors">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Mulai Dari</p>
                  <p className="text-3xl md:text-4xl font-black text-white tracking-tighter group-hover:text-red-500 transition-colors">
                    {formatCurrency(car.startingPriceNum)}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase tracking-wider">OTR Yogyakarta (Plat AB)</p>
                </div>

                {/* Tombol Aksi */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center justify-center gap-3 border border-red-500 bg-red-600 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all hover:-translate-y-0.5 hover:bg-red-700 w-full sm:w-auto"
                  >
                    <MessageCircle size={16} /> Minta Penawaran
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 hidden sm:block" />
                  </a>
                  <Link 
                    href="/test-drive" 
                    className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto"
                  >
                    <CalendarCheck size={16} /> Booking Test Drive
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Gambar Kanan (Visual Area) */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <FadeIn delay={0.3} direction="none">
                <div className="relative w-full aspect-video lg:aspect-[4/3] flex items-center justify-center">
                  
                  {/* Efek Pendaran di Belakang Mobil */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 bg-red-600/20 blur-[80px] rounded-full pointer-events-none z-0"></div>
                  
                  {/* Bingkai Teknis */}
                  <div className="absolute inset-4 border border-white/10 opacity-50 z-0 hidden lg:block" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}></div>

                  {car.heroImage ? (
                    <img 
                      src={car.heroImage} 
                      alt={`${car.name} di dealer Suzuki Yogyakarta`} 
                      className="relative z-10 w-[110%] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  ) : (
                    <h1 className="text-gray-700 text-4xl font-black uppercase tracking-widest relative z-10">FOTO {car.name}</h1>
                  )}

                  {/* Indikator Area */}
                  <div className="absolute bottom-0 right-4 flex items-center gap-2 z-20">
                    <span className="w-8 h-[1px] bg-red-600"></span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">{car.slug.replace('-', ' ')} // EDITION</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SPESIFIKASI PRODUK — VISUAL EXPLORER                  */}
      {/* ========================================================= */}
      <div className="motion-section border-b border-gray-200 bg-white pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {detailedSpecs.length > 0 ? (
            <FadeIn delay={0.12} direction="up">
              <SpecificationShowcase
                carName={car.name}
                summary={car.specifications}
                groups={orderedDetailedSpecGroups}
                brochureLink={brochureLink}
              />
            </FadeIn>
          ) : null}
        </div>
      </div>

      {/* 3. PRICELIST & VARIAN */}
      <div id="daftar-harga" className="motion-section max-w-7xl mx-auto border-b border-gray-200 px-4 pt-10 pb-16 sm:px-6 md:pt-12 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn direction="left">
              <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-none mb-4 uppercase tracking-[0.2em]">
                Pricelist 2026
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Daftar Harga OTR {car.name}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Pilih area plat nomor Anda untuk melihat harga On The Road (OTR) yang akurat. Harga tidak mengikat dan dapat berubah sewaktu-waktu sesuai kebijakan pusat.
              </p>
              <Link
                href={`/simulasi-kredit?mobil=${car.slug}`}
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white w-full py-4 font-black text-[10px] uppercase tracking-[0.2em] rounded-none transition-all shadow-md active:scale-95"
              >
                Hitung Simulasi Kredit
              </Link>

              <LeadCaptureCard
                className="mt-6 hidden lg:block"
                title={`Tanya ${car.name}`}
                description="Cek stok unit, warna tersedia, promo bulan ini, dan opsi kredit yang paling masuk untuk budget Anda."
                message={waMsg}
                carSlug={car.slug}
              />
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

      {/* 4. PROMO TERBARU */}
      {latestPromos.length > 0 && (
        <div className="motion-section bg-gray-50 border-b border-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Promo & Penawaran</h2>
                  <p className="text-gray-500 text-sm mt-2">Dapatkan deal terbaik untuk pembelian bulan ini.</p>
                </div>
                <Link href="/promo" className="inline-flex items-center gap-2 font-bold text-[10px] text-gray-500 hover:text-red-600 uppercase tracking-widest transition-colors">
                  Lihat Semua Promo <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPromos.map((promoItem, i) => (
                <FadeIn key={promoItem.slug} delay={i * 0.1}>
                  <Link href={`/promo/${promoItem.slug}`} className="motion-card motion-shine group block bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300 h-full flex flex-col">
                    <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                      <Image src={promoItem.image} alt={promoItem.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest z-10 shadow-sm">
                        Terbatas
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                        <Calendar size={12} /> Berlaku s/d {promoItem.validUntil}
                      </span>
                      <h4 className="text-sm font-black text-gray-900 leading-snug uppercase tracking-tight group-hover:text-red-600 transition-colors line-clamp-2">
                        {promoItem.title}
                      </h4>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. REKOMENDASI MOBIL LAIN */}
      {otherCars.length > 0 && (
        <div className="motion-section bg-white py-20 border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex justify-between items-end mb-10">
                <div>
                  <p className="section-label mb-3">Model Lainnya</p>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Eksplorasi Mobil Suzuki Lain</h2>
                </div>
                <Link href="/mobil" className="hidden sm:inline-block font-bold text-[10px] text-gray-400 hover:text-red-600 uppercase tracking-widest transition-colors">
                  Semua Mobil &rarr;
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <OtherCarsCarousel cars={otherCars} />
            </FadeIn>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. FAQ LOKAL JOGJA & JATENG (SEO BOOSTER)                 */}
      {/* ========================================================= */}
      <div className="motion-section bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="inline-block bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-3 py-1 mb-4 uppercase tracking-[0.2em]">
                Tanya Jawab
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">
                Seputar Pembelian {car.name} di Area Kami
              </h2>
            </div>
          </FadeIn>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={(index + 1) * 0.1} direction="up">
                <div className="border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-red-500">
                  <h3 className="mb-2 font-bold text-gray-900 transition-colors hover:text-red-600">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <MapSection cityName="Yogyakarta, Magelang, Kedu, dan Banyumas" />
      <ContactCTA />
      <CarDetailStickyCTA carName={car.name} carSlug={car.slug} startingPrice={lowPrice} />

    </div>
  );
}