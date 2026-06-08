"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 640);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 hidden h-12 w-12 place-items-center border border-gray-200 bg-white/95 text-gray-950 shadow-card backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-600 hover:text-white md:grid"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
