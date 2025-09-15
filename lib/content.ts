import servicesData from '@/content/services.json'
import citiesData from '@/content/cities.json'

export function getAllServices() {
  return servicesData.services
}

export function getServiceBySlug(slug: string) {
  return servicesData.services.find(service => service.slug === slug)
}

export function getAllCities() {
  return citiesData.cities
}

export function getCityBySlug(slug: string) {
  return citiesData.cities.find(city => city.slug === slug)
}

export function generateServiceCityPages() {
  const services = getAllServices()
  const cities = getAllCities()
  
  const pages = []
  
  for (const city of cities) {
    for (const service of services) {
      pages.push({
        city: city.slug,
        service: service.slug,
        title: `${service.name} en ${city.name}`,
        description: `Servicio de ${service.name.toLowerCase()} en ${city.name}. ${service.shortDescription}. Servicio a domicilio.`,
      })
    }
  }
  
  return pages
}