'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from '@/components/icons'

export default function ThemeToggle({ label, className = '' }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground ${className}`}
    >
      {/* Kedua ikon dirender; CSS yang memilih. Menghindari mismatch hidrasi
          tanpa perlu state "mounted" dan tanpa kedip ikon saat load. */}
      <Sun width={18} height={18} className="dark:hidden" />
      <Moon width={18} height={18} className="hidden dark:block" />
    </button>
  )
}
