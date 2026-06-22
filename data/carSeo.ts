import type { DetailedSpecification } from "@/data/cars";

export interface CarSeoFaq {
  question: string;
  answer: string;
}

export interface CarSeoContent {
  detailedSpecifications: DetailedSpecification[];
  faqs: CarSeoFaq[];
}

/**
 * Data SEO per model. Semua poin yang muncul di halaman dan JSON-LD bersumber
 * dari objek yang sama agar FAQ / spesifikasi yang dirayapi Google sama dengan
 * konten yang benar-benar dilihat pengunjung.
 */
export const carSeoContent: Record<string, CarSeoContent> = {
  fronx: {
    detailedSpecifications: [
      { label: "Kapasitas Penumpang", value: "5 penumpang" },
      { label: "Pilihan Varian", value: "GL MT, GL AT, GX MT, GX AT, SGX AT one-tone dan two-tone" },
      { label: "Mesin", value: "1.5L K15C Smart Hybrid sesuai varian yang tercantum pada pricelist" },
      { label: "Transmisi", value: "Manual 5-percepatan atau otomatis 6-percepatan, mengikuti varian" },
      { label: "Ground Clearance", value: "170 mm" },
      { label: "Radius Putar", value: "4,8 m" },
      { label: "Keselamatan", value: "6 airbags, ISOFIX, Hill Hold Control, serta Suzuki Safety Support pada varian SGX" },
      { label: "Fitur Premium", value: "Head-up display dan fitur asistensi pengemudi tersedia pada varian SGX" },
    ],
    faqs: [
      {
        question: "Apa perbedaan Suzuki Fronx GL, GX, dan SGX?",
        answer: "GL adalah pilihan entry-level, GX menawarkan kelengkapan yang lebih tinggi, sedangkan SGX merupakan varian tertinggi dengan fitur premium dan Suzuki Safety Support. Perbedaan transmisinya, warna, dan fitur perlu disesuaikan dengan varian pada daftar harga di halaman ini.",
      },
    ],
  },
  xl7: {
    detailedSpecifications: [
      { label: "Kapasitas Penumpang", value: "7 penumpang dengan konfigurasi tiga baris" },
      { label: "Pilihan Varian", value: "Zeta, Hybrid Beta, Hybrid Alpha, dan Hybrid Alpha Kuro" },
      { label: "Mesin", value: "1.5L dengan teknologi Smart Hybrid pada varian Hybrid" },
      { label: "Transmisi", value: "Manual 5-percepatan atau otomatis 4-percepatan, mengikuti varian" },
      { label: "Karakter Utama", value: "SUV keluarga dengan kabin lega, ground clearance tinggi, dan ruang bagasi fleksibel" },
      { label: "Keselamatan", value: "Dual SRS airbags dan sensor parkir belakang; ESP serta kamera belakang tersedia pada varian tertentu" },
      { label: "Kenyamanan", value: "AC belakang dan konfigurasi kabin tiga baris untuk kebutuhan keluarga" },
      { label: "Teknologi Hybrid", value: "Mild hybrid membantu efisiensi pada varian Hybrid; detail fitur mengikuti tipe" },
    ],
    faqs: [
      {
        question: "Apa perbedaan XL7 Zeta, Hybrid Beta, Hybrid Alpha, dan Alpha Kuro?",
        answer: "Zeta merupakan pilihan dasar, sedangkan Beta dan Alpha menambahkan teknologi Smart Hybrid serta fitur yang lebih lengkap. Alpha Kuro berfokus pada tampilan eksklusif. Pilihan transmisi, warna, dan kelengkapan mengikuti tipe pada pricelist.",
      },
    ],
  },
  "carry-pickup": {
    detailedSpecifications: [
      { label: "Kapasitas Muatan", value: "Hingga 1 ton, tergantung konfigurasi dan ketentuan penggunaan" },
      { label: "Pilihan Bak", value: "Flat Deck (FD) dan Wide Deck (WD)" },
      { label: "Pilihan Varian", value: "FD, WD, FD AC PS, dan WD AC PS" },
      { label: "Mesin", value: "1.5L K15B-C" },
      { label: "Transmisi", value: "Manual 5-percepatan" },
      { label: "Kapasitas Kabin", value: "3 penumpang" },
      { label: "Dimensi", value: "Dimensi bak dan keseluruhan berbeda antara FD dan WD" },
      { label: "Kebutuhan Usaha", value: "Cocok untuk distribusi, material, pertanian, kuliner, dan operasional UMKM" },
    ],
    faqs: [
      {
        question: "Apa perbedaan Suzuki Carry Pick Up Flat Deck dan Wide Deck?",
        answer: "Flat Deck dan Wide Deck memiliki bentuk serta ukuran area muatan yang berbeda. Pilihannya perlu disesuaikan dengan jenis barang, rute operasional, dan kebutuhan bak. Tim kami dapat membantu membandingkan ukuran serta simulasi kredit tiap varian.",
      },
    ],
  },
  "carry-box": {
    detailedSpecifications: [
      { label: "Basis Kendaraan", value: "Suzuki New Carry Pick Up dengan karoseri box" },
      { label: "Pilihan Paket", value: "FD Box Paket Hemat, FD PS Box Paket Hemat, serta pilihan box MBG" },
      { label: "Mesin", value: "1.5L K15B-C" },
      { label: "Transmisi", value: "Manual 5-percepatan" },
      { label: "Dimensi Box", value: "Mengikuti paket karoseri pada varian; konfirmasi ukuran sebelum pemesanan" },
      { label: "Kapasitas Muatan", value: "Menyesuaikan berat karoseri, spesifikasi box, dan ketentuan penggunaan" },
      { label: "Kebutuhan Usaha", value: "Distribusi barang, katering, pengiriman, usaha makanan, dan operasional tertutup" },
      { label: "Konsultasi Karoseri", value: "Konfigurasi box, rak, pintu, dan kebutuhan usaha dapat dikonsultasikan sebelum pemesanan" },
    ],
    faqs: [
      {
        question: "Apakah Suzuki Carry Box bisa disesuaikan untuk kebutuhan usaha?",
        answer: "Bisa dikonsultasikan sesuai paket karoseri yang tersedia, misalnya kebutuhan box tertutup, rak, atau konfigurasi tertentu. Kami akan membantu mencocokkan jenis box dengan kebutuhan muatan dan pengajuan kredit usaha Anda.",
      },
    ],
  },
  "s-presso": {
    detailedSpecifications: [
      { label: "Kapasitas Penumpang", value: "4 penumpang" },
      { label: "Pilihan Varian", value: "S-Presso MT dan S-Presso AGS" },
      { label: "Mesin", value: "1.0L K10C, 998 cc, 3 silinder" },
      { label: "Transmisi", value: "Manual 5-percepatan atau Auto Gear Shift (AGS)" },
      { label: "Ground Clearance", value: "180 mm" },
      { label: "Kapasitas Tangki", value: "27 liter" },
      { label: "Keselamatan", value: "Dual SRS airbags dan ABS" },
      { label: "Karakter Utama", value: "Dimensi ringkas untuk mobilitas kota dan posisi duduk yang tinggi" },
    ],
    faqs: [
      {
        question: "Apa perbedaan Suzuki S-Presso MT dan AGS?",
        answer: "S-Presso MT menggunakan transmisi manual 5-percepatan, sedangkan AGS menggunakan Auto Gear Shift untuk kemudahan berkendara di lalu lintas kota. Pilih sesuai preferensi berkendara dan budget Anda.",
      },
    ],
  },
  jimny: {
    detailedSpecifications: [
      { label: "Kapasitas Mesin", value: "1.462 cc, 4 silinder K15B, 16 katup VVT" },
      { label: "Daya Maksimal", value: "Hingga 104,7 PS pada 6.000 rpm" },
      { label: "Torsi Maksimal", value: "Hingga 138 Nm pada 4.400 rpm" },
      { label: "Penggerak", value: "4WD AllGrip Pro dengan transfer case 2H / 4H / 4L" },
      { label: "Ground Clearance", value: "210 mm" },
      { label: "Radius Putar", value: "4,9 m (3-Door) / 5,7 m (5-Door)" },
      { label: "Suspensi", value: "3-Link Rigid Axle dengan Coil Spring" },
      { label: "Sistem Pengereman", value: "Cakram berventilasi depan dan tromol belakang" },
      { label: "Fitur Keselamatan", value: "ABS, EBD, ESP, Brake LSD, HHC, HDC, TECT Body, dan ISOFIX" },
      { label: "Airbags", value: "6 airbags pada 5-Door / dual airbags pada 3-Door" },
    ],
    faqs: [
      {
        question: "Apa perbedaan Suzuki Jimny 3-Door dan 5-Door?",
        answer: "Jimny 3-Door lebih ringkas dan bernuansa klasik, sedangkan 5-Door menawarkan akses kabin dan ruang yang lebih akomodatif. Keduanya menggunakan sistem 4WD AllGrip Pro; pilihan warna, transmisi, dan ketersediaan mengikuti alokasi unit.",
      },
    ],
  },
  ertiga: {
    detailedSpecifications: [
      { label: "Kapasitas Penumpang", value: "7 penumpang dengan konfigurasi tiga baris" },
      { label: "Pilihan Varian", value: "Ertiga GL MT, GL AT, Hybrid GX MT, dan Hybrid GX AT" },
      { label: "Mesin", value: "1.5L K15B" },
      { label: "Transmisi", value: "Manual 5-percepatan atau otomatis 4-percepatan" },
      { label: "Teknologi Hybrid", value: "Smart Hybrid tersedia pada varian Hybrid GX" },
      { label: "Kapasitas Bagasi", value: "153 liter saat kursi baris ketiga digunakan" },
      { label: "Kenyamanan", value: "AC double blower dan kabin keluarga tiga baris" },
      { label: "Keselamatan", value: "Dual SRS airbags, ABS + EBD, ISOFIX, dan fitur tertentu mengikuti varian" },
    ],
    faqs: [
      {
        question: "Apa perbedaan Ertiga GL dan Ertiga Hybrid GX?",
        answer: "Ertiga GL adalah pilihan MPV keluarga konvensional, sementara Hybrid GX menambahkan teknologi Smart Hybrid serta kelengkapan yang lebih tinggi. Pilihan transmisi dan harga dapat dilihat pada tabel varian.",
      },
    ],
  },
  apv: {
    detailedSpecifications: [
      { label: "Pilihan Model", value: "APV Blind Van untuk niaga serta APV Arena GE, GL, GX, dan SGX untuk penumpang" },
      { label: "Mesin", value: "1.5L G15A, 16 valve DOHC, 4 silinder, multi point injection" },
      { label: "Transmisi", value: "Manual 5-percepatan" },
      { label: "Ground Clearance", value: "175 mm pada APV Arena" },
      { label: "Radius Putar", value: "Mengikuti varian APV Arena" },
      { label: "Struktur", value: "Monocoque with ladder frame dan TECT Body" },
      { label: "Keselamatan", value: "Dual SRS airbags, side impact beam, APAR, dan high air intake pada APV Arena" },
      { label: "Kegunaan", value: "Kendaraan penumpang, travel, shuttle, operasional, atau Blind Van untuk kebutuhan niaga" },
    ],
    faqs: [
      {
        question: "Apa perbedaan APV Blind Van dan APV Arena?",
        answer: "APV Blind Van diprioritaskan untuk kebutuhan angkut barang dan operasional, sedangkan APV Arena ditujukan untuk membawa penumpang dengan pilihan tipe GE, GL, GX, dan SGX. Kami dapat membantu menentukan model yang sesuai kebutuhan usaha atau keluarga.",
      },
    ],
  },
  "grand-vitara": {
    detailedSpecifications: [
      { label: "Kapasitas Penumpang", value: "5 penumpang" },
      { label: "Pilihan Varian", value: "Grand Vitara GLX AT one-tone dan two-tone" },
      { label: "Mesin", value: "1.5L dengan Smart Hybrid Vehicle by Suzuki (SHVS)" },
      { label: "Transmisi", value: "Otomatis 6-percepatan" },
      { label: "Dimensi", value: "P 4.345 mm × L 1.795 mm × T 1.645 mm" },
      { label: "Keselamatan", value: "6 airbags, ABS, EBD, brake assist, ESP, dan hill hold control" },
      { label: "Kenyamanan", value: "Panoramic sunroof, layar 9 inci, wireless charger, dan konektivitas smartphone pada varian yang tercantum" },
      { label: "Varian Warna", value: "One-tone atau two-tone sesuai pilihan pada pricelist dan ketersediaan warna" },
    ],
    faqs: [
      {
        question: "Apa perbedaan Grand Vitara GLX one-tone dan two-tone?",
        answer: "Perbedaan utamanya berada pada kombinasi warna eksterior dan selisih harga. Mesin, transmisi, dan basis kelengkapan mengikuti tipe GLX yang tercantum pada daftar harga.",
      },
    ],
  },
};

export function getCarSeoContent(slug: string): CarSeoContent | undefined {
  return carSeoContent[slug];
}
