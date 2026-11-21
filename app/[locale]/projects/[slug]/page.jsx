import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCALES, getDict, isLocale, t } from '@/lib/i18n'
import { projects, getProject } from '@/data/projects'
import { site } from '@/data/site'
import ProjectRow from '@/components/project-row'
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
      <header className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 sm:pb-16">
          <Link
            href={`/${locale}#projects`}
            className="font-narrow inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-muted uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft width={15} height={15} />
            {dict.projectDetail.back}
          </Link>

          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t-[3px] border-rule pt-4 font-mono text-xs font-semibold tracking-wider uppercase">
            <span className="text-figure">{project.code}</span>
            <span className="text-muted">{dict.projects.filters[project.category]}</span>
            <span className="text-gain">
              <span aria-hidden>▲ </span>
              {t(project.figure, locale)}
            </span>
          </div>

          <h1 className="font-condensed mt-4 text-[clamp(3rem,9vw,6rem)] leading-[0.9] font-black tracking-[-0.02em] text-balance uppercase">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-snug font-medium text-pretty sm:text-2xl">
            {t(project.impact, locale)}
          </p>

          <div className="mt-8">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-narrow inline-flex h-12 items-center gap-2.5 bg-primary px-6 text-base font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-85"
              >
                {dict.projectDetail.visit}
                <External width={16} height={16} />
              </a>
            ) : (
              <p className="font-mono text-xs tracking-wider text-muted uppercase">{dict.projectDetail.internal}</p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:py-20 lg:grid-cols-12">
        <section aria-labelledby="stack-title" className="self-start border-t-2 border-rule pt-4 lg:col-span-4">
          <h2 id="stack-title" className="font-narrow text-sm font-bold tracking-wider text-muted uppercase">
            {dict.projectDetail.stack}
          </h2>
          <ul className="mt-2">
            {project.stack.map((tech) => (
              <li key={tech} className="border-b border-border py-2.5 font-mono text-sm font-semibold">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <div className="lg:col-span-8">
          {details.map((detail, i) => (
            <section
              key={detail.label}
              aria-labelledby={`d-${i}`}
              className="grid gap-x-8 gap-y-2 border-t-2 border-rule py-5 sm:grid-cols-[9rem_1fr]"
            >
              <h2 id={`d-${i}`} className="font-condensed text-xl font-extrabold uppercase">
                {detail.label}
              </h2>
              <p className="max-w-[65ch] leading-relaxed text-pretty text-muted">{detail.value}</p>
            </section>
          ))}
        </div>
      </div>

      <section aria-labelledby="others-title" className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <h2
            id="others-title"
            className="font-condensed border-t-[3px] border-rule pt-4 text-4xl font-extrabold uppercase"
          >
            {dict.projectDetail.otherProjects}
          </h2>
          <ul className="mt-6 border-t-2 border-rule">
            {others.map((other) => (
              <li key={other.slug}>
                <ProjectRow project={other} locale={locale} dict={dict} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}
