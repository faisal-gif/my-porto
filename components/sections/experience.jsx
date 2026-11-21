import Section from '@/components/section'

/** Riwayat sebagai buku besar: periode | jabatan, perusahaan, catatan | angka. */
export default function Experience({ dict }) {
  return (
    <Section id="experience" title={dict.experience.title} subtitle={dict.experience.subtitle} alt>
      <ol className="border-t-2 border-rule">
        {dict.experience.items.map((job) => (
          <li
            key={job.company}
            className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-3 border-b border-border py-7 lg:grid-cols-[10rem_minmax(0,1fr)_11rem]"
          >
            <p
              className={`col-span-2 flex items-start gap-2 font-mono text-xs leading-relaxed font-semibold tracking-wider uppercase lg:col-span-1 ${
                job.current ? 'text-gain' : 'text-muted'
              }`}
            >
              {job.current && <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-gain" />}
              {job.period}
            </p>

            <div className="min-w-0">
              <h3 className="font-condensed text-2xl leading-tight font-extrabold uppercase sm:text-3xl">{job.role}</h3>
              <p className="mt-1 font-semibold text-pretty">{job.company}</p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point, j) => (
                  <li key={j} className="flex max-w-[70ch] gap-3 leading-relaxed text-pretty text-muted">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-rule" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <p className="figures font-condensed row-start-2 text-right text-2xl leading-none font-black text-figure sm:text-3xl lg:row-start-auto">
              {job.figure}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
