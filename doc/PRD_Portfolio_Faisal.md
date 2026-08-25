# PRD — Website Portfolio Pribadi
### Mochamad Faisal Rahman · Full Stack Web Developer

| | |
|---|---|
| **Dokumen** | Product Requirements Document (PRD) |
| **Produk** | Website Portfolio Pribadi (rebuild total) |
| **Pemilik** | Mochamad Faisal Rahman |
| **Peran** | Full Stack Web Developer |
| **Audiens utama** | Recruiter / HR **dan** Technical Lead / CTO (bobot seimbang) |
| **Versi** | 1.0 |
| **Tanggal** | 21 Agustus 2026 |
| **Status** | Draft — siap direview |
| **Referensi** | CV (resume 4), `project.json`, portfolio lama: https://my-portofolio-faisal.vercel.app/ |

---

## 1. Ringkasan Eksekutif

Website portfolio ini dibangun ulang dari nol (*rebuild total*) untuk menggantikan portfolio lama di Vercel. Tujuannya menjadikan portfolio sebagai **"landing page" personal branding** yang mampu meyakinkan recruiter dalam waktu di bawah 30 detik bahwa Faisal adalah Full Stack Web Developer berpengalaman yang terbukti memberi **dampak bisnis nyata** — bukan sekadar daftar teknologi.

Pembeda utama Faisal dibanding kandidat lain adalah rekam jejak menangani **ekosistem web media skala nasional** (TIMES Indonesia) secara end-to-end: modernisasi frontend berskala nasional, arsitektur API multi-subdomain, migrasi infrastruktur ke AWS yang menekan biaya, hingga membangun platform komersial yang membuka aliran pendapatan baru. Narasi inilah yang harus menjadi tulang punggung website.

---

## 2. Latar Belakang & Masalah

Portfolio lama (`my-portofolio-faisal.vercel.app`) sudah ada, namun perlu dibangun ulang agar:

- **Menonjolkan dampak bisnis, bukan hanya teknologi.** Data proyek di `project.json` kaya akan angka & dampak (efisiensi anggaran, revenue stream baru, performa) yang belum tentu tersorot di situs lama.
- **Dapat dipindai cepat oleh recruiter.** Recruiter rata-rata melihat sebuah profil hanya beberapa detik. Struktur informasi harus mengarahkan mata ke value proposition, pengalaman, dan proyek unggulan.
- **Konsisten dan mudah dirawat.** Data proyek dikelola terpusat (mis. dari `project.json`) sehingga menambah/mengubah proyek tidak perlu menyentuh layout.
- **Kredibel & profesional.** Desain modern, cepat, responsif, dan bebas bug — mencerminkan kualitas seorang Full Stack Developer.

### Pernyataan Masalah
> Recruiter membutuhkan cara cepat untuk menilai apakah seorang kandidat cocok. Portfolio Faisal saat ini belum optimal dalam menyampaikan **value proposition** dan **dampak bisnis** secara instan, sehingga berisiko kehilangan perhatian sebelum kekuatan sesungguhnya terlihat.

---

## 3. Tujuan & Metrik Keberhasilan

### 3.1 Tujuan (Goals)
1. Menyampaikan value proposition Faisal dalam **< 30 detik** kunjungan pertama.
2. Menampilkan **9 proyek unggulan** dengan penekanan pada dampak bisnis & tech stack.
3. Mempermudah recruiter mengambil aksi: unduh CV, hubungi via email/WhatsApp/LinkedIn.
4. Website cepat, responsif, dan aksesibel di semua perangkat.

### 3.2 Metrik Keberhasilan (Success Metrics)
| Metrik | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Largest Contentful Paint (LCP) | < 2.5 dtk |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Waktu memahami "siapa & apa keahliannya" | < 30 dtk (uji hallway test) |
| Klik ke aksi kontak / unduh CV | Terukur via analytics (mis. ≥ 15% pengunjung) |
| Tampilan tanpa bug di mobile & desktop | 100% section |

