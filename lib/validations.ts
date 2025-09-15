interface ContactFormData {
  name: string
  phone: string
  email: string
  city: string
  service: string
  message: string
}

interface ValidationResult {
  isValid: boolean
  errors: Partial<ContactFormData>
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<ContactFormData> = {}
  
  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'El nombre es requerido (mínimo 2 caracteres)'
  }
  
  // Validate phone
  const phoneRegex = /^[0-9]{10}$/
  const cleanPhone = data.phone.replace(/\D/g, '')
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    errors.phone = 'Ingresa un número de teléfono válido (10 dígitos)'
  }
  
  // Validate email (optional but if provided, must be valid)
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.email = 'Ingresa un email válido'
    }
  }
  
  // Validate city
  if (!data.city) {
    errors.city = 'Selecciona una ciudad'
  }
  
  // Validate service
  if (!data.service) {
    errors.service = 'Selecciona un servicio'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
}