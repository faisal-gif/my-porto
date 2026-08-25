import Reveal from '@/components/reveal'

/** Pembungkus seragam untuk semua section: container, heading, dan scroll-reveal. */
export default function Section({ id, title, subtitle, alt = false, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 border-b border-border ${alt ? 'bg-surface' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal>
          <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {subtitle && <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
