import Link from 'next/link'
import { site, socials } from '@/data/site'
import { projects, getProject } from '@/data/projects'
import { t } from '@/lib/i18n'
import { socialIcons, ArrowRight, Download } from '@/components/icons'

/** Satu baris pita: KODE angka · nama proyek. */
function TapeItem({ project, locale }) {
  return (
    <li className="flex shrink-0 items-baseline gap-2.5 px-6">
      <span className="font-mono text-sm font-bold text-tape-figure">{project.code}</span>
      <span className="font-mono text-sm">{t(project.figure, locale)}</span>
      <span className="font-narrow text-sm opacity-80">{project.name}</span>
      <span aria-hidden className="pl-4 text-tape-figure">
        ▲
      </span>
    </li>
  )
}

export default function Hero({ locale, dict }) {
  const { hero } = dict

  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-rule">
      {/* Strip status pasar */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 font-mono text-xs uppercase">
          <p className="flex items-center gap-2 font-semibold text-gain">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-gain" />
            {hero.available}
          </p>
          <p className="text-muted">
            {site.role[locale]} · {site.location[locale]}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:pt-8 sm:pb-10">
        <p className="text-muted">{hero.greeting}</p>
        <h1
          id="hero-title"
          className="font-condensed mt-1 text-[clamp(3.25rem,10.5vw,6rem)] leading-[0.88] font-black tracking-[-0.02em] text-balance uppercase"
        >
          {site.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{hero.tagline}</p>

        {/* Papan kutipan dampak */}
        <table className="mt-8 w-full border-collapse" aria-label={hero.boardLabel}>
          <thead className="sr-only sm:not-sr-only">
            <tr className="border-y-2 border-rule font-mono text-[11px] tracking-wider text-muted uppercase">
              <th scope="col" className="py-2 pr-4 text-left font-semibold">
                {hero.columns.code}
              </th>
              <th scope="col" className="py-2 pr-4 text-right font-semibold">
                {hero.columns.value}
              </th>
              <th scope="col" className="py-2 pr-4 text-left font-semibold">
                {hero.columns.change}
              </th>
              <th scope="col" className="hidden py-2 pr-4 text-left font-semibold lg:table-cell">
                {hero.columns.note}
              </th>
              <th scope="col" className="py-2 text-right font-semibold">
                {hero.columns.source}
              </th>
            </tr>
          </thead>
          <tbody>
            {hero.quotes.map((quote, i) => {
              const source = getProject(quote.ref)
              const lead = i === 0
              return (
                <tr
                  key={quote.code}
                  className="quote-tick grid grid-cols-[auto_1fr] items-baseline gap-x-4 border-b border-border py-4 sm:table-row sm:py-0"
                  style={{ animationDelay: `${300 + i * 160}ms` }}
                >
                  <th
                    scope="row"
                    className="order-1 text-left font-mono text-sm font-bold tracking-wider sm:py-2.5 sm:pr-4 sm:align-baseline"
                  >
                    {quote.code}
                  </th>
                  <td
                    className={`figures font-condensed order-3 col-span-2 leading-none font-black tracking-[-0.01em] text-figure sm:py-2.5 sm:pr-6 sm:text-right sm:align-baseline ${
                      lead ? 'text-[clamp(2.75rem,8vw,4.75rem)]' : 'text-[clamp(2.25rem,6vw,3.5rem)]'
                    }`}
                  >
                    {quote.value}
                  </td>
                  <td className="order-2 text-right font-mono text-sm font-semibold text-gain sm:py-2.5 sm:pr-4 sm:text-left sm:align-baseline">
                    <span aria-hidden>▲ </span>
                    {quote.change}
                  </td>
                  <td className="order-4 col-span-2 mt-2 max-w-md text-sm leading-snug text-muted sm:hidden lg:table-cell lg:py-2.5 lg:pr-4 lg:align-baseline">
                    {quote.note}
                  </td>
                  <td className="order-5 col-span-2 mt-1 sm:py-2.5 sm:text-right sm:align-baseline">
                    {source && (
                      <Link
                        href={`/${locale}/projects/${source.slug}`}
                        className="font-mono text-xs font-semibold tracking-wider whitespace-nowrap text-muted uppercase underline hover:text-foreground"
                        aria-label={`${hero.columns.source}: ${source.name}`}
                      >
                        → {source.code}
                      </Link>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={site.cv}
            download
            className="font-narrow inline-flex h-12 items-center gap-2.5 bg-primary px-6 text-base font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-85"
          >
            <Download width={18} height={18} />
            {hero.ctaCv}
          </a>
          <Link
            href={`/${locale}#projects`}
            className="font-narrow inline-flex h-12 items-center gap-2.5 border-2 border-rule px-6 text-base font-bold tracking-wide uppercase transition-colors hover:bg-surface"
          >
            {hero.ctaProjects}
            <ArrowRight width={18} height={18} />
          </Link>
          <ul aria-label={dict.contact.channelsLabel} className="flex items-center gap-1 sm:ml-auto">
            {socials.map(({ key, label, href }) => {
              const Icon = socialIcons[key]
              return (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(key === 'email' ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
                    className="inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <Icon width={19} height={19} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Pita berjalan: produk di produksi */}
      <div className="tape overflow-hidden bg-tape py-3 text-tape-foreground" aria-label={hero.tapeLabel} role="region">
        <div className="tape-track flex w-max">
          <ul className="flex">
            {projects.map((project) => (
              <TapeItem key={project.slug} project={project} locale={locale} />
            ))}
          </ul>
          <ul className="tape-clone flex" aria-hidden>
            {projects.map((project) => (
              <TapeItem key={project.slug} project={project} locale={locale} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
