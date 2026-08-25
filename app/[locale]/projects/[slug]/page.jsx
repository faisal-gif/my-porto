import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCALES, getDict, isLocale, t } from '@/lib/i18n'
import { projects, getProject } from '@/data/projects'
import { site } from '@/data/site'
import ProjectCard from '@/components/project-card'
import Reveal from '@/components/reveal'
import { ArrowLeft, External } from '@/components/icons'

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const project = getProject(slug)
  if (!project || !isLocale(locale)) return {}

  const title = `${project.name} — ${site.name}`
  const description = t(project.impact, locale)
  const images = [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: site.name }]

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/projects/${slug}`])),
    },
    // OG image file-convention hanya berlaku untuk segmen /[locale], jadi
    // halaman detail menunjuk gambar yang sama secara eksplisit.
    openGraph: { type: 'article', url: `/${locale}/projects/${slug}`, title, description, images },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}

export default async function ProjectPage({ params }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const project = getProject(slug)
  if (!project) notFound()

  const dict = getDict(locale)
  const details = [
    { label: dict.projectDetail.role, value: t(project.role, locale) },
    { label: dict.projectDetail.challenge, value: t(project.challenge, locale) },
    { label: dict.projectDetail.solution, value: t(project.solution, locale) },
    { label: dict.projectDetail.result, value: t(project.result, locale) },
  ]
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <article>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft width={15} height={15} />
            {dict.projectDetail.back}
          </Link>

          <span className="mt-6 inline-block rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            {dict.projects.filters[project.category]}
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t(project.impact, locale)}</p>

          <div className="mt-6">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {dict.projectDetail.visit}
                <External width={15} height={15} />
              </a>
            ) : (
              <p className="text-sm text-muted">{dict.projectDetail.internal}</p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:py-16">
        <section aria-labelledby="stack-title">
          <h2 id="stack-title" className="text-sm font-semibold tracking-wide text-muted uppercase">
            {dict.projectDetail.stack}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 space-y-10">
          {details.map((detail, i) => (
            <Reveal key={detail.label} as="section" delay={i * 60} aria-labelledby={`d-${i}`}>
              <h2 id={`d-${i}`} className="text-sm font-semibold tracking-wide text-accent uppercase">
                {detail.label}
              </h2>
              <p className="mt-2 leading-relaxed text-muted">{detail.value}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <section aria-labelledby="others-title" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <h2 id="others-title" className="text-xl font-bold tracking-tight">
            {dict.projectDetail.otherProjects}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <ProjectCard project={other} locale={locale} dict={dict} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}