### 3.3 Di Luar Cakupan (Non-Goals)
- Bukan blog/CMS penuh (opsional untuk fase lanjutan).
- Bukan sistem login/otentikasi atau dashboard admin.
- Tidak menampilkan data pribadi sensitif (mis. alamat rumah lengkap) demi privasi.

---

## 4. Target Pengguna & Persona

Portfolio ini melayani **dua persona dengan bobot seimbang**. Keduanya harus terpuaskan tanpa mengorbankan salah satu.

**Persona A — "Rina, Technical Recruiter"**
- Menyaring puluhan kandidat per hari; waktu per profil sangat singkat.
- Butuh cepat tahu: peran, level pengalaman, tech stack, dan bukti dampak bisnis.
- Aksi yang diinginkan: unduh CV, simpan kontak, teruskan ke hiring manager.
- Perangkat: sering membuka dari desktop, kadang mobile.

**Persona B — "Andi, Engineering / Tech Lead / CTO"**
- Ingin memvalidasi kedalaman teknis: arsitektur, tech stack, kompleksitas proyek.
- Tertarik pada detail seperti multi-subdomain routing, integrasi pembayaran (Tripay), refactoring API, dan migrasi infrastruktur ke AWS.
- Aksi yang diinginkan: menelusuri detail proyek, melihat repo/link demo, menilai kematangan engineering.

> **Strategi dua lapis (progressive disclosure):** lapisan permukaan dibuat *scannable* dengan dampak bisnis & value proposition (memuaskan Rina dalam < 30 detik); lapisan kedua — halaman/modal **Detail Proyek** — menyajikan kedalaman teknis (arsitektur, tantangan, solusi) untuk Andi. Dengan begitu keduanya mendapat porsi yang seimbang: bisnis di depan, teknis satu klik lebih dalam namun setara pentingnya.

---

## 5. Prinsip Desain & Nada (Tone)

- **Clarity over cleverness** — informasi penting langsung terlihat, tanpa animasi yang mengganggu.
- **Impact + depth (seimbang)** — permukaan menonjolkan *dampak bisnis* agar cepat dipindai; detail teknis (arsitektur, tech stack, keputusan engineering) tersedia setara pentingnya lewat lapisan detail proyek.
- **Fast & responsive** — performa adalah bagian dari personal branding developer.
- **Profesional & modern** — bersih, rapi, tipografi jelas; mendukung *light & dark mode*.
- **Aksesibel** — kontras warna cukup, navigasi keyboard, alt text, semantik HTML.

---

## 6. Arsitektur Informasi & Sitemap

Website *single-page* dengan navigasi anchor (scroll) ditambah halaman detail proyek opsional.

```
/ (Home / Single Page)
├─ Hero (value proposition + CTA)
├─ About (ringkasan profil)
├─ Skills (tech stack dikelompokkan)
├─ Experience (timeline pengalaman kerja)
├─ Projects (grid 9 proyek unggulan)
│   └─ /projects/[slug]  (opsional: halaman detail per proyek)
├─ Education (pendidikan & sertifikasi)
└─ Contact (email, WhatsApp, LinkedIn, unduh CV)

Global: Navbar (sticky) · Footer · Toggle Light/Dark
```

---

## 7. Kebutuhan Fungsional per Section

### 7.1 Navbar (Global)
- Sticky di atas, menyusut/berubah saat scroll.
- Link anchor: About · Skills · Experience · Projects · Contact.
- Tombol **"Unduh CV"** menonjol.
- Toggle **Light/Dark mode**.
- Versi mobile: menu hamburger.

### 7.2 Hero
- Nama: **Mochamad Faisal Rahman**.
- Headline peran: **Full Stack Web Developer**.
- Sub-headline value proposition (dari CV), contoh:
  > "Membangun & memelihara ekosistem aplikasi web skala besar end-to-end — dari mengoptimalkan arsitektur yang menekan biaya operasional hingga platform komersial yang membuka aliran pendapatan baru."
