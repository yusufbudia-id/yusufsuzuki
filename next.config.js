/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  
  // Menambahkan aturan pengalihan (Redirect 301) untuk SEO
  async redirects() {
    return [
      {
        source: '/promo/promo-santai-suzuki-fronx-juli', // URL lama yang terlanjur di-index Google
        destination: '/promo/promo-santai-suzuki-fronx-jogja', // URL baru yang benar
        permanent: true, // true = 301 Redirect (Pindah Permanen)
      },
    ];
  },
};

module.exports = nextConfig;