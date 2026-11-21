import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-28">
      <p className="font-mono text-sm font-bold tracking-wider text-gain">404 · ▼ NOT LISTED</p>
      <h1 className="font-condensed mt-3 text-6xl leading-none font-black uppercase">Halaman tidak ditemukan</h1>
      <p className="mt-3 text-muted">Page not found.</p>
      <Link
        href="/id"
        className="font-narrow mt-8 inline-flex h-12 items-center bg-primary px-6 text-base font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-85"
      >
        Beranda / Home
      </Link>
    </div>
  )
}
