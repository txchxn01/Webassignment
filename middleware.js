import { NextResponse } from 'next/server'
import { jwtVerify, importJWK } from "jose"
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("test")
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}