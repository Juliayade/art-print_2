import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''

  // Détection TikTok (plusieurs variantes)
  const isTikTok =
    userAgent.includes('TikTok') ||
    userAgent.includes('ByteDance') ||
    userAgent.includes('TTWebView')

  if (isTikTok) {
    return NextResponse.redirect('https://art-print2.vercel.app')
  }

  return NextResponse.next()
}

// Important : appliquer le middleware à tout le site
export const config = {
  matcher: '/:path*',
}
