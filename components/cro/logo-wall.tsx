import Image from "next/image"
import { cn } from "@/lib/utils"

interface Logo {
  name: string
  src: string
  width?: number
  height?: number
}

interface LogoWallProps {
  logos: Logo[]
  title?: string
  className?: string
  variant?: "static" | "scroll"
}

export function LogoWall({
  logos,
  title = "Confían en nosotros",
  className,
  variant = "static",
}: LogoWallProps) {
  const logoElements = logos.map((logo, index) => (
    <div
      key={index}
      className="flex items-center justify-center px-8 py-4"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width || 120}
        height={logo.height || 60}
        className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
      />
    </div>
  ))

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <p className="text-center text-neutral-600 font-medium mb-8">
          {title}
        </p>
      )}
      
      {variant === "static" ? (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logoElements}
        </div>
      ) : (
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {logoElements}
            {/* Duplicar para efecto continuo */}
            {logoElements}
          </div>
        </div>
      )}
    </div>
  )
}