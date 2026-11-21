import Section from '@/components/section'
import { projects } from '@/data/projects'

// Nama teknologi di data skill dan data proyek tidak selalu identik
// ("React.js" vs "React", "AWS S3" vs "AWS"); bandingkan bentuk dasarnya.
const norm = (name) => name.toLowerCase().replace(/\.js$/, '').replace(/[^a-z0-9]/g, '')

/** Jumlah listing yang memakai satu teknologi. */
const usage = (item) => projects.filter((p) => p.stack.some((tech) => norm(tech) === norm(item))).length

/** Indeks sektor: satu baris per kelompok, tiap teknologi membawa jumlah listing-nya. */
export default function Skills({ dict }) {
  return (
    <Section id="skills" title={dict.skills.title} subtitle={dict.skills.subtitle}>
      <div className="border-t-2 border-rule">
        {dict.skills.groups.map((group) => {
          const listed = projects.filter((p) =>
            p.stack.some((tech) => group.items.some((item) => norm(tech) === norm(item)))
          ).length

          return (
            <div
              key={group.name}
              className="grid gap-x-8 gap-y-2 border-b border-border py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline"
            >
              <div className="flex items-baseline justify-between gap-4 sm:block">
                <h3 className="font-narrow text-sm font-bold tracking-wider uppercase">{group.name}</h3>
                {listed > 0 && (
                  <p className="font-narrow mt-1 text-xs font-semibold tracking-wider text-muted uppercase">
                    {dict.skills.usedIn.replace('{n}', listed)}
                  </p>
                )}
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg leading-snug font-semibold sm:text-xl">
                {group.items.map((item) => {
                  const n = usage(item)
                  return (
                    <li key={item} className="whitespace-nowrap">
                      {item}
                      {n > 0 && (
                        <sup
                          className="figures ml-1 font-mono text-[11px] font-bold text-gain"
                          title={dict.skills.usedIn.replace('{n}', n)}
                        >
                          {n}
                        </sup>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
