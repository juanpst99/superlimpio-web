import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Shield, Clock, CheckCircle } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ServiceHero } from '@/components/sections/service-hero'
import { ServiceFeatures } from '@/components/sections/service-features'
import { ServicePricing } from '@/components/sections/service-pricing'
import { ServiceFAQs } from '@/components/sections/service-faqs'
import { getAllServices, getServiceBySlug } from '@/lib/content'
import { generateServiceSchema } from '@/lib/seo'
import { QuoteForm } from '@/components/forms/quote-form'
import { TrustBadges } from '@/components/cro/trust-badges'
import { TestimonialCard } from '@/components/cro/testimonial-card'
import { CTASection } from '@/components/sections/cta-section'
import { AIAssistantButton } from '@/components/cro/ai-assistant-button'
import { WhatsAppFAB } from '@/components/shared/whatsapp-fab'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  return {
    title: service.seoTitle || `${service.name} | Superlimpio`,
    description: service.seoDescription || service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.seoTitle || service.name,
      description: service.seoDescription || service.description,
      images: [`/api/og?title=${encodeURIComponent(service.name)}&type=service`],
    },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.description,
    price: `$${service.price.from.toLocaleString('es-CO')}`,
  })

  return (
    <>
      <JsonLd data={serviceSchema} />
      
      <Section padding="lg">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Servicios', href: '/servicios' },
              { label: service.name }
            ]} 
          />
        </Container>
      </Section>

      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      
      {/* Proceso del servicio */}
      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Nuestro Proceso de {service.name}
              </Heading>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Inspección Inicial',
                    description: 'Evaluamos el estado de tus muebles y identificamos manchas o áreas problemáticas.'
                  },
                  {
                    step: 2,
                    title: 'Preparación',
                    description: 'Aplicamos productos especializados según el tipo de tela y nivel de suciedad.'
                  },
                  {
                    step: 3,
                    title: 'Lavado Profundo',
                    description: 'Utilizamos equipos de extracción profesionales para una limpieza completa.'
                  },
                  {
                    step: 4,
                    title: 'Secado y Acabado',
                    description: 'Aceleramos el secado y aplicamos protección antimanchas opcional.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-neutral-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Cotiza Ahora</CardTitle>
                </CardHeader>
                <CardContent>
                  <QuoteForm service={service} />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonios del servicio */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Lo Que Dicen Nuestros Clientes
            </Heading>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Laura Mejía"
              location="El Poblado"
              rating={5}
              comment={`Excelente servicio de ${service.name.toLowerCase()}. Superó mis expectativas.`}
              date="Hace 1 semana"
            />
            <TestimonialCard
              name="Pedro Sánchez"
              location="Envigado"
              rating={5}
              comment="Muy profesionales y puntuales. El resultado fue impecable."
              date="Hace 3 días"
            />
            <TestimonialCard
              name="Carmen López"
              location="Sabaneta"
              rating={5}
              comment="Los recomiendo 100%. Excelente relación calidad-precio."
              date="Hace 2 semanas"
            />
          </div>
        </Container>
      </Section>

      {/* Garantías */}
      <Section padding="lg">
        <Container>
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Heading level={2} className="mb-6">
                Nuestras Garantías
              </Heading>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Satisfacción 100%</h3>
                  <p className="text-sm text-neutral-600">
                    Si no quedas conforme, repetimos el servicio sin costo
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Puntualidad</h3>
                  <p className="text-sm text-neutral-600">
                    Llegamos a tiempo o te avisamos con anticipación
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Productos Seguros</h3>
                  <p className="text-sm text-neutral-600">
                    Eco-amigables y seguros para toda tu familia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <CTASection
        title={`¿Listo para ${service.name}?`}
        description="Cotización inmediata y sin compromiso. Agenda hoy mismo."
        buttonText="Cotizar Ahora"
        buttonHref={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola! Quiero agendar ${service.name}`)}`}
      />
      
      <ServicePricing service={service} />
      <ServiceFAQs service={service} />

            {/* WhatsApp FAB */}
            <WhatsAppFAB />
            
            {/* AI Assistant Button */}
            <AIAssistantButton />
    </>
  )
}