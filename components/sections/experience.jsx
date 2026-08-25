import Section from '@/components/section'
import Reveal from '@/components/reveal'

export default function Experience({ dict }) {
  return (
    <Section id="experience" title={dict.experience.title} subtitle={dict.experience.subtitle} alt>
      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {dict.experience.items.map((job, i) => (
          <Reveal key={job.company} as="li" delay={i * 80} className="pb-10 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full ${
                job.current ? 'bg-accent' : 'bg-border'
              }`}
            />
            <p className="font-mono text-xs text-muted">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
            <p className="text-accent">{job.company}</p>
            <ul className="mt-3 space-y-2">
              {job.points.map((point, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
