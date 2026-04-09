import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Dealer Suzuki Jogja | Suzuki Sumber Baru Mobil – Jl. Magelang KM 8",
  description:
    "Dealer resmi Suzuki Yogyakarta & sekitarnya. Promo terbaik, kredit mudah, DP ringan. Hubungi Yusuf Suzuki: 0821 7463 5218.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      
      {/* Garis Pembatas Tipis (Tidak mentok ujung layar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200" />
      </div>
      
      <PromoSection />
      <AdvantagesSection />
      <TestimonialSection />
      <MapSection />
      <ContactCTA />
    </>
  );
}