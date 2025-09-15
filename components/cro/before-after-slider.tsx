"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Antes",
  afterAlt = "Después",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, currentTarget: HTMLElement) => {
    const rect = currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX, e.currentTarget as HTMLElement)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX, e.currentTarget as HTMLElement)
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg select-none", className)}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Imagen Después (base) */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Label Después */}
        <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
          Después
        </div>
      </div>

      {/* Imagen Antes (overlay) */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          
          {/* Label Antes */}
          <div className="absolute top-4 left-4 bg-neutral-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            Antes
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-neutral-700"
          >
            <path
              d="M8 12L4 8M4 8L8 4M4 8H20M16 12L20 16M20 16L16 20M20 16H4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}