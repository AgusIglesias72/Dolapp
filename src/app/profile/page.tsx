import { auth } from '@/auth'
import client from '@/lib/prisma'

export default async function ProfilePage() {
  const user = await auth()

  const userData = await client.user.findUniqueOrThrow({
    where: {
      email: user?.user?.email as string,
    },
  })

  console.log(userData)

  return (
    <div className="flex flex-col items-center justify-center h-screen  w-full ">
      Acá va el contenido de la página de perfil
    </div>
  )
}
