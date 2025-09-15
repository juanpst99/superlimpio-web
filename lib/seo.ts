import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  canonical?: string
}

/**
 * Genera metadatos SEO optimizados para páginas
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  noIndex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const siteName = 'Superlimpio'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superlimpio.com'
  
  const finalTitle = title ? `${title} | ${siteName}` : siteName
  const finalDescription = description || 'Servicio profesional de lavado de muebles y tapetes en Medellín.'

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonical || siteUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        }
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
    },
    alternates: canonical ? {
      canonical,
    } : undefined,
  }
}

/**
 * Genera datos estructurados JSON-LD para LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://superlimpio.com',
    name: 'Superlimpio',
    description: 'Servicio profesional de lavado de muebles, sofás, tapetes y colchones en Medellín y alrededores.',
    url: 'https://superlimpio.com',
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Medellín',
      },
      {
        '@type': 'City',
        name: 'Envigado',
      },
      {
        '@type': 'City',
        name: 'Sabaneta',
      },
      {
        '@type': 'City',
        name: 'Itagüí',
      },
      {
        '@type': 'City',
        name: 'Bello',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/superlimpio',
      'https://www.instagram.com/superlimpio',
    ],
  }
}

/**
 * Genera datos estructurados para servicios
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Superlimpio',
    },
    areaServed: {
      '@type': 'State',
      name: 'Antioquia',
    },
    priceRange: service.price || '$$',
  }
}

/**
 * Genera breadcrumbs para navegación estructurada
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superlimpio.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}