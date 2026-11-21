import Section from '@/components/section'
import { projects } from '@/data/projects'
import { norm, listingsUsing } from '@/lib/stack'

/**
 * Indeks sektor: satu baris per kelompok. Teknologi yang dipakai listing
 * membawa jumlahnya dan menaut ke tabel proyek yang tersaring teknologi itu.
 */
export default function Skills({ locale, dict }) {
  const { skills } = dict

  return (
    <Section id="skills" title={skills.title} subtitle={skills.subtitle}>
      <div className="border-t-2 border-rule">
        {skills.groups.map((group) => {
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
                    {skills.usedIn.replace('{n}', listed)}
                  </p>
                )}
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg leading-snug font-semibold sm:text-xl">
                {group.items.map((item) => {
                  const n = listingsUsing(item).length
                  return (
                    <li key={item} className="whitespace-nowrap">
                      {n > 0 ? (
                        // Navigasi penuh (bukan <Link>) agar tabel proyek membaca ?tech saat dimuat.
                        <a
                          href={`/${locale}?tech=${encodeURIComponent(norm(item))}#projects`}
                          title={skills.filterBy.replace('{tech}', item)}
                          className="underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-gain hover:decoration-current"
                        >
                          {item}
                          <sup className="figures ml-1 font-mono text-[11px] font-bold text-gain">{n}</sup>
                        </a>
                      ) : (
                        item
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
