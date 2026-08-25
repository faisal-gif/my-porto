import Section from '@/components/section'
import Reveal from '@/components/reveal'
import { site, socials } from '@/data/site'
import { socialIcons, Mail, Download, External } from '@/components/icons'

export default function Contact({ dict }) {
  return (
    <Section id="contact" title={dict.contact.title} subtitle={dict.contact.subtitle}>
      <Reveal>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail width={16} height={16} />
            {dict.contact.cta}
          </a>
          <a
            href={site.cv}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            <Download width={16} height={16} />
            {dict.contact.downloadCv}
          </a>
        </div>
      </Reveal>

      <ul aria-label={dict.contact.channelsLabel} className="mt-8 grid gap-3 sm:grid-cols-2">
        {socials.map(({ key, label, href, value }, i) => {
          const Icon = socialIcons[key]
          const isEmail = key === 'email'
          return (
            <Reveal key={key} as="li" delay={i * 60}>
              <a
                href={href}
                {...(isEmail ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon width={18} height={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate text-sm text-muted">{value}</span>
                </span>
                {!isEmail && <External width={14} height={14} className="ml-auto shrink-0 text-muted" />}
              </a>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
