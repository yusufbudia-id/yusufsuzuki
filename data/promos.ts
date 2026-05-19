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
  },
  // 8. PROMO FRONXZY GIRL (BARU DITAMBAHKAN)
  {
    slug: "promo-fronxzy-girl-diskon",
    title: "Program Fronxzy Girl: Wujudkan Mobil Suzuki Fronx Impianmu!",
    description: `Hai Ladies! Saatnya tampil beda dan ekspresikan dirimu di jalanan dengan "Program FRONXZY Girl - Build Your Own Car". Ini adalah momen terbaik bagi perempuan masa kini untuk memiliki mobil yang stylish, compact, irit, namun tetap powerfull!

Jadikan setiap hari-harimu sebagai petualangan baru dengan deretan warna Fronx yang "kamu banget":
Pink, Salem, Ivory, Burgundi, Coklat, Biru Tua, Oranye, Hijau, hingga Tosca. Pilih warna yang paling mewakili kepribadianmu!

PROMO SPESIAL UNTUKMU BULAN INI:
- Diskon Fantastis Up To Rp 15 Juta!
- DP Sangat Ringan Mulai 20%
- Angsuran Terjangkau Mulai 5 Jutaan*
- Tenor Super Panjang Sampai 8 Tahun
- Bunga 0% (Khusus menggunakan Suzuki Finance)

Kenapa Suzuki Fronx adalah pilihan paling tepat untukmu?
1. Desain Modern dan Trendy: Bikin kamu selalu jadi pusat perhatian.
2. Kabin Nyaman dan Luas: Muat banyak barang belanjaan atau asyik buat carpool bareng bestie.
3. Fitur Canggih & Keamanan Tinggi: Berkendara dengan rasa tenang dan aman.
4. Irit Bahan Bakar: Nggak bikin kantong jebol, siap diajak jelajah ke mana saja.
5. Performa Bertenaga: Lincah di kemacetan kota maupun jalan tol.

Tunggu apa lagi? Ayo upgrade kendaraan lamamu dengan Suzuki Fronx sekarang juga. Promo warna favoritmu bisa jadi sangat terbatas! 

Langsung mampir ke Showroom Suzuki Mlati atau hubungi Yusuf di 0821-7463-5218 untuk konsultasi dan booking warna favoritmu.`,
    carSlug: "fronx",
    carName: "Suzuki Fronx",
    badge: "FRONXZY GIRL",
    validUntil: "30 Juni 2026",
    image: "/promo/promo-fronxzy-girl.jpg", // Pastikan gambar poster diubah namanya jadi promo-fronxzy-girl.jpg dan ditaruh di folder public/promo
    highlight: "Diskon 15 JT, Bunga 0%, DP 20%!",
  },
  // 9. PROMO SEMESTA JIMNY (BARU DITAMBAHKAN)
  {
    slug: "promo-semesta-suzuki-jimny",
    title: "Spesial Promo SEMESTA: Beli Jimny Bulan Ini Langsung Bawa Pulang iPad Air 11 & Voucher MAP Puluhan Juta!",
    description: `Memanggil para pecinta off-road dan gaya hidup petualang! Suzuki Sumber Baru Mobil menghadirkan "Spesial Promo SEMESTA" edisi Mei dengan Ekstra Surprise terbaik khusus untuk Anda para sultan jalanan.

Punya impian bawa pulang Suzuki Jimny idaman? Berhenti menunda, karena inilah momen yang paling tepat! Khusus untuk setiap pembelian unit Suzuki Jimny (NIK 2025) di bulan ini, Anda tidak perlu ikut undian. Anda akan LANGSUNG dihujani bonus senilai puluhan juta rupiah!

EKSTRA SURPRISE MAP GIFT VOUCHER:
- Beli Jimny 3 Door -> Langsung dapat MAP Gift Voucher senilai Rp 20 JUTA!*
- Beli Jimny 5 Door -> Langsung dapat MAP Gift Voucher senilai Rp 10 JUTA!*

BELUM CUKUP? INI BONUS PROGRAM PENJUALAN TAMBAHAN (Khusus Jimny 3 Door & 5 Door):
1. GRATIS Kaca Film Premium V-KOOL (Senilai Rp 8 Jutaan*)
2. GRATIS Apple iPad Air 11 (Senilai Rp 10 Jutaan*)

Kenapa harus beli Suzuki Jimny sekarang bersama Yusuf Suzuki?
- Kuota promo sangat terbatas (Siapa Cepat, Dia Dapat).
- Jimny adalah investasi gaya hidup yang unitnya sangat eksklusif.
- Proses kredit dibantu sampai ACC (100% Approved) atau melayani pembelian tunai.
- Menerima layanan Trade-In (tukar tambah) mobil lama Anda dari merk apapun dengan harga penawaran tertinggi.

Jangan sampai kelewatan promo "SEMESTA" yang tak akan terulang ini. Unit cepat habis!
Segera amankan Jimny impian Anda. Hubungi Yusuf Suzuki di 0821-7463-5218 sekarang juga untuk konsultasi dan pemesanan.

*Syarat & Ketentuan Berlaku. Khusus NIK 2025.`,
    carSlug: "jimny",
    carName: "Suzuki Jimny (3 & 5 Door)",
    badge: "PROMO SEMESTA",
    validUntil: "31 Mei 2026",
    image: "/promo/promo-semesta-jimny.jpg", // Pastikan gambar brosur diubah namanya jadi promo-semesta-jimny.jpg dan ditaruh di folder public/promo
    highlight: "Voucher MAP Up To 20JT, Free iPad Air 11 & Kaca Film V-KOOL!",
  },
