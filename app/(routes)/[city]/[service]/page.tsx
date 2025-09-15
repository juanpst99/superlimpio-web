import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { CityServices } from '@/components/sections/city-services'
import { getAllCities, getAllServices, getCityBySlug, getServiceBySlug } from '@/lib/content'

interface PageProps {
  params: { 
    city: string
    service: string 
  }
}

export async function generateStaticParams() {
  const cities = getAllCities()
  const services = getAllServices()
  
  const paths = []
  
  for (const city of cities) {
    for (const service of services) {
      paths.push({
        city: city.slug,
        service: service.slug,
      })
    }
  }
  
  return paths
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  const service = getServiceBySlug(params.service)
  
  if (!city || !service) {
    return {
      title: 'Página no encontrada',
    }
  }

  const title = `${service.name} en ${city.name} | Servicio a Domicilio`
  const description = `${service.name} en ${city.name}. ${service.shortDescription}. Servicio profesional a domicilio sin costo adicional. Cotiza ahora.`

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
      `lavado de muebles ${city.name.toLowerCase()}`,
      `limpieza ${city.name.toLowerCase()}`,
      ...service.keywords,
    ],
    openGraph: {
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(title)}&type=service`],
    },
  }
}

export default function CityServicePage({ params }: PageProps) {
  const city = getCityBySlug(params.city)
  const service = getServiceBySlug(params.service)

  if (!city || !service) {
    notFound()
  }

  return (
    <>
      <Section padding="lg">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Ciudades', href: '/ciudades' },
              { label: city.name, href: `/${city.slug}` },
              { label: service.name }
            ]} 
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <Heading level={1} className="mb-6">
              {service.name} en {city.name}
            </Heading>
            <p className="text-lg text-neutral-600">
              Servicio profesional de {service.name.toLowerCase()} a domicilio en {city.name} 
              y sus alrededores. Técnicos expertos y resultados garantizados.
            </p>
          </div>
        </Container>
      </Section>

      <CityServices city={city} service={service} />
    </>
  )
}