import { CheckCircle } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent } from '@/components/ui/card'

interface ServiceFeaturesProps {
  service: any
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <Section padding="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Heading level={2} className="mb-6">
              Características del Servicio
            </Heading>
            <div className="space-y-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Heading level={2} className="mb-6">
              Beneficios
            </Heading>
            <div className="grid gap-4">
              {service.benefits.map((benefit: string, index: number) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="p-4">
                    <p className="text-neutral-700">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}