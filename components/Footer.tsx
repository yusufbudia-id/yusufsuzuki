"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";
import { areas } from "@/data/areas"; // <-- IMPORT DATA KOTA DI SINI

// Komponen SVG khusus untuk ikon TikTok
function TiktokIcon({ size = 24, strokeWidth = 2, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const quickLinks = [
    { label: "Produk Mobil", href: "/mobil" },
    { label: "Promo Terkini", href: "/promo" },
    { label: "Simulasi Kredit", href: "/simulasi-kredit" },
    { label: "Booking Test Drive", href: "/test-drive" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ];

  const carLinks = [
    { label: "Suzuki Fronx", href: "/mobil/fronx" },
    { label: "Suzuki XL7", href: "/mobil/xl7" },
    { label: "Suzuki Ertiga", href: "/mobil/ertiga" },
    { label: "Suzuki Grand Vitara", href: "/mobil/grand-vitara" },
    { label: "Suzuki Jimny", href: "/mobil/jimny" },
    { label: "Suzuki S-Presso", href: "/mobil/s-presso" },
    { label: "Suzuki Carry Pick Up", href: "/mobil/carry-pickup" },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* PERBAIKAN: Ubah lg:grid-cols-4 menjadi lg:grid-cols-5 agar muat 5 kolom sejajar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Kolom 1: Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src="/logo.png" 
                alt="Logo Suzuki Sumber Baru Jogja" 
                className="h-6 md:h-8 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Dealer resmi Suzuki terpercaya di Yogyakarta & sekitarnya. Melayani penjualan mobil Suzuki baru dengan promo terbaik dan pelayanan prima.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, label: "Facebook", href: "https://web.facebook.com/sumberbarumobil.yusuf" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/suzukisumberbaru.yusuf" },
                { icon: TiktokIcon, label: "TikTok", href: "https://www.tiktok.com/@suzukisumberbaru.yusuf" },
                { icon: Youtube, label: "Youtube", href: "https://www.youtube.com/@yusufsuzuki" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-gray-700 hover:border-white text-gray-500 hover:text-white rounded-none flex items-center justify-center transition-all duration-300 group"
                >
                  {/* Teks gaib untuk dibaca oleh Robot Google / Tool SEO */}
                  <span className="sr-only">Kunjungi {label} Kami</span>
                  <Icon size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-white mb-7">Menu Cepat</p>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 group flex items-center gap-1"
                  >
                    <span className="transition-transform group-hover:translate-x-1">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Car Links */}
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-white mb-7">Produk Suzuki</p>
            <ul className="space-y-3.5">
              {carLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 group flex items-center gap-1"
                  >
                    <span className="transition-transform group-hover:translate-x-1">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Area Layanan (DIBUAT OTOMATIS) */}
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-white mb-7">Area Layanan</p>
            <ul className="space-y-3.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/dealer/${area.slug}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 group flex items-center gap-1"
                  >
                    <span className="transition-transform group-hover:translate-x-1">Suzuki {area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 5: Contact */}
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-white mb-7">Kontak & Lokasi</p>
            <ul className="space-y-5">
              <li className="flex gap-4 text-sm text-gray-400 group cursor-default">
                <MapPin size={20} strokeWidth={1.5} className="shrink-0 text-gray-600 group-hover:text-white transition-colors mt-0.5" />
                <span className="leading-relaxed">Suzuki Sumber Baru Mobil<br />Jl. Magelang KM 8, Yogyakarta</span>
              </li>
              <li className="flex gap-4 text-sm text-gray-400 group cursor-default">
                <Phone size={20} strokeWidth={1.5} className="shrink-0 text-gray-600 group-hover:text-white transition-colors mt-0.5" />
                <span className="leading-relaxed">0821 7463 5218<br />(Yusuf Suzuki)</span>
              </li>
              <li className="flex gap-4 text-sm text-gray-400 group cursor-default">
                <Clock size={20} strokeWidth={1.5} className="shrink-0 text-gray-600 group-hover:text-white transition-colors mt-0.5" />
                <span className="leading-relaxed">Senin – Sabtu<br />08.00 – 17.00 WIB</span>
              </li>
            </ul>
            <a
              href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20tentang%20mobil%20Suzuki`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 bg-white hover:bg-gray-200 text-black text-[11px] uppercase tracking-widest font-bold py-4 w-full flex justify-center items-center gap-2 rounded-none transition-colors duration-300 shadow-sm"
            >
              <MessageCircle size={17} />
              Chat WhatsApp
            </a>
          </div>
          
        </div>
      </div>

      {/* Bagian Bawah (Copyright) */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[11px] uppercase tracking-widest text-center md:text-left font-semibold">
            © 2026 Suzuki Sumber Baru Mobil. Dealer Resmi.
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            Jl. Magelang KM 8, Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
}