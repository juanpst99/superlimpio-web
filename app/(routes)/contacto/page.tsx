import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent } from '@/components/ui/card'
import { CTAButton } from '@/components/cro/cta-button'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contacto - Cotiza Tu Servicio',
  description: 'Contáctanos para cotizar lavado de muebles, tapetes y colchones en Medellín. Respuesta inmediata por WhatsApp o teléfono.',
}

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+573183015035'
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'superlimpio9696@gmail.com'

  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs items={[{ label: 'Contacto' }]} />
          
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Contáctanos
            </Heading>
            <p className="text-lg text-neutral-600">
              Estamos aquí para ayudarte. Cotiza sin compromiso y recibe respuesta 
              en minutos. Atendemos de lunes a sábado.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <a 
                    href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    (604)  318 301 5035
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">
                    Llamadas y WhatsApp
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a 
                    href={`mailto:${email}`}
                    className="text-primary hover:underline break-all"
                  >
                    {email}
                  </a>
                  <p className="text-sm text-neutral-600 mt-1">
                    Respuesta en 24 horas
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Cobertura</h3>
                  <p className="text-neutral-700">
                    Medellín y área metropolitana
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Servicio a domicilio
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Horario</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-neutral-700">
                      <span className="font-medium">Lun - Vie:</span> 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-neutral-700">
                      <span className="font-medium">Sábado:</span> 8:00 AM - 2:00 PM
                    </p>
                    <p className="text-neutral-700">
                      <span className="font-medium">Domingo:</span> Cerrado
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <CTAButton
                href={`https://wa.me/${whatsappNumber}`}
                variant="whatsapp"
                size="lg"
                fullWidth
                icon={<MessageCircle className="h-5 w-5" />}
              >
                Chat por WhatsApp
              </CTAButton>
            </div>

            {/* Formulario de contacto */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-6">
                    Solicita tu Cotización
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mapa o imagen de fondo */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Respuesta Inmediata
            </Heading>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              Preferimos WhatsApp para respuestas más rápidas. Envíanos fotos 
              de lo que necesitas limpiar y te cotizamos al instante.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">5 min</p>
                <p className="text-sm text-neutral-600">Respuesta por WhatsApp</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">24h</p>
                <p className="text-sm text-neutral-600">Agendamiento</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-neutral-600">Satisfacción</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}