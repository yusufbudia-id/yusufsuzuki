"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { articles } from "@/data/articles";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import { buildWhatsAppUrl } from "@/lib/utils";

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

export default function BeritaPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => parseIndonesianDate(b.date) - parseIndonesianDate(a.date)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Informasi Otomotif"
        title="Berita & Tips Suzuki"
        description="Kumpulan informasi terbaru, tips perawatan, panduan kredit, dan insight membeli mobil Suzuki langsung dari tim dealer resmi."
        stats={[
          { value: `${articles.length}`, label: "Artikel" },
          { value: "Tips", label: "Perawatan" },
          { value: "Kredit", label: "Panduan Beli" },
          { value: "Suzuki", label: "Info Produk" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin konsultasi tentang mobil Suzuki setelah membaca artikel di website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Tanya Yusuf
        </a>
        <Link href="/mobil" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Lihat Mobil
        </Link>
      </PageHero>

      <section className="container-main motion-section py-16 md:py-24">
        <div className="motion-pop motion-shine mb-10 flex flex-col gap-4 border-l-4 border-red-600 bg-white p-6 shadow-card md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-3">Artikel Terbaru</p>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-950 md:text-4xl">Panduan Sebelum Membeli</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
              Baca insight singkat untuk membantu Anda memilih unit, memahami promo, dan merawat mobil Suzuki.
            </p>
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {sortedArticles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group red-edge motion-card motion-shine flex h-full flex-col border border-gray-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 bg-gray-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                  {article.category}
                </div>
              </div>

              <div className="flex flex-grow flex-col p-6 md:p-8">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>

                <h2 className="mb-3 text-xl font-black uppercase leading-tight tracking-tight text-gray-950 transition-colors group-hover:text-red-600">
                  <Link href={`/berita/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-gray-500">
                  {article.excerpt}
                </p>

                <div className="mt-auto border-t border-gray-100 pt-5">
                  <Link
                    href={`/berita/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 transition-colors hover:text-red-600"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
