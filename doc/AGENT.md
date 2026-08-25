# AGENT.md — Panduan Kerja di Repo Ini

Dokumen operasional untuk siapa pun (manusia atau AI agent) yang menyentuh kode
portfolio ini. Isinya: cara kerja proyek, aturan mainnya, dan jebakan yang sudah
diketahui. Baca ini dulu sebelum mengubah apa pun.

**Sumber kebutuhan produk:** [`PRD_Portfolio_Faisal.md`](PRD_Portfolio_Faisal.md)
**Sumber data proyek:** [`proyek.json`](proyek.json)
**Sumber aturan visual:** [`DESAIN.md`](DESAIN.md)

> Bila `proyek.json` dan tabel proyek di PRD §7.6 berbeda, **`proyek.json` yang
> menang** — tabel PRD adalah ringkasan yang sudah tertinggal (mis. PRD menulis
> stack TIMES Nasional "Next.js, Git", sedangkan `proyek.json` menyebut
> "Next.js, Git, PM2, VPS").

---

## 1. Ringkas

| | |
|---|---|
| **Produk** | Website portfolio pribadi Mochamad Faisal Rahman (single page + halaman detail proyek) |
| **Framework** | Next.js 16.3 App Router, **JavaScript + JSX** (bukan TypeScript) |
| **Styling** | Tailwind CSS v4 (tanpa file config — semua token di `app/globals.css`) |
| **Bahasa konten** | Indonesia (`/id`, default) & English (`/en`) |
| **Dependency runtime tambahan** | `next-themes` — hanya satu |
| **Rendering** | Seluruh halaman statis (SSG). Tidak ada database, tidak ada API |
| **Deploy** | Vercel |

### Perintah

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

`npm run build` adalah gerbang mutu utama. Tanpa TypeScript tidak ada type-check,
jadi build sukses + `npm run lint` bersih + smoke test browser adalah jaring
pengaman yang tersedia. Jangan menganggap perubahan selesai sebelum ketiganya lolos.

---

## 2. Struktur

```
app/
  [locale]/
    layout.jsx               ← ROOT layout: <html>, font, ThemeProvider, Navbar, Footer
    page.jsx                 ← halaman utama, merakit semua section + JSON-LD Person
    not-found.jsx
    opengraph-image.jsx      ← OG image dibangkitkan next/og (statis per locale)
    projects/[slug]/page.jsx ← halaman detail proyek
  globals.css                ← token warna, dark variant, kelas .reveal
  icon.png                 ← favicon; konvensi file Next, <link rel="icon"> otomatis
  robots.js  sitemap.js
components/
  navbar.jsx  footer.jsx  section.jsx  project-card.jsx
  theme-provider.jsx  theme-toggle.jsx  lang-toggle.jsx
  reveal.jsx               ← scroll-reveal (IntersectionObserver)
  icons.jsx                ← seluruh ikon SVG inline
  sections/                ← hero about skills experience projects education contact
data/
  site.js                  ← identitas, kontak, tautan sosial, path CV, URL situs
  projects.js              ← 10 proyek, seluruh teks dua bahasa
  content.js               ← seluruh copy non-proyek, dua bahasa
lib/
  i18n.js                  ← LOCALES, getDict, t(), swapLocale
proxy.js                   ← satu-satunya tugas: "/" → "/id"
public/cv/                 ← CV PDF untuk tombol unduh
doc/                       ← PRD, proyek.json, CV sumber, AGENT.md, DESAIN.md
```

### Aturan penempatan

- **Teks apa pun yang tampil di layar tidak boleh ditulis di dalam komponen.**
  Semua masuk `data/content.js` (copy umum) atau `data/projects.js` (per proyek).
  Satu-satunya pengecualian: `app/[locale]/not-found.jsx`, sengaja dwibahasa
  statis karena locale bisa saja tidak diketahui saat 404.
- Komponen di `components/sections/` hanya merangkai; tidak menyimpan data.
- Ikon baru masuk `components/icons.jsx`, bukan file terpisah.

---

## 3. Cara mengubah hal yang biasa diubah

### Mengganti data pribadi / tautan sosial
`data/site.js`. Cari komentar `// TODO:` — LinkedIn, GitHub, WhatsApp, dan
`site.url` masih placeholder dan **wajib diisi sebelum deploy**.

```bash
grep -rn "TODO:" data/
```

### Menambah / mengubah proyek

**Sumber resmi data proyek adalah [`proyek.json`](proyek.json)** di folder ini.
`data/projects.js` adalah bentuk siap-render dari file itu: `name`, `url`,
`stack`, dan `impact.id` **harus persis sama** dengan isi `proyek.json`. Ubah
`proyek.json` dulu, baru sesuaikan `data/projects.js`.

Field yang tidak ada di `proyek.json` — `slug`, `category`, `impact.en`, serta
`role` / `challenge` / `solution` / `result` — hanya ada di `data/projects.js`
dan merupakan turunan yang ditulis manual.

