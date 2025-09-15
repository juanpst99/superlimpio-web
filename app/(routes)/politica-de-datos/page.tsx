import { Metadata } from 'next'
import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'Política de Tratamiento de Datos Personales',
  description: 'Política de privacidad y tratamiento de datos personales de Superlimpio.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section background="gradient" padding="lg">
        <Container>
          <Breadcrumbs items={[{ label: 'Política de Datos' }]} />
          
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={1} className="mb-6">
              Política de Tratamiento de Datos Personales
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
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>Superlimpio</strong>, con domicilio en Medellín, Antioquia, 
              es responsable del tratamiento de los datos personales recolectados 
              a través de este sitio web y nuestros servicios.
            </p>

            <h2>2. Datos que Recolectamos</h2>
            <p>Recolectamos la siguiente información:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Número de teléfono/WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Dirección del servicio</li>
              <li>Información sobre el servicio solicitado</li>
            </ul>

            <h2>3. Finalidad del Tratamiento</h2>
            <p>Los datos personales son utilizados para:</p>
            <ul>
              <li>Contactar al cliente para coordinar servicios</li>
              <li>Enviar cotizaciones y propuestas comerciales</li>
              <li>Realizar seguimiento post-servicio</li>
              <li>Enviar información promocional (con consentimiento previo)</li>
              <li>Cumplir con obligaciones legales y contractuales</li>
            </ul>

            <h2>4. Derechos del Titular</h2>
            <p>Como titular de los datos, usted tiene derecho a:</p>
            <ul>
              <li>Conocer, actualizar y rectificar sus datos personales</li>
              <li>Solicitar prueba de la autorización otorgada</li>
              <li>Ser informado sobre el uso de sus datos</li>
              <li>Revocar la autorización y solicitar la supresión de datos</li>
              <li>Acceder gratuitamente a sus datos personales</li>
            </ul>

            <h2>5. Seguridad de la Información</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas 
              para proteger su información personal contra acceso no autorizado, 
              pérdida o alteración.
            </p>

            <h2>6. Transferencia de Datos</h2>
            <p>
              No compartimos, vendemos ni alquilamos su información personal a 
              terceros sin su consentimiento, excepto cuando sea requerido por ley.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
              Puede configurar su navegador para rechazar cookies, aunque esto 
              podría afectar algunas funcionalidades del sitio.
            </p>

            <h2>8. Modificaciones a la Política</h2>
            <p>
              Nos reservamos el derecho de modificar esta política en cualquier 
              momento. Los cambios serán publicados en esta página.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Para ejercer sus derechos o resolver dudas sobre el tratamiento 
              de sus datos, contáctenos:
            </p>
            <ul>
              <li>Email: superlimpio9696@gmail.com</li>
              <li>Teléfono: 318 3015035</li>
              <li>WhatsApp: 318 3015035</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  )
}