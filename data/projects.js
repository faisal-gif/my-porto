// Sumber data terpusat untuk section Projects & halaman detail proyek.
// Menambah proyek = tambah satu object di sini, layout tidak perlu disentuh.
// category: 'frontend' | 'backend' | 'platform'
//
// name, url, stack, dan impact.id disalin dari doc/proyek.json (sumber resmi).
// role/challenge/solution/result adalah draf turunan — perlu direview pemilik.

export const projects = [
  {
    slug: 'times-nasional',
    name: 'TIMES Nasional',
    url: 'https://timesindonesia.co.id/',
    category: 'frontend',
    stack: ['Next.js', 'Git', 'PM2', 'VPS'],
    impact: {
      id: 'Memodernisasi antarmuka pengguna skala nasional dan meningkatkan performa web (loading speed) secara menyeluruh untuk memberikan pengalaman pembaca yang optimal.',
      en: 'Modernised the user interface at national scale and improved web performance (loading speed) across the board to deliver an optimal reading experience.',
    },
    role: {
      id: 'Full Stack Web Developer — penanggung jawab frontend portal utama.',
      en: 'Full Stack Web Developer — owner of the main portal frontend.',
    },
    challenge: {
      id: 'Portal utama melayani traffic nasional dengan antarmuka yang sudah tertinggal dan waktu muat yang berat, sementara perubahan tidak boleh mengganggu kebiasaan membaca pengunjung yang sudah terbentuk.',
      en: 'The main portal served national traffic on a dated interface with heavy load times, yet any change had to avoid disrupting reading habits its audience already relied on.',
    },
    solution: {
      id: 'Membangun ulang antarmuka di atas Next.js dengan komponen yang dapat dipakai ulang agar konsisten di seluruh kanal berita, lalu merampingkan pemuatan aset. Aplikasi dijalankan di VPS dan diawasi PM2 agar tetap hidup saat beban tinggi.',
      en: 'Rebuilt the interface on Next.js with reusable components so every news channel stayed consistent, then trimmed asset loading. The app runs on a VPS under PM2 so it stays up under heavy load.',
    },
    result: {
      id: 'Tampilan modern yang konsisten di seluruh kanal dan peningkatan kecepatan muat yang terasa pada perangkat mobile.',
      en: 'A modern, consistent look across every channel and a load-speed gain that is noticeable on mobile devices.',
    },
  },
  {
    slug: 'times-daerah',
    name: 'TIMES Daerah',
    url: 'https://malang.times.co.id/',
    category: 'frontend',
    stack: ['Next.js', 'Git', 'PM2', 'VPS'],
    impact: {
      id: 'Mengembangkan antarmuka publik berbasis arsitektur multi-subdomain yang cepat dan responsif untuk mendistribusikan berita spesifik pada setiap jaringan regional.',
      en: 'Built a fast, responsive public interface on a multi-subdomain architecture to distribute region-specific news across every regional network.',
    },
    role: {
      id: 'Full Stack Web Developer — frontend seluruh subdomain daerah.',
      en: 'Full Stack Web Developer — frontend for every regional subdomain.',
    },
    challenge: {
      id: 'Setiap daerah membutuhkan portalnya sendiri, namun memelihara puluhan basis kode terpisah tidak berkelanjutan bagi tim kecil.',
      en: 'Every region needed its own portal, yet maintaining dozens of separate codebases was not sustainable for a small team.',
    },
    solution: {
      id: 'Satu basis kode Next.js yang menentukan konten berdasarkan subdomain saat permintaan masuk, dengan tata letak dan komponen bersama serta identitas tiap daerah yang dapat dikonfigurasi.',
      en: 'A single Next.js codebase that resolves content by subdomain at request time, sharing layout and components while keeping each region’s identity configurable.',
    },
    result: {
      id: 'Menambah portal daerah baru menjadi urusan konfigurasi, bukan pengembangan dari nol — biaya pemeliharaan turun drastis.',
      en: 'Launching a new regional portal became a configuration task rather than a build from scratch, cutting maintenance cost sharply.',
    },
  },
  {
    slug: 'api-portal-nasional',
    name: 'API Portal Nasional',
    url: null,
    category: 'backend',
    stack: ['PHP Slim', 'REST API', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Memperbarui, melakukan refactoring, dan mengoptimalkan struktur API yang sudah ada guna meningkatkan kecepatan respons peladen dalam menangani lonjakan traffic pembaca skala nasional.',
      en: 'Updated, refactored, and optimised the existing API structure to improve server response speed when handling national-scale surges in reader traffic.',
    },
    role: {
      id: 'Full Stack Web Developer — backend dan optimasi basis data.',
      en: 'Full Stack Web Developer — backend and database optimisation.',
    },
    challenge: {
      id: 'API lama melambat justru ketika paling dibutuhkan: saat berita besar memicu lonjakan pembaca serentak.',
      en: 'The legacy API slowed down exactly when it mattered most: when a big story drove a simultaneous surge of readers.',
    },
    solution: {
      id: 'Menelusuri jalur permintaan yang paling sering dipakai, menulis ulang kueri yang boros, menambahkan indeks yang tepat, dan merampingkan struktur respons agar payload lebih kecil.',
      en: 'Traced the hottest request paths, rewrote wasteful queries, added the right indexes, and tightened response shapes to slim down payloads.',
    },
    result: {
      id: 'Waktu respons peladen turun dan portal tetap stabil pada beban puncak tanpa menambah kapasitas peladen.',
      en: 'Server response times dropped and the portal stayed stable at peak load without adding server capacity.',
    },
  },
  {
    slug: 'api-portal-regional',
    name: 'API Portal Regional (Daerah)',
    url: null,
    category: 'backend',
    stack: ['Nest.js', 'REST API', 'MySQL', 'Git', 'PM2', 'VPS'],
    impact: {
      id: 'Merancang arsitektur API terpusat dari nol untuk menangani routing dinamis dan sinkronisasi data lintas subdomain secara akurat pada seluruh ekosistem web daerah.',
      en: 'Designed a centralised API architecture from scratch to handle dynamic routing and accurate cross-subdomain data synchronisation across the entire regional web ecosystem.',
    },
    role: {
      id: 'Full Stack Web Developer — perancang sekaligus pembangun arsitektur API.',
      en: 'Full Stack Web Developer — designed and built the API architecture.',
    },
    challenge: {
      id: 'Portal daerah membutuhkan satu sumber data yang mampu melayani banyak subdomain sekaligus, tanpa menduplikasi logika di tiap portal.',
      en: 'Regional portals needed one data source able to serve many subdomains at once, without duplicating logic in each portal.',
    },
    solution: {
      id: 'Membangun API Nest.js modular: resolusi subdomain menjadi lapisan tersendiri, modul konten dipisah per domain bisnis, dan kontrak respons dibuat seragam agar frontend cukup satu implementasi.',
      en: 'Built a modular Nest.js API: subdomain resolution became its own layer, content modules were split by business domain, and response contracts were unified so the frontend needed only one implementation.',
    },
    result: {
      id: 'Data konsisten di seluruh subdomain dan penambahan daerah baru tidak lagi menyentuh kode backend.',
      en: 'Data stayed consistent across every subdomain, and onboarding a new region no longer touched backend code.',
    },
  },
  {
    slug: 'newsroom',
    name: 'Newsroom',
    url: null,
    category: 'platform',
    stack: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Menyatukan dua sistem CMS (daerah dan nasional) untuk mengefisiensi anggaran operasional secara signifikan dan memungkinkan realokasi tim publisher ke tugas yang lebih strategis.',
      en: 'Merged two CMS systems (regional and national) into one, cutting operating budget significantly and freeing the publisher team for more strategic work.',
    },
    role: {
      id: 'Full Stack Web Developer — end-to-end, dari model data hingga antarmuka redaksi.',
      en: 'Full Stack Web Developer — end to end, from data model to the editorial interface.',
    },
    challenge: {
      id: 'Redaksi menjalankan dua CMS berbeda untuk konten daerah dan nasional. Biaya operasional berjalan ganda, dan publisher harus berpindah sistem untuk pekerjaan yang pada dasarnya sama.',
      en: 'The newsroom ran two different CMSs for regional and national content. Operating costs ran twice over, and publishers had to switch systems for what was essentially the same work.',
    },
    solution: {
      id: 'Merancang satu CMS Laravel + Inertia + React yang menampung kedua alur kerja: peran dan hak akses membedakan cakupan daerah versus nasional, sementara alur penyuntingan, media, dan penjadwalan dipakai bersama.',
      en: 'Designed a single Laravel + Inertia + React CMS holding both workflows: roles and permissions separate regional from national scope, while editing, media, and scheduling flows are shared.',
    },
    result: {
      id: 'Satu sistem menggantikan dua, anggaran operasional turun signifikan, dan tim publisher dapat direalokasi ke tugas yang lebih strategis.',
      en: 'One system replaced two, operating budget dropped significantly, and the publisher team was reassigned to more strategic work.',
    },
  },
  {
    slug: 'reporter',
    name: 'Reporter',
    url: null,
    category: 'platform',
    stack: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Mempercepat dan menyederhanakan alur kerja redaksional dari tahap penulisan hingga penayangan; memberikan otonomi penuh bagi jurnalis untuk mengirim draf dan memantau status publikasi.',
      en: 'Sped up and simplified the editorial workflow from writing to publication, giving journalists full autonomy to submit drafts and track publication status.',
    },
    role: {
      id: 'Full Stack Web Developer — perancang alur kerja dan implementasi.',
      en: 'Full Stack Web Developer — workflow design and implementation.',
    },
    challenge: {
      id: 'Naskah jurnalis harus melewati beberapa perantara sebelum tayang, dan penulisnya tidak punya cara memantau posisi naskahnya sendiri. Berita kehilangan momentum, beban editor menumpuk.',
      en: 'Journalists’ copy passed through several intermediaries before going live, and writers had no way to see where their own piece stood. Stories lost momentum and editor workload piled up.',
    },
    solution: {
      id: 'Membangun ruang kerja khusus jurnalis dengan penyuntingan draf, unggah media, pengajuan publikasi, dan status naskah dalam satu layar, ditopang alur persetujuan berbasis peran yang memangkas langkah manual.',
      en: 'Built a journalist-facing workspace with draft editing, media upload, publish submission, and live status on one screen, backed by a role-based approval flow that removed manual steps.',
    },
    result: {
      id: 'Waktu dari naskah selesai hingga tayang memendek, jurnalis bisa memantau statusnya sendiri, dan editor fokus pada kualitas.',
      en: 'Time from finished copy to publication shortened, journalists could track status themselves, and editors focused on quality.',
    },
  },
  {
    slug: 'kopi-times',
    name: 'Kopi Times',
    url: 'https://kopi.times.co.id/',
    category: 'platform',
    stack: ['Laravel', 'Inertia.js', 'React', 'Tripay', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Membuka sumber pendapatan (revenue stream) baru melalui sistem pay-to-publish, memfasilitasi klien eksternal untuk membayar dan mempublikasikan berita secara mandiri menggunakan integrasi pembayaran otomatis Tripay.',
      en: 'Opened a new revenue stream through a pay-to-publish system, letting external clients pay for and publish news on their own via automated Tripay payment integration.',
    },
    role: {
      id: 'Full Stack Web Developer — produk komersial end-to-end termasuk integrasi pembayaran.',
      en: 'Full Stack Web Developer — end-to-end commercial product including the payment integration.',
    },
    challenge: {
      id: 'Ada permintaan dari klien eksternal untuk menerbitkan berita di portal, tetapi belum tersedia kanal mandiri maupun cara menagih dan memverifikasi pembayaran tanpa kerja manual.',
      en: 'External clients wanted to publish news on the portal, but there was no self-service channel and no way to charge and verify payment without manual work.',
    },
    solution: {
      id: 'Membangun platform pay-to-publish yang terhubung ke gerbang pembayaran Tripay. Klien mengirim naskah sendiri, status pembayaran diterima lewat callback dan langsung memindahkan naskah ke antrean tinjauan redaksi — tanpa konfirmasi manual.',
      en: 'Built a pay-to-publish platform wired to the Tripay payment gateway. Clients submit their own copy, payment status arrives via callback and moves the piece straight into the editorial review queue — no manual confirmation.',
    },
    result: {
      id: 'Aliran pendapatan baru yang berjalan mandiri, dengan jejak transaksi yang dapat diaudit.',
      en: 'A new revenue stream that runs itself, with an auditable transaction trail.',
    },
  },
  {
    slug: 'ajp-times',
    name: 'AJP Times',
    url: 'https://ajp.times.co.id/',
    category: 'platform',
    stack: ['Laravel', 'Inertia.js', 'React', 'Tripay', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Menyediakan platform monetisasi terpisah untuk layanan publikasi eksternal, mengotomatisasi alur transaksi, verifikasi pembayaran via Tripay, dan pelaporan penjualan secara real-time.',
      en: 'Provided a separate monetisation platform for external publication services, automating the transaction flow, payment verification via Tripay, and real-time sales reporting.',
    },
    role: {
      id: 'Full Stack Web Developer — pembangunan platform dan pelaporan.',
      en: 'Full Stack Web Developer — platform build and reporting.',
    },
    challenge: {
      id: 'Layanan publikasi eksternal butuh kanal monetisasi sendiri, terpisah dari kanal yang sudah ada. Transaksi dan verifikasi pembayaran masih manual, sehingga rekonsiliasi lambat dan manajemen tidak punya gambaran penjualan terkini.',
      en: 'External publication services needed their own monetisation channel, separate from existing ones. Transactions and payment verification were still manual, making reconciliation slow and leaving management without a current view of sales.',
    },
    solution: {
      id: 'Menyediakan alur pemesanan mandiri dengan verifikasi pembayaran Tripay otomatis, ditambah dasbor yang meringkas transaksi dan pendapatan langsung dari sumber data yang sama.',
      en: 'Delivered a self-service ordering flow with automatic Tripay payment verification, plus a dashboard that summarises transactions and revenue straight from the same data.',
    },
    result: {
      id: 'Rekonsiliasi manual hilang dan manajemen memperoleh laporan penjualan real-time.',
      en: 'Manual reconciliation disappeared and management gained real-time sales reporting.',
    },
  },
  {
    slug: 'times-event',
    name: 'TIMES Event',
    url: 'https://event.times.co.id/',
    category: 'platform',
    stack: ['Laravel', 'Inertia.js', 'React', 'Tripay', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Mendigitalisasi operasional pendaftaran dan logistik untuk acara skala besar, terintegrasi dengan Tripay untuk mengotomatisasi transaksi pembayaran tiket atau biaya registrasi secara langsung dan aman.',
      en: 'Digitised registration and logistics operations for large-scale events, integrated with Tripay to automate ticket and registration fee payments directly and securely.',
    },
    role: {
      id: 'Full Stack Web Developer — platform event end-to-end.',
      en: 'Full Stack Web Developer — end-to-end event platform.',
    },
    challenge: {
      id: 'Pendaftaran acara masih bergantung pada formulir dan rekap manual, rawan salah hitung kuota serta menyulitkan panitia melacak peserta yang benar-benar sudah membayar.',
      en: 'Event registration still relied on manual forms and recaps, prone to quota miscounts and making it hard for organisers to track who had actually paid.',
    },
    solution: {
      id: 'Membangun platform pendaftaran daring dengan kuota per kategori tiket, pembayaran tiket dan biaya registrasi via Tripay, serta konfirmasi otomatis, dilengkapi panel panitia untuk memantau peserta dan kebutuhan logistik.',
      en: 'Built an online registration platform with per-ticket quotas, ticket and registration fee payments via Tripay, and automatic confirmation, plus an organiser panel to monitor attendees and logistics needs.',
    },
    result: {
      id: 'Panitia memperoleh data peserta yang akurat secara langsung dan pendaftaran berjalan tanpa rekap manual.',
      en: 'Organisers gained accurate attendee data instantly and registration ran without manual recaps.',
    },
  },
  {
    slug: 'internal-web-cdn-aws-storage',
    name: 'Internal Web CDN & AWS Storage',
    url: null,
    category: 'backend',
    stack: ['Laravel', 'Inertia.js', 'React', 'AWS S3', 'MySQL', 'Git', 'VPS'],
    impact: {
      id: 'Menyelesaikan masalah tingginya biaya server dengan beralih ke AWS; terbukti mengefisiensi anggaran infrastruktur penyimpanan foto dan media berkapasitas besar menjadi jauh lebih murah dan terukur.',
      en: 'Solved the problem of high server cost by moving to AWS, provably reducing the infrastructure budget for large-capacity photo and media storage to something far cheaper and more predictable.',
    },
    role: {
      id: 'Full Stack Web Developer — migrasi penyimpanan dan pembangunan antarmuka pengelolaannya.',
      en: 'Full Stack Web Developer — storage migration and the management interface built on top of it.',
    },
    challenge: {
      id: 'Foto dan media berkapasitas besar dari seluruh ekosistem menumpuk di penyimpanan peladen sendiri. Biayanya naik terus seiring arsip bertambah, dan kapasitasnya tidak bisa ditambah tanpa pengeluaran besar di muka.',
      en: 'Large photo and media files from the whole ecosystem piled up on self-hosted server storage. Cost kept climbing as the archive grew, and capacity could not be expanded without a large upfront outlay.',
    },
    solution: {
      id: 'Memindahkan penyimpanan media ke AWS S3 dan menyediakan lapisan CDN internal di depannya, dilengkapi antarmuka Laravel + Inertia + React untuk mengunggah, menelusuri, dan mengelola aset tanpa akses langsung ke bucket.',
      en: 'Moved media storage to AWS S3 with an internal CDN layer in front of it, plus a Laravel + Inertia + React interface to upload, browse, and manage assets without direct bucket access.',
    },
    result: {
      id: 'Biaya infrastruktur penyimpanan turun jauh dan kapasitasnya menjadi terukur — bertambah sesuai pemakaian, bukan lewat pembelian peladen baru.',
      en: 'Storage infrastructure cost dropped sharply and capacity became predictable — it grows with usage instead of requiring new server purchases.',
    },
  },
]

export const categories = ['all', 'frontend', 'backend', 'platform']

export const getProject = (slug) => projects.find((p) => p.slug === slug)