- CTA primer: **Lihat Proyek** · CTA sekunder: **Unduh CV** / **Hubungi Saya**.
- Ikon tautan cepat: Email, WhatsApp, LinkedIn.
- Opsional: label tech stack utama (Laravel · React · Next.js · AWS).

### 7.3 About
- Ringkasan profesional 2–3 kalimat (adaptasi dari summary CV).
- Highlight angka/pencapaian sebagai *stat cards* (opsional), mis.:
  - **1+ thn** pengalaman profesional di media skala nasional
  - **9** proyek/produk web
  - **Efisiensi anggaran** infrastruktur & operasional
  - **Revenue stream baru** lewat platform pay-to-publish
- Nilai lebih: pemanfaatan **AI-assisted tools** untuk mempercepat delivery.

### 7.4 Skills
Dikelompokkan agar mudah dipindai:
- **Bahasa Pemrograman:** HTML/CSS, JavaScript, PHP, C++, Java, Python
- **Framework & Library:** Laravel, CodeIgniter, React.js, Next.js, Inertia.js, Nest.js, PHP Slim, Bootstrap, Tailwind CSS, Shadcn UI, AJAX
- **Database:** MySQL, MongoDB
- **Tools & Platform:** Git, AWS, VS Code, Unity, MS Office
- **AI Tools:** ChatGPT, Gemini, Claude, Claude Code
- **Soft Skills:** Problem-Solving, Patience, Curiosity, Adaptability

> Rekomendasi: gunakan chip/badge, kelompokkan per kategori, hindari "meter persentase" yang subjektif.

### 7.5 Experience (Timeline)
Format kartu/timeline, terbaru di atas:

1. **PT Dawai Citra Semesta (TIMES Indonesia)** — *Full Stack Web Developer* · Agu 2024 – Sekarang
   - Mengelola siklus pengembangan software end-to-end untuk seluruh ekosistem media digital (portal publik, CMS internal, platform event).
   - Menerjemahkan kebutuhan bisnis jadi solusi yang menekan biaya software & membuka revenue baru.
   - Merancang & memelihara arsitektur basis data, API, dan cloud storage (AWS) untuk stabilitas, optimasi query, dan kecepatan respons saat lonjakan traffic.
   - Berkolaborasi dengan redaksi/jurnalis/manajemen untuk mendigitalisasi alur kerja.
   - Memanfaatkan AI-assisted tools untuk mempercepat debugging, refactoring, dan dokumentasi.
2. **PT Kinarya Utama Teknik** — *Internship Quality Assurance* · Agu 2022 – Sep 2022
   - Pengecekan website & aplikasi (My Ads, Roli) serta penyusunan dokumen hasil monitoring.
3. **BBPPMPV BOE Malang** — *Internship IoT Developer* · Feb 2022 – Mar 2022
   - Programmer proyek *smart mirror* berbasis Raspberry Pi & penyusunan modul pembelajaran.

### 7.6 Projects (Section Inti)
Grid kartu, **9 proyek** dari `project.json`. Setiap kartu menampilkan: nama proyek, ringkasan dampak bisnis (1–2 kalimat), badge tech stack, tombol **Kunjungi** (jika ada URL) & **Detail**.

