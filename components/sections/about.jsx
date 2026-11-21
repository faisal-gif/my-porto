import Section from '@/components/section'

export default function About({ dict }) {
  return (
    <Section id="about" title={dict.about.title} alt>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7">
          {dict.about.body.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'text-xl leading-snug font-medium text-pretty sm:text-2xl'
                  : 'max-w-[65ch] leading-relaxed text-pretty text-muted'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Ikhtisar emiten: tabel fakta, bukan kartu statistik */}
        <dl className="self-start border-t-2 border-rule lg:col-span-5">
          {dict.about.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline justify-between gap-6 border-b border-border py-4">
              <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="figures font-condensed shrink-0 text-4xl leading-none font-black text-figure">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
