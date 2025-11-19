import Image from "next/image"

export function Logo({
  className = "",
  width = 18,
  height = 18,
}: {
  className?: string
  width?: number
  height?: number
}) {
  return (
    <Image
      src="/logo.svg"
      width={width}
      height={height}
      className={className}
      alt="FreeShip"
    />
  )
}
