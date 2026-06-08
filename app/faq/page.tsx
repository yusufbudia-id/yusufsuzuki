import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ – Pertanyaan Umum Suzuki Sumber Baru Mobil",
  description: "Jawaban atas pertanyaan seputar kredit, test drive, promo, dan pembelian mobil Suzuki di Jogja. Hubungi Yusuf Suzuki: 0821 7463 5218.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Pusat Bantuan"
        title="Pertanyaan Umum Suzuki"
        description="Temukan jawaban cepat seputar syarat kredit, promo, test drive, harga OTR, layanan purnajual, dan proses pembelian mobil Suzuki di Yogyakarta."
        align="center"
        stats={[
          { value: "Kredit", label: "Syarat & Proses" },
          { value: "Promo", label: "Program Bulanan" },
          { value: "Unit", label: "Stok & Varian" },
          { value: "WA", label: "Tanya Langsung" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin bertanya tentang pembelian mobil Suzuki.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Tanya Yusuf
        </a>
        <Link href="/kontak" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Kontak Dealer
        </Link>
      </PageHero>

      <FAQSection />
      <ContactCTA />
    </div>
  );
}
