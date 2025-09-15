import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superlimpio.co'
  
  // Páginas estáticas principales
  const staticPages = [
    '',
    '/servicios',
    '/ciudades',
    '/portafolio',
    '/precios',
    '/testimonios',
    '/contacto',
    '/politica-de-datos',
    '/terminos',
  ]

  const staticUrls = staticPages.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Servicios (se generarán dinámicamente en etapas posteriores)
  const services = [
    'lavado-de-muebles',
    'lavado-de-tapetes',
    'lavado-de-colchones',
    'lavado-de-cojineria-vehiculos',
    'lavado-instalacion-cortinas',
  ]

  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/servicios/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Ciudades (se generarán dinámicamente en etapas posteriores)
  const cities = ['medellin', 'envigado', 'sabaneta', 'itagui', 'bello']

  const cityUrls = cities.flatMap(city => 
    services.map(service => ({
      url: `${baseUrl}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  )

  return [...staticUrls, ...serviceUrls, ...cityUrls]
}