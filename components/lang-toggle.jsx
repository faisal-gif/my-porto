'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { swapLocale } from '@/lib/i18n'

export default function LangToggle({ locale, label, className = '' }) {
  const pathname = usePathname()
  const next = locale === 'id' ? 'en' : 'id'

  return (
    <Link
      href={swapLocale(pathname, next)}
      hrefLang={next}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 items-center justify-center rounded-md border border-border px-2.5 text-xs font-semibold tracking-wide text-muted uppercase transition-colors hover:bg-surface hover:text-foreground ${className}`}
    >
      {next}
    </Link>
  )
}
