// Satu-satunya tempat untuk data pribadi & tautan. Ubah di sini, seluruh situs ikut.
export const site = {
  name: 'Mochamad Faisal Rahman',
  role: { id: 'Full Stack Web Developer', en: 'Full Stack Web Developer' },
  location: { id: 'Malang, Indonesia', en: 'Malang, Indonesia' },
  email: 'faisalrahmn181@gmail.com',

  // TODO: ganti dengan URL profil LinkedIn asli
  linkedin: 'https://www.linkedin.com/in/faisal-rahman-90ab1b134/',
  // TODO: ganti dengan URL profil GitHub asli
  github: 'https://github.com/faisal-gif',
  // TODO: ganti dengan nomor WhatsApp asli (format internasional tanpa "+")
  whatsapp: 'https://wa.me/62895389118844',

  cv: '/cv/Mochamad-Faisal-Rahman-CV.pdf',

  // TODO: ganti setelah domain final ditentukan (dipakai untuk metadata, sitemap, OG)
  url: 'https://my-portofolio-faisal.vercel.app',
}

export const socials = [
  { key: 'email', label: 'Email', href: `mailto:${site.email}`, value: site.email },
  { key: 'whatsapp', label: 'WhatsApp', href: site.whatsapp, value: 'WhatsApp' },
  { key: 'linkedin', label: 'LinkedIn', href: site.linkedin, value: 'LinkedIn' },
  { key: 'github', label: 'GitHub', href: site.github, value: 'GitHub' },
]
