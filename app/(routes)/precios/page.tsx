import { Metadata } from 'next'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { ServicePricing } from '@/components/sections/service-pricing'
import { getAllServices } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Precios - Tarifas de Nuestros Servicios',
  description: 'Consulta los precios de lavado de muebles, tapetes y colchones en Medellín. Tarifas transparentes y sin costos ocultos.',
}

export default function PricingPage() {
  const services = getAllServices()

  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Precios Transparentes y Justos
            </Heading>
            <p className="text-lg text-neutral-600">
              Sin sorpresas ni costos ocultos. Todos nuestros precios incluyen 
              servicio a domicilio y garantía de satisfacción.
            </p>
          </div>
        </Container>
      </Section>

      {services.map((service, index) => (
        <div key={service.id}>
          <Section padding="sm">
            <Container>
              <Heading level={2} className="text-center mb-2">
                {service.name}
              </Heading>
            </Container>
          </Section>
          <ServicePricing service={service} />
        </div>
      ))}
    </>
  )
}