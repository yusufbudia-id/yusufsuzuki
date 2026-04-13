"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

export default function WhatsappFloatingButton() {
  return (
    <motion.a
      href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20tentang%20mobil%20Suzuki`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      // Perhatikan class di bawah ini: 'hidden md:flex' menggantikan 'flex'
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl items-center justify-center transition-colors group"
      aria-label="Chat WhatsApp Yusuf Suzuki"
    >
      <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
    </motion.a>
  );
}