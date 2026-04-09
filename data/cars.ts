export interface CarColor {
  name: string;
  hex: string;
}

export interface CarSpecifications {
  mesin: string;
  transmisi: string;
  dimensi: string;
  fitur: string[];
  konsumsiBBM: string;
}

export interface CarVariant {
  name: string;
  priceAB: number;
  priceAA: number;
}

export interface Car {
  slug: string;
  name: string;
  category: "SUV" | "MPV" | "Niaga" | "City Car" | "Off-Road";
  startingPrice: string;
  startingPriceNum: number;
  startingPriceAB: number;
  startingPriceAA: number;
  variants: CarVariant[];
  monthlyInstallment: string;
  description: string;
  heroImage: string;
  gallery: string[];
  colors: CarColor[];
  specifications: CarSpecifications;
  brochureUrl: string;
  promo: string | null;
  whatsappMessage: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const cars: Car[] = [
  {
    slug: "fronx",
    name: "Suzuki Fronx",
    category: "SUV",
    startingPrice: "Rp 266.300.000",
    startingPriceNum: 266300000,
    startingPriceAB: 266300000,
    startingPriceAA: 274000000,
    variants: [
      { name: "FRONX GL MT", priceAB: 266300000, priceAA: 274000000 },
      { name: "FRONX GL AT", priceAB: 277300000, priceAA: 285400000 },
      { name: "FRONX GX MT", priceAB: 288700000, priceAA: 297000000 },
      { name: "FRONX GX AT", priceAB: 307100000, priceAA: 315700000 },
      { name: "FRONX SGX AT (ONE TONE)", priceAB: 333200000, priceAA: 342200000 },
      { name: "FRONX SGX AT (TWO TONE)", priceAB: 335200000, priceAA: 344200000 }
    ],
    monthlyInstallment: "Rp 3.200.000",
    description: "Beli Suzuki Fronx terbaru di Jogja. SUV kompak stylish dengan desain coupe sport futuristis ini hadir membawa teknologi hybrid mild yang efisien. Dapatkan penawaran kredit Suzuki Fronx terbaik untuk area Yogyakarta, Sleman, Bantul, dan sekitarnya hanya di dealer resmi Suzuki Sumber Baru Mobil. Nikmati pengalaman berkendara yang responsif sekaligus irit bahan bakar berkat mesin 1.5L K15C Smart Hybrid. Kabin interior yang mewah dilengkapi dengan fitur keselamatan canggih seperti 6 Airbags, Head Up Display, dan 360-degree Camera, memastikan keamanan ekstra saat melintasi jalanan perkotaan Jogja yang padat maupun saat bepergian ke luar kota. Jangan lewatkan promo spesial bulan ini dengan cicilan ringan, proses approval cepat, dan berbagai bonus aksesoris eksklusif. Hubungi Yusuf Suzuki sekarang untuk mengatur jadwal test drive langsung di rumah atau kantor Anda!",
    heroImage: "/mobil/fronx-1.jpg",
    gallery: ["/mobil/fronx-1.jpg"],
    colors: [
      { name: "Metallic Brilliant White", hex: "#F5F5F5" },
      { name: "Bluish Black Pearl Metallic", hex: "#1a1a2e" },
      { name: "Premium Silver Metallic", hex: "#C0C0C0" },
      { name: "Burning Red Pearl Metallic", hex: "#8B0000" },
      { name: "Grandeur Gray Pearl Metallic", hex: "#6B6B6B" }
    ],
    specifications: {
      mesin: "1.5L K15C Smart Hybrid, 103 HP, 137 Nm",
      transmisi: "6-Speed AT / 5-Speed MT",
      dimensi: "P: 3995 mm | L: 1765 mm | T: 1550 mm",
      fitur: [
        "Smart Hybrid System",
        "Head Up Display",
        "360-degree Camera",
        "Wireless Charging",
        "Apple CarPlay & Android Auto",
        "6 Airbags",
        "Lane Departure Warning",
        "Automatic Emergency Braking",
        "Blind Spot Detection"
      ],
      konsumsiBBM: "21,4 km/L (WLTP)"
    },
    brochureUrl: "/brosur/fronx.pdf",
    promo: "Cicilan mulai Rp 3,2 juta/bln + Bonus Aksesoris",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki Fronx. Bisa minta info harga dan promo terkini?",
    isNew: true,
    isBestSeller: false
  },
  {
    slug: "xl7",
    name: "Suzuki XL7",
    category: "SUV",
    startingPrice: "Rp 274.000.000",
    startingPriceNum: 274000000,
    startingPriceAB: 274000000,
    startingPriceAA: 285000000,
    variants: [
      { name: "XL7 ZETA MT", priceAB: 274000000, priceAA: 285000000 },
      { name: "XL7 ZETA AT", priceAB: 285000000, priceAA: 297000000 },
      { name: "XL7 HYBRID BETA MT", priceAB: 301500000, priceAA: 313500000 },
      { name: "XL7 HYBRID BETA AT", priceAB: 312500000, priceAA: 325500000 },
      { name: "XL7 HYBRID ALPHA MT", priceAB: 312500000, priceAA: 325000000 },
      { name: "XL7 HYBRID ALPHA MT (2 Tone)", priceAB: 314500000, priceAA: 327000000 },
      { name: "XL7 HYBRID ALPHA AT", priceAB: 323500000, priceAA: 336500000 },
      { name: "XL7 HYBRID ALPHA AT (2 Tone)", priceAB: 325500000, priceAA: 338500000 },
      { name: "XL7 HYBRID ALPHA AT KURO", priceAB: 327500000, priceAA: 340500000 },
      { name: "XL7 HYBRID ALPHA AT KURO (2 Tone)", priceAB: 329500000, priceAA: 342500000 }
    ],
    monthlyInstallment: "Rp 3.500.000",
    description: "Cari mobil keluarga tangguh di Jogja? Suzuki XL7 adalah SUV 7 penumpang premium dengan kabin luas dan teknologi Smart Hybrid. Sangat nyaman untuk mobilitas harian di Yogyakarta maupun saat Anda merencanakan liburan jalan darat ke Bali atau luar pulau bersama keluarga tercinta. Dengan ground clearance tinggi, XL7 siap melibas berbagai kondisi jalan di DIY dan Jawa Tengah tanpa mengorbankan kenyamanan. Dilengkapi fitur unggulan seperti Smart E-Mirror, Cruise Control, dan sistem hiburan layar sentuh canggih, perjalanan jauh akan terasa jauh lebih menyenangkan. Mesin tangguh K15B yang dipadukan dengan teknologi SHVS menjamin efisiensi bahan bakar yang luar biasa. Konsultasikan kebutuhan kendaraan Anda bersama Yusuf, dapatkan simulasi cicilan paling terjangkau, garansi resmi, dan gratis biaya jasa servis.",
    heroImage: "/mobil/xl7-1.jpg",
    gallery: ["/mobil/xl7-1.jpg"],
    colors: [
      { name: "Pearl Starry Black", hex: "#1a1a2e" },
      { name: "Pearl Magna White", hex: "#F5F5F5" },
      { name: "Metallic Silky Silver", hex: "#C0C0C0" },
      { name: "Metallic Granite Gray", hex: "#5C5C5C" },
      { name: "Pearl Bluish Black", hex: "#1E3A5F" }
    ],
    specifications: {
      mesin: "1.5L K15B VVT, 105 HP, 138 Nm",
      transmisi: "4-Speed AT / 5-Speed MT",
      dimensi: "P: 4450 mm | L: 1775 mm | T: 1710 mm",
      fitur: [
        "Smart Hybrid Vehicle by Suzuki (SHVS)",
        "7-Seater Premium",
        "Panoramic Sunroof",
        "8\" Touchscreen Infotainment",
        "Apple CarPlay & Android Auto",
        "Dual-zone AC",
        "2 Airbags",
        "Rear Camera",
        "Hill Hold Control",
        "Cruise Control",
        "Keyless Entry & Push Start"
      ],
      konsumsiBBM: "15,3 km/L"
    },
    brochureUrl: "/brosur/xl7.pdf",
    promo: "DP 20% + Gratis Asuransi Tahun Pertama",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki XL7. Bisa minta info harga dan promo terkini?",
    isNew: false,
    isBestSeller: true
  },
  {
    slug: "carry-pickup",
    name: "Suzuki Carry Pick Up",
    category: "Niaga",
    startingPrice: "Rp 181.250.000",
    startingPriceNum: 181250000,
    startingPriceAB: 181250000,
    startingPriceAA: 187000000,
    variants: [
      { name: "NEW CARRY PICK UP FD", priceAB: 181250000, priceAA: 187000000 },
      { name: "NEW CARRY PICK UP WD", priceAB: 182350000, priceAA: 188100000 },
      { name: "NEW CARRY PICK UP FD AC PS", priceAB: 189250000, priceAA: 195300000 },
      { name: "NEW CARRY PICK UP WD AC PS", priceAB: 190150000, priceAA: 196200000 }
    ],
    monthlyInstallment: "Rp 2.400.000",
    description: "Suzuki Carry Pick Up adalah rajanya mobil niaga andalan pengusaha Jogja, Magelang, Klaten, dan sekitarnya. Dengan ruang kargo yang luas, kapasitas muatan ekstra, dan mesin yang terkenal bandel, Carry PU sangat cocok untuk angkutan logistik, material bangunan, hingga hasil pertanian UMKM Anda. Mesin 1.5L K15B-C yang diusungnya terbukti sangat tangguh untuk melewati jalanan menanjak dan tetap irit BBM, sehingga efektif meminimalisir biaya operasional bisnis Anda sehari-hari. Sasis yang tebal dan kokoh memastikan daya angkut maksimal tanpa kendala berarti. Dapatkan harga OTR Suzuki Carry termurah se-DIY dengan proses kredit cepat, syarat anti ribet, dan approval langsung. Kami juga menyediakan promo khusus untuk pembelian borongan. Buktikan sendiri ketangguhannya, hubungi Yusuf sekarang untuk mendapatkan penawaran angsuran paling ringan.",
    heroImage: "/mobil/carry-1.jpg",
    gallery: ["/mobil/carry-1.jpg"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Silky Silver Metallic", hex: "#C0C0C0" },
      { name: "Brilliant Black", hex: "#1a1a1a" }
    ],
    specifications: {
      mesin: "1.5L K15B-C, 97 PS, 135 Nm",
      transmisi: "5-Speed MT",
      dimensi: "P: 4157 mm | L: 1655 mm | T: 1795 mm | Bak: 2080x1520 mm",
      fitur: [
        "Bak Terbuka Luas",
        "Payload 800 kg",
        "Power Steering",
        "AC",
        "Central Lock",
        "Head Lamp LED",
        "Radio Bluetooth"
      ],
      konsumsiBBM: "17,8 km/L"
    },
    brochureUrl: "/brosur/carry-pickup.pdf",
    promo: "Khusus Pembelian Cash: Potongan Rp 5.000.000",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki Carry Pick Up. Bisa minta info harga dan promo terkini?",
    isNew: false,
    isBestSeller: true
  },
  {
    slug: "carry-box",
    name: "Suzuki Carry Box",
    category: "Niaga",
    startingPrice: "Rp 217.500.000",
    startingPriceNum: 217500000,
    startingPriceAB: 217500000,
    startingPriceAA: 221500000,
    variants: [
      { name: "PU FD BOX PAKET HEMAT", priceAB: 215750000, priceAA: 221500000 },
      { name: "PU FD PS BOX PAKET HEMAT", priceAB: 223750000, priceAA: 229800000 },
      { name: "PU FD BOX MBG TANPA RAK", priceAB: 257500000, priceAA: 263400000 },
      { name: "PU FD PS BOX MBG TANPA RAK", priceAB: 265900000, priceAA: 271900000 },
      { name: "PU FD BOX STANDARD MBG", priceAB: 261400000, priceAA: 267400000 },
      { name: "PU FD AC PS BOX STANDARD MBG", priceAB: 269900000, priceAA: 275900000 }
    ],
    monthlyInstallment: "Rp 2.600.000",
    description: "Tingkatkan efisiensi bisnis ekspedisi, katering, dan distribusi barang Anda di wilayah Yogyakarta dengan Suzuki Carry Box. Dilengkapi bak tertutup aluminium kokoh yang dijamin aman dari cuaca panas maupun hujan deras, mobil niaga ini siap mendukung mobilitas usaha Anda beroperasi 24 jam penuh tanpa henti. Kapasitas kargo yang sangat lega memudahkan proses bongkar muat barang dalam jumlah besar, menjadikannya kendaraan ideal untuk logistik perkotaan hingga pengiriman antar kota. Didukung oleh jaringan servis resmi Suzuki yang tersebar luas di seluruh Jogja dan Jawa Tengah, perawatan kendaraan operasional Anda dipastikan lebih mudah dan terjamin ketersediaan suku cadangnya. Segera cek promo diskon Suzuki Carry Box terbaru khusus pelat AB dan AA, serta nikmati kemudahan persetujuan kredit usaha bunga rendah bersama Yusuf Suzuki.",
    heroImage: "/mobil/carrybox-1.jpg",
    gallery: ["/mobil/carrybox-1.jpg"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Silver", hex: "#C0C0C0" }
    ],
    specifications: {
      mesin: "1.5L K15B-C, 97 PS, 135 Nm",
      transmisi: "5-Speed MT",
      dimensi: "P: 4157 mm | L: 1655 mm | T: 1960 mm | Box: 2080x1520x1300 mm",
      fitur: [
        "Box Tertutup Alumunium",
        "Payload 750 kg",
        "Power Steering",
        "AC",
        "Central Lock",
        "Pintu Box Double"
      ],
      konsumsiBBM: "17,5 km/L"
    },
    brochureUrl: "/brosur/carry-box.pdf",
    promo: "Free BPKB + STNK & Balik Nama",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki Carry Box. Bisa minta info harga dan promo terkini?",
    isNew: false,
    isBestSeller: false
  },
  {
    slug: "s-presso",
    name: "Suzuki S-Presso",
    category: "City Car",
    startingPrice: "Rp 182.250.000",
    startingPriceNum: 182250000,
    startingPriceAB: 182250000,
    startingPriceAA: 188900000,
    variants: [
      { name: "S-PRESSO MT", priceAB: 182250000, priceAA: 188900000 },
      { name: "S-PRESSO AGS", priceAB: 192250000, priceAA: 199400000 }
    ],
    monthlyInstallment: "Rp 2.100.000",
    description: "Suzuki S-Presso adalah city car lincah bergaya SUV mini yang sangat cocok untuk bermanuver menembus kemacetan dan jalanan sempit di pusat kota Jogja. Selain sangat irit konsumsi BBM, mobil ini memiliki keunggulan ground clearance tinggi mencapai 180mm yang membuatnya aman melewati genangan air atau jalan bergelombang. Dimensinya yang ringkas memastikan S-Presso sangat mudah diparkir di area terbatas, baik itu di lingkungan kampus maupun area kafe yang padat pengunjung. Walaupun tampak mungil dari luar, ruang kabinnya didesain ergonomis dengan headroom yang tergolong lega dan telah dilengkapi fitur hiburan modern. Keselamatan berkendara pun terjamin berkat Dual SRS Airbags dan pengereman ABS+EBD. Dapatkan penawaran simulasi kredit Suzuki S-Presso dengan DP super ringan yang dirancang khusus untuk mahasiswa dan pekerja muda di Yogyakarta.",
    heroImage: "/mobil/spresso-1.jpg",
    gallery: ["/mobil/spresso-1.jpg"],
    colors: [
      { name: "Sizzle Orange", hex: "#FF6B35" },
      { name: "Solid Fire Red", hex: "#E30613" },
      { name: "Pearl Metallic Midnight Blue", hex: "#003B8F" },
      { name: "Pearl Metallic Silky Silver", hex: "#C0C0C0" },
      { name: "Pearl Metallic White", hex: "#F5F5F5" }
    ],
    specifications: {
      mesin: "1.0L K10C DUALJET, 67 HP, 89 Nm",
      transmisi: "5-Speed MT / AGS (Auto Gear Shift)",
      dimensi: "P: 3565 mm | L: 1520 mm | T: 1565 mm",
      fitur: [
        "High Ground Clearance 180mm",
        "Dual Airbags",
        "ABS + EBD",
        "7\" Touchscreen",
        "Rear Parking Sensor",
        "Keyless Entry",
        "Steering Audio Control"
      ],
      konsumsiBBM: "20,3 km/L"
    },
    brochureUrl: "/brosur/s-presso.pdf",
    promo: "DP Ringan Mulai 15% + Bonus Karpet & Kaca Film",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki S-Presso. Bisa minta info harga dan promo terkini?",
    isNew: false,
    isBestSeller: false
  },
  {
    slug: "jimny",
    name: "Suzuki Jimny",
    category: "Off-Road",
    startingPrice: "Rp 477.400.000",
    startingPriceNum: 477400000,
    startingPriceAB: 477400000,
    startingPriceAA: 496200000,
    variants: [
      { name: "JIMNY (3 DOOR) MT (ONE TONE)", priceAB: 477400000, priceAA: 496200000 },
      { name: "JIMNY (3 DOOR) AT (ONE TONE)", priceAB: 491100000, priceAA: 510400000 },
      { name: "JIMNY (3 DOOR) MT (TWO TONE)", priceAB: 480400000, priceAA: 499200000 },
      { name: "JIMNY (3 DOOR) AT (TWO TONE)", priceAB: 494100000, priceAA: 513400000 },
      { name: "JIMNY (5 DOOR) MT (ONE TONE)", priceAB: 491800000, priceAA: 496200000 },
      { name: "JIMNY (5 DOOR) AT (ONE TONE)", priceAB: 505500000, priceAA: 510400000 },
      { name: "JIMNY (5 DOOR) MT (TWO TONE)", priceAB: 494800000, priceAA: 499200000 },
      { name: "JIMNY (5 DOOR) AT (TWO TONE)", priceAB: 508500000, priceAA: 513400000 }
    ],
    monthlyInstallment: "Rp 5.100.000",
    description: "Wujudkan impian Anda untuk memiliki Suzuki Jimny, icon SUV off-road legendaris yang dibekali dengan sistem 4WD AllGrip Pro paling tangguh. Kendaraan ini sangat siap diandalkan untuk menaklukkan berbagai variasi medan jalan, mulai dari aspal mulus perkotaan Jogja hingga rute ekstrem bebatuan di lereng Gunung Merapi maupun pasir pantai pesisir selatan. Desain bodinya yang boxy ikonik, dipadukan secara sempurna dengan struktur sasis ladder frame otentik, menjadikan Jimny tampil tak tertandingi di kelasnya. Kini tersedia lengkap dalam varian 3 pintu bergaya klasik dan 5 pintu terbaru yang menawarkan ruang kabin lebih akomodatif untuk petualangan bersama rekan-rekan. Jangan biarkan kesempatan memiliki mobil incaran para kolektor ini terlewat. Segera amankan antrean inden Suzuki Jimny Anda hari ini, hubungi Yusuf di dealer resmi Suzuki Yogyakarta untuk update stok dan harga OTR terbaru.",
    heroImage: "/mobil/jimny-1.jpg",
    gallery: ["/mobil/jimny-1.jpg"],
    colors: [
      { name: "Kinetic Yellow", hex: "#FFD700" },
      { name: "Bluish Black Pearl Metallic", hex: "#1a1a2e" },
      { name: "Brisk Blue Metallic", hex: "#003B8F" },
      { name: "Medium Gray Metallic", hex: "#808080" },
      { name: "Pearl Ivory White", hex: "#FAF0E6" },
      { name: "Two-tone Chiffon Ivory/Black", hex: "#FAF0E6" }
    ],
    specifications: {
      mesin: "1.5L K15B, 102 HP, 130 Nm",
      transmisi: "4-Speed AT / 5-Speed MT",
      dimensi: "P: 3625 mm (3-Door) / 3985 mm (5-Door) | L: 1645 mm | T: 1720 mm",
      fitur: [
        "4WD AllGrip Pro",
        "Low Range Transfer",
        "Ladder Frame Chassis",
        "Hill Hold Control",
        "Approach Angle 37°",
        "Departure Angle 49°",
        "7\" Touchscreen",
        "Dual Airbags",
        "ABS + EBD"
      ],
      konsumsiBBM: "15,8 km/L"
    },
    brochureUrl: "/brosur/jimny.pdf",
    promo: "Inden 2-4 Minggu – Stock Terbatas!",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki Jimny. Bisa minta info harga, stok, dan promo terkini?",
    isNew: false,
    isBestSeller: true
  },
  {
    slug: "ertiga",
    name: "Suzuki Ertiga",
    category: "MPV",
    startingPrice: "Rp 268.150.000",
    startingPriceNum: 268150000,
    startingPriceAB: 268150000,
    startingPriceAA: 279000000,
    variants: [
      { name: "ALL NEW ERTIGA GL MT", priceAB: 268150000, priceAA: 279000000 },
      { name: "ALL NEW ERTIGA GL AT", priceAB: 279200000, priceAA: 290700000 },
      { name: "ALL NEW ERTIGA HYBRID GX MT", priceAB: 283250000, priceAA: 293200000 },
      { name: "ALL NEW ERTIGA HYBRID GX AT", priceAB: 294400000, priceAA: 304800000 }
    ],
    monthlyInstallment: "Rp 3.350.000",
    description: "Suzuki All New Ertiga Hybrid mendefinisikan ulang standar kenyamanan MPV 7-seater untuk keluarga modern di Jogja. Mengusung teknologi elektrifikasi hybrid pertama di kelasnya, mobil ini menjamin pengalaman berkendara yang halus, ramah lingkungan, serta tingkat efisiensi BBM yang sangat memuaskan untuk mobilitas melintasi wilayah Yogyakarta dan Jawa Tengah. Desain tata ruang kabin Ertiga secara khusus mengedepankan aspek kelegaan, didukung pendingin udara AC Double Blower yang sanggup menyejukkan hingga penumpang baris ketiga. Fitur keselamatan yang disematkan pun bertaraf global, mencakup standar ISOFIX, sistem pengereman ABS+EBD, dan Electronic Stability Program untuk perlindungan maksimal keluarga tercinta. Jadikan Ertiga sebagai investasi kendaraan terbaik Anda, baik untuk rutinitas antar-jemput anak sekolah, liburan akhir pekan, maupun mudik lebaran. Temukan promo diskon puluhan juta dan konsultasikan paket kredit DP minim bersama Yusuf di Suzuki Sumber Baru Mobil.",
    heroImage: "/mobil/ertiga-1.jpg",
    gallery: ["/mobil/ertiga-1.jpg"],
    colors: [
      { name: "Pearl Magna White", hex: "#F5F5F5" },
      { name: "Pearl Starry Black", hex: "#1a1a2e" },
      { name: "Metallic Silky Silver", hex: "#C0C0C0" },
      { name: "Metallic Granite Gray", hex: "#5C5C5C" },
      { name: "Auburn Brownish", hex: "#8B4513" }
    ],
    specifications: {
      mesin: "1.5L K15B VVT, 105 HP, 138 Nm",
      transmisi: "4-Speed AT / 5-Speed MT",
      dimensi: "P: 4395 mm | L: 1735 mm | T: 1690 mm",
      fitur: [
        "Smart Hybrid (Khusus GX/Cruise)",
        "7-Seater Fleksibel",
        "Bagasi 153L (row 3 up)",
        "AC Double Blower",
        "7\" Touchscreen",
        "Apple CarPlay & Android Auto",
        "Dual Airbags",
        "ABS + EBD",
        "Rear Camera",
        "Keyless Entry & Push Start",
        "Cruise Control"
      ],
      konsumsiBBM: "19,8 km/L (MT)"
    },
    brochureUrl: "/brosur/ertiga.pdf",
    promo: "Cashback Rp 10.000.000 + Gratis Aksesoris",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki Ertiga. Bisa minta info harga dan promo terkini?",
    isNew: false,
    isBestSeller: true
  },
  {
    slug: "apv",
    name: "Suzuki APV",
    category: "MPV",
    startingPrice: "Rp 184.500.000",
    startingPriceNum: 184500000,
    startingPriceAB: 184500000,
    startingPriceAA: 192000000,
    variants: [
      { name: "APV BLIND VAN", priceAB: 184500000, priceAA: 192000000 },
      { name: "APV GE MT", priceAB: 227500000, priceAA: 236500000 },
      { name: "APV GL MT", priceAB: 235500000, priceAA: 245000000 },
      { name: "APV GX MT", priceAB: 249500000, priceAA: 259000000 },
      { name: "APV SGX MT", priceAB: 253000000, priceAA: 263000000 }
    ],
    monthlyInstallment: "Rp 3.050.000",
    description: "Suzuki APV Arena merupakan solusi transportasi cerdas dan andal untuk kebutuhan bisnis travel, armada shuttle pariwisata Jogja, operasional instansi, maupun angkutan keluarga besar. Dengan rancangan dimensi kabin yang ekstra lega dan sanggup menampung hingga 9 orang penumpang dewasa secara nyaman, APV Arena terus membuktikan diri sebagai armada tulang punggung penggerak roda bisnis pariwisata di DIY. Desain model bonnet (hidung melancip) di bagian fascia depan tidak hanya menambah nilai estetika, namun juga berfungsi vital dalam meningkatkan keamanan redaman saat terjadi benturan. Dibekali dapur pacu legendaris mesin G15A yang telah diakui keawetan durabilitasnya selama belasan tahun, Suzuki APV menawarkan kombinasi sempurna antara suku cadang yang murah dan kemudahan perawatan di bengkel mana pun. Tingkatkan profitabilitas usaha transportasi Anda dengan armada berbiaya operasional rendah ini. Hubungi Yusuf sekarang untuk skema harga khusus pembelian unit borongan atau fleet.",
    heroImage: "/mobil/apv-1.jpg",
    gallery: ["/mobil/apv-1.jpg"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Silver Metallic", hex: "#C0C0C0" },
      { name: "Brilliant Black", hex: "#1a1a1a" },
      { name: "Titanium Gray Metallic", hex: "#7B7B7B" }
    ],
    specifications: {
      mesin: "1.5L G15A, 94.5 PS, 126 Nm",
      transmisi: "5-Speed MT",
      dimensi: "P: 4160 mm | L: 1655 mm | T: 1875 mm",
      fitur: [
        "Kapasitas 9 Penumpang",
        "Sliding Door Kanan-Kiri",
        "AC Front & Rear",
        "Suspensi Nyaman",
        "Ruang Bagasi Luas",
        "Power Steering",
        "Radio + USB"
      ],
      konsumsiBBM: "14,5 km/L"
    },
    brochureUrl: "/brosur/apv.pdf",
    promo: "Kredit Ringan untuk Usaha: Bunga 0% 12 Bulan",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki APV. Bisa minta info harga dan promo terkini?",
    isNew: false,
    isBestSeller: false
  },
  {
    slug: "grand-vitara",
    name: "Suzuki Grand Vitara",
    category: "SUV",
    startingPrice: "Rp 427.400.000",
    startingPriceNum: 427400000,
    startingPriceAB: 427400000,
    startingPriceAA: 445000000,
    variants: [
      { name: "GRAND VITARA MC GLX AT (One Tone)", priceAB: 427400000, priceAA: 445000000 },
      { name: "GRAND VITARA MC GLX AT (Two Tone)", priceAB: 430400000, priceAA: 448000000 }
    ],
    monthlyInstallment: "Rp 4.850.000",
    description: "Nikmati era baru kemewahan dan teknologi elektrifikasi mutakhir di Jogja bersama Suzuki Grand Vitara Hybrid. SUV flagship dari lini Suzuki ini dirancang bagi Anda yang menginginkan perpaduan sempurna antara fitur premium, prestise, dan efisiensi. Tersedia Panoramic Sunroof berukuran besar yang menyajikan pemandangan tak terbatas, material interior elegan yang menunjang kenyamanan ekstra, serta keiritan BBM berkat teknologi Smart Hybrid Vehicle by Suzuki (SHVS). Grand Vitara adalah pilihan kendaraan yang merepresentasikan kesuksesan Anda, baik saat digunakan menunjang aktivitas harian di area perkotaan yang padat maupun kala menempuh perjalanan jarak jauh lintas provinsi. Dilengkapi pula dengan fitur perlindungan dan asistensi mengemudi tingkat tinggi, termasuk keberadaan 6 titik Airbags dan fitur 360-degree Camera yang membuat proses memarkir mobil menjadi sangat presisi dan mudah. Elevasi gaya hidup Anda hari ini. Hubungi Yusuf Suzuki segera untuk menikmati pelayanan Test Drive eksklusif yang diantar langsung ke rumah Anda.",
    heroImage: "/mobil/vitara-1.jpg",
    gallery: ["/mobil/vitara-1.jpg"],
    colors: [
      { name: "Metallic Brilliant White", hex: "#F5F5F5" },
      { name: "Galactic Gray", hex: "#696969" },
      { "name": "Splendid Silver Metallic", hex: "#C0C0C0" },
      { name: "Midnight Blue Pearl", hex: "#003366" },
      { name: "Bluish Black Pearl", hex: "#1a1a2e" }
    ],
    specifications: {
      mesin: "1.5L K15C Smart Hybrid, 103 HP, 137 Nm",
      transmisi: "6-Speed AT",
      dimensi: "P: 4345 mm | L: 1795 mm | T: 1645 mm",
      fitur: [
        "Smart Hybrid 48V",
        "9\" HD Touchscreen",
        "Head Up Display",
        "360-degree Camera",
        "6 Airbags",
        "Lane Keep Assist",
        "Adaptive Cruise Control",
        "Blind Spot Warning",
        "Wireless Charging",
        "Panoramic Sunroof",
        "Ventilated Seats"
      ],
      konsumsiBBM: "20,4 km/L (WLTP)"
    },
    brochureUrl: "/brosur/grand-vitara.pdf",
    promo: "Test Drive & Dapat Cashback Rp 15.000.000",
    whatsappMessage: "Halo Yusuf Suzuki, saya tertarik dengan Suzuki Grand Vitara. Bisa minta info harga dan promo terkini?",
    isNew: true,
    isBestSeller: false
  }
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function getCarsByCategory(category: string): Car[] {
  if (category === "Semua") return cars;
  return cars.filter((car) => car.category === category);
}

export const carCategories = ["Semua", "SUV", "MPV", "Niaga", "City Car", "Off-Road"];