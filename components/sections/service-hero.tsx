import Image from 'next/image'
import { MessageCircle, Phone } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { CTAButton } from '@/components/cro/cta-button'
import { Badge } from '@/components/ui/badge'

interface ServiceHeroProps {
  service: any
}

// Mapeo de imágenes por servicio
const serviceImages: Record<string, string> = {
  'lavado-de-muebles': '/images/services/muebles-hero.webp',
  'lavado-de-tapetes': '/images/services/tapetes-hero.webp',
  'lavado-de-colchones': '/images/services/colchones-hero.webp',
  'cojineria-vehiculos': '/images/services/vehiculos-hero.webp',
  'cortinas': '/images/services/cortinas-hero.webp',
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+573183015035'
  
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el servicio de ${service.name}. ¿Podrían darme más información?`
  )
  
  // Obtener la imagen del servicio
  const heroImage = serviceImages[service.slug] || '/images/services/default-hero.jpg'

  return (
    <Section background="gradient" padding="xl">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="success" className="mb-4">
              Servicio más solicitado
            </Badge>
            
            <Heading level={1} className="mb-6">
              {service.name}
            </Heading>
            
            <p className="text-lg text-neutral-600 mb-8">
              {service.description}
            </p>

            <div className="mb-8">
              <p className="text-sm text-neutral-500 mb-2">Precio desde</p>
              <p className="text-4xl font-bold text-primary">
                ${service.price.from.toLocaleString('es-CO')}
                <span className="text-lg text-neutral-500 font-normal ml-2">
                  {service.price.unit}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle className="h-5 w-5" />}
              >
                Cotizar por WhatsApp
              </CTAButton>
              
              <CTAButton
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                variant="secondary"
                size="lg"
                icon={<Phone className="h-5 w-5" />}
              >
                Llamar ahora
              </CTAButton>
            </div>
          </div>

          <div className="relative">
            {/* Imagen principal del servicio */}
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-elevation-3">
              <Image
                src={heroImage}
                alt={`${service.name} profesional en Medellín`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Badges flotantes */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-elevation-2 p-4">
              <p className="text-sm font-semibold text-neutral-700">Tiempo de secado</p>
              <p className="text-2xl font-bold text-primary">4-6 hrs</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-elevation-2 p-4">
              <p className="text-sm font-semibold text-neutral-700">Satisfacción</p>
              <p className="text-2xl font-bold text-success">100%</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}