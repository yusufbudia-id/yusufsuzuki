"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CalendarCheck, Send, CheckCircle2 } from "lucide-react";
import { cars } from "@/data/cars";
import { buildWhatsAppUrl } from "@/lib/utils";

// Kolom HP dihapus dari validasi schema
const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  mobil: z.string().min(1, "Pilih mobil terlebih dahulu"),
  tanggal: z.string().min(1, "Pilih tanggal"),
  lokasi: z.string().min(3, "Masukkan lokasi"),
  catatan: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    // Format pesan WhatsApp tanpa baris Nomor HP
    const msg = `Halo Yusuf Suzuki, saya ingin booking test drive:\n\n👤 Nama: ${data.nama}\n🚗 Mobil: ${data.mobil}\n📅 Tanggal: ${data.tanggal}\n📍 Lokasi: ${data.lokasi}${data.catatan ? `\n📝 Catatan: ${data.catatan}` : ""}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsAppUrl(msg), "_blank");
    }, 600);
  };

  // Desain Pesan Sukses - Ultra Minimalis
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-none border border-gray-200 shadow-2xl p-12 md:p-16 text-center"
      >
        <CheckCircle2 size={64} strokeWidth={1.5} className="text-gray-900 mx-auto mb-6" />
        <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">Booking Berhasil</h3>
        <p className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed max-w-sm mx-auto font-bold">
          Anda akan segera dialihkan ke WhatsApp Yusuf Suzuki untuk konfirmasi jadwal.
        </p>
      </motion.div>
    );
  }

  // Class utilitas agar kode tidak terlalu panjang
  const labelClass = "block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3";
  const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-none px-4 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors placeholder:text-gray-300 placeholder:font-normal";
  const errorClass = "text-red-500 text-[9px] uppercase tracking-widest font-bold mt-2 block";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-none border border-gray-200 shadow-2xl p-6 md:p-10">
      
      {/* Header Form */}
      <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-8">
        <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white shrink-0">
          <CalendarCheck size={24} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-black text-gray-900 text-xl uppercase tracking-tighter">Form Test Drive</h3>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Layanan Gratis ke Lokasi Anda</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <label className={labelClass}>Nama Lengkap *</label>
          <input {...register("nama")} placeholder="Contoh: Budi Santoso" className={inputClass} />
          {errors.nama && <span className={errorClass}>{errors.nama.message}</span>}
        </div>
        
        <div>
          <label className={labelClass}>Pilih Kendaraan *</label>
          <select {...register("mobil")} className={inputClass}>
            <option value="">-- PILIH MOBIL --</option>
            {cars.map((c) => <option key={c.slug} value={c.name}>{c.name.toUpperCase()}</option>)}
          </select>
          {errors.mobil && <span className={errorClass}>{errors.mobil.message}</span>}
        </div>
        
        <div>
          <label className={labelClass}>Tanggal Test Drive *</label>
          <input type="date" {...register("tanggal")} min={new Date().toISOString().split("T")[0]} className={inputClass} />
          {errors.tanggal && <span className={errorClass}>{errors.tanggal.message}</span>}
        </div>
        
        <div>
          <label className={labelClass}>Lokasi Test Drive *</label>
          <input {...register("lokasi")} placeholder="Alamat Rumah / Kantor / Showroom" className={inputClass} />
          {errors.lokasi && <span className={errorClass}>{errors.lokasi.message}</span>}
        </div>
        
        <div className="md:col-span-2">
          <label className={labelClass}>Catatan Tambahan (Opsional)</label>
          <textarea {...register("catatan")} rows={3} placeholder="Ada pertanyaan atau jam khusus yang diinginkan?" className={`${inputClass} resize-none`} />
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white py-5 flex justify-center items-center gap-3 transition-all font-black text-xs uppercase tracking-[0.2em]"
      >
        <Send size={18} strokeWidth={2} />
        {isSubmitting ? "MEMPROSES..." : "KIRIM PENGAJUAN TEST DRIVE"}
      </button>
    </form>
  );
}