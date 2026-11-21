'use client'

import { useState, useSyncExternalStore } from 'react'
import { projects, categories } from '@/data/projects'
import { norm } from '@/lib/stack'
import ProjectRow from '@/components/project-row'
import Section from '@/components/section'
import { Close } from '@/components/icons'

// Filter teknologi datang dari indeks Keahlian lewat ?tech=… (navigasi penuh).
const subscribe = (cb) => {
  window.addEventListener('popstate', cb)
  return () => window.removeEventListener('popstate', cb)
}
const readTech = () => new URLSearchParams(window.location.search).get('tech') ?? ''

export default function Projects({ locale, dict }) {
  const [active, setActive] = useState('all')
  const tech = useSyncExternalStore(subscribe, readTech, () => '')
  const techLabel = tech && projects.flatMap((p) => p.stack).find((s) => norm(s) === tech)

  const shown = projects.filter(
    (p) =>
      (active === 'all' || p.category === active) && (!techLabel || p.stack.some((s) => norm(s) === tech))
  )
  const count = (shown.length === 1 ? dict.projects.countOne : dict.projects.countOther).replace('{n}', shown.length)

  return (
    <Section id="projects" title={dict.projects.title} subtitle={dict.projects.subtitle}>
      {/* Tab sektor */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div role="group" aria-label={dict.projects.filterLabel} className="flex flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`font-narrow -mr-px -mb-px h-10 border border-rule px-4 text-sm font-bold tracking-wide uppercase transition-colors ${
                active === category ? 'bg-primary text-primary-foreground' : 'hover:bg-surface'
              }`}
            >
              {dict.projects.filters[category]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {techLabel && (
            <a
              href={`/${locale}#projects`}
              aria-label={dict.skills.clearFilter.replace('{tech}', techLabel)}
              className="font-narrow inline-flex h-8 items-center gap-2 bg-gain px-3 text-xs font-bold tracking-wider text-background uppercase transition-opacity hover:opacity-85"
            >
              {techLabel}
              <Close width={13} height={13} />
            </a>
          )}
          <p aria-live="polite" className="font-narrow text-xs font-bold tracking-wider text-muted uppercase">
            {count}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t-2 border-rule">
        <div
          aria-hidden
          className="font-narrow hidden grid-cols-[5rem_minmax(0,1fr)_7rem_11.5rem_6.5rem] gap-x-6 border-b border-rule px-3 py-2 text-[11px] font-bold tracking-wider text-muted uppercase lg:grid"
        >
          <span>{dict.projects.columns.code}</span>
          <span>{dict.projects.columns.name}</span>
          <span>{dict.projects.columns.sector}</span>
          <span className="text-right">{dict.projects.columns.figure}</span>
          <span />
        </div>

        {shown.length === 0 ? (
          <p className="py-10 text-muted">{dict.projects.empty}</p>
        ) : (
          <ul>
            {shown.map((project) => (
              <li key={project.slug}>
                <ProjectRow project={project} locale={locale} dict={dict} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
