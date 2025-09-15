"use client"

import Link from 'next/link'
import { Phone, MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: Array<{ label: string; href: string }>
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+576042980303'
  const whatsappMessage = encodeURIComponent('Hola! Quisiera información sobre sus servicios.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-300",
        isOpen ? "visible" : "invisible"
      )}
    >
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black transition-opacity duration-300",
          isOpen ? "opacity-50" : "opacity-0"
        )}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-heading font-bold text-lg">Superlimpio</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 rounded-lg"
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 text-neutral-700 hover:text-primary font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="p-6 border-t space-y-3">
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              asChild
            >
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                <Phone className="h-5 w-5 mr-2" />
                Llamar ahora
              </a>
            </Button>
            
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent-600 text-white"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}