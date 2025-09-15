'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ServiceImageProps {
  src: string
  alt: string
  fallbackEmoji: string
  className?: string
}

export function ServiceImage({ src, alt, fallbackEmoji, className }: ServiceImageProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {fallbackEmoji}
        </div>
      )}
    </>
  )
}