| # | Proyek | URL | Tech Stack | Dampak Bisnis (ringkas) |
|---|---|---|---|---|
| 1 | **TIMES Nasional** | timesindonesia.co.id | Next.js, Git | Modernisasi UI skala nasional & peningkatan performa (loading speed) menyeluruh. |
| 2 | **TIMES Daerah** | malang.times.co.id | Next.js, Git | Antarmuka publik multi-subdomain yang cepat & responsif untuk berita regional. |
| 3 | **API Portal Nasional** | — | PHP Slim, REST API, MySQL, Git | Refactoring & optimasi API untuk mempercepat respons peladen saat lonjakan traffic nasional. |
| 4 | **API Portal Regional** | — | Nest.js, REST API, MySQL, Git | Arsitektur API terpusat dari nol untuk routing dinamis & sinkronisasi data lintas subdomain. |
| 5 | **Newsroom (CMS Terpadu)** | newsroom.tin.co.id | Laravel, Inertia.js, React, MySQL, Git | Menyatukan 2 CMS (daerah & nasional) → efisiensi anggaran signifikan & realokasi tim publisher. |
| 6 | **Reporter** | reporter.tin.co.id | Laravel, Inertia.js, React, MySQL, Git | Menyederhanakan alur redaksional; otonomi penuh jurnalis dari draf hingga publikasi. |
| 7 | **Kopi Times** | kopi.times.co.id | Laravel, Inertia.js, React, Tripay, MySQL, Git | Revenue stream baru via pay-to-publish dengan pembayaran otomatis Tripay. |
| 8 | **AJP Times** | ajp.times.co.id | Laravel, Inertia.js, React, Tripay, MySQL, Git | Platform monetisasi publikasi eksternal; otomatisasi transaksi & laporan penjualan real-time. |
| 9 | **TIMES Event** | event.times.co.id | Laravel, Inertia.js, React, Tripay, MySQL, Git | Digitalisasi pendaftaran & logistik event skala besar, terintegrasi pembayaran Tripay. |

**Interaksi:**
- Filter/kategori opsional (mis. *Frontend*, *Backend/API*, *Platform Berbayar*).
- Halaman/modal **Detail Proyek** (disarankan — penting untuk audiens teknis): peran, tantangan, solusi arsitektur, keputusan teknis, hasil, dan teknologi yang dipakai.

**Catatan privasi/keamanan:** tautan hanya mengarah ke URL publik yang tercantum; tidak menyertakan link internal/kredensial.

### 7.7 Education
- **Politeknik Negeri Malang** — Diploma Teknik Informatika · **IPK 3.62/4.00** · Sep 2019 – Sep 2022.
- Sorotan: Digital Talent Scholarship (Junior Mobile Programming), Sertifikat **Pemrograman Mobile Junior BNSP**, Proyek Dewi Pelaga sebagai Full Stack Web Developer.

### 7.8 Contact
- CTA jelas: **"Tertarik bekerja sama? Hubungi saya."**
- Email: faisalrahmn181@gmail.com (dan/atau kontak profesional yang dipilih).
- WhatsApp: tautan `wa.me` (opsional; keputusan privasi ada di pemilik).
- LinkedIn: (tautan profil).
- Tombol **Unduh CV (PDF)**.
- Form kontak **opsional** (butuh backend/email service — lihat §12).

### 7.9 Footer
- Copyright, nama, tahun.
- Ikon sosial (LinkedIn, GitHub jika ada, email).
- Link "Kembali ke atas".

---

## 8. Kebutuhan Konten

- **CV PDF terbaru** untuk tombol unduh.
- **Ringkasan dampak** tiap proyek (sudah tersedia di `project.json`).
- **Screenshot/preview proyek** (disarankan) untuk kartu proyek — perlu disiapkan pemilik.
- **Foto profil** (opsional) untuk Hero/About.
- **Tautan sosial final:** LinkedIn, GitHub, email profesional.
- Keputusan pemilik: sejauh mana menampilkan **nomor HP** & **alamat** (rekomendasi: sembunyikan alamat rumah, cukup kota).

---

## 9. Kebutuhan Non-Fungsional

- **Performa:** target Lighthouse ≥ 90 (mobile), LCP < 2.5s, lazy-load gambar, optimasi aset.
- **Responsif:** breakpoint mobile / tablet / desktop; layout tidak pecah.
- **Aksesibilitas:** WCAG 2.1 AA — kontras, fokus keyboard, alt text, landmark semantik.
- **SEO:** meta title/description, Open Graph & Twitter Card, sitemap, data terstruktur (`Person`/`schema.org`).
- **Kompatibilitas:** Chrome, Firefox, Safari, Edge (versi terkini).
- **Keamanan/privasi:** HTTPS (default Vercel), tanpa menyimpan data sensitif; jika ada form, lindungi dari spam.
- **Maintainability:** data proyek terpusat (mis. `data/projects.json`) agar mudah diperbarui.

