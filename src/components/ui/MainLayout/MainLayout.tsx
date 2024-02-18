import LoggedHeader from '@/components/component/Header/LoggedHeader'
import Header from '@/components/component/Header/Header'
import { auth } from '@/auth'
import client from '@/lib/prisma'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await auth()

  return (
    <div className="flex flex-col items-center justify-between w-full ">
      {user ? (
        <LoggedHeader
          userData={
            user
              ? await client.user.findUniqueOrThrow({
                  where: {
                    email: user?.user?.email as string,
                  },
                })
              : null
          }
        />
      ) : (
        <Header />
      )}
      {children}
    </div>
  )
}
