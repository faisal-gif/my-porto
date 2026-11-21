import { Archivo, JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

import { LOCALES, getDict, isLocale } from '@/lib/i18n'
import { site } from '@/data/site'
import ThemeProvider from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Archivo variabel dengan sumbu lebar (wdth 62–125): satu keluarga untuk teks
// biasa sekaligus judul kondensasi. JetBrains Mono hanya untuk kode & angka.
const archivo = Archivo({ variable: '--font-archivo', subsets: ['latin'], axes: ['wdth'], display: 'swap' })
const jetbrains = JetBrains_Mono({ variable: '--font-jetbrains', subsets: ['latin'], display: 'swap' })

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDict(locale)

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      url: `/${locale}`,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  }
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDict(locale)

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${archivo.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            {dict.nav.skipToContent}
          </a>
          <Navbar locale={locale} dict={dict} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  )
}
