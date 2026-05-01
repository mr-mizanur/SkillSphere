import { NextResponse } from 'next/server';

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  // ১. যে রাউটগুলো প্রটেক্ট করতে চান তার লিস্ট
  const protectedRoutes = ['/courses'];

  // চেক করা হচ্ছে বর্তমান ইউআরএল প্রটেক্টেড কি না
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // ২. কুকি চেক করা (প্রোডাকশন এবং লোকালহোস্টের সব ভেরিয়েন্ট চেক করবে)
    const sessionToken = 
      request.cookies.get("better-auth.session_token")?.value || 
      request.cookies.get("__Secure-better-auth.session_token")?.value ||
      request.cookies.get("better-auth.session-token")?.value;

    // ৩. যদি সেশন না থাকে তবে রিডাইরেক্ট
    if (!sessionToken) {
      const loginUrl = new URL('/login', request.url);
      
      // ইউজার যাতে লগইন শেষে আবার আগের জায়গায় ফিরতে পারে
      loginUrl.searchParams.set('callbackUrl', pathname);
      
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// ৪. কনফিগ যাতে শুধু প্রয়োজনীয় ফাইলগুলোতেই প্রক্সি রান হয়
export const config = {
  matcher: [
    /*
     * নিচের ফাইলগুলো বাদ দিয়ে সব রিকোয়েস্টে রান হবে:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};