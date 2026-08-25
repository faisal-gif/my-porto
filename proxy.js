import { NextResponse } from 'next/server'

// Root layout hidup di app/[locale], jadi "/" tidak punya halaman sendiri.
// Satu-satunya tugas proxy ini: antar pengunjung "/" ke locale default.
export function proxy(request) {
  return NextResponse.redirect(new URL('/id', request.url))
}

export const config = { matcher: '/' }
