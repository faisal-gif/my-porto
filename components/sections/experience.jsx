import Section from '@/components/section'

/** Riwayat sebagai buku besar: periode | jabatan & perusahaan | catatan. */
export default function Experience({ dict }) {
  return (
    <Section id="experience" title={dict.experience.title} subtitle={dict.experience.subtitle} alt>
      <ol className="border-t-2 border-rule">
        {dict.experience.items.map((job) => (
          <li
            key={job.company}
            className="grid gap-x-8 gap-y-3 border-b border-border py-7 lg:grid-cols-[11rem_18rem_1fr]"
          >
            <p
              className={`flex items-start gap-2 font-mono text-xs leading-relaxed font-semibold tracking-wider uppercase ${
                job.current ? 'text-gain' : 'text-muted'
              }`}
            >
              {job.current && <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-gain" />}
              {job.period}
            </p>
            <div>
              <h3 className="font-condensed text-2xl leading-tight font-extrabold uppercase">{job.role}</h3>
              <p className="mt-1 font-semibold text-pretty">{job.company}</p>
            </div>
            <ul className="space-y-2.5">
              {job.points.map((point, j) => (
                <li key={j} className="flex gap-3 leading-relaxed text-pretty text-muted">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-rule" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
