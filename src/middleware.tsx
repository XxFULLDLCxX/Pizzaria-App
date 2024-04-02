import { NextRequest, NextResponse } from 'next/server';
import { authService } from './modules/auth/services/auth-service';

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

export const publicPaths = ['/', '/auth/sign-in', '/auth/sign-up'];

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  console.log('ROUTE: ', pathname);
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  const session = await authService.isSessionValid();
  if (!session) {
    const isAPIRoute = pathname.startsWith('/api');
    if (isAPIRoute) {
      return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }
  return NextResponse.next();
}
