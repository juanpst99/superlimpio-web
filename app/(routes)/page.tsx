import { Metadata } from 'next'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppFAB } from '@/components/shared/whatsapp-fab'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { ScarcityRibbon } from '@/components/cro/scarcity-ribbon'
import { CountdownTimer } from '@/components/cro/countdown-timer'
import { TrustBadges } from '@/components/cro/trust-badges'
import { CTAButton } from '@/components/cro/cta-button'
import { TestimonialCard } from '@/components/cro/testimonial-card'
import { BeforeAfterSlider } from '@/components/cro/before-after-slider'
import { ProcessSteps } from '@/components/cro/process-steps'
import { LogoWall } from '@/components/cro/logo-wall'
import { AIAssistantButton } from '@/components/cro/ai-assistant-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sofa, Sparkles, Car, Home, Bed, Square } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Lavado profesional de muebles y tapetes en Medellín. Servicio rápido, garantizado y con los mejores productos. Cotiza ahora por WhatsApp.',
}

export default function HomePage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+573183015035'
  
  const whatsappMessage = encodeURIComponent('Hola! Quisiera cotizar un servicio de lavado.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  // Fecha de fin para el countdown (7 días desde ahora)
  const offerEndDate = new Date()
  offerEndDate.setDate(offerEndDate.getDate() + 7)

  // Datos de ejemplo para componentes
  const services = [
    {
      icon: Sofa,
      title: "Lavado de Muebles",
      description: "Limpieza profunda con productos especializados",
      price: "Desde $80.000",
    },
    {
      icon: Square,
      title: "Tapetes y Alfombras",
      description: "Eliminación de manchas y olores",
      price: "Desde $60.000",
    },
    {
      icon: Bed,
      title: "Colchones",
      description: "Desinfección y eliminación de ácaros",
      price: "Desde $90.000",
    },
    {
      icon: Car,
      title: "Cojinería de Vehículos",
      description: "Interior de autos como nuevo",
      price: "Desde $120.000",
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Cotización Gratis",
      description: "Envíanos fotos por WhatsApp y recibe tu cotización en minutos",
    },
    {
      number: 2,
      title: "Agendamos Visita",
      description: "Escoge el día y hora que mejor te convenga",
    },
    {
      number: 3,
      title: "Limpieza Profesional",
      description: "Nuestros expertos dejan todo impecable",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      location: "Envigado",
      rating: 5,
      comment: "Excelente servicio! Mis muebles quedaron como nuevos. El secado fue muy rápido y el precio justo.",
      date: "Hace 2 días",
    },
    {
      name: "Carlos Rodríguez",
      location: "Medellín",
      rating: 5,
      comment: "Muy profesionales y puntuales. Eliminaron manchas que creí imposibles. 100% recomendados.",
      date: "Hace 1 semana",
    },
    {
      name: "Ana Martínez",
      location: "Sabaneta",
      rating: 5,
      comment: "Contraté el servicio de lavado de colchones y tapetes. Todo quedó impecable y con un olor muy agradable.",
      date: "Hace 3 días",
    },
  ]

  const clientLogos = [
    { name: "Cliente 1", src: "/clients/coltejer.webp", width: 120, height: 60 },
    { name: "Cliente 2", src: "/clients/imusa.webp", width: 120, height: 60 },
    { name: "Cliente 3", src: "/clients/los-molinos.webp", width: 120, height: 60 },
    { name: "Cliente 4", src: "/clients/olivia.webp", width: 120, height: 60 },
  ]

  return (
    <>
      {/* Ribbon de escasez */}
      <ScarcityRibbon 
        type="offer" 
        text="🔥 Oferta especial: 20% OFF en todos los servicios - Solo por esta semana"
      />

      <main id="main-content" className="min-h-screen pt-10">
        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          {/* Patrón decorativo de fondo */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge de confianza */}
              <Badge variant="success" className="mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                Servicio disponible hoy
              </Badge>

              {/* Título principal */}
              <Heading level={1} className="mb-6 text-balance">
                Lavado Profesional de Muebles y Tapetes en{' '}
                <span className="text-primary">Medellín</span>
              </Heading>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Más limpio, más rápido y garantizado. Técnicos expertos, productos seguros 
                y secado rápido. Agenda en minutos por WhatsApp.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8 p-4 bg-white/80 backdrop-blur rounded-lg inline-block">
                <p className="text-sm text-neutral-600 mb-2">Oferta termina en:</p>
                <CountdownTimer endDate={offerEndDate} />
              </div>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <CTAButton
                  href={whatsappLink}
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle className="h-5 w-5" />}
                  pulse
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

              {/* Trust badges inline */}
              <TrustBadges variant="inline" showDescription={false} />
            </div>
          </Container>
        </Section>

        {/* Servicios */}
        <Section background="white" padding="lg">
          <Container>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Nuestros Servicios
              </Badge>
              <Heading level={2} className="mb-4">
                Soluciones de Limpieza Profesional
              </Heading>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Utilizamos equipos de última tecnología y productos eco-amigables
                para garantizar resultados excepcionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="hover:shadow-elevation-2 transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <p className="font-semibold text-primary">
                        {service.price}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* Trust Badges Grid */}
        <Section background="gray" padding="md">
          <Container>
            <TrustBadges variant="grid" />
          </Container>
        </Section>

        {/* Antes y Después */}
        <Section background="white" padding="lg">
          <Container>
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Resultados Que Hablan Por Sí Mismos
              </Heading>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Mira la transformación que logramos en cada servicio
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <BeforeAfterSlider
                beforeImage='/images/portafolio/colchon antes.webp'
                afterImage='/images/portafolio/colchon despues.webp'
                beforeAlt="colchón antes del lavado"
                afterAlt="colchón después del lavado"
              />
            </div>
          </Container>
        </Section>

        {/* Proceso */}
        <Section background="gray" padding="lg">
          <Container>
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Tan Fácil Como 1, 2, 3
              </Heading>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Nuestro proceso es simple, rápido y sin complicaciones
              </p>
            </div>

            <ProcessSteps steps={processSteps} />
          </Container>
        </Section>

        {/* Testimonios */}
        <Section background="white" padding="lg">
          <Container>
            <div className="text-center mb-12">
              <Badge variant="success" className="mb-4">
                ⭐ 4.9/5 de calificación
              </Badge>
              <Heading level={2} className="mb-4">
                Lo Que Dicen Nuestros Clientes
              </Heading>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Más de 500 clientes satisfechos en Medellín y alrededores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Logo Wall */}
        <Section background="gray" padding="md">
          <Container>
            <LogoWall 
              logos={clientLogos}
              title="Empresas que confían en nosotros"
              variant="static"
            />
          </Container>
        </Section>

        {/* CTA Final */}
        <Section background="gradient" padding="lg">
          <Container>
            <div className="text-center">
              <Heading level={2} className="mb-4 text-black">
                ¿Listo Para Tener Tus Muebles Como Nuevos?
              </Heading>
              <p className="text-black/90 text-lg mb-8 max-w-2xl mx-auto">
                Cotización gratis y sin compromiso. Respondemos en minutos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton
                  href={whatsappLink}
                  variant="primary"
                  size="lg"
                  icon={<MessageCircle className="h-5 w-5" />}
                  className="bg-white text-primary hover:bg-neutral-100"
                >
                  Cotizar Ahora
                </CTAButton>
                
                <CTAButton
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  variant="secondary"
                  size="lg"
                  icon={<Phone className="h-5 w-5" />}
                  className="bg-white/10 backdrop-blur text-white border-2 border-white/30 hover:bg-white/20"
                >
                  Llamar: (604) 318 301 5035
                </CTAButton>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* WhatsApp FAB */}
      <WhatsAppFAB />
      
      {/* AI Assistant Button */}
      <AIAssistantButton />
    </>
  )
}