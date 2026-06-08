"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Download, ChevronRight, Tag, Send, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Car } from "@/data/cars";
import CarGallery from "@/components/CarGallery";
import SpecificationTabs from "@/components/SpecificationTabs";
import CreditSimulator from "@/components/CreditSimulator";
import LeadCaptureCard from "@/components/LeadCaptureCard";
import { buildWhatsAppUrl } from "@/lib/utils";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  hp: z.string().min(10, "Nomor HP tidak valid"),
  pesan: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export default function CarDetailClient({ car }: { car: Car }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const msg = `Halo Yusuf Suzuki, saya tertarik dengan *${car.name}*.\n\n👤 Nama: ${data.nama}\n📱 HP: ${data.hp}\n💬 Pesan: ${data.pesan || "Mohon info harga dan promo terkini."}\n\nMohon informasinya. Terima kasih!`;
    setSubmitted(true);
    setTimeout(() => window.open(buildWhatsAppUrl(msg), "_blank"), 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="border-b border-gray-200 bg-white">
        <div className="container-main flex items-center gap-2 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
          <Link href="/" className="transition-colors hover:text-red-600">Home</Link>
          <ChevronRight size={12} />
          <Link href="/mobil" className="transition-colors hover:text-red-600">Mobil</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900">{car.name}</span>
        </div>
      </div>

      <div className="container-main py-8 md:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-8 lg:col-span-3">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <CarGallery images={car.gallery} name={car.name} />
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div className="mb-5 border-l-4 border-red-600 bg-white p-5 shadow-card">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Spesifikasi Unit</p>
                <h2 className="mt-1 text-2xl font-black uppercase tracking-tighter text-gray-950">Detail Teknis {car.name}</h2>
              </div>
              <SpecificationTabs spec={car.specifications} />
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <CreditSimulator defaultCarSlug={car.slug} />
            </motion.section>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="red-edge border border-gray-200 bg-white p-6 shadow-card md:p-7 lg:sticky lg:top-28">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="badge-red">{car.category}</span>
                {car.isNew ? (
                  <span className="inline-flex items-center gap-1 bg-gray-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                    <Sparkles size={11} /> Baru
                  </span>
                ) : null}
                {car.isBestSeller ? (
                  <span className="inline-flex items-center gap-1 border border-gray-200 bg-gray-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-gray-700">
                    <TrendingUp size={11} /> Best Seller
                  </span>
                ) : null}
              </div>

              <h1 className="text-3xl font-black uppercase leading-tight tracking-tighter text-gray-950 md:text-4xl">{car.name}</h1>
              <p className="mt-4 line-clamp-6 text-sm font-medium leading-relaxed text-gray-500">{car.description}</p>

              <div className="my-6 border-y border-gray-100 py-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Harga OTR Jogja mulai</p>
                <p className="mt-2 text-3xl font-black tracking-tighter text-gray-950 md:text-4xl">{car.startingPrice}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-gray-400">
                  Cicilan mulai <span className="text-red-600">{car.monthlyInstallment}</span>/bulan
                </p>
              </div>

              {car.promo ? (
                <div className="mb-6 flex items-start gap-3 border border-red-100 bg-red-50 px-4 py-3">
                  <Tag size={16} className="mt-0.5 shrink-0 text-red-600" />
                  <p className="text-sm font-bold leading-relaxed text-red-700">{car.promo}</p>
                </div>
              ) : null}

              <div className="mb-6">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                  Pilihan Warna: <span className="text-gray-950">{car.colors[selectedColor].name}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {car.colors.map((c, i) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(i)}
                      title={c.name}
                      aria-label={`Pilih warna ${c.name}`}
                      className={`h-9 w-9 border-2 transition-all ${i === selectedColor ? "border-red-600 scale-110 shadow-red-glow" : "border-gray-200 hover:border-gray-500"}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <a href={buildWhatsAppUrl(car.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-red w-full">
                  <MessageCircle size={18} /> Chat Yusuf Suzuki
                </a>
                <a href={car.brochureUrl} className="btn-outline w-full">
                  <Download size={18} /> Download Brosur
                </a>
              </div>
            </motion.div>

            <LeadCaptureCard
              title={`Cek promo ${car.name}`}
              description="Minta info stok warna, diskon, booking test drive, dan simulasi kredit langsung ke Yusuf Suzuki."
              message={`Halo Yusuf Suzuki, saya ingin cek promo, stok, warna, dan simulasi kredit untuk ${car.name}.`}
              dark
            />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="border border-gray-200 bg-white p-6 shadow-card">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-gray-950">Saya Minat dengan {car.name}</h3>
              {submitted ? (
                <div className="py-5 text-center">
                  <CheckCircle2 size={42} className="mx-auto mb-3 text-whatsapp" />
                  <p className="text-sm font-semibold text-gray-600">Anda akan diarahkan ke WhatsApp Yusuf Suzuki.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <div>
                    <input {...register("nama")} placeholder="Nama Lengkap *" className="input-sharp" />
                    {errors.nama ? <p className="mt-1 text-xs text-red-500">{errors.nama.message}</p> : null}
                  </div>
                  <div>
                    <input {...register("hp")} placeholder="Nomor HP / WhatsApp *" className="input-sharp" />
                    {errors.hp ? <p className="mt-1 text-xs text-red-500">{errors.hp.message}</p> : null}
                  </div>
                  <textarea {...register("pesan")} rows={3} placeholder="Pesan (opsional)" className="input-sharp resize-none" />
                  <button type="submit" className="btn-whatsapp w-full">
                    <Send size={16} /> Kirim ke WhatsApp
                  </button>
                </form>
              )}
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