Cek kesinkronan kapan saja:

```bash
node --input-type=module -e "import fs from 'node:fs';const s=JSON.parse(fs.readFileSync('doc/proyek.json','utf8'));const {projects:p}=await import('./data/projects.js');const n=x=>x.replace(/\s+/g,' ').trim();let b=0;s.forEach((j,i)=>{const c=p[i];[['name',j.nama_proyek,c.name],['url',j.url??null,c.url],['stack',j.tech_stack,c.stack.join(', ')],['impact',n(j.dampak_bisnis),n(c.impact.id)]].forEach(([f,x,y])=>{if(x!==y){console.log('MISMATCH',c.slug,f);b++}})});console.log(b?b+' masalah':'OK')"
```

Bentuk satu entri di `data/projects.js`:

```js
{
  slug: 'nama-unik-untuk-url',      // hanya di sini, tidak ada di proyek.json
  name: 'Nama Proyek',              // ← proyek.json: nama_proyek
  url: 'https://...',               // ← proyek.json: url, atau null bila internal
  category: 'frontend',             // hanya di sini: 'frontend' | 'backend' | 'platform'
  stack: ['Laravel', 'React'],      // ← proyek.json: tech_stack, dipecah per koma
  impact:    { id: '…', en: '…' },  // id ← proyek.json: dampak_bisnis (verbatim)
  role:      { id: '…', en: '…' },  // turunan, ditulis manual
  challenge: { id: '…', en: '…' },
  solution:  { id: '…', en: '…' },
  result:    { id: '…', en: '…' },
}
```

Tidak ada langkah lain. Grid, filter, halaman detail `/[locale]/projects/[slug]`,
dan sitemap semuanya ikut otomatis.

Menambah **kategori** baru: tambahkan ke array `categories` di file yang sama,
lalu tambahkan labelnya di `content.js` → `projects.filters` untuk **kedua** locale.
Kalau labelnya lupa ditambahkan, tombol filter akan tampil kosong.

### Menambah bahasa ketiga
1. Tambahkan kode locale ke `LOCALES` di `lib/i18n.js`.
2. Tambahkan blok bahasa baru di `data/content.js` (salin struktur `id`, terjemahkan).
3. Tambahkan key bahasa itu ke setiap field `{ id, en }` di `data/projects.js`
   dan di `site.role` / `site.location`.
4. `LangToggle` saat ini menukar dua bahasa (`id` ⇄ `en`); ubah jadi dropdown
   bila locale lebih dari dua.

Tidak ada langkah routing tambahan — `generateStaticParams` membaca `LOCALES`.

### Menambah section baru di halaman utama
1. Buat `components/sections/nama.jsx`, bungkus dengan `<Section>` agar container,
   heading, dan scroll-reveal-nya seragam.
2. Tambahkan copy-nya di `content.js` untuk kedua locale.
3. Render di `app/[locale]/page.jsx`.
4. Kalau perlu muncul di navbar, tambahkan id-nya ke `SECTIONS` di
   `components/navbar.jsx` **dan** ke `nav` di `content.js`.

### Mengganti favicon
Timpa `app/icon.png`. **Bukan** `public/icon.png` — Next hanya membaca konvensi
file dari dalam `app/`. Tag `<link rel="icon">` beserta `sizes`, `type`, dan
hash cache-busting-nya dibuat otomatis; tidak ada yang perlu diubah di kode.

### Mengganti CV
Timpa `public/cv/Mochamad-Faisal-Rahman-CV.pdf`, atau ubah `site.cv` bila nama
filenya berbeda.

---

## 4. Jebakan yang sudah diketahui

Ini bagian terpenting dari dokumen ini.

### 4.1 `params` bersifat async (Next.js 16)
Akses sinkron sudah dihapus. Di setiap `page.jsx` / `layout.jsx` /
`opengraph-image.jsx`:

```js
const { locale } = await params   // WAJIB await
```

### 4.2 Root layout ada di `app/[locale]/layout.jsx`, bukan `app/layout.jsx`
Alasannya `<html lang>` harus mengikuti locale demi aksesibilitas dan SEO.
Konsekuensinya `/` tidak punya halaman sendiri — itulah sebabnya `proxy.js` ada.
**Jangan membuat `app/layout.jsx`**; akan bentrok dengan root layout ini.

### 4.3 `dict` dikirim ke Client Component — isinya harus serializable
`Navbar` dan `sections/projects.jsx` adalah Client Component dan menerima `dict`
utuh. Karena itu `data/content.js` **tidak boleh berisi fungsi**. Ini sebabnya
jumlah proyek disimpan sebagai template string (`countOne` / `countOther`) lalu
di-`.replace('{n}', …)`, bukan sebagai fungsi. Menaruh fungsi di sana akan
menggagalkan render dengan error "Functions cannot be passed directly to Client
Components".

