import Section from '@/components/section'
import Reveal from '@/components/reveal'

export default function About({ dict }) {
  return (
    <Section id="about" title={dict.about.title} alt>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          {dict.about.body.map((paragraph, i) => (
            <Reveal key={i} as="p" delay={i * 60} className="leading-relaxed text-muted">
              {paragraph}
            </Reveal>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 lg:col-span-2">
          {dict.about.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              as="li"
              delay={i * 60}
              className="rounded-lg border border-border bg-card p-4"
            >
              <p className="text-2xl font-bold tracking-tight text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
