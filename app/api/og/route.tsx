import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Obtener parámetros
    const title = searchParams.get('title') || 'Superlimpio'
    const description = searchParams.get('description') || 'Lavado profesional de muebles y tapetes'
    const type = searchParams.get('type') || 'default'
    
    // Fuentes (necesitarás agregar las fuentes si quieres usar custom fonts)
    const interBold = fetch(
      new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())
    
    const interRegular = fetch(
      new URL('../../../public/fonts/Inter-Regular.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #E6F5FB 0%, #FFFFFF 50%, #FFF0EB 100%)',
            position: 'relative',
          }}
        >
          {/* Patrón decorativo */}
          <div
            style={{
              position: 'absolute',
              top: -100,
              left: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: '#0191D1',
              opacity: 0.1,
              filter: 'blur(100px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: '#FF6B35',
              opacity: 0.1,
              filter: 'blur(100px)',
            }}
          />
          
          {/* Logo/Marca */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                background: '#0191D1',
                marginRight: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 32,
                fontWeight: 'bold',
              }}
            >
              S
            </div>
            <span
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#171717',
              }}
            >
              Superlimpio
            </span>
          </div>
          
          {/* Título */}
          <div
            style={{
              fontSize: type === 'service' ? 56 : 64,
              fontWeight: 'bold',
              color: '#171717',
              textAlign: 'center',
              lineHeight: 1.2,
              maxWidth: '80%',
              marginBottom: 24,
            }}
          >
            {title}
          </div>
          
          {/* Descripción */}
          {description && (
            <div
              style={{
                fontSize: 24,
                color: '#525252',
                textAlign: 'center',
                maxWidth: '70%',
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}
          
          {/* Badge */}
          {type === 'service' && (
            <div
              style={{
                position: 'absolute',
                top: 40,
                right: 40,
                background: '#10B981',
                color: 'white',
                padding: '8px 20px',
                borderRadius: 20,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              Servicio Disponible
            </div>
          )}
          
          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 40,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <span style={{ fontSize: 18, color: '#525252' }}>
                Garantía Total
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <span style={{ fontSize: 18, color: '#525252' }}>
                Secado Rápido
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
              <span style={{ fontSize: 18, color: '#525252' }}>
                Productos Seguros
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error('OG Image generation failed:', e)
    return new Response('Failed to generate image', { status: 500 })
  }
}