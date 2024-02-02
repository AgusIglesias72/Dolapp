import { authenticate } from '@/lib/actions'

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">Holaaa</div>
        </div>
        Juan{' '}
        <form
          action={async () => {
            'use server'
            await authenticate()
          }}
        >
          <button type="submit">Sign in with Google</button>
        </form>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    </main>
  )
}
