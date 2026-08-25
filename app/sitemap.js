import { LOCALES } from '@/lib/i18n'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

export default function sitemap() {
  const lastModified = new Date()

  return LOCALES.flatMap((locale) => [
    { url: `${site.url}/${locale}`, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/${locale}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    })),
  ])
}
