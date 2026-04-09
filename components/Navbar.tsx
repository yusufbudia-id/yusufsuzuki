"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn, WA_BASE_URL } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Produk Mobil", href: "/mobil" },
  { label: "Promo", href: "/promo" },
  { label: "Simulasi Kredit", href: "/simulasi-kredit" },
  { label: "Test Drive", href: "/test-drive" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // OTOMATIS: Semua halaman dalam list ini akan memiliki Navbar transparan di posisi paling atas
  const darkHeaderPages = ["/", "/mobil", "/promo", "/kontak", "/tentang-kami", "/simulasi-kredit", "/test-drive", "/faq"];
  
  // UPDATE: Cek list ATAU URL berawalan /mobil/
  const isTransparent = !scrolled && (darkHeaderPages.includes(pathname) || pathname.startsWith("/mobil/"));

  const navBg = !isTransparent
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent";

  // Mode teks: Putih saat di Header Gelap, Abu-abu Gelap saat scroll turun
  const textColorClass = !isTransparent ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white";
  const activeColorClass = !isTransparent ? "text-gray-900 font-bold" : "text-white font-bold";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          navBg
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Image */}
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Logo Suzuki Sumber Baru Jogja" 
                className={cn(
                  "h-6 md:h-7 w-auto object-contain transition-all duration-300 group-hover:scale-105",
                  isTransparent && "brightness-0 invert"
                )}
              />
            </Link>

            {/* Desktop Nav - Editorial Premium Style */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                // UPDATE: Menu Produk Mobil akan tetap aktif (tebal) saat masuk ke detail /mobil/xxx
                const isActive = pathname === link.href || (link.href === "/mobil" && pathname.startsWith("/mobil/"));
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className={cn(
                      "text-[11px] font-bold uppercase tracking-widest transition-colors duration-200",
                      isActive ? activeColorClass : textColorClass
                    )}>
                      {link.label}
                    </span>
                    {/* Garis Bawah Aktif (Underline Animasi) */}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[2px] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                      !isTransparent ? "bg-gray-900" : "bg-white"
                    )} />
                  </Link>
                );
              })}
            </div>

            {/* CTA Button Desktop - Monokrom Tajam */}
            <div className="hidden lg:flex items-center">
              <a
                href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20tentang%20mobil%20Suzuki`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold px-6 py-3.5 rounded-none flex items-center gap-2 transition-all duration-300 active:scale-95 shadow-sm",
                  isTransparent 
                    ? "bg-transparent border border-white/50 text-white hover:bg-white hover:text-black backdrop-blur-sm"
                    : "bg-red-600 text-white hover:bg-black"
                )}
              >
                <MessageCircle size={16} />
                Chat Yusuf
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2 transition-colors",
                !isTransparent ? "text-gray-900" : "text-white"
              )}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Monokrom Bersih */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white shadow-2xl border-b border-gray-100 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                 // UPDATE JUGA DI SINI UNTUK MOBILE
                 const isActive = pathname === link.href || (link.href === "/mobil" && pathname.startsWith("/mobil/"));
                 
                 return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "py-4 text-[10px] uppercase tracking-widest font-bold border-b border-gray-50 transition-colors",
                      isActive
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20tentang%20mobil%20Suzuki`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-6 bg-gray-900 text-white text-[10px] uppercase tracking-widest font-bold py-4 rounded-none flex justify-center items-center gap-2"
              >
                <MessageCircle size={16} />
                Chat Yusuf Suzuki
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}