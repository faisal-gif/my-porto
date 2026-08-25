import Section from '@/components/section'
import Reveal from '@/components/reveal'

export default function Education({ dict }) {
  return (
    <Section id="education" title={dict.education.title} alt>
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal className="rounded-lg border border-border bg-card p-6">
          <p className="font-mono text-xs text-muted">{dict.education.period}</p>
          <h3 className="mt-1 text-lg font-semibold">{dict.education.school}</h3>
          <p className="text-muted">{dict.education.degree}</p>
          <p className="mt-3 inline-block rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
            {dict.education.gpa}
          </p>
        </Reveal>

        <Reveal delay={80} className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">
            {dict.education.highlightsTitle}
          </h3>
          <ul className="mt-3 space-y-2">
            {dict.education.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
