import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ChevronLeft, User, Tag, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import ContactCTA from "@/components/ContactCTA";

// 1. UPDATE: META DATA SEO YANG JAUH LEBIH KUAT (OpenGraph, Twitter Card, Canonical)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  
  // Membuat URL absolut untuk keperluan SEO
  const articleUrl = `https://www.suzukiautojogja.com/berita/${article.slug}`;
  
  return {
    title: `${article.title} | Berita Suzuki Jogja`,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: 'Suzuki Auto Jogja',
      type: 'article',
      publishedTime: new Date(parseIndonesianDate(article.date)).toISOString(),
      authors: ['Yusuf Suzuki'],
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

// Fungsi pembantu untuk membaca tanggal bahasa Indonesia
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

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const recommendedArticles = articles
    .filter((a) => a.slug !== resolvedParams.slug)
    .sort((a, b) => parseIndonesianDate(b.date) - parseIndonesianDate(a.date))
    .slice(0, 3);

  // 2. UPDATE: SCHEMA MARKUP KHUSUS ARTIKEL (Biar disukai Robot Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": `https://www.suzukiautojogja.com${article.imageUrl}`,
    "author": {
      "@type": "Person",
      "name": "Yusuf Suzuki",
      "url": "https://www.suzukiautojogja.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Suzuki Sumber Baru Mobil Jogja",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.suzukiautojogja.com/logo.png"
      }
    },
    "datePublished": new Date(parseIndonesianDate(article.date)).toISOString(),
    "description": article.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.suzukiautojogja.com/berita/${article.slug}`
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 md:pt-32 pb-0">
      
      {/* SUNTIKAN JSON-LD KE DALAM HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Navigasi Kembali */}
        <Link 
          href="/berita"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ChevronLeft size={18} />
          Kembali ke Daftar Berita
        </Link>

        {/* LAYOUT DUA KOLOM */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
          
          {/* KOLOM KIRI: ISI ARTIKEL UTAMA */}
          <article className="lg:w-2/3 bg-white p-6 md:p-10 shadow-sm border border-gray-100">
            <header className="mb-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
                <Tag size={12} />
                {article.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-500 text-sm font-medium border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Yusuf Suzuki</span>
                </div>
              </div>
            </header>

            <div className="relative w-full aspect-[16/9] bg-gray-100 mb-10 overflow-hidden shadow-sm">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 bg-gray-50 py-4">
                {article.excerpt}
              </p>

              {article.content?.map((paragraph, index) => (
                <div 
                    key={index} 
                    className="mb-6 article-content-block"
                    dangerouslySetInnerHTML={{ __html: paragraph }} 
                />
              ))}
            </div>
          </article>

          {/* KOLOM KANAN: SIDEBAR ARTIKEL TERBARU */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28"> 
              <h3 className="text-base font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-900 pb-3 mb-6">
                Artikel Terbaru
              </h3>

              <div className="flex flex-col gap-4">
                {recommendedArticles.length > 0 ? (
                  recommendedArticles.map((rec) => (
                    <Link 
                      href={`/berita/${rec.slug}`} 
                      key={rec.slug} 
                      className="group flex gap-4 items-start bg-white p-3 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="relative w-24 h-24 shrink-0 bg-gray-200 overflow-hidden">
                        <Image
                          src={rec.imageUrl}
                          alt={rec.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="flex flex-col justify-between py-1 h-full">
                        <div>
                          <span className="text-[9px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                            {rec.category}
                          </span>
                          <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                            {rec.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-2">
                          <Calendar size={12} />
                          {rec.date}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="bg-white border border-gray-100 p-6 text-center shadow-sm">
                    <p className="text-sm text-gray-500">Kumpulan artikel terbaru lainnya akan segera hadir.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-[#050B14] p-6 text-white text-center shadow-lg border-t-4 border-red-600">
                <h4 className="font-bold text-lg mb-2">Tertarik dengan Suzuki?</h4>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  Dapatkan penawaran DP ringan dan diskon puluhan juta khusus pemesanan bulan ini.
                </p>
                <Link 
                  href="/promo" 
                  className="inline-flex items-center justify-center w-full gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-xs uppercase tracking-widest transition-colors"
                >
                  Lihat Promo
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <ContactCTA />
    </div>
  );
}