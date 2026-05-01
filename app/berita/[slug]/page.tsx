import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft, User, Tag } from "lucide-react";
import { articles } from "@/data/articles";
import ContactCTA from "@/components/ContactCTA";

// 1. FUNGSI SEO OTOMATIS: Google akan membaca ini untuk setiap halaman artikel yang berbeda
export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  
  return {
    title: `${article.title} | Berita Suzuki Jogja`,
    description: article.excerpt,
  };
}

// 2. KOMPONEN HALAMAN UTAMA
export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  // Cari data artikel yang slug-nya cocok dengan URL
  const article = articles.find((a) => a.slug === params.slug);

  // Jika tidak ketemu di data, langsung lempar ke halaman 404 (Not Found)
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-0">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Navigasi Kembali */}
        <Link 
          href="/berita"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ChevronLeft size={18} />
          Kembali ke Daftar Berita
        </Link>

        {/* Header Artikel (Judul & Meta Info) */}
        <header className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest mb-4">
            <Tag size={12} />
            {article.category}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
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

        {/* Gambar Utama Artikel */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 mb-12 overflow-hidden shadow-sm">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Area Teks Konten Artikel */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          
          {/* Excerpt (Ringkasan) ditampilkan sebagai intro untuk menarik perhatian */}
          <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 bg-gray-50 py-4">
            {article.excerpt}
          </p>

          {/* MAPPING PARAGRAF OTOMATIS: Membaca array 'content' dari articles.ts */}
          {article.content?.map((paragraph, index) => (
            <p 
                key={index} 
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: paragraph }} 
            />
            ))}

          {/* Kotak Call to Action (CTA) di akhir artikel */}
          <div className="bg-gray-50 p-6 border border-gray-100 mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ingin Mencoba Langsung Fitur Unik Ini?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Membaca saja tentu tidak cukup. Anda harus merasakan sendiri kenyamanan kabin dan berbagai fitur canggih mobil Suzuki lainnya.
            </p>
            <Link 
              href="/test-drive" 
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 text-[11px] uppercase tracking-wider hover:bg-blue-700 transition-colors"
            >
              Booking Test Drive Sekarang
            </Link>
          </div>
        </div>

      </article>

      {/* Bagian Bawah Menggunakan Komponen Contact CTA Global */}
      <ContactCTA />
    </div>
  );
}