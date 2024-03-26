import { cookies } from "next/headers"
import {  NextResponse } from "next/server";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const cookie = cookies()
    let pmscookie = cookie.get('pmscookie')
    let maincookie = pmscookie?.value
    if(!maincookie){
        return NextResponse.redirect(new URL('/admin/auth/login', request.url))
      }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/admin/dashboard/','/admin/dashboard/admins','/admin/dashboard/departments','/admin/dashboard/faculty','/admin/dashboard/publications']
}