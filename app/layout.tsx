import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script"; // <-- 1. Import komponen Script dari Next.js
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
    default: "Sales Konsultan Resmi Suzuki Jogja - Sumber Baru Mobil",
    template: "%s | Sumber Baru Mobil Jogja", // Template disesuaikan agar sub-halaman tetap rapi
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
    title: "Sales Konsultan Resmi Suzuki Jogja - Sumber Baru Mobil", // Diperbarui
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
    title: "Sales Konsultan Resmi Suzuki Jogja - Sumber Baru Mobil", // Diperbarui
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Data Schema Markup untuk LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Suzuki Sumber Baru Mobil",
    "image": "https://suzukiautojogja.com/logo.png",
    "@id": "https://suzukiautojogja.com",
    "url": "https://suzukiautojogja.com",
    "telephone": "+6282174635218",
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
      "https://www.tiktok.com/@suzukisumberbaru.yusuf"
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
      <body className={`${manrope.className} antialiased bg-white text-gray-900`}>
        
        {/* 2. Google Analytics Script (Mode afterInteractive) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* 3. Meta / Facebook Pixel Script (Mode afterInteractive) */}
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
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        <WhatsappFloatingButton />
      </body>
    </html>
  );
}