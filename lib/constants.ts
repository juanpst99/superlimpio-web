export const SITE_CONFIG = {
  name: 'Superlimpio',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://superlimpio.co',
  description: 'Servicio profesional de lavado de muebles y tapetes en Medellín',
  keywords: [
    'lavado de muebles',
    'limpieza de tapetes',
    'lavado de colchones',
    'limpieza profesional',
    'Medellín',
    'servicio a domicilio'
  ],
}

export const BUSINESS_CONFIG = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Superlimpio',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'superlimpio9696@gmail.com',
  phone: {
    display: '(604) 298-0303',
    value: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+576042980303',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035',
  },
  address: {
    street: '',
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    postalCode: '',
  },
  hours: {
    weekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    saturday: 'Sábado: 8:00 AM - 2:00 PM',
    sunday: 'Domingo: Cerrado',
  },
  social: {
    facebook: 'https://facebook.com/superlimpio',
    instagram: 'https://www.instagram.com/superlimpiomedellin',
  },
}