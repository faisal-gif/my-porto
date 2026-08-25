import { ImageResponse } from 'next/og'
import { LOCALES, getDict } from '@/lib/i18n'
import { site } from '@/data/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = site.name

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function Image({ params }) {
  const { locale } = await params
  const dict = getDict(locale)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0b1120',
          color: '#e2e8f0',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#93c5fd' }}>{site.role[locale] ?? site.role.id}</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 12, lineHeight: 1.1 }}>{site.name}</div>
        <div style={{ fontSize: 30, color: '#94a3b8', marginTop: 28, maxWidth: 900, lineHeight: 1.4 }}>
          {dict.hero.tagline}
        </div>
      </div>
    ),
    size
  )
}
