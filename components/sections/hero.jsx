import Link from 'next/link'
import { site, socials } from '@/data/site'
import { socialIcons, ArrowRight, Download } from '@/components/icons'
import Reveal from '@/components/reveal'

const MAIN_STACK = ['Laravel', 'React', 'Next.js', 'Nest.js', 'MySQL', 'AWS']

export default function Hero({ locale, dict }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            {dict.hero.available}
          </p>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-6 text-muted">{dict.hero.greeting}</p>
          <h1 id="hero-title" className="mt-1 text-4xl font-bold tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{site.role[locale]}</p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{dict.hero.tagline}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {dict.hero.ctaProjects}
              <ArrowRight width={16} height={16} />
            </Link>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              <Download width={16} height={16} />
              {dict.hero.ctaCv}
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <ul aria-label={dict.contact.channelsLabel} className="mt-8 flex items-center gap-2">
            {socials.map(({ key, label, href }) => {
              const Icon = socialIcons[key]
              return (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(key === 'email' ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {MAIN_STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
