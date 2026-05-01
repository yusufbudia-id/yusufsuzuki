export interface Promo {
  slug: string;
  title: string;
  description: string;
  carSlug?: string;
  carName?: string;
  badge: string;
  validUntil: string;
  image: string;
  highlight: string;
}

export const promos: Promo[] = [
  // 1. EVENT BARU
  {
    slug: "promo-otomotif-expo-pakuwon",
    title: "Kunjungi Otomotif Expo Suzuki di Pakuwon Mall Jogja!",
    description: `Jangan lewatkan pameran spesial Suzuki di Otomotif Expo Pakuwon Mall Jogja! Dapatkan penawaran eksklusif "Choose Your Own Deals" khusus untuk pemesanan selama pameran berlangsung.

📍 Lokasi: LGM Floor, Pakuwon Mall Jogja
📅 Tanggal: 14 - 19 April 2026
⏰ Waktu: 10.00 - 22.00 WIB

Pilih Promo Unggulanmu (Choose Your Own Deals):
- Bunga Mulai 1,8% Per Tahun
- DP Mulai 20%
- Tenor Panjang Hingga 8 Tahun
- Bunga Flat Sepanjang Tenor
- Instant Approval
- FREE Suku Cadang & Perawatan Berkala s/d 50.000 KM

Pilihan Hadiah Spesial (FREE)*:
- Motor Suzuki Burgman / Suzuki Nex
- iPhone 17 Pro Max
- MAP Gift Voucher hingga Rp 20 Juta
- iPad Air 11"
- Apple Watch 11 Series
- Garansi Baterai Lithium-Ion 8 Tahun (Untuk tipe Hybrid)

Juga ikuti program Test Drive Berhadiah Suzuki Fronx di lokasi! Tunggu apa lagi? Segera hubungi Yusuf Suzuki untuk janjian bertemu di pameran.`,
    badge: "EVENT SPESIAL",
    validUntil: "19 April 2026",
    image: "/promo/otomotif-expo.jpg", 
    highlight: "14-19 April 2026 di Pakuwon Mall Jogja!",
  },
  // 2. PROMO PRIMADONA ALL IN ONE
  {
    slug: "promo-all-in-one-april",
    title: "Special Promo PRIMADONA: Momen April Diskon Optimal & Hadiah Melimpah!",
    description: `Rayakan 'Special Promo PRIMADONA' di Momen April ini! Dapatkan diskon optimal dan penawaran tak tertandingi untuk seluruh lini Suzuki.

Penawaran Keuangan Utama (Pilih Sendiri Kesepakatanmu):
- Bunga Mulai 1,8% p.a.
- DP Mulai 20%
- Tenor Hingga 8 tahun (8th)
- Bunga Flat & Instant Approval
- Free Suku Cadang & Perawatan Berkala s/d 50.000 KM

Diskon Optimal Model Ready Stock:
- Suzuki Fronx (Hybrid): Diskon s/d Rp 10 JT
- Suzuki S-Presso: Diskon s/d Rp 16 JT
- Suzuki All-New Ertiga (Hybrid): Diskon s/d Rp 26 JT
- Suzuki Grand Vitara (Hybrid): Diskon s/d Rp 43 JT
- Suzuki New Carry: Diskon s/d Rp 34 JT
- Suzuki New XL7 (Hybrid): Diskon s/d Rp 26 JT

Hadiah Penjualan Melimpah (Pilih FREE):
- Garansi Baterai Lithium-Ion 8 tahun
- Suzuki Burgman
- Suzuki Nex
- iPhone 17 Pro Max
- MAP Voucher Rp 20 JT
- iPad Air 11"
- Apple Watch 11 Series`,
    badge: "MOMEN APRIL PRIMADONA",
    validUntil: "30 April 2026",
    image: "/promo/primadona.jpg", 
    highlight: "Bunga 1,8%, DP 20%, Diskon s/d 43 JT!",
  },
  // 3. TEST DRIVE FRONX
  {
    slug: "promo-test-drive-fronx",
    title: "Ayo Test Drive! Dapatkan Kesempatan Bawa Pulang Fronx!",
    description: `Periode 1 April - 30 Juni 2026. Ayo lakukan test drive Suzuki Fronx dan jadilah salah satu dari Total 11 Pemenang yang beruntung:

Hadiah Utama:
- 1 Unit Suzuki Fronx GL AT

Hadiah Lainnya:
- 5 Unit Brugman Street 125 EX
- 5 Unit iPhone 17Pro 256 GB

*Syarat & Ketentuan Berlaku:
- Peserta wajib menggunakan data valid (KTP/SIM/Paspor).
- Tidak berlaku untuk karyawan dealer & PT SIS.`,
    carSlug: "fronx",
    carName: "Suzuki Fronx",
    badge: "TEST DRIVE BERHADIAH",
    validUntil: "30 Juni 2026",
    image: "/promo/testdrive_fronx.jpg", 
    highlight: "Menangkan 1 Unit Fronx GL AT",
  },
  // 4. PROMO JURAGAN CARRY
  {
    slug: "promo-khusus-carry",
    title: "Promo Juragan Carry: Diskon 34 Juta + Gratis Motor Suzuki Burgman!",
    description: `Kabar gembira untuk para juragan! Beli Suzuki Carry Pick Up atau Carry Box sekarang dan nikmati keuntungan berlipat ganda untuk memajukan bisnis Anda.

Keuntungan Pembelian:
- Diskon Promo s/d Rp 34.000.000
- Hadiah Langsung Suzuki Burgman*
- Gratis Biaya Keur Pertama*

Layanan Purna Jual & Garansi:
- Gratis Ganti Oli, Filter, dan Jasa Servis s/d 50.000 KM atau 30 Bulan (mana yang tercapai lebih dulu).
- Garansi Mesin Resmi 3 Tahun atau 100.000 KM.

*Syarat dan Ketentuan Berlaku. Jangan lewatkan kesempatan ini!`,
    carSlug: "carry-pickup",
    carName: "Suzuki Carry Pick Up",
    badge: "PROMO JURAGAN CARRY",
    validUntil: "30 April 2026",
    image: "/promo/promo_carry.jpg", 
    highlight: "Diskon 34 JT + Gratis Burgman!",
  },
  // 5. PROMO PRIMADONA CARRY
  {
    slug: "promo-primadona-carry",
    title: "Special Promo PRIMADONA Carry: DP 8 Jutaan & Bonus Motor Burgman!",
    description: `Kembangkan bisnis Anda di bulan penuh berkah ini dengan Special Promo PRIMADONA (Promo Istimewa Suzuki, Momen April Diskon Optimal Nyaman & Aman) khusus untuk pembelian armada niaga Suzuki New Carry Pick Up di wilayah Jogja dan sekitarnya.

Sebagai "Rajanya Pick Up", Suzuki Carry telah terbukti tangguh menjadi mitra usaha andalan para pengusaha di Indonesia. Kini, Anda bisa memilikinya dengan penawaran paling fantastis dan hemat modal usaha!

Rincian Penawaran Spesial New Carry (Plat AB):
- Harga OTR: Mulai dari Rp 140 Jutaan
- DP Sangat Ringan: Mulai dari Rp 8 Jutaan
- Angsuran: Mulai dari Rp 3 Jutaan per bulan

Keuntungan Ekstra (Hadiah Penjualan Senilai 34 Jutaan):
- GRATIS 1 Unit Motor Suzuki Burgman
- GRATIS Biaya KEUR Pertama

(Keterangan: Unit NIK 2026. Syarat dan ketentuan berlaku).

Suzuki Carry Pick Up hadir dengan dimensi bak yang lebih luas, kabin lega untuk 3 penumpang, dan mesin K15C yang terkenal bandel namun sangat irit bahan bakar. Sangat cocok dan tangguh untuk berbagai jenis muatan usaha Anda, mulai dari logistik, distribusi barang, hingga angkutan hasil bumi.

Jangan biarkan kompetitor mendahului Anda. Promo istimewa ini sangat terbatas di momen April saja! Segera hubungi Yusuf Suzuki untuk konsultasi kebutuhan armada bisnis Anda. Kami siap membantu proses kredit dengan cepat, data dijemput, dan diusahakan maksimal sampai ACC.`,
    carSlug: "carry-pickup",
    carName: "Suzuki Carry Pick Up",
    badge: "PRIMADONA CARRY",
    validUntil: "30 April 2026",
    image: "/promo/primadona-carry.jpg", 
    highlight: "DP 8 JT, OTR 140 JT + Free Burgman!",
  },
  // 6. PROMO PRIMADONA S-PRESSO
  {
    slug: "promo-primadona-spresso",
    title: "Special Promo PRIMADONA S-Presso: DP 12 Jutaan & Gratis Motor Suzuki Nex!",
    description: `Wujudkan impian memiliki city car berjiwa SUV dengan Special Promo PRIMADONA (Promo Istimewa Suzuki, Momen April Diskon Optimal Nyaman & Aman) khusus untuk pembelian Suzuki S-Presso di wilayah Jogja dan sekitarnya.

Suzuki S-Presso adalah pilihan cerdas bagi Anda yang berjiwa muda dan dinamis. Tampil memukau dengan desain eksterior yang bold, ground clearance tinggi layaknya SUV, serta mesin yang terbukti sangat irit bahan bakar untuk menemani mobilitas harian Anda menembus kemacetan kota.

Rincian Penawaran Spesial S-Presso (Plat AB):
- Harga OTR: Mulai dari Rp 160 Jutaan
- DP Sangat Ringan: Mulai dari Rp 12 Jutaan
- Angsuran Terjangkau: Mulai dari Rp 3 Jutaan per bulan

Keuntungan Ekstra (Hadiah Penjualan Senilai 16 Jutaan):
- GRATIS 1 Unit Motor Suzuki Nex
- GRATIS Suku Cadang dan Jasa Servis Berkala hingga 50.000 KM

(Keterangan: Unit NIK 2026. Syarat dan ketentuan berlaku).

Momen April ini adalah kesempatan terbaik Anda untuk mendapatkan penawaran paling menguntungkan. Jangan sampai kehabisan kuota hadiahnya! Segera hubungi Yusuf Suzuki sekarang untuk booking unit, konsultasi simulasi kredit, atau menjadwalkan test drive S-Presso langsung ke rumah Anda. Proses kredit dijamin mudah, cepat, dan dibantu sampai ACC.`,
    carSlug: "s-presso",
    carName: "Suzuki S-Presso",
    badge: "PRIMADONA S-PRESSO",
    validUntil: "30 April 2026",
    image: "/promo/primadona-spresso.jpg", 
    highlight: "DP 12 JT, OTR 160 JT + Free Nex!",
  },
  // 7. MEGA PROMO CARRY (BARU DITAMBAHKAN)
  {
    slug: "mega-promo-carry-solusi-usaha",
    title: "Mega Promo Carry: Solusi Tepat untuk Usaha Makin Berkembang",
    description: `Bagi para pelaku usaha, memiliki kendaraan niaga yang tangguh, irit, dan mudah dalam perawatan tentu menjadi kebutuhan penting untuk mendukung operasional sehari-hari. Kini saat yang tepat untuk memiliki mobil niaga andalan dengan penawaran spesial melalui Mega Promo Carry, program promo menarik yang memberikan banyak keuntungan bagi Anda.

Suzuki Carry sudah lama dikenal sebagai kendaraan niaga favorit masyarakat Indonesia. Dengan desain yang compact namun tetap memiliki daya angkut optimal, Carry sangat cocok digunakan untuk berbagai kebutuhan usaha seperti distribusi barang, usaha kuliner, florist, logistik, hingga bisnis retail.

Melalui promo spesial kali ini, Anda bisa membawa pulang New Carry dengan penawaran yang sangat ringan dan menguntungkan. Mulai dari DP ringan mulai 8 jutaan, harga OTR mulai 140 jutaan, hingga angsuran mulai 3 jutaan per bulan. Penawaran ini tentu menjadi kesempatan emas bagi Anda yang ingin mengembangkan usaha tanpa harus terbebani biaya besar di awal.

Tak hanya itu, tersedia juga berbagai bonus menarik yang semakin menambah nilai keuntungan pembelian Anda. Promo ini dirancang khusus untuk memberikan kemudahan bagi para pelaku usaha agar bisa segera memiliki kendaraan operasional berkualitas dengan proses yang praktis.

Mengapa memilih New Carry?
Pertama, irit bahan bakar, sehingga sangat efisien untuk penggunaan harian. Kedua, mesin tangguh dan bertenaga, siap mendukung aktivitas usaha dalam berbagai kondisi jalan. Ketiga, biaya perawatan terjangkau, menjadikannya investasi jangka panjang yang menguntungkan.

Selain performa, New Carry juga menawarkan kenyamanan berkendara yang lebih baik dengan kabin yang lega serta fitur-fitur modern yang mendukung produktivitas Anda.

Promo ini sangat cocok bagi Anda yang sedang merintis usaha maupun ingin menambah armada operasional bisnis. Jangan lewatkan kesempatan terbatas ini karena penawaran hanya berlaku selama periode promo berlangsung.

Untuk informasi lebih lengkap mengenai detail promo, simulasi kredit, dan konsultasi pembelian, silakan kunjungi:
www.suzukiautojogja.com

Segera manfaatkan kesempatan ini dan wujudkan usaha yang lebih maju bersama New Carry.
Kerja makin mudah, usaha makin berkah!`,
    carSlug: "carry-pickup",
    carName: "Suzuki New Carry",
    badge: "MEGA PROMO CARRY",
    validUntil: "31 Mei 2026",
    image: "/promo/mega-promo-carry.jpg", // Ganti dengan nama file gambar banner promomu jika ada
    highlight: "DP 8 Jutaan, OTR 140 Jutaan, Angsuran 3 Jutaan!",
  }
];