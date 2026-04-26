export interface Testimonial {
  id: string;
  name: string;
  location: string;
  car: string;
  review: string;
  rating: number;
  avatar?: string;
  date: string;
  gender?: "male" | "female";
  deliveryPhoto?: string; // <--- SUDAH ADA
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Bertha Lisa Permata Sari",
    location: "Sleman, Jogja",
    car: "Suzuki XL7",
    review:
      "Pelayanan Yusuf sangat ramah dan profesional. Proses kredit cepat, hanya 3 hari langsung ACC. Mobilnya bagus banget, keluarga puas! Terima kasih Suzuki Sumber Baru Mobil.",
    rating: 5,
    gender: "female",
    date: "Oktober 2025",
    deliveryPhoto: "/testimonial/foto-bertha.jpg", // <--- SAYA TAMBAHKAN DI SINI
  },
  {
    id: "t2",
    name: "Yuli Supriyanto",
    location: "Magelang",
    car: "Suzuki Carry Pick Up",
    review:
      "Beli Carry Pick Up untuk keperluan usaha. Mas Yusuf sangat helpful, kasih info promo terbaik dan bantu pilih warna yang cocok. Recommended banget buat yang mau beli Suzuki di Jogja!",
    rating: 5,
    gender: "male",
    date: "September 2025",
    // Sengaja dikosongkan agar kamu bisa lihat tombolnya otomatis hilang
  },
  {
    id: "t3",
    name: "Danang Pranoto Sudrajat, S.IP.",
    location: "Bantul",
    car: "Suzuki APV Blindvan",
    review:
      "Sudah ambil APV Blindvan untuk usaha. Prosesnya mudah dan after sales servicenya bagus. Yusuf selalu fast response via WhatsApp. Pasti balik lagi!",
    rating: 5,
    gender: "male",
    date: "Agustus 2025",
    deliveryPhoto: "/testimonial/foto-danang.jpg", // <--- SAYA TAMBAHKAN DI SINI
  },
  {
    id: "t4",
    name: "Sugiono",
    location: "Purworejo",
    car: "Suzuki Carry Pick Up",
    review:
      "Pengambilan Carry Pick Up kedua saya. Mas Yusuf sabar jelasin semua fiturnya. Harga juga sesuai budget. Sangat puas dengan pelayanannya!",
    rating: 5,
    gender: "male",
    date: "November 2025",
    // Sengaja dikosongkan juga
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Apakah bisa kredit?",
    answer:
      "Ya, kami melayani pembelian kredit melalui berbagai perusahaan leasing terpercaya seperti ADMF, BCA Finance, Mandiri Tunas Finance, Oto Finance, dan lainnya. Proses pengajuan cepat dan mudah, biasanya 2-3 hari kerja sudah mendapat persetujuan.",
  },
  {
    question: "Apakah bisa test drive?",
    answer:
      "Tentu! Kami menyediakan layanan test drive gratis untuk semua tipe Suzuki. Anda bisa booking test drive melalui WhatsApp Yusuf Suzuki atau mengisi form di halaman Test Drive. Test drive bisa dilakukan di showroom atau kami bisa atur sesuai lokasi Anda.",
  },
  {
    question: "Berapa lama proses kredit?",
    answer:
      "Proses kredit umumnya memakan waktu 2-3 hari kerja setelah dokumen lengkap. Dokumen yang diperlukan: KTP, KK, NPWP (untuk pembelian di atas nominal tertentu), slip gaji/rekening koran 3 bulan terakhir. Kami akan bantu proses dari awal hingga selesai.",
  },
  {
    question: "Area pengiriman sampai mana?",
    answer:
      "Kami melayani pengiriman untuk seluruh area Yogyakarta, Magelang, Purworejo, Kebumen, Wonosobo, Temanggung, Klaten, dan sekitarnya. Untuk area lain bisa dikonsultasikan terlebih dahulu dengan Yusuf Suzuki.",
  },
  {
    question: "Apakah ada promo tiap bulan?",
    answer:
      "Ya! Suzuki secara rutin mengadakan program promo bulanan seperti cashback, DP ringan, cicilan 0%, dan bonus aksesoris. Promo bisa berbeda tiap bulan dan tipe mobil. Hubungi Yusuf Suzuki untuk info promo terkini karena promo terbatas.",
  },
  {
    question: "Bisa tukar tambah?",
    answer:
      "Bisa! Kami menerima tukar tambah (trade-in) mobil lama Anda. Proses appraisal cepat dan harga kompetitif. Bawa mobil lama ke showroom kami atau hubungi Yusuf Suzuki untuk estimasi harga trade-in terlebih dahulu.",
  },
  {
    question: "Berapa DP minimum untuk kredit?",
    answer:
      "DP minimum untuk kredit mobil Suzuki adalah 20% dari harga OTR. Namun kami sering memiliki program promo DP ringan mulai 15% untuk tipe tertentu. Konsultasikan kebutuhan dan kemampuan Anda dengan Yusuf Suzuki untuk mendapat skema terbaik.",
  },
  {
    question: "Apakah ada garansi resmi?",
    answer:
      "Ya, semua mobil Suzuki baru mendapat garansi resmi dari PT Suzuki Indomobil Sales (SIS): 3 tahun atau 100.000 km untuk garansi umum, dan garansi anti karat 2 tahun. Service gratis pertama juga tersedia di bengkel resmi Suzuki terdekat.",
  },
];