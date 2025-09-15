"use client"

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuoteFormProps {
  service: {
    name: string
    slug: string
  }
}

export function QuoteForm({ service }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pieces: '',
    city: 'medellin',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
    
    let message = `Hola! Necesito cotizar *${service.name}*\n\n`
    message += `👤 Soy ${formData.name}\n`
    message += `📱 Mi teléfono: ${formData.phone}\n`
    message += `📦 Necesito lavar: ${formData.pieces}\n`
    message += `📍 En ${formData.city === 'medellin' ? 'Medellín' : formData.city}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Tu nombre *"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
      </div>
      
      <div>
        <input
          type="tel"
          placeholder="Tu WhatsApp *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
      </div>
      
      <div>
        <input
          type="text"
          placeholder="¿Qué necesitas lavar? (ej: 1 sofá 3 puestos)"
          required
          value={formData.pieces}
          onChange={(e) => setFormData({...formData, pieces: e.target.value})}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
      </div>
      
      <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BA5C]" size="lg">
        <MessageCircle className="mr-2 h-5 w-5" />
        Cotizar por WhatsApp
      </Button>
    </form>
  )
}