import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTAButton } from '@/components/cro/cta-button'
import { TrustBadges } from '@/components/cro/trust-badges'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { ServiceImage } from '@/components/ui/service-image'
import { getAllServices } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Nuestros Servicios de Limpieza Profesional',
  description: 'Servicios profesionales de lavado de muebles, tapetes, colchones y más en Medellín. Técnicos expertos y resultados garantizados.',
}

const serviceEmojis: Record<string, string> = {
  'lavado-de-muebles': '🛋️',
  'lavado-de-tapetes': '🏠',
  'lavado-de-colchones': '🛏️',
  'cojineria-vehiculos': '🚗',
  'cortinas': '🪟',
}

export default function ServicesPage() {
  const services = getAllServices()
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs items={[{ label: 'Servicios' }]} />
          
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Nuestros Servicios de Limpieza Profesional
            </Heading>
            <p className="text-lg text-neutral-600 mb-8">
              Ofrecemos soluciones integrales de limpieza para tu hogar y vehículo. 
              Todos nuestros servicios incluyen garantía de satisfacción.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-elevation-2 transition-all group">
                <CardHeader className="p-0">
                  {/* Imagen del servicio */}
                  <div className="aspect-video relative rounded-t-lg overflow-hidden bg-gradient-to-br from-primary-100 to-accent-50">
                    <ServiceImage
                      src={`/images/services/${service.slug}-thumbnail.webp`}
                      alt={service.name}
                      fallbackEmoji={serviceEmojis[service.slug] || '🧹'}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-neutral-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-neutral-500 mb-1">Desde</p>
                    <p className="text-2xl font-bold text-primary">
                      ${service.price.from.toLocaleString('es-CO')}
                      <span className="text-sm text-neutral-500 font-normal ml-1">
                        {service.price.unit}
                      </span>
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link 
                      href={`/servicios/${service.slug}`}
                      className="flex-1"
                    >
                      <CTAButton 
                        variant="secondary" 
                        size="sm"
                        fullWidth
                        className="justify-center group/btn"
                      >
                        Ver detalles
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </CTAButton>
                    </Link>
                    
                    <CTAButton
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola! Me interesa el servicio de ${service.name}`)}`}
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Cotizar
                    </CTAButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section background="gray" padding="md">
        <Container>
          <TrustBadges variant="grid" />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading level={2} className="mb-4 text-neutral-900">
              ¿No encuentras lo que buscas?
            </Heading>
            <p className="text-neutral-700 mb-8">
              Contáctanos para servicios personalizados o cotizaciones especiales 
              para empresas y conjuntos residenciales.
            </p>
            <CTAButton
              href={`https://wa.me/${whatsappNumber}`}
              variant="primary"
              size="lg"
            >
              Consultar por WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}