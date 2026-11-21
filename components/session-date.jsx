'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * Tanggal sesi di strip status. Server merender kosong; klien mengisi tanggal
 * hari ini, bukan tanggal saat halaman statis di-build.
 */
export default function SessionDate({ locale }) {
  const date = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date()),
    () => ''
  )

  return <time className="figures">{date}</time>
}
