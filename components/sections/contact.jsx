import Section from '@/components/section'
import { site, socials } from '@/data/site'
import { socialIcons, Mail, Download, ArrowRight } from '@/components/icons'

/** Meja order: email sebagai order utama, kanal lain sebagai slip bergaris. */
export default function Contact({ dict }) {
  const { contact } = dict
  const channels = socials.filter(({ key }) => key !== 'email')

  return (
    <Section id="contact" title={contact.title} subtitle={contact.subtitle}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <a
            href={`mailto:${site.email}`}
            className="group block border-y-2 border-rule py-6 transition-colors hover:bg-surface"
          >
            <span className="font-narrow flex items-center gap-2 text-sm font-bold tracking-wider text-muted uppercase">
              <Mail width={16} height={16} />
              {contact.cta}
            </span>
            <span className="font-condensed mt-2 flex items-center justify-between gap-4 text-[clamp(1.75rem,4.5vw,3rem)] leading-none font-black break-all text-figure">
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
            {contact.downloadCv}
          </a>
        </div>

        {/* Slip order: kanal | alamat | aksi */}
        <table className="self-start lg:col-span-6" aria-label={contact.channelsLabel}>
          <thead>
            <tr className="font-narrow border-y-2 border-rule text-left text-[11px] font-bold tracking-wider text-muted uppercase">
              <th scope="col" className="py-2 pr-4">
                {contact.slip.channel}
              </th>
              <th scope="col" className="hidden py-2 pr-4 sm:table-cell">
                {contact.slip.detail}
              </th>
              <th scope="col" className="py-2 text-right">
                {contact.slip.action}
              </th>
            </tr>
          </thead>
          <tbody>
            {channels.map(({ key, label, href, value }) => {
              const Icon = socialIcons[key]
              return (
                <tr key={key} className="border-b border-border">
                  <th scope="row" className="py-4 pr-4 text-left">
                    <span className="flex items-center gap-3">
                      <Icon width={20} height={20} className="shrink-0" />
                      <span className="font-condensed text-2xl font-extrabold uppercase">{label}</span>
                    </span>
                  </th>
                  <td className="hidden py-4 pr-4 text-sm text-muted sm:table-cell">{value}</td>
                  <td className="py-4 text-right">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${contact.actions[key]} — ${label}`}
                      className="font-narrow inline-flex h-10 items-center gap-2 border border-rule px-3 text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {contact.actions[key]}
                      <ArrowRight width={15} height={15} />
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
