import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { getAllCities } from '@/lib/content'
import { CTAButton } from '@/components/cro/cta-button'

export const metadata: Metadata = {
  title: 'Cobertura - Ciudades donde Prestamos Servicio',
  description: 'Servicio de lavado de muebles a domicilio en Medellín, Envigado, Sabaneta, Itagüí y Bello. Cobertura en toda el área metropolitana.',
}

export default function CitiesPage() {
  const cities = getAllCities()

  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs items={[{ label: 'Ciudades' }]} />
          
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Cobertura en el Área Metropolitana
            </Heading>
            <p className="text-lg text-neutral-600">
              Prestamos servicio a domicilio en las principales ciudades del Valle de Aburrá. 
              Selecciona tu ciudad para ver los servicios disponibles.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Card key={city.id} className="hover:shadow-elevation-2 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-primary" />
                    <Badge variant="success">Cobertura Total</Badge>
                  </div>
                  <CardTitle className="text-2xl">{city.name}</CardTitle>
                  <p className="text-neutral-500">{city.department}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">
                    {city.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-neutral-700 mb-2">
                      Barrios con cobertura:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {city.neighborhoods.slice(0, 4).map((neighborhood, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {neighborhood}
                        </Badge>
                      ))}
                      {city.neighborhoods.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{city.neighborhoods.length - 4} más
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link href={`/${city.slug}`}>
                    <CTAButton 
                      variant="secondary" 
                      size="sm"
                      fullWidth
                      className="justify-between"
                    >
                      Ver servicios en {city.name}
                      <ArrowRight className="h-4 w-4" />
                    </CTAButton>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mapa ilustrativo */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-4">
                📍 Servicio a Domicilio Sin Costo Adicional
              </h2>
              <p className="text-neutral-600 mb-6">
                Nos desplazamos hasta tu ubicación sin ningún cargo extra en todas 
                las ciudades del área metropolitana. Agenda tu servicio y nosotros 
                llegamos a ti.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white text-primary">
                  ✓ Sin costo de desplazamiento
                </Badge>
                <Badge className="bg-white text-primary">
                  ✓ Horarios flexibles
                </Badge>
                <Badge className="bg-white text-primary">
                  ✓ Servicio express disponible
                </Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}