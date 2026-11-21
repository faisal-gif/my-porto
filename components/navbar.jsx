'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { site } from '@/data/site'
import { Menu, Close, Download } from '@/components/icons'
import ThemeToggle from '@/components/theme-toggle'
import LangToggle from '@/components/lang-toggle'

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar({ locale, dict }) {
  const [open, setOpen] = useState(false)

  // Kunci scroll badan halaman selama menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = SECTIONS.map((id) => ({ id, href: `/${locale}#${id}`, label: dict.nav[id] }))

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5" aria-label={dict.nav.about}>
        <Link
          href={`/${locale}`}
          className="font-condensed text-2xl font-black tracking-tight whitespace-nowrap uppercase"
        >
          Faisal<span className="text-gain">.</span>
        </Link>

        <ul className="hidden h-full items-stretch md:flex">
          {links.map((link) => (
            <li key={link.id} className="flex">
              <Link
                href={link.href}
                className="font-narrow flex items-center border-l border-border px-4 text-sm font-semibold tracking-wide text-muted uppercase transition-colors last:border-r hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle locale={locale} label={dict.nav.switchLang} />
          <ThemeToggle label={dict.nav.toggleTheme} />
          <a
            href={site.cv}
            download
            aria-label={dict.nav.downloadCv}
            className="font-narrow inline-flex h-9 items-center gap-2 bg-primary px-3 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-85 sm:px-3.5"
          >
            <Download width={16} height={16} />
            <span aria-hidden className="sm:hidden">CV</span>
            <span aria-hidden className="hidden sm:inline">{dict.nav.downloadCv}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex h-9 w-9 items-center justify-center border border-rule text-foreground transition-colors hover:bg-surface md:hidden"
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-3.5rem)] border-t border-rule bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {links.map((link) => (
              <li key={link.id} className="border-b border-border">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-condensed block py-4 text-3xl font-extrabold uppercase transition-colors hover:text-gain"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
