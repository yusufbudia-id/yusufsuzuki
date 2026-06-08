"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="surface-dark surface-grid relative flex min-h-screen items-center overflow-hidden pt-24 text-white">
      <div className="absolute inset-0 bg-red-radial" />
      <div className="container-main relative z-10 py-20">
        <div className="max-w-2xl border-l-4 border-red-600 bg-black/45 p-6 backdrop-blur-md md:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-red-500">System Notice</p>
          <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tighter md:text-6xl">
            Terjadi kendala saat memuat halaman.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Silakan coba muat ulang halaman. Untuk info harga, promo, dan stok unit tetap bisa langsung chat Yusuf Suzuki.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="btn-white">
              <RefreshCcw size={16} /> Coba Lagi
            </button>
            <a
              href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya mengalami kendala saat membuka website. Mohon dibantu info mobil Suzuki terbaru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              <MessageCircle size={16} /> Chat Yusuf
            </a>
          </div>
          <Link href="/" className="mt-6 inline-flex text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
