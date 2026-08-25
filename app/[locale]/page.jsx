import { notFound } from 'next/navigation'
import { getDict, isLocale } from '@/lib/i18n'
import { site, socials } from '@/data/site'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Education from '@/components/sections/education'
import Contact from '@/components/sections/contact'

export default async function HomePage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDict(locale)

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role[locale],
    email: `mailto:${site.email}`,
    url: `${site.url}/${locale}`,
    description: dict.meta.description,
    address: { '@type': 'PostalAddress', addressLocality: site.location[locale] },
    alumniOf: { '@type': 'CollegeOrUniversity', name: dict.education.school },
    worksFor: { '@type': 'Organization', name: dict.experience.items[0].company },
    knowsAbout: dict.skills.groups.flatMap((group) => group.items),
    sameAs: socials.filter((s) => s.key !== 'email').map((s) => s.href),
  }

  return (
    <>
      {/* Structured data schema.org. React memperingatkan "script tag while
          rendering React component" — untuk JSON-LD itu wajar dan tidak perlu
          diperbaiki: isinya data, bukan kode, jadi memang tidak dimaksudkan
          dieksekusi. Elemennya tetap masuk DOM dan terbaca crawler. Pola ini
          persis yang direkomendasikan dokumentasi Next.js.
          `<` diescape agar string apa pun tidak bisa memutus tag. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero locale={locale} dict={dict} />
      <About dict={dict} />
      <Skills dict={dict} />
      <Experience dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Education dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
