"use client"

import { useState, useEffect } from "react"
import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AIAssistantButtonProps {
  whatsappNumber?: string
  message?: string
  className?: string
}

export function AIAssistantButton({
  whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  message = "Hola! Quiero hablar con el asistente virtual de Superlimpio",
  className,
}: AIAssistantButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Mostrar después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Mostrar tooltip por 5 segundos
      setTimeout(() => setShowTooltip(true), 500)
      setTimeout(() => setShowTooltip(false), 5500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <div className={cn("fixed bottom-24 right-6 z-40", className)}>
      {/* Tooltip */}
      <div
        className={cn(
          "absolute bottom-full right-0 mb-2 transition-all duration-300",
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
          <p className="text-sm font-medium">🤖 ¡Hola! Soy tu asistente virtual</p>
          <p className="text-xs opacity-90">Respondo tus preguntas al instante</p>
          {/* Flecha del tooltip */}
          <div className="absolute top-full right-6 -mt-px">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-neutral-900" />
          </div>
        </div>
      </div>

      {/* Botón del asistente */}
      <Button
        onClick={handleClick}
        size="icon"
        className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-elevation-3 hover:shadow-lg transition-all hover:scale-110 relative"
      >
        <Bot className="h-6 w-6" />
        
        {/* Indicador de "nuevo" */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
        </span>
      </Button>
    </div>
  )
}