// PROMO XL7 DISKON BESAR
  {
    slug: "promo-gila-suzuki-xl7-diskon-33-juta",
    title: "Bocor Lebat! Promo Suzuki XL7 Bulan Ini: Diskon Tembus 33 Juta & DP Cuma 18 Jutaan!",
    description: `Kabar gembira buat keluarga modern yang lagi cari SUV tangguh tapi tetap ramah di kantong! Nggak perlu nabung bertahun-tahun untuk punya mobil keluarga impian. 

Khusus bulan ini, Yusuf Suzuki kasih penawaran "Super Deal XL7" yang dijamin bikin tetangga melongo. Bawa pulang New Suzuki XL7 Hybrid — SUV 7-Seater yang stylish, gagah, dan super nyaman ini dengan promo paling gila se-DIY & Jateng!

RINCIAN PROMO SPESIAL XL7:
- Diskon Brutal hingga Rp 33 JUTA! (Potongan harga langsung!)
- DP Super Ringan mulai Rp 18 JUTA-an aja! (Lebih ringan, lebih mudah)
- Bunga 0% (Nggak bikin pusing mikirin bunga cicilan)
- Tenor Super Panjang hingga 8 Tahun! (Angsuran bulanan jadi sangat enteng)

Suzuki XL7 adalah pilihan paling cerdas untuk Anda. Kabin lega muat 7 orang, fitur keamanan canggih, ground clearance tinggi untuk libas segala medan, dan pastinya irit bensin berkat teknologi Smart Hybrid.

Peringatan: Kuota diskon maksimal 33 Juta ini rebutan dan unitnya sangat terbatas! 

Jangan kelamaan mikir, langsung amankan jatah promo Anda. Hubungi Yusuf Suzuki sekarang juga di 0821-7463-5218 untuk konsultasi, hitung simulasi angsuran, atau sekadar janjian Test Drive ke rumah Anda!`,
    carSlug: "xl7",
    carName: "Suzuki XL7",
    badge: "SUPER DEAL XL7",
    validUntil: "31 Mei 2026",
    image: "/promo/promo-xl7-dp-18juta.jpg", 
    highlight: "Diskon 33JT, DP 18JT, Bunga 0%, Tenor 8 Thn!",
  },
