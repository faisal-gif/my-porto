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

        {/* Profil emiten: fakta tekstual. Angka besar hanya ada di papan kutipan. */}
        <dl className="self-start border-t-2 border-rule lg:col-span-5">
          {dict.about.stats.map((stat) => (
            <div key={stat.label} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-border py-3.5">
              <dt className="font-narrow text-xs font-bold tracking-wider text-muted uppercase">{stat.label}</dt>
              <dd className="font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
