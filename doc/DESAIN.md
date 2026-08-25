# DESAIN.md — Sistem Desain Portfolio Faisal

Aturan visual yang dipakai situs ini. Tujuannya satu: siapa pun yang menambah
komponen baru menghasilkan sesuatu yang terlihat seperti bagian dari situs yang
sama, di light mode maupun dark mode.

**Konteks produk:** [`PRD_Portfolio_Faisal.md`](PRD_Portfolio_Faisal.md) ·
**Aturan teknis:** [`AGENT.md`](AGENT.md)

---

## 1. Prinsip

Diturunkan dari PRD §5, diterjemahkan menjadi keputusan yang bisa dieksekusi.

1. **Konten dulu, ornamen belakangan.** Recruiter punya < 30 detik. Tidak ada
   splash, tidak ada animasi masuk yang menahan pembacaan, tidak ada carousel.
2. **Hierarki lewat ukuran dan warna, bukan lewat garis dan kotak.** Pembatas
   antar-section adalah satu `border-b` tipis plus pergantian latar; bukan kartu
   bertumpuk di dalam kartu.
3. **Dua lapis informasi.** Permukaan = dampak bisnis (satu kalimat per proyek).
   Kedalaman teknis pindah ke halaman detail. Kartu proyek tidak boleh tumbuh
   menjadi esai.
4. **Performa adalah bagian dari desain.** Tidak ada gambar dekoratif, tidak ada
   font kedua, tidak ada library animasi. LCP situs ini adalah teks.
5. **Kedua tema setara.** Dark mode bukan varian kelas dua — setiap warna
   didefinisikan untuk keduanya, dan kontras diverifikasi di keduanya.

---

## 2. Warna

Seluruh warna adalah CSS custom property di `app/globals.css`, diekspos ke
Tailwind lewat `@theme inline`. **Komponen tidak pernah menulis warna literal.**

### Token

| Token | Kelas Tailwind | Light | Dark | Dipakai untuk |
|---|---|---|---|---|
| `--background` | `bg-background` | `#ffffff` | `#0b1120` | Latar halaman |
| `--foreground` | `text-foreground` | `#0f172a` | `#e2e8f0` | Teks utama, judul |
| `--surface` | `bg-surface` | `#f8fafc` | `#111827` | Latar section selang-seling, chip, footer |
| `--card` | `bg-card` | `#ffffff` | `#0f172a` | Latar kartu |
| `--border` | `border-border` | `#e2e8f0` | `#1e293b` | Semua garis pembatas |
| `--muted` | `text-muted` | `#475569` | `#94a3b8` | Teks sekunder, isi paragraf, label |
| `--accent` | `text-accent` | `#1d4ed8` | `#93c5fd` | Teks aksen, angka statistik, tautan aktif |
| `--accent-soft` | `bg-accent-soft` | `#eff6ff` | `#172554` | Latar badge kategori & pill |
| `--primary` | `bg-primary` | `#1d4ed8` | `#60a5fa` | Latar tombol utama |
| `--primary-foreground` | `text-primary-foreground` | `#ffffff` | `#0b1120` | Teks di atas tombol utama |

### Kenapa `--accent` dan `--primary` dipisah

Di light mode nilainya sama. Di dark mode berbeda dan itulah alasan pemisahannya:
teks aksen butuh warna **terang** agar terbaca di latar gelap (`#93c5fd`),
sementara tombol butuh latar yang cukup kontras terhadap halaman **dan** terhadap
labelnya sendiri (`#60a5fa` + teks gelap). Memaksakan satu token akan membuat
salah satunya gagal kontras.

### Aturan pemakaian

- Latar section berselang-seling: transparan → `bg-surface` → transparan.
  Diatur lewat prop `alt` pada `<Section>`, bukan dengan kelas manual.
- Aksen hanya untuk penekanan, bukan dekorasi. Dalam satu layar seharusnya hanya
  beberapa elemen beraksen: satu tombol utama, angka statistik, badge kategori.
- Jangan pernah menulis `bg-slate-800`, `text-gray-500`, atau warna Tailwind
  bawaan lain di komponen — hanya token di tabel atas. Warna bawaan tidak ikut
  berganti saat tema berubah.

### Kontras (terverifikasi di browser)

Diukur langsung dari computed style pada halaman yang berjalan, bukan diperkirakan.
Target PRD adalah WCAG 2.1 AA (4.5:1 teks normal, 3:1 non-teks).