### 4.4 Dark mode = class, dan Tailwind v4 tidak punya `darkMode` di config
Varian `dark:` didefinisikan manual di `app/globals.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Warna tidak pernah ditulis langsung di komponen — selalu lewat token
(`bg-surface`, `text-muted`, `text-accent`, …). Menulis `bg-slate-800` langsung
akan rusak di salah satu tema. Detailnya di [`DESAIN.md`](DESAIN.md).

### 4.5 `ThemeToggle` sengaja tidak memakai state `mounted`
Kedua ikon (matahari & bulan) selalu dirender; CSS `dark:hidden` /
`hidden dark:block` yang memilih. Ini menghindari mismatch hidrasi **tanpa**
kedipan ikon saat load. Jangan "diperbaiki" menjadi pola `useState(mounted)` —
itu justru memunculkan kedipan.

### 4.6 Scroll-reveal menyembunyikan konten lewat CSS
`.reveal` default `opacity: 0`; `components/reveal.jsx` menambah `.is-visible`
saat elemen masuk viewport. Dua konsekuensi yang sudah ditangani, jangan dihapus:
- `<noscript>` di `layout.jsx` memaksa konten tampil bila JavaScript mati.
- `prefers-reduced-motion: reduce` di `globals.css` menampilkan konten seketika.

Catatan saat menguji lewat automation: IntersectionObserver **tidak menyala di
tab yang tersembunyi**, jadi `.reveal` akan terlihat tetap `opacity: 0` pada
pemeriksaan headless. Itu artefak alat uji, bukan bug.

### 4.7 OG image tidak menurun ke rute anak
File-convention `opengraph-image.jsx` di `app/[locale]/` hanya berlaku untuk
`/[locale]`. Halaman detail proyek menunjuk gambarnya secara eksplisit lewat
`openGraph.images` di `generateMetadata`. Kalau menambah rute baru yang perlu OG
image, lakukan hal yang sama.

### 4.8 Anchor navbar memakai path penuh
Link ditulis `/{locale}#projects`, bukan `#projects`, supaya tetap berfungsi
ketika diklik dari halaman detail proyek.

### 4.9 `AGENTS.md` di root ditulis ulang oleh Next.js
File `AGENTS.md` dan `CLAUDE.md` di root dibuat otomatis oleh `next dev`.
Menghapusnya percuma — akan muncul lagi. Dokumen proyek yang dikelola manusia
ada di `doc/`, yaitu file ini.

---

## 5. Checklist sebelum deploy

- [ ] `grep -rn "TODO:" data/` tidak menyisakan hasil — LinkedIn, GitHub,
      WhatsApp, dan `site.url` sudah diisi nilai asli.
- [ ] `npm run build` sukses, seluruh rute berlabel `●` (SSG) atau `○` (Static).
- [ ] `npm run lint` bersih.
- [ ] Buka `/id` dan `/en`: toggle tema, toggle bahasa, filter proyek, satu
      halaman detail, tombol Unduh CV benar-benar mengunduh PDF.
- [ ] Console browser tanpa warning hidrasi.
- [ ] Cek di lebar 375px: tidak ada scroll horizontal, menu hamburger berfungsi.
- [ ] `data/projects.js` sinkron dengan `doc/proyek.json` (jalankan skrip cek di §3).
- [ ] Isi teks proyek (`challenge` / `solution` / `result`) sudah **direview
      pemiliknya** — field ini tidak ada di `proyek.json`, jadi isinya turunan
      yang ditulis manual, bukan data yang diberikan pemilik.

---

## 6. Yang sengaja tidak dibangun

Bukan kelalaian, melainkan keputusan. Jangan ditambahkan tanpa permintaan eksplisit.

| Tidak ada | Alasan | Kapan pantas ditambah |
|---|---|---|
| TypeScript | Diminta JSX oleh pemilik | Bila tim bertambah atau data model membesar |
| Shadcn UI / Radix | Situs statis ini hanya butuh card, badge, button | Bila muncul komponen interaktif kompleks (dialog, combobox) |
| `next-intl` | i18n cukup dua dictionary object + segmen `[locale]` | Bila butuh format tanggal/angka per locale atau pluralisasi serius |
| Framer Motion | Scroll-reveal cukup satu IntersectionObserver | Bila butuh animasi berorkestrasi, bukan fade-in |
| Library ikon | Ikon yang dipakai sedikit, sudah inline | Bila kebutuhan ikon melewati ~25 |
| Form kontak | Butuh layanan pihak ketiga; tombol email/WhatsApp sudah cukup | Bila pemilik ingin menerima pesan tanpa membuka email client |
| Analytics | Butuh akun Vercel/GA milik pemilik | Saat metrik §3.2 PRD mau benar-benar diukur |
| Screenshot proyek | Aset belum tersedia | Saat pemilik menyiapkan gambarnya |
| Blog / CMS / auth | Dinyatakan *Won't have* di PRD §11 | — |
