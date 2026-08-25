import Section from '@/components/section'
import Reveal from '@/components/reveal'

export default function Skills({ dict }) {
  return (
    <Section id="skills" title={dict.skills.title} subtitle={dict.skills.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.skills.groups.map((group, i) => (
          <Reveal
            key={group.name}
            delay={i * 50}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">{group.name}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
