import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'


// Configuración de fuentes con next/font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

// Metadatos globales base
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://superlimpio.com'),
  title: {
    default: 'Superlimpio | Lavado Profesional de Muebles y Tapetes en Medellín',
    template: '%s | Superlimpio'
  },
  description: 'Servicio profesional de lavado de muebles, sofás, tapetes y colchones en Medellín y alrededores. Resultados garantizados, secado rápido y productos seguros.',
  keywords: ['lavado de muebles', 'lavado de tapetes', 'limpieza de sofás', 'lavado de colchones', 'limpieza profesional', 'Medellín', 'Envigado', 'Sabaneta', 'Itagüí', 'Bello'],
  authors: [{ name: 'Superlimpio' }],
  creator: 'Superlimpio',
  publisher: 'Superlimpio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: '/',
    siteName: 'Superlimpio',
    title: 'Superlimpio | Lavado Profesional de Muebles y Tapetes',
    description: 'Servicio profesional de lavado de muebles y tapetes en Medellín. Resultados garantizados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Superlimpio - Lavado Profesional de Muebles',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superlimpio | Lavado Profesional de Muebles',
    description: 'Servicio profesional de lavado de muebles y tapetes en Medellín.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Agregar cuando esté disponible
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0191D1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-white`}>
        {/* Skip to content para accesibilidad */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Saltar al contenido principal
        </a>
        
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}