import { NextResponse } from 'next/server';


export function proxy(request) {

  const session = request.cookies.get("better-auth.session_token") || 
                  request.cookies.get("better-auth.session-token");

  const { pathname } = request.nextUrl;

 
  if (pathname.startsWith('/courses') && !session) {
  
    const loginUrl = new URL('/login', request.url);
    
    
    loginUrl.searchParams.set('callbackUrl', pathname);
    
    return NextResponse.redirect(loginUrl);
  }


  return NextResponse.next();
}


export const config = {
  matcher: ['/courses/:path*'],
};