---

## 10. Rekomendasi Teknologi

Selaras dengan keahlian Faisal dan kebutuhan performa/SEO:

- **Framework:** **Next.js** (React) — SSR/SSG untuk SEO & performa, sudah dikuasai.
- **Styling:** **Tailwind CSS** + **Shadcn UI** — cepat, konsisten, komponen siap pakai.
- **Bahasa:** TypeScript (disarankan untuk keandalan) atau JavaScript.
- **Konten data:** file `projects.json` lokal (mudah dirawat) — bisa diperluas ke CMS di fase lanjut.
- **Animasi:** ringan (Framer Motion secukupnya) agar tidak mengorbankan performa.
- **Hosting:** **Vercel** (melanjutkan setup existing) + custom domain (opsional, mis. `faisalrahman.dev`).
- **Analytics:** Vercel Analytics / Google Analytics untuk mengukur metrik §3.2.
- **Form kontak (opsional):** layanan seperti Formspree/Resend/EmailJS agar tanpa server sendiri.

> Rekomendasi ini bersifat usulan; keputusan akhir stack ada pada pemilik.

---

## 11. Roadmap & Prioritas (MoSCoW)

**Must have (MVP)**
- Hero, About, Skills, Experience, Projects (grid 9 proyek), Contact, Footer.
- Responsif + Light/Dark mode + tombol Unduh CV.
- Performa & SEO dasar.

**Should have**
- Halaman/modal detail proyek.
- Filter kategori proyek.
- Analytics.
- Animasi scroll ringan.

**Could have**
- Form kontak fungsional.
- Preview/screenshot tiap proyek.
- Multi-bahasa (ID/EN).
- Halaman blog/artikel.

**Won't have (fase ini)**
- Dashboard admin / CMS penuh.
- Autentikasi pengguna.

### Perkiraan Fase
| Fase | Fokus | Estimasi |
|---|---|---|
| Fase 1 | Setup proyek, desain sistem, Hero + About + Skills | — |
| Fase 2 | Experience + Projects + Contact + Footer | — |
| Fase 3 | Dark mode, SEO, performa, analytics, polish | — |
| Fase 4 (opsional) | Detail proyek, filter, form kontak, i18n | — |

---

## 12. Risiko & Pertanyaan Terbuka

- **Aset visual proyek belum tersedia** → tanpa screenshot, kartu proyek kurang menarik. *Perlu keputusan pemilik.*
- **Data kontak & privasi** → apakah menampilkan nomor HP/alamat? Rekomendasi: sembunyikan alamat rumah.
- **Form kontak** butuh layanan pihak ketiga; jika tidak, cukup tombol email/WhatsApp.
- **Domain kustom** → apakah tetap subdomain Vercel atau beli domain sendiri?
- **Bahasa situs** → ID saja, atau ID + EN (berguna untuk peluang internasional)?
- **Referensi situs lama** belum dapat dirender otomatis saat penyusunan PRD ini (SPA); disarankan review manual untuk memutuskan elemen mana yang dipertahankan.

---

## 13. Kriteria Penerimaan (Definition of Done)

- Semua section Must-have tampil benar di mobile & desktop tanpa bug.
- Skor Lighthouse memenuhi target §3.2.
- Tombol Unduh CV berfungsi & mengunduh PDF terbaru.
- Semua tautan proyek & sosial valid (tidak ada broken link).
- Light/Dark mode berfungsi & kontras memenuhi standar aksesibilitas.
- Metadata SEO & Open Graph terisi.
- Data proyek dapat diperbarui dari satu sumber terpusat.

---

### Lampiran A — Sumber Data
- **CV:** *MOCHAMAD FAISAL RAHMAN — resume 4* (ringkasan, pengalaman, pendidikan, skill).
- **`project.json`:** 9 proyek beserta URL, tech stack, dan dampak bisnis.
- **Portfolio lama:** https://my-portofolio-faisal.vercel.app/ (baseline yang di-*rebuild*).
