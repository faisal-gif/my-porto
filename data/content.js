// Seluruh copy non-proyek, dua bahasa. Satu key = satu string di kedua locale.
// Menambah bahasa = tambah key ketiga pada tiap object.

export const content = {
  id: {
    htmlLang: 'id',
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Proyek',
      contact: 'Kontak',
      downloadCv: 'Unduh CV',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      toggleTheme: 'Ganti tema terang/gelap',
      switchLang: 'Switch to English',
      skipToContent: 'Lompat ke konten utama',
      backToTop: 'Kembali ke atas',
    },
    hero: {
      greeting: 'Halo, saya',
      tagline:
        'Membangun dan memelihara ekosistem aplikasi web skala besar end-to-end — dari arsitektur yang menekan biaya operasional hingga platform komersial yang membuka aliran pendapatan baru.',
      ctaProjects: 'Lihat Proyek',
      ctaCv: 'Unduh CV',
      available: 'Terbuka untuk peluang baru',
    },
    about: {
      title: 'Tentang Saya',
      body: [
        'Full Stack Web Developer yang menangani ekosistem web media skala nasional secara end-to-end: portal publik, CMS internal, API multi-subdomain, hingga platform komersial berbayar.',
        'Fokus saya bukan sekadar menyelesaikan fitur, tetapi menerjemahkan kebutuhan bisnis menjadi keputusan teknis yang terukur — menyatukan sistem yang tumpang tindih untuk menekan biaya, dan membangun kanal baru yang menghasilkan pendapatan.',
        'Saya juga memanfaatkan AI-assisted tools untuk mempercepat debugging, refactoring, dan dokumentasi tanpa mengorbankan kualitas kode.',
      ],
      stats: [
        { value: '10', label: 'Produk web di produksi' },
        { value: 'Nasional', label: 'Skala traffic yang ditangani' },
        { value: '2 → 1', label: 'CMS disatukan, biaya turun' },
        { value: '3', label: 'Platform pendapatan baru' },
      ],
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Teknologi yang saya pakai sehari-hari untuk membangun dan memelihara produk.',
      groups: [
        { name: 'Bahasa Pemrograman', items: ['HTML/CSS', 'JavaScript', 'PHP', 'C++', 'Java', 'Python'] },
        {
          name: 'Framework & Library',
          items: ['Laravel', 'CodeIgniter', 'React.js', 'Next.js', 'Inertia.js', 'Nest.js', 'PHP Slim', 'Bootstrap', 'Tailwind CSS', 'Shadcn UI', 'AJAX'],
        },
        { name: 'Database', items: ['MySQL', 'MongoDB'] },
        { name: 'Tools & Platform', items: ['Git', 'AWS', 'VS Code', 'Unity', 'MS Office'] },
        { name: 'AI Tools', items: ['ChatGPT', 'Gemini', 'Claude', 'Claude Code'] },
        { name: 'Soft Skills', items: ['Problem-Solving', 'Patience', 'Curiosity', 'Adaptability'] },
      ],
    },
    experience: {
      title: 'Pengalaman',
      subtitle: 'Perjalanan profesional, terbaru lebih dulu.',
      present: 'Sekarang',
      items: [
        {
          company: 'PT Dawai Citra Semesta (TIMES Indonesia)',
          role: 'Full Stack Web Developer',
          period: 'Agu 2024 – Sekarang',
          current: true,
          points: [
            'Mengelola siklus pengembangan software end-to-end untuk seluruh ekosistem media digital: portal publik, CMS internal, dan platform event.',
            'Menerjemahkan kebutuhan bisnis menjadi solusi yang menekan biaya perangkat lunak sekaligus membuka aliran pendapatan baru.',
            'Merancang serta memelihara arsitektur basis data, API, dan cloud storage (AWS) untuk stabilitas, optimasi kueri, dan kecepatan respons saat lonjakan traffic.',
            'Berkolaborasi dengan redaksi, jurnalis, dan manajemen untuk mendigitalkan alur kerja yang sebelumnya manual.',
            'Memanfaatkan AI-assisted tools untuk mempercepat debugging, refactoring, dan dokumentasi.',
          ],
        },
        {
          company: 'PT Kinarya Utama Teknik',
          role: 'Internship — Quality Assurance',
          period: 'Agu 2022 – Sep 2022',
          current: false,
          points: [
            'Pengecekan fungsional website dan aplikasi (My Ads, Roli).',
            'Menyusun dokumen hasil monitoring sebagai dasar perbaikan tim pengembang.',
          ],
        },
        {
          company: 'BBPPMPV BOE Malang',
          role: 'Internship — IoT Developer',
          period: 'Feb 2022 – Mar 2022',
          current: false,
          points: [
            'Programmer proyek smart mirror berbasis Raspberry Pi.',
            'Menyusun modul pembelajaran pendukung proyek.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyek Unggulan',
      subtitle: 'Sepuluh produk yang saya bangun dan pelihara. Klik Detail untuk konteks teknisnya.',
      filterLabel: 'Saring berdasarkan kategori',
      filters: { all: 'Semua', frontend: 'Frontend', backend: 'Backend / API', platform: 'Platform Berbayar' },
      visit: 'Kunjungi',
      detail: 'Detail',
      internal: 'Sistem internal',
      empty: 'Tidak ada proyek pada kategori ini.',
      countOne: '{n} proyek',
      countOther: '{n} proyek',
    },
    projectDetail: {
      back: 'Kembali ke daftar proyek',
      role: 'Peran',
      challenge: 'Tantangan',
      solution: 'Solusi',
      result: 'Hasil',
      stack: 'Teknologi',
      visit: 'Kunjungi situs',
      internal: 'Sistem internal — tidak tersedia untuk publik.',
      otherProjects: 'Proyek lainnya',
    },
    education: {
      title: 'Pendidikan & Sertifikasi',
      school: 'Politeknik Negeri Malang',
      degree: 'Diploma — Teknik Informatika',
      period: 'Sep 2019 – Sep 2022',
      gpa: 'IPK 3,62 / 4,00',
      highlightsTitle: 'Sorotan',
      highlights: [
        'Digital Talent Scholarship — Junior Mobile Programming',
        'Sertifikat Pemrograman Mobile Junior (BNSP)',
        'Proyek Dewi Pelaga — Full Stack Web Developer',
      ],
    },
    contact: {
      title: 'Mari Bekerja Sama',
      subtitle:
        'Tertarik berdiskusi soal peluang, kolaborasi, atau sekadar bertanya soal salah satu proyek di atas? Saya balas secepatnya.',
      cta: 'Kirim Email',
      downloadCv: 'Unduh CV (PDF)',
      channelsLabel: 'Kanal kontak',
    },
    footer: {
      rights: 'Seluruh hak cipta dilindungi.',
      builtWith: 'Dibangun dengan Next.js & Tailwind CSS.',
    },
    meta: {
      title: 'Mochamad Faisal Rahman — Full Stack Web Developer',
      description:
        'Full Stack Web Developer dengan rekam jejak menangani ekosistem web media skala nasional: modernisasi frontend, arsitektur API multi-subdomain, dan platform komersial yang membuka pendapatan baru.',
    },
  },

  en: {
    htmlLang: 'en',
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      toggleTheme: 'Toggle light/dark theme',
      switchLang: 'Ganti ke Bahasa Indonesia',
      skipToContent: 'Skip to main content',
      backToTop: 'Back to top',
    },
    hero: {
      greeting: 'Hi, I am',
      tagline:
        'I build and maintain large-scale web ecosystems end to end — from architecture that cuts operating cost to commercial platforms that open new revenue streams.',
      ctaProjects: 'View Projects',
      ctaCv: 'Download CV',
      available: 'Open to new opportunities',
    },
    about: {
      title: 'About Me',
      body: [
        'Full Stack Web Developer handling a national-scale media web ecosystem end to end: public portals, internal CMS, multi-subdomain APIs, and paid commercial platforms.',
        'My focus is not just shipping features but turning business needs into measurable technical decisions — merging overlapping systems to cut cost, and building new channels that generate revenue.',
        'I also lean on AI-assisted tools to speed up debugging, refactoring, and documentation without trading away code quality.',
      ],
      stats: [
        { value: '10', label: 'Web products in production' },
        { value: 'National', label: 'Traffic scale handled' },
        { value: '2 → 1', label: 'CMSs merged, cost reduced' },
        { value: '3', label: 'New revenue platforms' },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'The technologies I work with day to day to build and maintain products.',
      groups: [
        { name: 'Languages', items: ['HTML/CSS', 'JavaScript', 'PHP', 'C++', 'Java', 'Python'] },
        {
          name: 'Frameworks & Libraries',
          items: ['Laravel', 'CodeIgniter', 'React.js', 'Next.js', 'Inertia.js', 'Nest.js', 'PHP Slim', 'Bootstrap', 'Tailwind CSS', 'Shadcn UI', 'AJAX'],
        },
        { name: 'Databases', items: ['MySQL', 'MongoDB'] },
        { name: 'Tools & Platforms', items: ['Git', 'AWS', 'VS Code', 'Unity', 'MS Office'] },
        { name: 'AI Tools', items: ['ChatGPT', 'Gemini', 'Claude', 'Claude Code'] },
        { name: 'Soft Skills', items: ['Problem-Solving', 'Patience', 'Curiosity', 'Adaptability'] },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional track record, most recent first.',
      present: 'Present',
      items: [
        {
          company: 'PT Dawai Citra Semesta (TIMES Indonesia)',
          role: 'Full Stack Web Developer',
          period: 'Aug 2024 – Present',
          current: true,
          points: [
            'Own the end-to-end software development cycle for the whole digital media ecosystem: public portals, internal CMS, and the event platform.',
            'Translate business needs into solutions that cut software spend while opening new revenue streams.',
            'Design and maintain the database, API, and cloud storage (AWS) architecture for stability, query optimisation, and response speed under traffic spikes.',
            'Work with editors, journalists, and management to digitise previously manual workflows.',
            'Use AI-assisted tools to speed up debugging, refactoring, and documentation.',
          ],
        },
        {
          company: 'PT Kinarya Utama Teknik',
          role: 'Internship — Quality Assurance',
          period: 'Aug 2022 – Sep 2022',
          current: false,
          points: [
            'Functional testing of websites and applications (My Ads, Roli).',
            'Produced monitoring reports used by the development team as a basis for fixes.',
          ],
        },
        {
          company: 'BBPPMPV BOE Malang',
          role: 'Internship — IoT Developer',
          period: 'Feb 2022 – Mar 2022',
          current: false,
          points: [
            'Programmer on a Raspberry Pi based smart mirror project.',
            'Wrote the supporting learning module for the project.',
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Ten products I built and maintain. Open Details for the technical context.',
      filterLabel: 'Filter by category',
      filters: { all: 'All', frontend: 'Frontend', backend: 'Backend / API', platform: 'Paid Platform' },
      visit: 'Visit',
      detail: 'Details',
      internal: 'Internal system',
      empty: 'No projects in this category.',
      countOne: '{n} project',
      countOther: '{n} projects',
    },
    projectDetail: {
      back: 'Back to all projects',
      role: 'Role',
      challenge: 'Challenge',
      solution: 'Solution',
      result: 'Result',
      stack: 'Tech stack',
      visit: 'Visit site',
      internal: 'Internal system — not publicly available.',
      otherProjects: 'Other projects',
    },
    education: {
      title: 'Education & Certification',
      school: 'Politeknik Negeri Malang',
      degree: 'Diploma — Informatics Engineering',
      period: 'Sep 2019 – Sep 2022',
      gpa: 'GPA 3.62 / 4.00',
      highlightsTitle: 'Highlights',
      highlights: [
        'Digital Talent Scholarship — Junior Mobile Programming',
        'Junior Mobile Programming Certificate (BNSP)',
        'Dewi Pelaga project — Full Stack Web Developer',
      ],
    },
    contact: {
      title: 'Let’s Work Together',
      subtitle:
        'Want to talk about a role, a collaboration, or just ask about one of the projects above? I reply quickly.',
      cta: 'Send an Email',
      downloadCv: 'Download CV (PDF)',
      channelsLabel: 'Contact channels',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Next.js & Tailwind CSS.',
    },
    meta: {
      title: 'Mochamad Faisal Rahman — Full Stack Web Developer',
      description:
        'Full Stack Web Developer with a track record running a national-scale media web ecosystem: frontend modernisation, multi-subdomain API architecture, and commercial platforms that opened new revenue.',
    },
  },
}
