/**
 * Pembungkus seragam untuk semua section: satu halaman pasar koran keuangan.
 * Garis tebal di atas, judul kondensasi, lalu isi di dalam kolom bergaris.
 */
export default function Section({ id, title, subtitle, alt = false, aside, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-16 ${alt ? 'bg-surface' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-t-[3px] border-rule pt-4">
          <div className="max-w-2xl">
            <h2
              id={`${id}-title`}
              className="font-condensed text-4xl leading-[0.95] font-extrabold tracking-[-0.01em] uppercase sm:text-6xl"
            >
              {title}
            </h2>
            {subtitle && <p className="mt-3 text-pretty text-muted sm:text-lg">{subtitle}</p>}
          </div>
          {aside}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}
