import type { DetailedSpecification } from "@/data/cars";

export interface CarSeoFaq {
  question: string;
  answer: string;
}

export interface CarSeoContent {
  detailedSpecifications: DetailedSpecification[];
  faqs: CarSeoFaq[];
}

const spec = (
  category: NonNullable<DetailedSpecification["category"]>,
  label: string,
  value: string,
): DetailedSpecification => ({ category, label, value });

/**
 * Spesifikasi ditampilkan di halaman dan diekspor ke Product JSON-LD dari
 * sumber data yang sama. Keterangan "mengikuti varian" dipertahankan untuk
 * fitur yang tidak tersedia pada seluruh tipe.
 */
export const carSeoContent: Record<string, CarSeoContent> = {
  fronx: {
    detailedSpecifications: [
      spec("Performa", "Pilihan Mesin", "K15B atau K15C 1.462 cc; teknologi Smart Hybrid tersedia pada varian GX dan SGX."),
      spec("Performa", "Teknologi Hybrid", "Smart Hybrid Vehicle by Suzuki menggunakan Integrated Starter Generator (ISG), baterai lithium-ion, dan Engine Auto Stop pada varian terkait."),
      spec("Performa", "Transmisi", "Pilihan manual atau otomatis mengikuti tipe; GX dan SGX menggunakan transmisi otomatis 6-percepatan."),
      spec("Performa", "Sistem Injeksi", "Multi Point Injection dengan pengaturan mesin sesuai varian."),
      spec("Dimensi & Kapasitas", "Kapasitas Penumpang", "5 orang."),
      spec("Dimensi & Kapasitas", "Dimensi Keseluruhan", "Panjang 3.995 mm × lebar 1.765 mm × tinggi 1.550 mm."),
      spec("Dimensi & Kapasitas", "Ground Clearance", "170 mm."),
      spec("Dimensi & Kapasitas", "Radius Putar", "4,8 m."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "Cakram berventilasi di depan dan tromol di belakang."),
      spec("Sasis & Pengereman", "Ukuran Ban", "195/60 R16 pada varian yang tercantum di spesifikasi resmi."),
      spec("Keselamatan", "Airbags", "6 airbags tersedia pada seluruh tipe Fronx."),
      spec("Keselamatan", "Perlindungan Dasar", "ABS, ESP®, Hill Hold Control, ISOFIX, rear parking sensor, TECT Body, pedestrian protection, immobilizer, dan security alarm."),
      spec("Keselamatan", "Suzuki Safety Support", "Dual Sensor Brake Support II, Adaptive Cruise Control, Lane Keep Assist, Lane Departure Prevention, Blind Spot Monitor, RCTA, dan High Beam Assist tersedia pada SGX."),
      spec("Kenyamanan & Teknologi", "Kamera", "360° View Camera tersedia pada varian SGX."),
      spec("Kenyamanan & Teknologi", "Head-Up Display", "HUD tersedia pada varian SGX."),
      spec("Kenyamanan & Teknologi", "AC & Kontrol Kemudi", "Auto climate AC, paddle shifter, dan tombol cruise control tersedia pada varian tertentu."),
      spec("Kenyamanan & Teknologi", "Catatan Varian", "Warna, fitur, ukuran roda, dan kelengkapan akhir mengikuti tipe serta unit yang tersedia."),
    ],
    faqs: [
      {
        question: "Apa perbedaan Suzuki Fronx GL, GX, dan SGX?",
        answer: "GL merupakan pilihan dasar, GX menambahkan teknologi Smart Hybrid dan kelengkapan lebih tinggi, sedangkan SGX menghadirkan fitur premium serta Suzuki Safety Support. Pilihan transmisi, warna, dan fitur perlu dicocokkan dengan tipe pada daftar harga.",
      },
    ],
  },
  xl7: {
    detailedSpecifications: [
      spec("Performa", "Mesin", "K15B 1.462 cc, 4 silinder, VVT; varian Hybrid menggunakan Smart Hybrid Vehicle by Suzuki (SHVS)."),
      spec("Performa", "Teknologi Hybrid", "ISG dan baterai lithium-ion membantu fungsi Engine Auto Stop serta mendukung efisiensi pada varian Hybrid."),
      spec("Performa", "Tenaga & Torsi", "Hingga 77 kW pada 6.000 rpm dan 138 Nm pada 4.400 rpm."),
      spec("Performa", "Transmisi", "Manual 5-percepatan atau otomatis 4-percepatan, sesuai varian."),
      spec("Performa", "Sistem Bahan Bakar", "Multi Point Injection."),
      spec("Dimensi & Kapasitas", "Kapasitas Penumpang", "7 orang dengan konfigurasi tiga baris."),
      spec("Dimensi & Kapasitas", "Dimensi Keseluruhan", "Panjang 4.450 mm × lebar 1.775 mm × tinggi 1.710 mm."),
      spec("Dimensi & Kapasitas", "Ground Clearance", "200 mm."),
      spec("Dimensi & Kapasitas", "Kapasitas Tangki", "45 liter."),
      spec("Dimensi & Kapasitas", "Radius Putar", "5,1 m."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "Cakram berventilasi di depan dan tromol di belakang."),
      spec("Sasis & Pengereman", "Ukuran Ban", "195/60 R16 pada tipe yang tercantum di spesifikasi resmi."),
      spec("Keselamatan", "Perlindungan Dasar", "Dual SRS airbags, ABS + EBD, ISOFIX, childproof door lock, side impact beam, immobilizer, dan security alarm."),
      spec("Keselamatan", "Stabilitas & Parkir", "ESP® tersedia pada tipe terkait; Hill Hold Control dan rear camera tersedia pada varian otomatis yang tercantum."),
      spec("Kenyamanan & Teknologi", "Kabin", "Kabin tiga baris dengan AC belakang untuk kebutuhan keluarga."),
      spec("Kenyamanan & Teknologi", "Kelengkapan Varian", "Automatic lamp with guide me light, Smart E-Mirror, cruise control, dan fitur lain mengikuti tipe Zeta, Beta, Alpha, atau Alpha Kuro."),
      spec("Kenyamanan & Teknologi", "Catatan Varian", "Pilihan transmisi, warna, dan kelengkapan akhir perlu dikonfirmasi sesuai unit yang tersedia."),
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
      spec("Performa", "Mesin", "K15B-C 1.462 cc, 4 silinder, 16 katup, Multi Point Injection."),
      spec("Performa", "Daya Maksimal", "97 PS pada 5.600 rpm."),
      spec("Performa", "Torsi Maksimal", "135 Nm pada 4.400 rpm."),
      spec("Performa", "Transmisi", "Manual 5-percepatan."),
      spec("Dimensi & Kapasitas", "Panjang Keseluruhan", "4.150 mm."),
      spec("Dimensi & Kapasitas", "Ground Clearance", "180 mm."),
      spec("Dimensi & Kapasitas", "Radius Putar", "4,3 m."),
      spec("Dimensi & Kapasitas", "Kapasitas Kabin", "3 orang."),
      spec("Dimensi & Kapasitas", "Kapasitas Tangki", "43 liter."),
      spec("Dimensi & Kapasitas", "Daya Angkut", "Hingga 1 ton, sesuai batas penggunaan dan konfigurasi kendaraan."),
      spec("Dimensi & Kapasitas", "Pilihan Bak", "Flat Deck (FD) dengan bukaan satu arah dan Wide Deck (WD) dengan bukaan tiga arah."),
      spec("Dimensi & Kapasitas", "Area Muatan", "Bak luas sekitar 11,2 m² untuk kebutuhan angkut barang; detail dimensi disesuaikan dengan tipe FD atau WD."),
      spec("Sasis & Pengereman", "Suspensi", "MacPherson strut di depan dan leaf rigid axle di belakang."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "Cakram berventilasi di depan dan tromol di belakang."),
      spec("Keselamatan", "Perlengkapan Dasar", "Immobilizer, APAR, dan sabuk keselamatan tersedia sesuai spesifikasi model."),
      spec("Kenyamanan & Teknologi", "Kabin", "Kursi pengemudi dapat digeser; ruang kabin dan ruang kaki dirancang lebih lega untuk operasional harian."),
      spec("Kenyamanan & Teknologi", "Pilihan Varian", "FD, WD, FD AC PS, dan WD AC PS; AC serta power steering tersedia pada varian AC PS."),
      spec("Kenyamanan & Teknologi", "Catatan Usaha", "Pilih tipe bak berdasarkan karakter muatan, frekuensi bongkar-muat, dan rute distribusi."),
    ],
    faqs: [
      {
        question: "Apa perbedaan Suzuki Carry Pick Up Flat Deck dan Wide Deck?",
        answer: "Flat Deck dan Wide Deck memiliki bentuk serta ukuran area muatan yang berbeda. FD memiliki bukaan bak satu arah, sedangkan WD dapat dibuka tiga arah. Pilihannya perlu disesuaikan dengan jenis barang, rute operasional, dan kebutuhan bak.",
      },
    ],
  },
  "carry-box": {
    detailedSpecifications: [
      spec("Performa", "Basis Kendaraan", "Suzuki New Carry Pick Up dengan basis mesin K15B-C 1.462 cc."),
      spec("Performa", "Daya & Torsi Basis", "97 PS pada 5.600 rpm dan 135 Nm pada 4.400 rpm."),
      spec("Performa", "Transmisi", "Manual 5-percepatan."),
      spec("Dimensi & Kapasitas", "Kapasitas Kabin", "3 orang pada basis New Carry Pick Up."),
      spec("Dimensi & Kapasitas", "Kapasitas Tangki", "43 liter pada basis New Carry Pick Up."),
      spec("Dimensi & Kapasitas", "Ground Clearance Basis", "180 mm sebelum penyesuaian karoseri dan beban."),
      spec("Dimensi & Kapasitas", "Daya Angkut", "Kapasitas efektif mengikuti berat box, konfigurasi karoseri, serta batas penggunaan kendaraan."),
      spec("Informasi Karoseri", "Pilihan Paket", "FD Box Paket Hemat, FD PS Box Paket Hemat, serta paket box MBG sesuai daftar harga."),
      spec("Informasi Karoseri", "Dimensi Box", "Ukuran luar/dalam, tinggi box, dan volume kargo berbeda antar paket; konfirmasi detail sebelum SPK."),
      spec("Informasi Karoseri", "Material & Finishing", "Material box, lantai, pintu, ventilasi, dan finishing mengikuti paket karoseri yang dipilih."),
      spec("Informasi Karoseri", "Opsi Penyesuaian", "Kebutuhan rak, pintu tambahan, sekat, pengikat barang, atau konfigurasi distribusi dapat dikonsultasikan sebelum pemesanan."),
      spec("Sasis & Pengereman", "Suspensi Basis", "MacPherson strut di depan dan leaf rigid axle di belakang."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "Cakram berventilasi di depan dan tromol di belakang pada basis New Carry."),
      spec("Keselamatan", "Perlengkapan Basis", "Immobilizer, APAR, dan sabuk keselamatan tersedia sesuai spesifikasi basis kendaraan."),
      spec("Kenyamanan & Teknologi", "Pilihan Kabin", "Power steering dan AC tersedia pada paket/varian yang menggunakan basis AC PS."),
      spec("Kenyamanan & Teknologi", "Catatan Pemesanan", "Karoseri bukan spesifikasi tunggal pabrikan; konfigurasi final perlu ditulis jelas pada surat pesanan."),
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
      spec("Performa", "Mesin", "K10C 998 cc, 3 silinder, VVT."),
      spec("Performa", "Tenaga Maksimal", "49 kW pada 5.500 rpm."),
      spec("Performa", "Torsi Maksimal", "89 Nm pada 3.500 rpm."),
      spec("Performa", "Sistem Bahan Bakar", "Multi Point Injection."),
      spec("Performa", "Transmisi", "Manual 5-percepatan atau Auto Gear Shift (AGS)."),
      spec("Dimensi & Kapasitas", "Kapasitas Penumpang", "4 orang."),
      spec("Dimensi & Kapasitas", "Dimensi Keseluruhan", "Panjang 3.565 mm × lebar 1.520 mm × tinggi 1.565 mm."),
      spec("Dimensi & Kapasitas", "Ground Clearance", "180 mm."),
      spec("Dimensi & Kapasitas", "Kapasitas Tangki", "27 liter."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "Cakram berventilasi di depan dan drum leading-trailing di belakang."),
      spec("Sasis & Pengereman", "Ukuran Ban", "165/70 R14."),
      spec("Keselamatan", "Perlindungan Dasar", "Dual SRS airbags, ABS + EBD, rear parking sensor, childproof rear door lock, immobilizer, APAR, dan sabuk keselamatan."),
      spec("Keselamatan", "Stabilitas", "Electronic Stability Programme tersedia pada spesifikasi model; Hill Hold Control tersedia pada AGS."),
      spec("Kenyamanan & Teknologi", "Karakter Berkendara", "Dimensi ringkas dan posisi duduk tinggi dirancang untuk mobilitas kota serta parkir di area terbatas."),
      spec("Kenyamanan & Teknologi", "Pilihan Varian", "S-Presso MT untuk transmisi manual dan AGS untuk kemudahan perpindahan gigi otomatis."),
      spec("Kenyamanan & Teknologi", "Kelengkapan Kabin", "Layar hiburan, kontrol audio kemudi, dan fitur konektivitas mengikuti varian serta tahun produksi."),
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
      spec("Performa", "Mesin", "K15B 1.462 cc, 4 silinder, 16 katup VVT."),
      spec("Performa", "Daya Maksimal", "77 kW atau 104,7 PS pada 6.000 rpm."),
      spec("Performa", "Torsi Maksimal", "138 Nm pada 4.400 rpm."),
      spec("Performa", "Transmisi", "Manual 5-percepatan atau otomatis 4-percepatan, sesuai varian."),
      spec("Performa", "Sistem Penggerak", "4WD AllGrip Pro dengan transfer case 2H, 4H, dan 4L."),
      spec("Dimensi & Kapasitas", "Kapasitas Penumpang", "4 orang."),
      spec("Dimensi & Kapasitas", "Panjang 5-Door", "3.965 mm."),
      spec("Dimensi & Kapasitas", "Ground Clearance", "210 mm."),
      spec("Dimensi & Kapasitas", "Radius Putar", "5,7 m pada Jimny 5-Door; angka 3-Door dapat berbeda."),
      spec("Sasis & Pengereman", "Rangka", "Ladder frame dengan rigid axle penuh di depan dan belakang."),
      spec("Sasis & Pengereman", "Suspensi", "3-link rigid axle dengan coil spring."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "Cakram berventilasi di depan dan tromol di belakang."),
      spec("Keselamatan", "Kendali Traksi", "ABS, ESP®, Brake LSD Traction Control, Hill Hold Control, dan Hill Descent Control."),
      spec("Keselamatan", "Perlindungan Struktur", "TECT Body, ISOFIX, APAR, dan sabuk keselamatan."),
      spec("Keselamatan", "Airbags", "6 airbags pada Jimny 5-Door dan dual airbags pada 3-Door."),
      spec("Kenyamanan & Teknologi", "Fitur Parkir", "Kamera belakang dan sensor parkir 4 titik tersedia pada Jimny 5-Door."),
      spec("Kenyamanan & Teknologi", "Catatan Varian", "Ukuran bodi, kelengkapan keselamatan, warna, dan transmisi perlu dicocokkan antara 3-Door dan 5-Door."),
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
      spec("Performa", "Mesin", "K15B 1.462 cc, DOHC, 4 silinder, VVT; Smart Hybrid tersedia pada varian Hybrid."),
      spec("Performa", "Tenaga Maksimal", "77 kW atau 104,7 PS pada 6.000 rpm."),
      spec("Performa", "Torsi Maksimal", "138 Nm pada 4.400 rpm."),
      spec("Performa", "Sistem Bahan Bakar", "Multi Point Injection."),
      spec("Performa", "Teknologi Hybrid", "ISG, baterai lithium-ion, dan Engine Auto Stop tersedia pada varian Smart Hybrid."),
      spec("Performa", "Transmisi", "Manual 5-percepatan atau otomatis 4-percepatan, sesuai varian."),
      spec("Dimensi & Kapasitas", "Kapasitas Penumpang", "7 orang dengan konfigurasi tiga baris."),
      spec("Dimensi & Kapasitas", "Dimensi Keseluruhan", "Panjang 4.395 mm × lebar 1.735 mm × tinggi 1.690 mm."),
      spec("Dimensi & Kapasitas", "Wheelbase", "2.470 mm."),
      spec("Dimensi & Kapasitas", "Kapasitas Tangki", "45 liter."),
      spec("Dimensi & Kapasitas", "Radius Putar", "5,2 m."),
      spec("Dimensi & Kapasitas", "Ukuran Ban", "185/65 R15."),
      spec("Sasis & Pengereman", "Platform", "HEARTECT Platform untuk struktur ringan dan rigid."),
      spec("Keselamatan", "Perlindungan Dasar", "Dual SRS airbags, ABS + EBD, ISOFIX, APAR, dan sensor parkir."),
      spec("Keselamatan", "Stabilitas", "ESP® tersedia pada varian terkait; Hill Hold Control tersedia pada varian otomatis yang tercantum."),
      spec("Kenyamanan & Teknologi", "Kabin", "Kabin tiga baris dengan AC double blower untuk distribusi udara ke penumpang belakang."),
      spec("Kenyamanan & Teknologi", "Fitur Varian", "Kamera belakang, keyless entry, layar hiburan, dan fitur konektivitas mengikuti tipe serta tahun produksi."),
      spec("Kenyamanan & Teknologi", "Catatan Varian", "Bandingkan GL dan Hybrid GX pada tabel harga untuk melihat pilihan mesin, transmisi, serta kelengkapan unit."),
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
      spec("Performa", "Pilihan Model", "APV Blind Van untuk kebutuhan niaga serta APV Arena GE, GL, GX, dan SGX untuk angkutan penumpang."),
      spec("Performa", "Mesin", "G15A, 16 katup DOHC, 4 silinder, Multi Point Injection."),
      spec("Performa", "Daya Maksimal", "68 kW pada 6.000 rpm."),
      spec("Performa", "Transmisi", "Manual 5-percepatan."),
      spec("Dimensi & Kapasitas", "Panjang APV Arena", "4.230 mm; ukuran Blind Van mengikuti tipe kendaraan niaga."),
      spec("Dimensi & Kapasitas", "Ground Clearance", "175 mm pada APV Arena."),
      spec("Dimensi & Kapasitas", "Radius Putar", "5,4 m atau 4,9 m, mengikuti varian APV Arena."),
      spec("Dimensi & Kapasitas", "Kapasitas Kabin", "Konfigurasi kursi mengikuti tipe APV Arena; Blind Van difokuskan untuk muatan operasional."),
      spec("Sasis & Pengereman", "Kemudi", "Power steering tersedia pada tipe APV yang tercantum di spesifikasi resmi."),
      spec("Sasis & Pengereman", "Karakter Bodinya", "Kabin tinggi dan ruang serbaguna untuk travel, shuttle, operasional instansi, maupun kebutuhan niaga."),
      spec("Keselamatan", "Perlindungan Dasar", "Dual SRS airbags, TECT Body, side impact beam, APAR, high air intake, dan sabuk keselamatan tersedia pada APV Arena."),
      spec("Keselamatan", "Catatan Blind Van", "Kelengkapan keselamatan dan kabin Blind Van dapat berbeda dari APV Arena; cek unit spesifik sebelum pemesanan."),
      spec("Kenyamanan & Teknologi", "Akses Kabin", "Pintu geser dan ruang kabin lapang tersedia pada varian penumpang sesuai tipe."),
      spec("Kenyamanan & Teknologi", "Penggunaan", "Cocok untuk keluarga besar, travel, shuttle, operasional perusahaan, serta APV Blind Van untuk distribusi barang."),
      spec("Kenyamanan & Teknologi", "Kelengkapan Varian", "AC, sistem hiburan, serta fitur interior berbeda menurut GE, GL, GX, SGX, atau Blind Van."),
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
      spec("Performa", "Mesin", "K15C 1.462 cc, inline 4 DUALJET dengan Smart Hybrid Vehicle by Suzuki (SHVS)."),
      spec("Performa", "Tenaga Maksimal", "75,8 kW pada 6.000 rpm."),
      spec("Performa", "Torsi Maksimal", "136,8 Nm pada 4.400 rpm."),
      spec("Performa", "Bore × Stroke", "74,0 mm × 85,0 mm."),
      spec("Performa", "Transmisi", "Otomatis 6-percepatan."),
      spec("Performa", "Teknologi Hybrid", "SHVS mendukung efisiensi melalui sistem starter-generator dan baterai lithium-ion."),
      spec("Dimensi & Kapasitas", "Kapasitas Penumpang", "5 orang."),
      spec("Dimensi & Kapasitas", "Dimensi Keseluruhan", "Panjang 4.345 mm × lebar 1.795 mm × tinggi 1.645 mm."),
      spec("Dimensi & Kapasitas", "Berat Total", "1.210 kg pada tipe GX di spesifikasi resmi."),
      spec("Sasis & Pengereman", "Suspensi", "MacPherson strut dan coil spring, shock absorber double-action telescopic, serta torsion bar stabilizer."),
      spec("Sasis & Pengereman", "Ukuran Ban", "215/60 R17 96H."),
      spec("Sasis & Pengereman", "Sistem Pengereman", "ABS dengan EBD dan brake assist."),
      spec("Keselamatan", "Airbags", "SRS front dual airbags, side airbags, dan curtain airbags."),
      spec("Keselamatan", "Kendali & Perlindungan", "ESP®, Hill Hold Control, ISOFIX lower anchorage dan top tether, child proof rear door lock, side impact door beams, pedal release, pedestrian protection, immobilizer, dan security alarm."),
      spec("Kenyamanan & Teknologi", "Panoramic Sunroof", "Tersedia pada varian yang tercantum di materi produk dan unit dealer."),
      spec("Kenyamanan & Teknologi", "Konektivitas", "Layar infotainment, wireless charging, kamera, dan integrasi smartphone mengikuti varian serta tahun produksi."),
      spec("Kenyamanan & Teknologi", "Pilihan Warna", "Tersedia one-tone atau two-tone sesuai pricelist dan ketersediaan unit."),
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
