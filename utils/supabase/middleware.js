import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request, protectedRoutes, publicRoutes) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return request.cookies.get(name)?.value
                },
                set(name, value, options) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name, options) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    const path = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    //console.log("isProtectedRoute: ", isProtectedRoute)

    // refreshing the auth token
    const { data } = await supabase.auth.getUser()
    const { user } = data;
    //console.log("user: ", user)
    if (isProtectedRoute && !user) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

    if (
        isPublicRoute &&
        user &&
        !request.nextUrl.pathname.startsWith('/admin')
    ) {
        return NextResponse.redirect(new URL('/admin', request.nextUrl))
    }

    return response
}