import Link from 'next/link'
import { t } from '@/lib/i18n'
import { External, ArrowRight } from '@/components/icons'

export default function ProjectCard({ project, locale, dict }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
      <h3 className="text-lg font-semibold">
        <Link href={`/${locale}/projects/${project.slug}`} className="hover:text-accent">
          {project.name}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t(project.impact, locale)}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {dict.projects.detail}
          <ArrowRight width={14} height={14} />
        </Link>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface"
          >
            {dict.projects.visit}
            <External width={14} height={14} />
          </a>
        ) : (
          <span className="text-xs text-muted">{dict.projects.internal}</span>
        )}
      </div>
    </article>
  )
}