// PROMO SUZUKI FRONX JULI (SOFT SELLING OPTIMIZED)
  {
    slug: "promo-santai-suzuki-fronx-jogja",
    title: "Mencari Crossover Nyaman & Irit untuk Keluarga? Ini Alasan Fronx Jadi Pilihan Paling Logis Bulan Ini",
    description: `Mencari mobil yang pas untuk mobilitas harian dan liburan akhir pekan bersama keluarga di wilayah Jogja seringkali membuat kita harus berkompromi. Ingin yang desainnya tangguh seperti SUV, tapi takut boros bensin. Ingin interior yang mewah, tapi biasanya harganya di luar anggaran.

Menjawab dilema tersebut, Suzuki Fronx hadir sebagai jalan tengah yang sempurna untuk Anda yang berada di Yogyakarta dan sekitarnya. Sebagai sebuah Smart Hybrid Crossover, mobil ini menawarkan perpaduan yang jarang ada: tenaga yang responsif saat dibutuhkan, namun dengan efisiensi bahan bakar yang sangat menjaga pengeluaran bulanan Anda. 

Begitu Anda masuk ke dalamnya, balutan Interior Premium dirancang khusus agar setiap perjalanan terasa santai dan tidak melelahkan. Tentu saja, karena ini adalah mobil keluarga, fitur keamanan canggih dan lengkap sudah disematkan untuk memberikan Anda ketenangan pikiran selama berkendara.

Memiliki kendaraan senyaman ini mungkin terdengar membutuhkan persiapan dana yang besar. Namun, kami percaya setiap keluarga berhak mendapatkan kenyamanan terbaik dengan cara yang mudah. Khusus di bulan Juli ini, kami menghadirkan penawaran apresiasi khusus untuk wilayah DIY dan Kedu:

- Langkah awal yang ringan: Cukup siapkan DP mulai 25 Juta saja.
- Pikiran lebih tenang: Tersedia fasilitas Bunga 0%.
- Arus kas tetap aman: Cicilan bisa disesuaikan dengan pilihan tenor hingga 8 tahun.
- Nilai tambah untuk Anda: Nikmati potongan harga langsung senilai puluhan juta rupiah.

Membeli mobil adalah keputusan penting bagi keluarga. Jangan terburu-buru. Mari kita ngobrol santai terlebih dahulu mengenai kebutuhan mobilitas Anda, mencocokkan simulasi yang pas dengan anggaran, atau sekadar menjadwalkan Test Drive gratis di garasi rumah Anda.

Silakan sapa Yusuf Suzuki melalui WhatsApp di 0821-7463-5218. Kami siap mendengarkan dan membantu Anda menemukan kendaraan yang paling tepat, tanpa tekanan.`,
    carSlug: "fronx",
    carName: "Suzuki Fronx",
    badge: "PROMO FRONX",
    validUntil: "31 Juli 2026",
    image: "/promo/promo-suzuki-fronx-juli.jpg", 
    highlight: "DP 25JT, Bunga 0%, Tenor 8 Thn, Diskon Puluhan Juta!",
  },
  // PROMO SUZUKI CARRY PICK UP MEI - JUNI (SOFT SELLING OPTIMIZED)
{
  slug: "promo-suzuki-carry-pick-up-jogja",
  title: "Modal Mulai 5 Juta, Usaha Bisa Langsung Jalan? Ini Alasan New Carry Pick Up Jadi Andalan Pebisnis Jogja",
  description: `Untuk Anda yang sedang menjalankan usaha, kendaraan bukan sekadar alat transportasi. Kendaraan adalah partner kerja yang membantu barang sampai tepat waktu, operasional lebih lancar, dan peluang bisnis bisa bergerak lebih cepat.

Suzuki New Carry Pick Up hadir sebagai pilihan yang sangat logis untuk pelaku usaha di Jogja dan sekitarnya. Dikenal tangguh, irit, dan siap diajak kerja keras setiap hari, New Carry cocok untuk berbagai kebutuhan bisnis seperti distribusi barang, usaha toko, pertanian, kuliner, material, hingga operasional lapangan.

Bak yang luas membuat angkut barang jadi lebih leluasa, sementara performanya tetap efisien untuk penggunaan harian. Inilah alasan mengapa Carry Pick Up sering disebut sebagai partner usaha yang sederhana, kuat, dan menguntungkan dalam jangka panjang.

Kabar baiknya, selama periode Mei–Juni ini Anda tidak perlu menunggu terlalu lama untuk memiliki kendaraan niaga yang siap mendukung usaha. Tersedia promo khusus Suzuki New Carry Pick Up dengan penawaran menarik:

- DP mulai 5 Juta saja.
- Bunga mulai 0%.
- Tenor hingga 5 tahun.
- Diskon hingga 40 Juta.
- Proses dibantu sampai tuntas oleh dealer resmi Suzuki.

Kami paham, membeli kendaraan usaha adalah keputusan penting. Karena itu, Anda bisa konsultasi dulu tanpa harus langsung membeli. Kami bantu hitungkan simulasi kredit, pilihan tenor, kebutuhan unit, hingga promo terbaik yang paling sesuai dengan kondisi usaha Anda.

Silakan hubungi Yusuf Suzuki melalui WhatsApp:
<a href="https://wa.me/6282174635218" target="_blank" rel="noopener noreferrer">Klik di sini untuk chat WhatsApp Yusuf Suzuki</a>

Anda juga bisa melihat katalog Suzuki Fronx di sini:
<a href="https://www.suzukiautojogja.com/mobil/fronx" target="_blank" rel="noopener noreferrer">Lihat katalog Suzuki Fronx</a>

Yuk, mulai langkah lebih ringan untuk membuat usaha Anda bergerak lebih cepat bersama Suzuki New Carry Pick Up.`,
  carSlug: "carry-pick-up",
  carName: "Suzuki New Carry Pick Up",
  badge: "PROMO CARRY",
  validUntil: "30 Juni 2026",
  image: "/promo/promo-suzuki-carry-pick-up-mei-juni.jpg",
  highlight: "DP 5JT, Bunga 0%, Tenor 5 Thn, Diskon Hingga 40JT!",
}
];