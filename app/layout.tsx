// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";
import BottomNavigation from "@/components/BottomNavigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suzukiautojogja.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Dealer Mobil Suzuki Jogja Resmi | Harga OTR & Promo Terbaru",
    template: "%s | Dealer Mobil Suzuki Jogja",
  },
  description:
    "Dealer mobil Suzuki Jogja resmi. Cek harga OTR, promo DP ringan, kredit mudah, dan test drive bersama Yusuf Suzuki: 0821-7463-5218.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "suzuki terdekat",
    "suzuki mobil terdekat",
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
    "082174635218",
    "0821 7463 5218",
    "0821-7463-5218",
    "yusuf suzuki jogja",
    "sales suzuki jogja",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.suzukiautojogja.com",
    siteName: "Suzuki Sumber Baru Mobil",
    title: "Dealer Mobil Suzuki Jogja | Promo DP Ringan & Angsuran Murah",
    description:
      "Dealer mobil Suzuki Jogja resmi untuk harga OTR, promo terbaru, kredit mudah, dan test drive bersama Yusuf Suzuki.",
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
      "Dealer mobil Suzuki Jogja resmi. Cek harga OTR, promo terbaru, kredit mudah, dan test drive.",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoDealer",
        "@id": "https://www.suzukiautojogja.com/#dealer",
        "name": "Suzuki Sumber Baru Mobil Jogja",
        "url": "https://www.suzukiautojogja.com",
        "image": "https://www.suzukiautojogja.com/logo.png",
        "telephone": "+6282174635218",
        "priceRange": "Rp 180.000.000 - Rp 530.000.000",
        "hasMap": "https://maps.app.goo.gl/pedJovQizb3M2X1S7",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Magelang KM 8.5, Mulungan Kidul, Sendangadi",
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Yogyakarta" },
          { "@type": "City", "name": "Sleman" },
          { "@type": "City", "name": "Magelang" },
          { "@type": "AdministrativeArea", "name": "Kedu" },
          { "@type": "City", "name": "Banyumas" }
        ],
        "sameAs": [
          "https://web.facebook.com/sumberbarumobil.yusuf",
          "https://www.instagram.com/suzukisumberbaru.yusuf",
          "https://www.tiktok.com/@suzukisumberbaru.yusuf",
          "https://www.youtube.com/@yusufsuzuki"
        ]
      }
    ]
  };

  return (
    <html lang="id">
      <head>
        {/* Runtime font loading keeps the premium Manrope look without making `next build` fetch fonts. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}

        {metaPixelId ? (
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
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}

        <Navbar />

        <main id="main-content" tabIndex={-1} className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>

        <Footer />
        <WhatsappFloatingButton />
        <BottomNavigation />
      </body>
    </html>
  );
}
