import Section from '@/components/section'

export default function Education({ dict }) {
  const { education } = dict

  return (
    <Section id="education" title={education.title} alt>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="border-t-2 border-rule pt-5 lg:col-span-5">
          <p className="font-mono text-xs font-semibold tracking-wider text-muted uppercase">{education.period}</p>
          <h3 className="font-condensed mt-2 text-3xl leading-tight font-extrabold uppercase">{education.school}</h3>
          <p className="mt-1 text-muted">{education.degree}</p>
          <p className="figures font-condensed mt-5 text-5xl leading-none font-black text-figure">{education.gpa}</p>
        </div>

        <div className="border-t-2 border-rule pt-5 lg:col-span-7">
          <h3 className="font-narrow text-sm font-bold tracking-wider text-muted uppercase">{education.highlightsTitle}</h3>
          <ul className="mt-3">
            {education.highlights.map((item) => (
              <li key={item} className="border-b border-border py-3.5 font-semibold text-pretty">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
