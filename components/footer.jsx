import Link from 'next/link'
import { site, socials } from '@/data/site'
import { socialIcons, ArrowUp } from '@/components/icons'

export default function Footer({ locale, dict }) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted">
          <p className="font-medium text-foreground">{site.name}</p>
          <p>
            © {new Date().getFullYear()} · {dict.footer.rights}
          </p>
          <p className="mt-1">{dict.footer.builtWith}</p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ key, label, href }) => {
            const Icon = socialIcons[key]
            return (
              <a
                key={key}
                href={href}
                aria-label={label}
                title={label}
                {...(key === 'email' ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-background hover:text-foreground"
              >
                <Icon width={17} height={17} />
              </a>
            )
          })}
          <Link
            href={`/${locale}#top`}
            aria-label={dict.nav.backToTop}
            title={dict.nav.backToTop}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-background hover:text-foreground"
          >
            <ArrowUp width={17} height={17} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