| Elemen | Light | Dark |
|---|---|---|
| Judul (`h1`, `h2`) di latar halaman | 17.85 : 1 | 15.27 : 1 |
| Paragraf `text-muted` | 7.58 : 1 | 7.34 : 1 |
| Teks aksen (peran, statistik) | 6.70 : 1 | 10.44 : 1 |
| Label di tombol utama | 6.70 : 1 | 7.41 : 1 |
| Badge kategori di `accent-soft` | 6.16 : 1 | ≥ 7 : 1 |
| Teks footer di `surface` | 17.06 : 1 | 14.39 : 1 |

Semua melewati AA; sebagian besar juga melewati AAA (7:1). **Setiap pasangan
warna baru harus diukur, bukan dikira-kira.**

---

## 3. Tipografi

| | |
|---|---|
| Sans | **Geist** — via `next/font/google`, self-hosted, `display: swap` |
| Mono | **Geist Mono** — hanya untuk periode waktu, badge tech stack, label 404 |

Font kedua tidak ditambahkan. Satu keluarga dengan dua varian sudah memberi
pembeda yang cukup antara prosa dan metadata.

### Skala

| Peran | Kelas | Catatan |
|---|---|---|
| Nama di hero | `text-4xl sm:text-6xl font-bold tracking-tight` | Satu-satunya `h1` di halaman utama |
| Judul section | `text-2xl sm:text-3xl font-bold tracking-tight` | `h2` |
| Judul kartu / entri | `text-lg font-semibold` | `h3` |
| Label kategori | `text-sm font-semibold uppercase tracking-wide text-muted` | Judul kelompok skill, label detail |
| Body | ukuran dasar, `leading-relaxed`, `text-muted` | Paragraf |
| Tagline hero | `text-lg leading-relaxed` | Value proposition |
| Metadata | `font-mono text-xs text-muted` | Periode kerja, nama teknologi |

`tracking-tight` hanya untuk teks besar dan tebal. Jangan dipakai di body.

### Aturan struktur heading

Satu `h1` per halaman. Section memakai `h2` dan menautkannya lewat
`aria-labelledby`. Jangan melompati level demi mendapat ukuran tertentu — atur
ukurannya dengan kelas.

---

## 4. Tata letak & jarak

- **Container:** `max-w-6xl` untuk halaman utama, `max-w-4xl` untuk prosa halaman
  detail (baris jadi lebih pendek dan enak dibaca). Padding horizontal `px-5`
  di semua breakpoint.
- **Ritme vertikal section:** `py-16 sm:py-20`. Hero lebih lega: `py-20 sm:py-28`.
- **Jarak antar-elemen:** kelipatan 4 (`gap-2`, `gap-3`, `gap-4`), naik ke
  `mt-8`/`mt-10` untuk pemisahan blok.
- **Grid:**
  - Kartu proyek — `sm:grid-cols-2 lg:grid-cols-3`
  - Kelompok skill — `sm:grid-cols-2 lg:grid-cols-3`
  - Statistik About — `grid-cols-2` (tetap dua kolom, termasuk di mobile)
- `scroll-padding-top: 5rem` di `<html>` supaya judul section tidak tertutup
  navbar sticky saat dilompati lewat anchor.

Breakpoint yang dipakai hanya `sm` (640) dan `lg` (1024). Cukup; jangan tambah
tanpa alasan yang terlihat.

---

## 5. Komponen

### Tombol

| Jenis | Kelas inti | Kapan |
|---|---|---|
| Utama | `bg-primary text-primary-foreground rounded-md px-5 py-2.5 text-sm font-medium` | Satu per section, maksimal |
| Sekunder | `border border-border rounded-md px-5 py-2.5 hover:bg-surface` | Unduh CV, Kunjungi |
| Ikon | `h-9 w-9 rounded-md border border-border` | Toggle tema/bahasa, sosial |

Radius `rounded-md` di mana-mana; `rounded-lg` khusus kartu; `rounded-full` hanya
untuk pill status dan titik timeline.

### Kartu

`rounded-lg border border-border bg-card p-5`, hover `hover:border-accent`.
Kartu tidak pernah mengubah bayangan atau terangkat saat hover — hanya batasnya
yang menegas. Bayangan sengaja tidak dipakai sama sekali; pemisahan dikerjakan
oleh batas dan latar.

