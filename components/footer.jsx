import Link from 'next/link'
import { site } from '@/data/site'
import { ArrowUp } from '@/components/icons'

export default function Footer({ locale, dict }) {
  return (
    <footer className="bg-tape text-tape-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-condensed text-3xl font-black uppercase">{site.name}</p>
          <p className="mt-2 font-mono text-xs opacity-80">
            © {new Date().getFullYear()} · {dict.footer.rights}
          </p>
          <p className="mt-1 font-mono text-xs opacity-80">{dict.footer.builtWith}</p>
        </div>

        <Link
          href={`/${locale}#top`}
          className="font-narrow inline-flex h-10 items-center gap-2 self-start border border-current px-4 text-sm font-bold tracking-wide uppercase transition-opacity hover:opacity-80 sm:self-auto"
        >
          <ArrowUp width={16} height={16} />
          {dict.nav.backToTop}
        </Link>
      </div>
    </footer>
  )
}
