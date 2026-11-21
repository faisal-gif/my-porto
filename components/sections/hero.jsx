import Link from 'next/link'
import { site, socials } from '@/data/site'
import { projects, getProject } from '@/data/projects'
import { t } from '@/lib/i18n'
import { socialIcons, ArrowRight, Download, TriangleUp } from '@/components/icons'
import SessionDate from '@/components/session-date'

/** Satu listing di pita: tautan ke lembar faktanya. Salinan pita tidak bisa difokus. */
function TapeItem({ project, locale, clone = false }) {
  return (
    <li className="flex shrink-0 items-center">
      <Link
        href={`/${locale}/projects/${project.slug}`}
        tabIndex={clone ? -1 : undefined}
        className="flex items-baseline gap-2.5 px-6 py-3 hover:underline focus-visible:underline"
      >
        <span className="font-mono text-sm font-bold">{project.code}</span>
        <span className={`font-narrow text-sm font-semibold ${project.gain ? 'text-tape-figure' : ''}`}>
          {project.gain && <TriangleUp width={9} height={9} className="mr-1 inline-block align-baseline" />}
          {t(project.figure, locale)}
        </span>
        <span className="font-narrow text-sm opacity-75">{project.name}</span>
      </Link>
      <span aria-hidden className="h-4 w-px bg-current opacity-30" />
    </li>
  )
}

export default function Hero({ locale, dict }) {
  const { hero } = dict

  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-rule">
      {/* Strip status pasar: status, tanggal sesi */}
      <div className="border-b border-border">
        <div className="font-narrow mx-auto flex max-w-6xl items-center justify-between gap-x-6 px-5 py-2.5 text-xs font-bold tracking-wider uppercase">
          <p className="flex items-center gap-2 text-gain">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-gain" />
            {hero.available}
          </p>
          <p className="text-muted">
            {hero.session} <SessionDate locale={locale} />
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-6 pb-6 sm:pt-10 sm:pb-10">
        <h1
          id="hero-title"
          className="font-condensed text-[clamp(2.75rem,10.5vw,6rem)] leading-[0.88] font-black tracking-[-0.02em] text-balance uppercase"
        >
          {site.name}
        </h1>
        <p className="font-narrow mt-2 text-base font-bold tracking-wide uppercase sm:text-lg">
          {site.role[locale]} <span className="text-muted">· {site.location[locale]}</span>
        </p>
        <p className="mt-4 hidden max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:block">{hero.tagline}</p>

        {/* Papan kutipan dampak */}
        <table className="mt-5 w-full border-collapse sm:mt-8" aria-label={hero.boardLabel}>
          <thead className="sr-only sm:not-sr-only">
            <tr className="font-narrow border-y-2 border-rule text-[11px] font-bold tracking-wider text-muted uppercase">
              <th scope="col" className="py-2 pr-4 text-left">
                {hero.columns.code}
              </th>
              <th scope="col" className="py-2 pr-4 text-right">
                {hero.columns.value}
              </th>
              <th scope="col" className="py-2 pr-4 text-left">
                {hero.columns.change}
              </th>
              <th scope="col" className="hidden py-2 pr-4 text-left lg:table-cell">
                {hero.columns.note}
              </th>
              <th scope="col" className="py-2 text-right">
                {hero.columns.source}
              </th>
            </tr>
          </thead>
          <tbody className="border-t-2 border-rule sm:border-t-0">
            {hero.quotes.map((quote, i) => {
              const source = getProject(quote.ref)
              const lead = i === 0
              return (
                <tr
                  key={quote.code}
                  className="quote-tick grid grid-cols-[3.25rem_1fr_auto] items-baseline gap-x-3 border-b border-border py-2 sm:table-row sm:py-0"
                  style={{ animationDelay: `${300 + i * 160}ms` }}
                >
                  <th scope="row" className="text-left font-mono text-xs font-bold tracking-wider sm:py-2.5 sm:pr-4 sm:text-sm">
                    {quote.code}
                  </th>
                  <td
                    className={`figures font-condensed leading-none font-black tracking-[-0.01em] text-figure sm:py-2.5 sm:pr-6 sm:text-right ${
                      lead ? 'text-[clamp(2.25rem,8vw,4.75rem)]' : 'text-[clamp(1.75rem,6vw,3.5rem)]'
                    }`}
                  >
                    {quote.value}
                  </td>
                  <td className="font-narrow text-right text-xs font-bold text-gain sm:py-2.5 sm:pr-4 sm:text-left sm:text-sm">
                    <TriangleUp width={10} height={10} className="mr-1.5 inline-block" />
                    {quote.change}
                  </td>
                  <td className="hidden max-w-md text-sm leading-snug text-muted lg:table-cell lg:py-2.5 lg:pr-4">
                    {quote.note}
                  </td>
                  <td className="hidden sm:table-cell sm:py-2.5 sm:text-right">
                    {source && (
                      <Link
                        href={`/${locale}/projects/${source.slug}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider whitespace-nowrap text-muted uppercase underline hover:text-foreground"
                        aria-label={`${hero.columns.source}: ${source.name}`}
                      >
                        <ArrowRight width={13} height={13} />
                        {source.code}
                      </Link>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
          <a
            href={site.cv}
            download
            className="font-narrow inline-flex h-11 items-center gap-2.5 bg-primary px-5 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-85 sm:h-12 sm:px-6 sm:text-base"
          >
            <Download width={18} height={18} />
            {hero.ctaCv}
          </a>
          <Link
            href={`/${locale}#projects`}
            className="font-narrow inline-flex h-11 items-center gap-2.5 border-2 border-rule px-5 text-sm font-bold tracking-wide uppercase transition-colors hover:bg-surface sm:h-12 sm:px-6 sm:text-base"
          >
            {hero.ctaProjects}
            <ArrowRight width={18} height={18} />
          </Link>
          <ul aria-label={dict.contact.channelsLabel} className="hidden items-center gap-1 sm:ml-auto sm:flex">
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

      {/* Pita berjalan: tiap listing menuju lembar faktanya */}
      <div className="tape overflow-hidden bg-tape text-tape-foreground" aria-label={hero.tapeLabel} role="region">
        <div className="tape-track flex w-max">
          <ul className="flex">
            {projects.map((project) => (
              <TapeItem key={project.slug} project={project} locale={locale} />
            ))}
          </ul>
          <ul className="tape-clone flex" aria-hidden>
            {projects.map((project) => (
              <TapeItem key={project.slug} project={project} locale={locale} clone />
            ))}
          </ul>
        </div>
      </div>

      {/* Di layar kecil, tagline turun ke bawah pita agar papan muat satu layar */}
      <p className="mx-auto max-w-6xl px-5 py-6 leading-relaxed text-pretty text-muted sm:hidden">{hero.tagline}</p>
    </section>
  )
}
