import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import NavItem from '@/components/ui/NavBar/NavItems'
import Link from 'next/link'

export default function LoggedHeader({ userData }: { userData: any }) {
  const imageUrl = userData?.image

  return (
    <header className="flex flex-row justify-between w-full px-4 border-b-2 drop-shadow-md fixed bg-white backdrop-blur-3xl">
      <div className="flex flex-row space-x-4 items-center w-full justify-start py-3">
        <h1 className="font-extrabold">Dolar Info</h1>
      </div>

      <div className="backdrop-filter-none flex flex-row w-full justify-center ">
        <ul className="flex flex-row w-full justify-around items-center h-full space-x-4">
          <NavItem name="Inicio" link="/" />
          <NavItem name="Cotizaciones" link="/quotes" />
          <NavItem name="Acciones" link="/stocks" />
          <NavItem name="Indices" link="/indices" />
          <NavItem name="Histórico" link="/historical" />
        </ul>
      </div>

      <div className="flex flex-row space-x-4 items-center w-full justify-end py-3">
        <form
          className="flex flex-row items-center space-x-4 border-2 rounded px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"
        >
          <input
            className="focus:outline-none focus:shadow-outline h-full "
            id="search"
            type="text"
            placeholder="Buscar"
            required
          />
          <button className="cursor-pointer" type="submit" aria-label="search">
            <MagnifyingGlassIcon
              className="w-10 h-10 hover:bg-gray-100 hover:bg-opacity-50
            transition-colors duration-200 p-2 rounded-full"
            />
          </button>
        </form>
        <Link href="/profile">
          <Image
            src={imageUrl}
            alt="User Image"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </header>
  )
}
