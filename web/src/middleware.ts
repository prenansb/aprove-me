import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { decode } from './lib/session'

const protectedRoutes = ['/dashboard', '/']
const publicRoutes = ['/login', '/']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = (await cookies()).get('session')?.value
  const session = decode(cookie)

  if (isProtectedRoute && !session?.sub) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  if (isPublicRoute && session?.sub && !req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
