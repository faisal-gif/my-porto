'use client'

import { useState } from 'react'
import { projects, categories } from '@/data/projects'
import ProjectCard from '@/components/project-card'
import Reveal from '@/components/reveal'

export default function Projects({ locale, dict }) {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <h2 id="projects-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {dict.projects.title}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">{dict.projects.subtitle}</p>
        </Reveal>

        <div
          role="group"
          aria-label={dict.projects.filterLabel}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                active === category
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted hover:bg-surface hover:text-foreground'
              }`}
            >
              {dict.projects.filters[category]}
            </button>
          ))}
          <span aria-live="polite" className="ml-1 text-sm text-muted">
            {(shown.length === 1 ? dict.projects.countOne : dict.projects.countOther).replace(
              '{n}',
              shown.length
            )}
          </span>
        </div>

        {shown.length === 0 ? (
          <p className="mt-10 text-muted">{dict.projects.empty}</p>
        ) : (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} locale={locale} dict={dict} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