### Badge / chip

- Tech stack: `border border-border bg-surface font-mono text-[11px] text-muted`
- Kategori: `bg-accent-soft text-accent text-xs font-medium` — **hanya di header
  halaman detail proyek.** Kartu di section Proyek Unggulan sengaja tidak
  memakainya: kategori sudah dinyatakan oleh tombol filter tepat di atas grid,
  jadi badge di setiap kartu hanya mengulang informasi yang sama.

### Timeline (Experience)

Satu garis kiri `border-l border-border`, titik `h-2.5 w-2.5 rounded-full`.
Titik pekerjaan yang sedang berjalan berwarna `bg-accent`; sisanya `bg-border`.

---

## 6. Gerak

Satu pola saja: **fade-in + naik 1rem saat elemen masuk viewport.**

- Implementasi: `components/reveal.jsx` (IntersectionObserver) + kelas `.reveal`
  di `globals.css`. Observer dilepas setelah elemen muncul sekali.
- Durasi 600ms, `ease-out`. Stagger antar-elemen 50–80ms lewat prop `delay`,
  maksimal ~300ms total; melebihi itu terasa lambat, bukan halus.
- Transisi hover: hanya `colors` dan `opacity`. Tidak ada transform pada hover.
- **`prefers-reduced-motion: reduce` menonaktifkan semuanya** — reveal langsung
  tampil, smooth scroll mati, seluruh transisi dipangkas jadi 0.01ms.

Tidak ada parallax, tidak ada animasi terus-menerus, tidak ada elemen yang
bergerak setelah halaman diam.

---

## 7. Aksesibilitas

Bukan lapisan akhir; ini bagian dari definisi "selesai".

- **Landmark:** `<header>` · `<main id="main">` · `<footer>`, setiap section
  memakai `aria-labelledby` menunjuk judulnya sendiri.
- **Skip link** ke `#main` sebagai elemen fokus pertama, tersembunyi sampai
  menerima fokus keyboard.
- **Fokus terlihat:** `:focus-visible` global — outline 2px `--accent` dengan
  offset 2px. Berlaku di kedua tema. Jangan pernah `outline: none` tanpa
  penggantinya.
- **Tombol ikon** selalu punya `aria-label` **dan** `title`; SVG-nya `aria-hidden`.
- **Filter proyek** memakai `aria-pressed`; jumlah hasil diumumkan lewat
  `aria-live="polite"`.
- **Menu mobile** memakai `aria-expanded` + `aria-controls`, dan mengunci scroll
  badan halaman selagi terbuka.
- **Tautan eksternal** memakai `target="_blank"` + `rel="noreferrer noopener"`.
- **Bahasa halaman** benar di `<html lang>` karena root layout ada di dalam
  segmen `[locale]`.
- **Tanpa JavaScript** konten tetap terbaca — lihat `<noscript>` di layout.

---

## 8. Responsif

Diuji pada 375px dan 1280px.

| | Mobile (< 640) | Desktop (≥ 768) |
|---|---|---|
| Navigasi | Hamburger, panel penuh, scroll terkunci | Link horizontal |
| Tombol Unduh CV | Di dalam panel menu | Di navbar |
| Grid proyek & skill | Satu kolom | 2–3 kolom |
| Statistik About | Dua kolom | Dua kolom, samping paragraf |
| Padding section | `py-16` | `py-20` |

Aturan yang tidak boleh dilanggar: **tidak ada scroll horizontal di lebar berapa
pun.** Konten lebar (tabel, blok kode) harus mendapat container `overflow-x-auto`
sendiri. Sudah diverifikasi: pada 375px, `scrollWidth == clientWidth`.

---

## 9. Menambah sesuatu yang baru

Sebelum menulis komponen baru, lewati daftar ini:

1. Apakah `<Section>` sudah menyediakan bungkusnya? Kalau ya, pakai.
2. Apakah warnanya ada di tabel token? Kalau tidak — tambahkan token untuk
   **kedua** tema, jangan tulis warna literal.
3. Apakah teksnya sudah masuk `content.js` untuk **kedua** bahasa?
4. Apakah butuh gerak? Kalau ya, `<Reveal>`; jangan buat animasi baru.
5. Apakah butuh ikon? Tambahkan ke `components/icons.jsx`.
6. Ukur kontrasnya di light **dan** dark sebelum menyebutnya selesai.
