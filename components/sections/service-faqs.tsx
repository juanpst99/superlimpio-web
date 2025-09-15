import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface ServiceFAQsProps {
  service: any
}

export function ServiceFAQs({ service }: ServiceFAQsProps) {
  const generalFAQs = [
    {
      question: '¿Cómo agendar el servicio?',
      answer: 'Puedes agendar por WhatsApp o llamando directamente. Te confirmaremos disponibilidad inmediatamente.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos efectivo, transferencia bancaria y pagos con tarjeta. Para empresas ofrecemos facturación.',
    },
    {
      question: '¿Ofrecen garantía?',
      answer: 'Sí, todos nuestros servicios tienen garantía de satisfacción. Si no quedas conforme, volvemos sin costo.',
    },
  ]

  const allFAQs = [...(service.faqs || []), ...generalFAQs]

  return (
    <Section padding="lg">
      <Container size="sm">
        <div className="text-center mb-12">
          <Heading level={2} className="mb-4">
            Preguntas Frecuentes
          </Heading>
          <p className="text-neutral-600">
            Resolvemos las dudas más comunes sobre este servicio
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {allFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}