export interface Promo {
  id: string;
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
  {
    id: "promo-all-in-one-april",
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
  {
    id: "promo-test-drive-fronx",
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
  {
    id: "promo-khusus-carry",
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
    image: "/promo/promo_carry.jpg", // Pastikan file gambar ini tersedia di public/promo/
    highlight: "Diskon 34 JT + Gratis Burgman!",
  }
];