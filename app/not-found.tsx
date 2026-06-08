import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="surface-dark surface-grid relative flex min-h-screen items-center overflow-hidden pt-24 text-white">
      <div className="absolute inset-0 bg-red-radial" />
      <div className="container-main relative z-10 py-20">
        <div className="max-w-2xl border-l-4 border-red-600 bg-black/45 p-6 backdrop-blur-md md:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-red-500">404 / Halaman Tidak Ditemukan</p>
          <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tighter md:text-6xl">
            Halaman yang Anda cari belum tersedia.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Unit, promo, atau artikel mungkin sudah dipindahkan. Kembali ke katalog atau chat Yusuf Suzuki untuk info terbaru.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/mobil" className="btn-white">
              <ArrowLeft size={16} /> Kembali ke Katalog
            </Link>
            <a
              href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya tidak menemukan halaman yang saya cari. Mohon dibantu info mobil Suzuki terbaru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              <MessageCircle size={16} /> Chat Yusuf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
