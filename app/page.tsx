import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";
import MapSection from "@/components/MapSection";

// Metadata di sini dihapus agar mengikuti layout.tsx secara otomatis

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      
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