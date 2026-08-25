import { content } from '@/data/content'

export const LOCALES = ['id', 'en']
export const DEFAULT_LOCALE = 'id'

export const isLocale = (locale) => LOCALES.includes(locale)

export const getDict = (locale) => content[isLocale(locale) ? locale : DEFAULT_LOCALE]

/** Ambil sisi bahasa dari field bertipe { id, en } di data proyek. */
export const t = (field, locale) => field?.[isLocale(locale) ? locale : DEFAULT_LOCALE] ?? ''

/** Tukar segmen locale pada path saat ini, mis. /en/projects/x -> /id/projects/x */
export const swapLocale = (pathname, next) => {
  const segments = pathname.split('/')
  if (isLocale(segments[1])) {
    segments[1] = next
    return segments.join('/')
  }
  return `/${next}${pathname === '/' ? '' : pathname}`
}
