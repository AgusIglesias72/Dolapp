import {
  MagnifyingGlassIcon,
  ArrowLeftEndOnRectangleIcon,
} from '@heroicons/react/24/outline'
import {
  IconsGrayButton,
} from '@/components/ui/Buttons/IconsButton'
import NavItem from '@/components/ui/NavBar/NavItems'
import Link from 'next/link'

export default function Header() {
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
        <MagnifyingGlassIcon
          className="w-10 h-10 hover:bg-gray-100 hover:bg-opacity-50
    transition-colors duration-200 p-2 rounded-full cursor-pointer"
        />
        <Link href="/login">
          <IconsGrayButton
            text="Ingresar"
            icon={<ArrowLeftEndOnRectangleIcon className="w-6 h-6" />}
          />
        </Link>
        {/* <IconsPurpleButton
          text="Nuevo Proyecto"
          icon={<ArrowRightCircleIcon className="w-6 h-6 text-white" />}
        /> */}
      </div>
    </header>
  )
}
