import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { Heading } from '@/components/shared/heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTAButton } from '@/components/cro/cta-button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'

interface ServicePricingProps {
  service: any
}

export function ServicePricing({ service }: ServicePricingProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'

  // Tabla de precios específica por servicio
  const priceTables: Record<string, any> = {
    'lavado-de-muebles': {
      title: 'Precios de Lavado de Muebles',
      items: [
        { name: 'Silla individual', price: 35000, unit: 'unidad' },
        { name: 'Sofá 2 puestos', price: 95000, unit: 'unidad' },
        { name: 'Sofá 3 puestos', price: 120000, unit: 'unidad' },
        { name: 'Sofá en L (4-5 puestos)', price: 180000, unit: 'unidad' },
        { name: 'Sofá en L grande (6+ puestos)', price: 220000, unit: 'unidad' },
        { name: 'Poltronas/Puff', price: 35000, unit: 'unidad' },
        { name: 'Silla de comedor', price: 15000, unit: 'unidad' },
        { name: 'Cabecera de cama', price: 70000, unit: 'unidad' },
      ],
      notes: [
        'Los precios pueden variar por distancias y/o suciedad',
        'Incluye aspirado, lavado profundo y secado',
        'Productos hipoalergénicos incluidos',
        'Descuento del 10% por 3+ piezas',
      ]
    },
    'lavado-de-tapetes': {
      title: 'Precios de Lavado de Tapetes',
      items: [
        { name: 'Tapete pequeño (hasta 2m²)', price: 40000, unit: 'unidad' },
        { name: 'Tapete mediano (2-4m²)', price: 35000, unit: 'unidad' },
        { name: 'Tapete grande (4-6m²)', price: 34000, unit: 'unidad' },
        { name: 'Tapete persa/Oriental', price: 50000, unit: 'por m²' },
        { name: 'Tapete de lana virgen', price: 50000, unit: 'unidad' },
      ],
      notes: [
        'Tratamiento según tipo de fibra',
        'Eliminación de manchas incluida',
        'Servicio de recogida y entrega disponible',
      ]
    },
    'lavado-de-colchones': {
      title: 'Precios de Lavado de Colchones',
      items: [
        { name: 'Colchón sencillo', price: 90000, unit: 'unidad' },
        { name: 'Colchón semidoble', price: 95000, unit: 'unidad' },
        { name: 'Colchón doble', price: 100000, unit: 'unidad' },
        { name: 'Colchón Queen', price: 120000, unit: 'unidad' },
        { name: 'Colchón King', price: 140000, unit: 'unidad' },
        { name: 'Base cama (cualquier tamaño)', price: 50000, unit: 'unidad' },
        { name: 'Almohada', price: 15000, unit: 'unidad' },
      ],
      notes: [
        'Los precios pueden variar por distancias y/o suciedad',
        'Tratamiento según tipo de fibra',
        'Desinfección y eliminación de ácaros',
        'Tratamiento antimanchas',
        'Secado en el sitio',
      ]
    },
    'cojineria-vehiculos': {
      title: 'Precios de Cojinería de Vehículos',
      items: [
        { name: 'Auto pequeño (2-4 puertas)', price: 130000, unit: 'completo' },
        { name: 'Auto mediano/SUV', price: 150000, unit: 'completo' },
        { name: 'Camioneta/Van', price: 180000, unit: 'completo' },
        { name: 'Solo asientos delanteros', price: 70000, unit: 'servicio' },
        { name: 'Solo asientos traseros', price: 70000, unit: 'servicio' },
        { name: 'Tapetes del vehículo', price: 60000, unit: 'juego' },
        { name: 'Techo del vehículo', price: 60000, unit: 'servicio' },
      ],
      notes: [
        'Los precios pueden variar por distancias y/o suciedad',
        'Servicio a domicilio',
        'Incluye aspirado completo',
        'Aromatización incluida',
      ]
    },
    'cortinas': {
      title: 'Precios de Lavado de Cortinas',
      items: [
        { name: 'Cortina liviana (por panel)', price: 20000, unit: 'panel' },
        { name: 'Cortina pesada (por panel)', price: 30000, unit: 'panel' },
        { name: 'Cortina blackout (por panel)', price: 90000, unit: 'panel' },
        { name: 'Desmonte e instalación', price: 35000, unit: 'servicio' },
      ],
      notes: [
        'Los precios pueden variar por distancias y/o suciedad',
        'Lavado según tipo de tela',
        'Planchado incluido en cortinas de tela',
        'Servicio de desmonte e instalación opcional',
      ]
    }
  }

  const priceTable = priceTables[service.slug] || priceTables['lavado-de-muebles']

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="text-center mb-12">
          <Heading level={2} className="mb-4">
            {priceTable.title}
          </Heading>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Precios transparentes y sin costos ocultos. Incluye servicio a domicilio 
            sin cargo adicional en toda el área metropolitana.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-50 border-b">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold text-neutral-900">
                        Servicio
                      </th>
                      <th className="text-right px-6 py-4 font-semibold text-neutral-900">
                        Precio
                      </th>
                      <th className="text-right px-6 py-4 font-semibold text-neutral-900">
                        Por
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.items.map((item: any, index: number) => (
                      <tr key={index} className="border-b hover:bg-neutral-50">
                        <td className="px-6 py-4 text-neutral-700">
                          {item.name}
                        </td>
                        <td className="text-right px-6 py-4 font-semibold text-primary">
                          ${item.price.toLocaleString('es-CO')}
                        </td>
                        <td className="text-right px-6 py-4 text-neutral-600">
                          {item.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Notas */}
              <div className="p-6 bg-neutral-50">
                <p className="font-semibold text-neutral-900 mb-3">Incluye:</p>
                <ul className="space-y-2">
                  {priceTable.notes.map((note: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-neutral-600 mb-4">
              ¿Necesitas un presupuesto personalizado?
            </p>
            <CTAButton
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hola! Necesito cotizar ${service.name}`
              )}`}
              variant="primary"
              size="lg"
            >
              Solicitar Cotización
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}