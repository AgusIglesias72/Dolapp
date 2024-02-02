import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

// ...

export async function authenticate() {
  try {
    await signIn('google')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function logout() {
  try {
    await signOut()
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
