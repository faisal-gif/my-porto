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
      className={`inline-flex h-9 items-center justify-center border border-rule px-2.5 font-mono text-xs font-semibold tracking-wide text-foreground uppercase transition-colors hover:bg-surface ${className}`}
    >
      {next}
    </Link>
  )
}
