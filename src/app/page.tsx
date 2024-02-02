import { logout } from '@/lib/actions'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={async () => {
          'use server'
          await logout()
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </main>
  )
}
