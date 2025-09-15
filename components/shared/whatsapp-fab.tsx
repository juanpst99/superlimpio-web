'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppFAB() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '573183015035'
  const message = encodeURIComponent(
    'Hola! Quisiera información sobre sus servicios de limpieza.'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-lg transition-transform duration-200 hover:scale-110"
        asChild
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />

          {/* Indicador de pulso */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-accent" />
          </span>
        </a>
      </Button>
    </div>
  )
}
