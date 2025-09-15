import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent } from '@/components/ui/card'
import { CTAButton } from '@/components/cro/cta-button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Shield, CheckCircle } from 'lucide-react'


interface CityServicesProps {
  city: any
  service: any
}

export function CityServices({ city, service }: CityServicesProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'

  return (
    <>
      {/* Información de cobertura */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Cobertura Total</h3>
                <p className="text-sm text-neutral-600">
                  Servicio a domicilio en todos los barrios de {city.name}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Horario Flexible</h3>
                <p className="text-sm text-neutral-600">
                  Lun - Vie: 8AM - 6PM<br />
                  Sábados: 8AM - 2PM
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Garantía Local</h3>
                <p className="text-sm text-neutral-600">
                  Respaldo y garantía en toda el área de {city.name}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Barrios con cobertura */}
      <Section padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading level={2} className="text-center mb-8">
              Barrios de {city.name} con Cobertura
            </Heading>
            
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {city.neighborhoods.map((neighborhood: string, index: number) => (
                <Badge key={index} variant="outline" className="px-3 py-1">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {neighborhood}
                </Badge>
              ))}
            </div>

            <p className="text-center text-neutral-600 mb-8">
              ¿No ves tu barrio? No te preocupes, llegamos a toda {city.name}. 
              Contáctanos para confirmar cobertura.
            </p>

            {/* CTA */}
            <div className="text-center">
              <CTAButton
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hola! Necesito ${service.name} en ${city.name}. ¿Pueden ayudarme?`
                )}`}
                variant="primary"
                size="lg"
                pulse
              >
                Agendar Servicio en {city.name}
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Información adicional local */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading level={2} className="mb-4 text-white">
              ¿Por qué elegirnos en {city.name}?
            </Heading>
            <p className="text-white/90 mb-8">
              Conocemos {city.name} y sus necesidades. Nuestro equipo local está 
              capacitado para brindarte el mejor servicio con la confianza de una 
              empresa establecida en la región.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">500+</p>
                <p className="text-sm text-white/80">Clientes en {city.name}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">4.9</p>
                <p className="text-sm text-white/80">Calificación promedio</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">24h</p>
                <p className="text-sm text-white/80">Respuesta rápida</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-sm text-white/80">Satisfacción</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}