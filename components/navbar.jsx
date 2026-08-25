'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { site } from '@/data/site'
import { Menu, Close, Download } from '@/components/icons'
import ThemeToggle from '@/components/theme-toggle'
import LangToggle from '@/components/lang-toggle'

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar({ locale, dict }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Kunci scroll badan halaman selama menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = SECTIONS.map((id) => ({ id, href: `/${locale}#${id}`, label: dict.nav[id] }))

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/85 backdrop-blur transition-all ${
        scrolled ? 'border-border py-2' : 'border-transparent py-3'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5" aria-label={dict.nav.about}>
        <Link href={`/${locale}`} className="font-semibold tracking-tight whitespace-nowrap">
          Faisal<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
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
            className="hidden items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Download width={16} height={16} />
            {dict.nav.downloadCv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground md:hidden"
          >
            {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-2 sm:hidden">
              <a
                href={site.cv}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground"
              >
                <Download width={16} height={16} />
                {dict.nav.downloadCv}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
