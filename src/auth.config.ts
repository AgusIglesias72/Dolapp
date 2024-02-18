import type { NextAuthConfig } from 'next-auth'

import google from 'next-auth/providers/google'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnLogin = nextUrl.pathname.startsWith('/login')
      const isOnDashboard =
        nextUrl.pathname.startsWith('/') &&
        !nextUrl.pathname.startsWith('/login')

      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }
      return true
    },
  },
  providers: [google], // Add providers
} satisfies NextAuthConfig
