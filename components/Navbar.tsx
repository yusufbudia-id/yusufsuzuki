"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"; // <-- Tambahkan ChevronDown
import { cn, WA_BASE_URL } from "@/lib/utils";
import { areas } from "@/data/areas"; 

// 1. STRUKTUR MENU BARU DENGAN DROPDOWN
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Produk Mobil", href: "/mobil" },
  { label: "Promo", href: "/promo" },
  { label: "Simulasi Kredit", href: "/simulasi-kredit" },
  { label: "Test Drive", href: "/test-drive" },
  { 
    label: "Informasi", 
    dropdown: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Berita & Tips", href: "/berita" },
      { label: "FAQ", href: "/faq" },
    ] 
  },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false); // State khusus dropdown mobile
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let cityName = "";
  if (pathname && pathname.startsWith("/dealer/")) {
    const slug = pathname.split("/")[2];
    const currentArea = areas.find((a) => a.slug === slug);
    if (currentArea) {
      cityName = currentArea.name;
    }
  }

  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  const darkHeaderPages = ["/", "/mobil", "/promo", "/kontak", "/tentang-kami", "/simulasi-kredit", "/test-drive", "/berita", "/faq"];
  
  const isTransparent = !scrolled && (darkHeaderPages.includes(pathname) || pathname.startsWith("/mobil/") || pathname.startsWith("/dealer/"));

  const navBg = !isTransparent
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    : "bg-transparent";

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

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, index) => {
                // Cek apakah item ini aktif (termasuk cek anak dropdown-nya)
                const isDropdownActive = link.dropdown?.some(d => pathname === d.href || pathname.startsWith(d.href + "/"));
                const isActive = link.dropdown ? isDropdownActive : (pathname === link.href || (link.href === "/mobil" && pathname.startsWith("/mobil/")));
                
                return link.dropdown ? (
                  // --- RENDER DROPDOWN ---
                  <div key={index} className="relative group py-2">
                    <button className={cn(
                      "flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest transition-colors duration-200 outline-none",
                      isActive ? activeColorClass : textColorClass
                    )}>
                      {link.label} 
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Garis Bawah Aktif */}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[2px] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                      !isTransparent ? "bg-gray-900" : "bg-white"
                    )} />

                    {/* Kotak Dropdown (Tampil saat hover) */}
                    <div className="absolute top-full left-0 mt-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-gray-100 shadow-xl flex flex-col rounded-none overflow-hidden">
                        {link.dropdown.map((drop) => {
                           const isChildActive = pathname === drop.href || pathname.startsWith(drop.href + "/");
                           return (
                             <Link 
                               key={drop.href} 
                               href={drop.href}
                               className={cn(
                                 "px-5 py-3.5 text-[10px] uppercase tracking-widest font-bold transition-colors border-b border-gray-50 last:border-0",
                                 isChildActive ? "text-blue-600 bg-blue-50/50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                               )}
                             >
                               {drop.label}
                             </Link>
                           );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  // --- RENDER MENU BIASA ---
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="relative group py-2"
                  >
                    <span className={cn(
                      "text-[11px] font-bold uppercase tracking-widest transition-colors duration-200",
                      isActive ? activeColorClass : textColorClass
                    )}>
                      {link.label}
                    </span>
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[2px] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                      !isTransparent ? "bg-gray-900" : "bg-white"
                    )} />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center">
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`} 
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white shadow-2xl border-b border-gray-100 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, index) => {
                 const isDropdownActive = link.dropdown?.some(d => pathname === d.href || pathname.startsWith(d.href + "/"));
                 const isActive = link.dropdown ? isDropdownActive : (pathname === link.href || (link.href === "/mobil" && pathname.startsWith("/mobil/")));
                 
                 return link.dropdown ? (
                   // --- RENDER DROPDOWN MOBILE ---
                   <div key={index} className="flex flex-col">
                     <button 
                       onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                       className={cn(
                         "flex items-center justify-between py-4 text-[10px] uppercase tracking-widest font-bold border-b border-gray-50 transition-colors w-full text-left outline-none",
                         isActive || mobileInfoOpen ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                       )}
                     >
                       {link.label}
                       <ChevronDown size={16} className={cn("transition-transform duration-300", mobileInfoOpen ? "rotate-180" : "")} />
                     </button>
                     
                     <AnimatePresence>
                       {mobileInfoOpen && (
                         <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden bg-gray-50/50 flex flex-col"
                         >
                           {link.dropdown.map((drop) => {
                             const isChildActive = pathname === drop.href || pathname.startsWith(drop.href + "/");
                             return (
                               <Link
                                 key={drop.href}
                                 href={drop.href}
                                 onClick={() => setMenuOpen(false)}
                                 className={cn(
                                   "py-3.5 pl-6 text-[10px] uppercase tracking-widest font-bold border-b border-gray-100/50 transition-colors",
                                   isChildActive ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                                 )}
                               >
                                 • {drop.label}
                               </Link>
                             );
                           })}
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                 ) : (
                   // --- RENDER MENU BIASA MOBILE ---
                   <Link
                     key={link.href}
                     href={link.href!}
                     onClick={() => setMenuOpen(false)}
                     className={cn(
                       "py-4 text-[10px] uppercase tracking-widest font-bold border-b border-gray-50 transition-colors",
                       isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
                     )}
                   >
                     {link.label}
                   </Link>
                 );
              })}
              
              <a
                href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-6 bg-gray-900 text-white text-[10px] uppercase tracking-widest font-bold py-4 rounded-none flex justify-center items-center gap-2 shadow-md"
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