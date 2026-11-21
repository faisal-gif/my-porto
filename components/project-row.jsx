import Link from 'next/link'
import { t } from '@/lib/i18n'
import { External, ArrowRight, TriangleUp } from '@/components/icons'

/**
 * Satu listing di tabel proyek. Seluruh baris bisa diklik ke lembar fakta
 * (stretched link pada nama); tautan situs berada di atasnya.
 */
export default function ProjectRow({ project, locale, dict, compact = false }) {
  const href = `/${locale}/projects/${project.slug}`

  return (
    <article
      className={`group relative grid gap-x-6 gap-y-2 border-b border-border py-5 transition-colors hover:bg-surface sm:px-3 ${
        compact
          ? 'grid-cols-[4.5rem_1fr]'
          : 'grid-cols-[4.5rem_1fr] lg:grid-cols-[5rem_minmax(0,1fr)_7rem_11.5rem_6.5rem]'
      }`}
    >
      <p className="font-mono text-sm font-bold tracking-wider text-figure">{project.code}</p>

      <div className="min-w-0">
        <h3 className="font-condensed text-2xl leading-tight font-extrabold uppercase sm:text-3xl">
          <Link href={href} className="after:absolute after:inset-0 group-hover:underline">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 max-w-[65ch] text-sm leading-relaxed text-pretty text-muted">
          {t(project.impact, locale)}
        </p>
        <p className="font-narrow mt-2 text-xs font-semibold tracking-wide text-muted">{project.stack.join(' · ')}</p>
      </div>

      {!compact && (
        <p className="col-start-2 font-narrow text-xs font-bold tracking-wider text-muted uppercase lg:col-start-auto lg:pt-2">
          {dict.projects.filters[project.category]}
        </p>
      )}

      <p
        className={`figures font-narrow col-start-2 text-sm font-bold ${project.gain ? 'text-gain' : 'text-muted'} ${
          compact ? '' : 'lg:col-start-auto lg:pt-2 lg:text-right'
        }`}
      >
        {project.gain && <TriangleUp width={10} height={10} className="mr-1.5 inline-block" />}
        {t(project.figure, locale)}
      </p>

      <div className={`col-start-2 flex items-center gap-4 ${compact ? '' : 'lg:col-start-auto lg:justify-end lg:pt-1.5'}`}>
        <span aria-hidden className="inline-flex items-center gap-1 font-narrow text-xs font-bold tracking-wider uppercase">
          {dict.projects.detail}
          <ArrowRight width={13} height={13} />
        </span>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${dict.projects.visit} ${project.name}`}
            title={`${dict.projects.visit} ${project.name}`}
            className="relative z-10 inline-flex h-8 w-8 items-center justify-center border border-rule transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <External width={14} height={14} />
          </a>
        ) : (
          <span className="font-narrow text-[11px] font-semibold tracking-wider text-muted uppercase">{dict.projects.internal}</span>
        )}
      </div>
    </article>
  )
}
