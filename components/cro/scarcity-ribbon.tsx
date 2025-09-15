"use client"

import { useState, useEffect } from "react"
import { Flame, Clock, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScarcityRibbonProps {
  text?: string
  type?: "offer" | "limited" | "urgent"
  position?: "top" | "bottom"
  animate?: boolean
}

const types = {
  offer: {
    bg: "bg-gradient-to-r from-accent to-accent-600",
    icon: Flame,
    defaultText: "🔥 Oferta especial por tiempo limitado",
  },
  limited: {
    bg: "bg-gradient-to-r from-primary to-primary-600",
    icon: Clock,
    defaultText: "⏰ Solo quedan 3 cupos para hoy",
  },
  urgent: {
    bg: "bg-gradient-to-r from-warning to-warning-600",
    icon: AlertCircle,
    defaultText: "⚡ Última oportunidad - 20% OFF",
  },
}

export function ScarcityRibbon({
  text,
  type = "offer",
  position = "top",
  animate = true,
}: ScarcityRibbonProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const config = types[type]
  const Icon = config.icon
  const displayText = text || config.defaultText

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-40 transition-transform duration-500",
        position === "top" ? "top-0" : "bottom-0",
        isVisible ? "translate-y-0" : position === "top" ? "-translate-y-full" : "translate-y-full",
        config.bg,
        animate && "animate-pulse-slow"
      )}
    >
      <div className="container-safe py-2">
        <div className="flex items-center justify-center gap-2 text-white text-sm md:text-base font-medium">
          <Icon className="h-4 w-4 md:h-5 md:w-5" />
          <span>{displayText}</span>
        </div>
      </div>
    </div>
  )
}