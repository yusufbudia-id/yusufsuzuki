import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suzukiautojogja.com"), 
  title: {
    default: "Dealer Suzuki Jogja | Suzuki Sumber Baru Mobil – Jl. Magelang KM 8",
    template: "%s | Suzuki Sumber Baru Mobil Jogja",
  },
  description:
    "Dealer resmi Suzuki Jogja & sekitarnya. Suzuki Sumber Baru Mobil di Jl. Magelang KM 8. Promo terbaik, kredit mudah, DP ringan. Hubungi Yusuf Suzuki: 0821 7463 5218.",
  keywords: [
    "dealer suzuki jogja",
    "suzuki sumber baru mobil",
    "harga suzuki jogja",
    "kredit suzuki jogja",
    "promo suzuki jogja",
    "suzuki xl7 jogja",
    "suzuki ertiga jogja",
    "suzuki fronx jogja",
    "suzuki carry pick up jogja",
    "mobil box mbg jogja",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://suzukiautojogja.com", 
    siteName: "Suzuki Sumber Baru Mobil",
    title: "Dealer Resmi Suzuki Jogja | Suzuki Sumber Baru Mobil",
    description:
      "Dealer resmi Suzuki Jogja & sekitarnya. Promo terbaik, kredit mudah, DP ringan. Hubungi Yusuf Suzuki: 0821 7463 5218.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Suzuki Sumber Baru Mobil Jogja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealer Resmi Suzuki Jogja | Suzuki Sumber Baru Mobil",
    description:
      "Dealer resmi Suzuki Jogja & sekitarnya. Promo terbaik, kredit mudah, DP ringan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={manrope.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "Suzuki Sumber Baru Mobil",
              description: "Dealer resmi Suzuki area Jogja & sekitarnya",
              url: "https://suzukiautojogja.com", 
              telephone: "+6282174635218",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Magelang KM 8",
                addressLocality: "Yogyakarta",
                addressRegion: "DI Yogyakarta",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.7494,
                longitude: 110.3593,
              },
              openingHours: "Mo-Sa 08:00-17:00",
              priceRange: "Rp 100.000.000 - Rp 500.000.000",
              brand: {
                "@type": "Brand",
                name: "Suzuki",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFloatingButton />
      </body>
    </html>
  );
}