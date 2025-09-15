import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CTAButton } from '@/components/cro/cta-button'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { getAllCities, getAllServices, getCityBySlug } from '@/lib/content'
import { generateLocalBusinessSchema } from '@/lib/seo'
import { Phone, MessageCircle } from 'lucide-react'


interface PageProps {
  params: { city: string }
}

export async function generateStaticParams() {
  const cities = getAllCities()
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'Ciudad no encontrada',
    }
  }

  return {
    title: city.seoTitle || `Lavado de Muebles en ${city.name} | Superlimpio`,
    description: city.seoDescription || `Servicio profesional de lavado de muebles y tapetes en ${city.name}. Servicio a domicilio sin costo adicional.`,
    openGraph: {
      title: `Servicios de Limpieza en ${city.name}`,
      description: city.description,
      images: [`/api/og?title=${encodeURIComponent(`Servicios en ${city.name}`)}&type=city`],
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city)
  const services = getAllServices()
  
  if (!city) {
    notFound()
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+576042980303'

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Ciudades', href: '/ciudades' },
              { label: city.name }
            ]} 
          />
          
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="success" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Cobertura total en {city.name}
            </Badge>
            
            <Heading level={1} className="mb-6">
              Servicios de Limpieza Profesional en {city.name}
            </Heading>
            
            <p className="text-lg text-neutral-600 mb-8">
              {city.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola! Necesito un servicio de limpieza en ${city.name}`)}`}
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
        </Container>
      </Section>

      {/* Servicios disponibles */}
      <Section padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Servicios Disponibles en {city.name}
            </Heading>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Todos nuestros servicios incluyen desplazamiento sin costo adicional 
              a cualquier barrio de {city.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-elevation-2 transition-all">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-50 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">
                      {service.id === 'lavado-de-muebles' && '🛋️'}
                      {service.id === 'lavado-de-tapetes' && '🏠'}
                      {service.id === 'lavado-de-colchones' && '🛏️'}
                      {service.id === 'cojineria-vehiculos' && '🚗'}
                      {service.id === 'cortinas' && '🪟'}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-neutral-500">Desde</p>
                    <p className="text-xl font-bold text-primary">
                      ${service.price.from.toLocaleString('es-CO')}
                      <span className="text-xs text-neutral-500 font-normal ml-1">
                        {service.price.unit}
                      </span>
                    </p>
                  </div>

                  <Link href={`/${city.slug}/${service.slug}`}>
                    <CTAButton
                      variant="secondary"
                      size="sm"
                      fullWidth
                      className="justify-between"
                    >
                      Ver detalles
                      <ArrowRight className="h-4 w-4" />
                    </CTAButton>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Barrios con cobertura */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Heading level={2} className="mb-4">
                Cobertura en Todos los Barrios de {city.name}
              </Heading>
              <p className="text-neutral-600">
                Llegamos a todos los sectores con servicio puntual y profesional
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {city.neighborhoods.map((neighborhood: string, index: number) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    <CheckCircle className="h-3 w-3 mr-1 text-success" />
                    {neighborhood}
                  </Badge>
                ))}
              </div>
              
              <p className="text-center text-sm text-neutral-600">
                ¿Tu barrio no está en la lista? No te preocupes, cubrimos toda {city.name} y sus alrededores.
              </p>
            </div>

            {/* Beneficios locales */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sin Costo de Desplazamiento</h3>
                <p className="text-sm text-neutral-600">
                  Servicio a domicilio gratis en toda {city.name}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
                <p className="text-sm text-neutral-600">
                  Agendamos tu servicio en menos de 24 horas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Garantía Local</h3>
                <p className="text-sm text-neutral-600">
                  Respaldo y garantía en toda el área de {city.name}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading level={2} className="mb-4 text-white">
              Agenda Tu Servicio en {city.name} Hoy
            </Heading>
            <p className="text-white/90 mb-8">
              Cotización inmediata sin compromiso. Te respondemos en minutos 
              y agendamos según tu disponibilidad.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm opacity-90">Clientes en {city.name}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.9</p>
                  <p className="text-sm opacity-90">Calificación</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24h</p>
                  <p className="text-sm opacity-90">Respuesta</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-90">Garantía</p>
                </div>
              </div>
            </div>
            
            <CTAButton
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola! Necesito cotizar un servicio en ${city.name}`)}`}
              variant="primary"
              size="lg"
              pulse
              className="bg-white text-primary hover:bg-neutral-100"
            >
              Cotizar Ahora por WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}