"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, BadgePercent, Clock3, ShieldCheck, ArrowRight } from "lucide-react";
import { promos } from "@/data/promos";
import { PromoCard } from "@/components/PromoSection";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import { buildWhatsAppUrl } from "@/lib/utils";

const parseIndonesianDate = (dateStr: string) => {
  const months: { [key: string]: number } = {
    januari: 0, februari: 1, maret: 2, april: 3, mei: 4, juni: 5,
    juli: 6, agustus: 7, september: 8, oktober: 9, november: 10, desember: 11
  };

  const parts = dateStr.toLowerCase().split(" ");
  if (parts.length !== 3) return new Date(8640000000000000);

  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);

  return new Date(year, month, day, 23, 59, 59);
};

export default function PromoPage() {
  const today = new Date();

  const activePromos = [...promos]
    .reverse()
    .filter((promo) => parseIndonesianDate(promo.validUntil) >= today)
    .sort((a, b) => parseIndonesianDate(b.validUntil).getTime() - parseIndonesianDate(a.validUntil).getTime());

  const expiredPromos = [...promos]
    .reverse()
    .filter((promo) => parseIndonesianDate(promo.validUntil) < today)
    .sort((a, b) => parseIndonesianDate(b.validUntil).getTime() - parseIndonesianDate(a.validUntil).getTime());

  const promoStats = [
    { icon: BadgePercent, title: "Diskon Bulanan", desc: "Penawaran mengikuti program resmi dealer dan ketersediaan unit." },
    { icon: Clock3, title: "Masa Terbatas", desc: "Promo aktif bisa berubah sesuai periode dan stok kendaraan." },
    { icon: ShieldCheck, title: "Konsultasi Resmi", desc: "Dibantu langsung oleh Yusuf Suzuki sampai proses pembelian jelas." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Penawaran Eksklusif"
        title="Promo Suzuki Terbaru"
        description="Temukan promo Suzuki aktif bulan ini, mulai dari diskon, DP ringan, angsuran menarik, hingga paket pembelian khusus area Jogja dan sekitarnya."
        stats={[
          { value: `${activePromos.length}`, label: "Promo Aktif" },
          { value: "DP", label: "Bisa Disesuaikan" },
          { value: "WA", label: "Klaim Cepat" },
          { value: "Resmi", label: "Dealer Suzuki" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin cek promo Suzuki aktif bulan ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Tanya Promo Aktif
        </a>
        <Link href="/mobil" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Lihat Mobil
        </Link>
      </PageHero>

      <section className="border-b border-gray-200 bg-white">
        <div className="container-main grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
          {promoStats.map((item) => (
            <div key={item.title} className="group flex gap-4 border border-gray-200 bg-gray-50 p-5 transition-all hover:border-red-600 hover:bg-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-gray-900 shadow-sm transition-colors group-hover:bg-red-600 group-hover:text-white">
                <item.icon size={20} strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-950">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-main py-16 md:py-24">
        {activePromos.length > 0 ? (
          <>
            <div className="mb-10 flex flex-col gap-5 border-l-4 border-red-600 bg-white p-6 shadow-card md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label mb-3">Promo Aktif</p>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-950 md:text-4xl">Daftar Promo Bulan Ini</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
                  Pilih promo yang sesuai, lalu klaim via WhatsApp agar Yusuf Suzuki bisa cek stok, syarat, dan simulasi terbaik untuk Anda.
                </p>
              </div>
              <a
                href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin dibantu memilih promo Suzuki yang paling cocok.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Konsultasi Promo <ArrowRight size={14} />
              </a>
            </div>

            <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {activePromos.map((promo, i) => (
                <PromoCard key={promo.slug} promo={promo} index={i} />
              ))}
            </div>
          </>
        ) : (
          <div className="mb-16 border border-gray-200 bg-white px-6 py-16 text-center shadow-card">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-gray-900">Belum ada promo baru</p>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Program bisa berubah sewaktu-waktu. Hubungi Yusuf Suzuki untuk mengecek penawaran terbaru yang belum tampil di website.
            </p>
          </div>
        )}

        {expiredPromos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-10 flex items-center gap-4 border-l-4 border-gray-300 bg-white p-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Arsip Promo</p>
                <h2 className="mt-1 text-2xl font-black uppercase tracking-tighter text-gray-700">Promo Terdahulu</h2>
              </div>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 gap-8 opacity-60 transition-opacity duration-300 hover:opacity-100 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {expiredPromos.map((promo, i) => (
                <PromoCard key={promo.slug} promo={promo} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </section>

      <ContactCTA />
    </div>
  );
}
