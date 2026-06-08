import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ChevronLeft, User, Tag, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  const articleUrl = `https://www.suzukiautojogja.com/berita/${article.slug}`;

  return {
    title: `${article.title} | Berita Suzuki Jogja`,
    description: article.excerpt,
    alternates: { canonical: articleUrl },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: "Suzuki Auto Jogja",
      type: "article",
      publishedTime: new Date(parseIndonesianDate(article.date)).toISOString(),
      authors: ["Yusuf Suzuki"],
      images: [
        {
          url: `https://www.suzukiautojogja.com${article.imageUrl}`,
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
      images: [`https://www.suzukiautojogja.com${article.imageUrl}`],
    },
  };
}

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

  if (!article) notFound();

  const recommendedArticles = articles
    .filter((a) => a.slug !== resolvedParams.slug)
    .sort((a, b) => parseIndonesianDate(b.date) - parseIndonesianDate(a.date))
    .slice(0, 3);

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
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[#050505] pt-28 pb-14 text-white md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-dark-hero" />
        <div className="absolute inset-0 bg-red-radial" />
        <div className="absolute inset-0 bg-automotive-grid bg-[size:56px_56px] opacity-40" />
        <div className="container-main relative z-10">
          <Link
            href="/berita"
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-red-500"
          >
            <ChevronLeft size={14} /> Kembali ke Daftar Berita
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-red-600 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
              <Tag size={12} className="text-red-500" /> {article.category}
            </div>
            <h1 className="text-3xl font-black uppercase leading-[1.05] tracking-tighter text-white md:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-widest text-white/45">
              <div className="flex items-center gap-2"><Calendar size={15} /> {article.date}</div>
              <div className="flex items-center gap-2"><User size={15} /> Yusuf Suzuki</div>
            </div>
          </div>
        </div>
      </section>

      <main className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="red-edge border border-gray-200 bg-white p-6 shadow-card md:p-10 lg:col-span-8">
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden bg-gray-100 shadow-sm">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-8 border-l-4 border-red-600 bg-gray-50 py-4 pl-6 text-lg font-semibold leading-relaxed text-gray-950 md:text-xl">
                {article.excerpt}
              </p>

              {article.content?.map((paragraph, index) => (
                <div
                  key={index}
                  className="article-content-block mb-6 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="mb-6 border-l-4 border-red-600 bg-white p-5 shadow-card">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Rekomendasi</p>
                <h3 className="mt-1 text-xl font-black uppercase tracking-tighter text-gray-950">Artikel Terbaru</h3>
              </div>

              <div className="flex flex-col gap-4">
                {recommendedArticles.length > 0 ? (
                  recommendedArticles.map((rec) => (
                    <Link
                      href={`/berita/${rec.slug}`}
                      key={rec.slug}
                      className="group flex items-start gap-4 border border-gray-200 bg-white p-3 shadow-card transition-all duration-300 hover:border-red-600 hover:shadow-card-hover"
                    >
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-gray-200">
                        <Image
                          src={rec.imageUrl}
                          alt={rec.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex h-full flex-col justify-between py-1">
                        <div>
                          <span className="mb-1 block text-[9px] font-black uppercase tracking-wider text-red-600">{rec.category}</span>
                          <h4 className="line-clamp-2 text-sm font-black leading-snug text-gray-900 transition-colors group-hover:text-red-600">
                            {rec.title}
                          </h4>
                        </div>
                        <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                          <Calendar size={12} /> {rec.date}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="border border-gray-200 bg-white p-6 text-center shadow-card">
                    <p className="text-sm text-gray-500">Kumpulan artikel terbaru lainnya akan segera hadir.</p>
                  </div>
                )}
              </div>

              <div className="mt-8 border border-gray-800 bg-[#050505] p-6 text-center text-white shadow-dark-glow">
                <h4 className="mb-2 text-lg font-black uppercase tracking-tight">Tertarik dengan Suzuki?</h4>
                <p className="mb-6 text-xs leading-relaxed text-white/50">
                  Dapatkan penawaran DP ringan dan diskon khusus pemesanan bulan ini.
                </p>
                <Link
                  href="/promo"
                  className="inline-flex w-full items-center justify-center gap-2 bg-red-600 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-red-700"
                >
                  Lihat Promo <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <ContactCTA />
    </div>
  );
}
