export interface Testimonial {
  id: string;
  name: string;
  location: string;
  car: string;
  review: string;
  rating: number;
  avatar: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Budi Santoso",
    location: "Sleman, Jogja",
    car: "Suzuki XL7",
    review:
      "Pelayanan Yusuf sangat ramah dan profesional. Proses kredit cepat, hanya 3 hari langsung ACC. Mobilnya bagus banget, keluarga puas! Terima kasih Suzuki Sumber Baru Mobil.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=1",
    date: "Oktober 2025",
  },
  {
    id: "t2",
    name: "Dewi Rahayu",
    location: "Magelang",
    car: "Suzuki Ertiga",
    review:
      "Beli Ertiga untuk keperluan keluarga. Mas Yusuf sangat helpful, kasih info promo terbaik dan bantu pilih warna yang cocok. Recommended banget buat yang mau beli Suzuki di Jogja!",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=5",
    date: "September 2025",
  },
  {
    id: "t3",
    name: "Hendra Wijaya",
    location: "Muntilan",
    car: "Suzuki Carry Pick Up",
    review:
      "Sudah ambil 2 unit Carry Pick Up untuk usaha. Prosesnya mudah, DP terjangkau, dan after sales servicenya bagus. Yusuf selalu fast response via WhatsApp. Pasti balik lagi!",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=3",
    date: "Agustus 2025",
  },
  {
    id: "t4",
    name: "Sari Puspita",
    location: "Kulon Progo",
    car: "Suzuki S-Presso",
    review:
      "S-Presso pilihan pertamaku! Lucu, irit, dan bisa parkir di mana aja. Mas Yusuf sabar jelasin semua fiturnya. Harga juga sesuai budget. Sangat puas dengan pelayanannya!",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=9",
    date: "November 2025",
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
