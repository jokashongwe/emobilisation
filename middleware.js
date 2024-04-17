import { updateSession } from '@/utils/supabase/middleware'

// 1. Specify protected and public routes
const protectedRoutes = ['/admin']
const publicRoutes = ['/login', '/signup', '/']

export default async function middleware(req) {
    
    return await updateSession(req, protectedRoutes, publicRoutes)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|/$|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}