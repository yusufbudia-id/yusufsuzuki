// app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // <-- KEMBALI MENGGUNAKAN MANROPE
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";
import BottomNavigation from "@/components/BottomNavigation";

// INISIALISASI FONT MANROPE
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suzukiautojogja.com"), 
  
  alternates: {
    canonical: "/",
  },

  // ---> UPDATE SEO: PENAMBAHAN KATA "MOBIL" <---
  title: {
    default: "Dealer Mobil Suzuki Jogja Resmi | Harga OTR & Promo Terbaru",
    template: "%s | Dealer Mobil Suzuki Jogja", 
  },
  description:
    "Cari mobil Suzuki di Jogja? Dapatkan promo DP ringan, diskon besar, dan harga OTR terbaru di Dealer Resmi Suzuki Sumber Baru Mobil bersama Yusuf Suzuki (0821-7463-5218).",
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
  keywords: [
    "mobil suzuki jogja",
    "dealer mobil suzuki jogja",
    "suzuki sumber baru mobil",
    "harga mobil suzuki jogja",
    "kredit mobil suzuki jogja",
    "promo mobil suzuki jogja",
    "suzuki xl7 jogja",
    "suzuki ertiga jogja",
    "suzuki fronx jogja",
    "suzuki carry pick up jogja",
    "mobil box mbg jogja",
    // --- PENAMBAHAN VARIASI NOMOR HP UNTUK SEO PENCARIAN NOMOR ---
    "082174635218",
    "0821 7463 5218",
    "0821-7463-5218",
    "yusuf suzuki jogja",
    "sales suzuki jogja"
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.suzukiautojogja.com", 
    siteName: "Suzuki Sumber Baru Mobil",
    title: "Dealer Mobil Suzuki Jogja | Promo DP Ringan & Angsuran Murah", 
    description:
      "Hubungi Yusuf Suzuki (0821-7463-5218) untuk promo mobil Suzuki terbaru di Yogyakarta dan sekitarnya. Proses cepat, dibantu sampai ACC!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Promo Suzuki Sumber Baru Mobil Jogja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealer Mobil Suzuki Jogja | Promo & Harga Terbaru",
    description:
      "Dealer resmi mobil Suzuki Jogja & sekitarnya. Promo terbaik, kredit mudah, DP ringan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Dealer Mobil Suzuki Jogja - Sumber Baru Mobil",
    "image": "https://www.suzukiautojogja.com/logo.png",
    "@id": "https://www.suzukiautojogja.com",
    "url": "https://www.suzukiautojogja.com",
    // --- UPDATE: MENGGUNAKAN ARRAY AGAR GOOGLE MEMBACA SEMUA VARIASI NOMOR ---
    "telephone": [
      "+6282174635218",
      "082174635218",
      "0821 7463 5218",
      "0821-7463-5218"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Magelang KM 8, Sendangadi, Mlati",
      "addressLocality": "Sleman",
      "addressRegion": "Daerah Istimewa Yogyakarta",
      "postalCode": "55285",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.734464690542473,
      "longitude": 110.3629346013371
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://web.facebook.com/sumberbarumobil.yusuf",
      "https://www.instagram.com/suzukisumberbaru.yusuf",
      "https://www.tiktok.com/@suzukisumberbaru.yusuf",
      "https://www.youtube.com/@yusufsuzuki"
    ]
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* MENGGUNAKAN CLASS MANROPE DI BODY */}
      <body className={`${manrope.variable} ${manrope.className} antialiased bg-white text-gray-900`}>
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXXX'); 
            fbq('track', 'PageView');
          `}
        </Script>

        <Navbar />
        
        <main className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>
        
        <Footer />
        <WhatsappFloatingButton />
        
        <BottomNavigation />
      </body>
    </html>
  );
}