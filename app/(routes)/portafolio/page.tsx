import { Metadata } from 'next'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { BeforeAfterSlider } from '@/components/cro/before-after-slider'

export const metadata: Metadata = {
  title: 'Portafolio - Nuestros Trabajos',
  description: 'Mira los resultados de nuestros servicios de limpieza. Antes y después de lavado de muebles, tapetes y más.',
}

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Sofá de 2 puestos - El Poblado',
      category: 'Muebles',
      before: '/images/portafolio/sofa antes.webp',
      after: '/images/portafolio/sofa despues.webp',
    },
    {
      id: 2,
      title: 'Tapete persa - Envigado',
      category: 'Tapetes',
      before: '/images/portafolio/tapete antes.webp',
      after: '/images/portafolio/tapete despues.webp',
    },
    {
      id: 3,
      title: 'Colchón King Size - Sabaneta',
      category: 'Colchones',
      before: '/images/portafolio/colchon antes.webp',
      after: '/images/portafolio/colchon despues.webp',
    },
  ]

  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Portafolio de Trabajos Realizados
            </Heading>
            <p className="text-lg text-neutral-600">
              Resultados reales de nuestros servicios. La calidad habla por sí misma.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="space-y-4">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt={`${project.title} - Antes`}
                  afterAlt={`${project.title} - Después`}
                />
                <div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-neutral-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}