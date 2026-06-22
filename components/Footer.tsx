import type { ReactNode } from "react";
import Link from "next/link";
import { Clock, Facebook, Instagram, MapPin, MessageCircle, Phone, Youtube, Navigation } from "lucide-react";
import { areas } from "@/data/areas";
import { WA_BASE_URL } from "@/lib/utils";

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

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://web.facebook.com/sumberbarumobil.yusuf" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/suzukisumberbaru.yusuf" },
  { icon: TiktokIcon, label: "TikTok", href: "https://www.tiktok.com/@suzukisumberbaru.yusuf" },
  { icon: Youtube, label: "Youtube", href: "https://www.youtube.com/@yusufsuzuki" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3 text-sm font-medium text-white/50 transition-colors hover:text-white">
      <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-4" />
      <span className="transition-transform duration-300 group-hover:translate-x-1">{label}</span>
    </Link>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return <p className="mb-7 text-[11px] font-black uppercase tracking-[0.24em] text-white">{children}</p>;
}

export default function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden border-t border-white/10 text-white">
      <div className="surface-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />
      <div className="absolute -right-24 top-20 h-80 w-80 bg-red-600/10 blur-3xl" />

      <div className="container-main relative z-10 py-20 md:py-24">
        {/* Banner Ajakan Bertindak (CTA) */}
        <div className="mb-14 grid gap-6 border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <span className="section-label">Dealer Resmi Suzuki Jogja - Jateng</span>
            <h2 className="mt-4 max-w-2xl text-2xl font-black uppercase leading-tight tracking-tighter text-white md:text-4xl">
              Butuh info harga, promo, atau kredit Suzuki?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
              Hubungi Yusuf Suzuki untuk konsultasi cepat, promo DP ringan, dan rekomendasi unit sesuai domisili KTP Anda.
            </p>
          </div>
          <a
            href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20promo%20mobil%20Suzuki%20terbaru`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red w-full md:w-auto"
          >
            <MessageCircle size={17} />
            Chat WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Kolom 1: Profil Dealer */}
          <div className="lg:col-span-1">
            <div className="mb-8 border-l-2 border-red-600 pl-4">
              <span className="inline-flex bg-white px-3 py-2">
                <img src="/logo.png" alt="Dealer Resmi Suzuki Sumber Baru Jogja Magelang" className="h-7 w-auto object-contain md:h-8" />
              </span>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-white/50">Yusuf Suzuki</p>
            </div>
            {/* OPTIMASI LOKAL: Menyisipkan keyword coverage area secara natural */}
            <p className="mb-8 pr-4 text-sm leading-relaxed text-white/50">
              Dealer resmi mobil Suzuki terpercaya melayani wilayah <strong>Yogyakarta, Magelang, Kedu, dan Banyumas</strong>. Dapatkan promo mobil baru, diskon maksimal, dan kemudahan approval kredit.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center border border-white/10 text-white/45 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white">
                  <span className="sr-only">Kunjungi {label} Kami</span>
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Menu Cepat */}
          <div>
            <FooterHeading>Menu Cepat</FooterHeading>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Produk */}
          <div>
            <FooterHeading>Produk Suzuki</FooterHeading>
            <ul className="space-y-3.5">
              {carLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Area Layanan */}
          <div>
            <FooterHeading>Area Layanan</FooterHeading>
            <ul className="space-y-3.5">
              {areas.map((area) => (
                <li key={area.slug}>
                  <FooterLink href={`/dealer/${area.slug}`} label={`Suzuki ${area.name}`} />
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 5: Kontak & Lokasi (OPTIMASI SEMANTIC NAP) */}
          <div>
            <FooterHeading>Kontak & Lokasi</FooterHeading>
            {/* Tag <address> memberi sinyal kuat ke Google tentang data fisik bisnis */}
            <address className="not-italic space-y-5">
              <div className="flex gap-4 text-sm text-white/52">
                <MapPin size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-red-500" />
                <div className="leading-relaxed">
                  <strong className="text-white block mb-1">Suzuki Sumber Baru Mobil</strong>
                  Jl. Magelang KM 8.5, Mulungan Kidul,<br />
                  Sendangadi, Sleman, DIY 55285
                  <a 
                    href="https://maps.app.goo.gl/pedJovQizb3M2X1S7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Navigation size={12} /> Buka di Google Maps
                  </a>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-white/52">
                <Phone size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-red-500" />
                <span className="leading-relaxed">
                  <strong className="text-white">0821 7463 5218</strong><br />
                  (Telepon & WhatsApp Yusuf)
                </span>
              </div>
              <div className="flex gap-4 text-sm text-white/52">
                <Clock size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-red-500" />
                <span className="leading-relaxed">
                  Senin – Sabtu<br />
                  08.00 – 17.00 WIB
                </span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bagian Bawah Footer */}
      <div className="relative z-10 border-t border-white/10 bg-black/70">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-7 md:flex-row">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.22em] text-white/35 md:text-left">
            © 2026 Suzuki Sumber Baru Mobil. Dealer Resmi.
          </p>
          {/* OPTIMASI BAWAH: Menaruh sinyal kota di area copyright */}
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30 text-center md:text-right">
            Melayani: Jogja • Magelang • Kedu • Banyumas
          </p>
        </div>
      </div>
    </footer>
  );
}