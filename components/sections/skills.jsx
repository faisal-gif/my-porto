import Section from '@/components/section'

/** Indeks sektor: satu baris per kelompok keahlian, dibaca seperti tabel pasar. */
export default function Skills({ dict }) {
  return (
    <Section id="skills" title={dict.skills.title} subtitle={dict.skills.subtitle}>
      <div className="border-t-2 border-rule">
        {dict.skills.groups.map((group) => (
          <div
            key={group.name}
            className="grid gap-x-8 gap-y-2 border-b border-border py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline"
          >
            <h3 className="font-narrow text-sm font-bold tracking-wider text-muted uppercase">{group.name}</h3>
            <ul className="flex flex-wrap gap-x-1 gap-y-1 text-lg leading-snug font-semibold sm:text-xl">
              {group.items.map((item, i) => (
                <li key={item} className="whitespace-nowrap">
                  {item}
                  {i < group.items.length - 1 && (
                    <span aria-hidden className="px-2 font-normal text-border">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
