import Section from '@/components/section'
import { site, socials } from '@/data/site'
import { socialIcons, Mail, Download, ArrowRight } from '@/components/icons'

export default function Contact({ dict }) {
  return (
    <Section id="contact" title={dict.contact.title} subtitle={dict.contact.subtitle}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <a
            href={`mailto:${site.email}`}
            className="group block border-y-2 border-rule py-6 transition-colors hover:bg-surface"
          >
            <span className="flex items-center gap-2 font-narrow text-sm font-bold tracking-wider text-muted uppercase">
              <Mail width={16} height={16} />
              {dict.contact.cta}
            </span>
            <span className="font-condensed mt-2 flex items-center justify-between gap-4 text-[clamp(1.75rem,5vw,3.25rem)] leading-none font-black break-all text-figure">
              {site.email}
              <ArrowRight width={32} height={32} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href={site.cv}
            download
            className="font-narrow mt-6 inline-flex h-12 items-center gap-2.5 bg-primary px-6 text-base font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-85"
          >
            <Download width={18} height={18} />
            {dict.contact.downloadCv}
          </a>
        </div>

        <ul aria-label={dict.contact.channelsLabel} className="self-start border-t-2 border-rule lg:col-span-5">
          {socials
            .filter(({ key }) => key !== 'email')
            .map(({ key, label, href }) => {
              const Icon = socialIcons[key]
              return (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-4 border-b border-border py-4 transition-colors hover:bg-surface sm:px-2"
                  >
                    <Icon width={20} height={20} className="shrink-0" />
                    <span className="font-condensed text-2xl font-extrabold uppercase">{label}</span>
                    <ArrowRight width={18} height={18} className="ml-auto shrink-0 text-muted" />
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </Section>
  )
}
