import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-5 py-28">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-muted">Page not found.</p>
      <Link
        href="/id"
        className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Beranda / Home
      </Link>
    </div>
  )
}
