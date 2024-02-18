import Link from 'next/link'

export default function NavItem({
  name,
  link,
}: {
  name: string
  link: string
}) {
  return (
    <Link
      href={link}
      className="flex flex-row items-center cursor-pointer h-full px-4
        transition-all duration-200 hover:text-purple-700
        border-b-2 border-transparent hover:border-purple-700
        text-gray-700"
    >
      {name}
    </Link>
  )
}
