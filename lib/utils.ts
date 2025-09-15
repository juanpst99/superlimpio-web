import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases de Tailwind de forma segura
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formatea un número de teléfono para Colombia
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/)
  
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }
  
  return phone
}

/**
 * Genera el mensaje de WhatsApp con información del servicio
 */
export function generateWhatsAppMessage(params: {
  service?: string
  city?: string
  name?: string
}): string {
  let message = 'Hola! Me gustaría solicitar información'
  
  if (params.service) {
    message += ` sobre el servicio de ${params.service}`
  }
  
  if (params.city) {
    message += ` en ${params.city}`
  }
  
  message += '. ¿Podrían ayudarme con una cotización?'
  
  if (params.name) {
    message += ` Mi nombre es ${params.name}.`
  }
  
  return encodeURIComponent(message)
}

/**
 * Valida un número de teléfono colombiano
 */
export function isValidColombianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  // Debe empezar con 57 (código de país) seguido de 10 dígitos
  return /^57[1-9]\d{9}$/.test(cleaned)
}

/**
 * Debounce para optimizar eventos frecuentes
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Calcula el tiempo de lectura estimado
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}