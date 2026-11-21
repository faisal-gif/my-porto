'use client'

import { useState } from 'react'
import { projects, categories } from '@/data/projects'
import ProjectRow from '@/components/project-row'
import Section from '@/components/section'

export default function Projects({ locale, dict }) {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? projects : projects.filter((p) => p.category === active)
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
        <p aria-live="polite" className="font-mono text-xs tracking-wider text-muted uppercase">
          {count}
        </p>
      </div>

      <div className="mt-6 border-t-2 border-rule">
        <div
          aria-hidden
          className="hidden grid-cols-[5rem_minmax(0,1fr)_7rem_11.5rem_6.5rem] gap-x-6 border-b border-rule px-3 py-2 font-mono text-[11px] font-semibold tracking-wider text-muted uppercase lg:grid"
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
