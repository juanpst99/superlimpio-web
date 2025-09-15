import { Metadata } from 'next'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones del servicio de Superlimpio.',
}

export default function TermsPage() {
  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs items={[{ label: 'Términos y Condiciones' }]} />
          
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Términos y Condiciones
            </Heading>
            <p className="text-neutral-600">
              Última actualización: Enero 2024
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="sm">
          <div className="prose prose-neutral max-w-none">
            <h2>1. Aceptación de Términos</h2>
            <p>
              Al contratar nuestros servicios, usted acepta estos términos y 
              condiciones en su totalidad.
            </p>

            <h2>2. Servicios</h2>
            <p>
              Superlimpio ofrece servicios profesionales de limpieza de muebles, 
              tapetes, colchones y relacionados en Medellín y área metropolitana.
            </p>

            <h2>3. Cotizaciones y Precios</h2>
            <ul>
              <li>Las cotizaciones tienen validez de 15 días</li>
              <li>Los precios pueden variar según el estado de los elementos</li>
              <li>El pago se realiza al finalizar el servicio</li>
              <li>Aceptamos efectivo, transferencia y tarjetas</li>
            </ul>

            <h2>4. Agendamiento y Cancelaciones</h2>
            <ul>
              <li>Los servicios se agendan con mínimo 24 horas de anticipación</li>
              <li>Cancelaciones sin costo hasta 6 horas antes del servicio</li>
              <li>Cancelaciones tardías pueden generar cargo del 20%</li>
            </ul>

            <h2>5. Garantía del Servicio</h2>
            <p>
              Ofrecemos garantía de satisfacción. Si no está conforme con el 
              resultado, realizaremos un nuevo servicio sin costo adicional 
              dentro de las 48 horas siguientes.
            </p>

            <h2>6. Responsabilidades</h2>
            <h3>Del Cliente:</h3>
            <ul>
              <li>Proporcionar acceso seguro a las áreas de trabajo</li>
              <li>Informar sobre manchas o daños preexistentes</li>
              <li>Retirar objetos de valor o frágiles</li>
            </ul>

            <h3>De Superlimpio:</h3>
            <ul>
              <li>Realizar el servicio con profesionalismo</li>
              <li>Utilizar productos seguros y apropiados</li>
              <li>Respetar la propiedad del cliente</li>
            </ul>

            <h2>7. Limitación de Responsabilidad</h2>
            <p>
              Superlimpio no se responsabiliza por:
            </p>
            <ul>
              <li>Daños preexistentes no informados</li>
              <li>Decoloración por uso previo de productos inadecuados</li>
              <li>Reacciones alérgicas no comunicadas previamente</li>
            </ul>

            <h2>8. Resolución de Conflictos</h2>
            <p>
              Cualquier disputa será resuelta mediante diálogo directo. 
              De no llegar a acuerdo, se someterá a la jurisdicción de 
              los tribunales de Medellín.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Estos términos pueden ser modificados en cualquier momento. 
              Los cambios se publicarán en nuestro sitio web.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Para consultas sobre estos términos:
            </p>
            <ul>
              <li>Email: superlimpio9696@gmail.com</li>
              <li>Teléfono: 3183015035</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  )
}