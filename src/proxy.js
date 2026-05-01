import { NextResponse } from 'next/server';

export function proxy(request) {
  // সেশন টোকেন চেক করা (Better-Auth এর কুকি নাম নিশ্চিত হয়ে নিন)
  const session = request.cookies.get("better-auth.session_token") || 
                  request.cookies.get("better-auth.session-token") ||
                  request.cookies.get("__secure-next-auth.session-token");

  const { pathname } = request.nextUrl;

  // যদি ইউজার লগইন না থাকে এবং /courses এ যাওয়ার চেষ্টা করে
  if (pathname.startsWith('/courses') && !session) {
    // লগইন পেজে রিডাইরেক্ট করবে
    const url = new URL('/login', request.url);
    
    // ঐচ্ছিক: ইউজার লগইন করার পর যাতে আবার এই কোর্সে ফিরে আসতে পারে, 
    // তাই callback URL যোগ করা যায়
    url.searchParams.set('callbackUrl', pathname);
    
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*'], // যে যে রাউট প্রটেক্ট করতে চান
};