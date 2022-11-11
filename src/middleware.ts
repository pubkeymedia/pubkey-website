import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.cookies.has('skipSplash')) {
    return NextResponse.redirect(new URL('/home', req.url));
  }
}

export const config = { matcher: '/' };
