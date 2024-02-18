export function IconsGrayButton({
  icon,
  text,
  onClick,
}: {
  icon: any
  text: string
  onClick?: () => void
}) {
  return (
    <button
      className="flex flex-row items-center py-2 px-3 space-x-3 rounded-lg
    border border-gray-400 bg-gray-50 hover:bg-opacity-70 bg-opacity-50
    transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <p className="text-sm">{text}</p>
    </button>
  )
}

export function IconsPurpleButton({
  icon,
  text,
  onClick,
}: {
  icon: any
  text: string
  onClick?: () => void
}) {
  return (
    <button
      className="flex flex-row items-center py-2 px-3 space-x-3 rounded-lg
        border 
        bg-purple-700
        border-purple-700
        hover:bg-purple-800
        transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <p className="text-sm text-white">{text}</p>
    </button>
  )
}
