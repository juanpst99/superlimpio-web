import { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { TestimonialCard } from '@/components/cro/testimonial-card'
import { Badge } from '@/components/ui/badge'
import { CTAButton } from '@/components/cro/cta-button'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'Testimonios - Lo Que Dicen Nuestros Clientes',
  description: 'Lee las experiencias de nuestros clientes con el servicio de lavado de muebles en Medellín. Más de 500 clientes satisfechos.',
}

export default function TestimonialsPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  
  const testimonials = [
    {
      name: 'María González',
      location: 'El Poblado, Medellín',
      rating: 5,
      comment: 'Excelente servicio! Mis muebles quedaron como nuevos. El personal fue muy profesional y puntual. El secado fue más rápido de lo esperado.',
      date: 'Hace 3 días',
      service: 'Lavado de Muebles',
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Envigado',
      rating: 5,
      comment: 'Contraté el servicio para lavar los muebles de toda mi casa. Quedé impresionado con los resultados. Eliminaron manchas que creí imposibles.',
      date: 'Hace 1 semana',
      service: 'Lavado de Muebles',
    },
    {
      name: 'Ana Martínez',
      location: 'Sabaneta',
      rating: 5,
      comment: 'Muy satisfecha con el lavado de mis tapetes persas. Los trataron con mucho cuidado y quedaron hermosos. Los colores revivieron.',
      date: 'Hace 2 semanas',
      service: 'Tapetes y Alfombras',
    },
    {
      name: 'Luis Fernández',
      location: 'Laureles, Medellín',
      rating: 5,
      comment: 'El servicio de lavado de colchones fue excelente. Mi familia con alergias notó la diferencia inmediatamente. Muy recomendado.',
      date: 'Hace 5 días',
      service: 'Lavado de Colchones',
    },
    {
      name: 'Patricia López',
      location: 'Itagüí',
      rating: 5,
      comment: 'Lavaron el interior de mi carro y quedó espectacular. Parecía nuevo. El precio fue muy justo para la calidad del trabajo.',
      date: 'Hace 1 mes',
      service: 'Cojinería de Vehículos',
    },
    {
      name: 'Roberto Silva',
      location: 'Bello',
      rating: 5,
      comment: 'Excelente atención desde el primer contacto. Cumplieron con todo lo prometido y el resultado superó mis expectativas.',
      date: 'Hace 3 semanas',
      service: 'Lavado de Muebles',
    },
  ]

  const stats = {
    totalReviews: 500,
    averageRating: 4.9,
    fiveStars: 450,
    fourStars: 40,
    threeStars: 10,
    twoStars: 0,
    oneStars: 0,
  }

  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs items={[{ label: 'Testimonios' }]} />
          
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Lo Que Dicen Nuestros Clientes
            </Heading>
            <p className="text-lg text-neutral-600 mb-8">
              Más de 500 familias en Medellín confían en nosotros para el cuidado 
              de sus muebles y tapetes. Lee sus experiencias.
            </p>
            
            {/* Rating summary */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-3xl font-bold">{stats.averageRating}</span>
            </div>
            <p className="text-neutral-600">
              Basado en {stats.totalReviews} reseñas verificadas
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section background="white" padding="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm">5</span>
                <Star className="h-4 w-4 fill-warning text-warning" />
              </div>
              <div className="bg-neutral-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-warning h-2 rounded-full" 
                  style={{ width: `${(stats.fiveStars / stats.totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-xs text-neutral-600">{stats.fiveStars}</span>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm">4</span>
                <Star className="h-4 w-4 fill-warning text-warning" />
              </div>
              <div className="bg-neutral-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-warning h-2 rounded-full" 
                  style={{ width: `${(stats.fourStars / stats.totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-xs text-neutral-600">{stats.fourStars}</span>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm">3</span>
                <Star className="h-4 w-4 fill-warning text-warning" />
              </div>
              <div className="bg-neutral-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-warning h-2 rounded-full" 
                  style={{ width: `${(stats.threeStars / stats.totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-xs text-neutral-600">{stats.threeStars}</span>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm">2</span>
                <Star className="h-4 w-4 fill-neutral-300 text-neutral-300" />
              </div>
              <div className="bg-neutral-200 rounded-full h-2 mb-1" />
              <span className="text-xs text-neutral-600">0</span>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm">1</span>
                <Star className="h-4 w-4 fill-neutral-300 text-neutral-300" />
              </div>
              <div className="bg-neutral-200 rounded-full h-2 mb-1" />
              <span className="text-xs text-neutral-600">0</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials grid */}
      <Section padding="lg">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <Badge 
                  variant="outline" 
                  className="absolute -top-2 -right-2 z-10 bg-white"
                >
                  {testimonial.service}
                </Badge>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Mostrando 6 de {stats.totalReviews} testimonios
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Quote className="h-12 w-12 text-white/50 mx-auto mb-4" />
            <Heading level={2} className="mb-4 text-black">
              Únete a Cientos de Clientes Satisfechos
            </Heading>
            <p className="text-black/90 mb-8">
              Tu satisfacción es nuestra prioridad. Agenda tu servicio hoy 
              y experimenta la diferencia.
            </p>
            <CTAButton
              href={`https://wa.me/${whatsappNumber}`}
              variant="primary"
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100"
            >
              Agenda Tu Servicio Ahora
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}