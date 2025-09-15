"use client"

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { validateContactForm } from '@/lib/validations'

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  service: string
  pieces: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: 'medellin',
    service: 'lavado-de-muebles',
    pieces: '',
    message: '',
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    // Construir mensaje para WhatsApp
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
    
    const cities = {
      'medellin': 'Medellín',
      'envigado': 'Envigado',
      'sabaneta': 'Sabaneta',
      'itagui': 'Itagüí',
      'bello': 'Bello',
    }
    
    const services = {
      'lavado-de-muebles': 'Lavado de Muebles',
      'lavado-de-tapetes': 'Tapetes y Alfombras',
      'lavado-de-colchones': 'Colchones',
      'cojineria-vehiculos': 'Cojinería de Vehículos',
      'cortinas': 'Cortinas',
      'otro': 'Otro servicio',
    }

    let message = `🔷 *SOLICITUD DE COTIZACIÓN*\n\n`
    message += `👤 *Nombre:* ${formData.name}\n`
    message += `📱 *Teléfono:* ${formData.phone}\n`
    if (formData.email) {
      message += `📧 *Email:* ${formData.email}\n`
    }
    message += `📍 *Ciudad:* ${cities[formData.city as keyof typeof cities]}\n`
    message += `🛋️ *Servicio:* ${services[formData.service as keyof typeof services]}\n`
    if (formData.pieces) {
      message += `📦 *Cantidad/Tipo:* ${formData.pieces}\n`
    }
    if (formData.message) {
      message += `💬 *Mensaje adicional:* ${formData.message}\n`
    }
    message += `\n_Enviado desde el formulario web_`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank')
    
    // Limpiar formulario
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: 'medellin',
      service: 'lavado-de-muebles',
      pieces: '',
      message: '',
    })
  }

  const cities = [
    { value: 'medellin', label: 'Medellín' },
    { value: 'envigado', label: 'Envigado' },
    { value: 'sabaneta', label: 'Sabaneta' },
    { value: 'itagui', label: 'Itagüí' },
    { value: 'bello', label: 'Bello' },
  ]

  const services = [
    { value: 'lavado-de-muebles', label: 'Lavado de Muebles' },
    { value: 'lavado-de-tapetes', label: 'Tapetes y Alfombras' },
    { value: 'lavado-de-colchones', label: 'Colchones' },
    { value: 'cojineria-vehiculos', label: 'Cojinería de Vehículos' },
    { value: 'cortinas', label: 'Cortinas' },
    { value: 'otro', label: 'Otro servicio' },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
              errors.name ? 'border-error' : 'border-neutral-300'
            }`}
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error">{errors.name}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Teléfono/WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
              errors.phone ? 'border-error' : 'border-neutral-300'
            }`}
            placeholder="300 123 4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email (opcional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
              errors.email ? 'border-error' : 'border-neutral-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email}</p>
          )}
        </div>

        {/* Ciudad */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-2">
            Ciudad *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            {cities.map(city => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        {/* Servicio */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
            Servicio requerido *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            {services.map(service => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Cantidad/Tipo de piezas */}
        <div>
          <label htmlFor="pieces" className="block text-sm font-medium text-neutral-700 mb-2">
            Cantidad y tipo de piezas
          </label>
          <input
            type="text"
            id="pieces"
            name="pieces"
            value={formData.pieces}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Ej: 1 sofá 3 puestos, 2 sillas"
          />
        </div>

        {/* Mensaje */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Detalles adicionales (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
            placeholder="Tipo de manchas, ubicación, etc."
          />
        </div>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white"
        size="lg"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Enviar por WhatsApp
      </Button>

      <p className="text-sm text-neutral-600 text-center">
        Al enviar este formulario, aceptas nuestra{' '}
        <a href="/politica-de-datos" className="text-primary hover:underline">
          política de datos
        </a>
      </p>
    </form>
  )
}