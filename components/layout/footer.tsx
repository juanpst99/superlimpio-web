import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import Image from 'next/image'


const services = [
  { name: "Lavado de Muebles", href: "/servicios/lavado-de-muebles" },
  { name: "Tapetes y Alfombras", href: "/servicios/lavado-de-tapetes" },
  { name: "Colchones", href: "/servicios/lavado-de-colchones" },
  { name: "Cojinería de Vehículos", href: "/servicios/cojineria-vehiculos" },
  { name: "Cortinas", href: "/servicios/cortinas" },
]

const cities = [
  { name: "Medellín", href: "/medellin" },
  { name: "Envigado", href: "/envigado" },
  { name: "Sabaneta", href: "/sabaneta" },
  { name: "Itagüí", href: "/itagui" },
  { name: "Bello", href: "/bello" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+573183015035"
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "superlimpio9696@gmail.com"
  const phoneDigits = phoneNumber.replace(/\D/g, "")

  return (
    <footer className="bg-neutral-900 text-white">
      <Section padding="lg" background="white" className="!bg-neutral-900">
        <Container>
          {/* Main Footer Content */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
  <Image
    src="/logo.png"  // <- Logo blanco para el footer
    alt="Superlimpio"
    width={40}
    height={40}
  />
  <span className="font-heading font-bold text-xl">
    Superlimpio
  </span>
</div>

              <p className="mb-6 text-neutral-400">
                Servicio profesional de lavado de muebles y tapetes en Medellín y alrededores.
                Resultados garantizados con los mejores productos y técnicos expertos.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/superlimpio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-primary"
                  aria-label="Facebook"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>

                <a
                  href="https://www.instagram.com/superlimpiomedellin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-primary"
                  aria-label="Instagram"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Servicios</h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-neutral-400 transition-colors hover:text-white"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Cobertura</h3>
              <ul className="space-y-2">
                {cities.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-neutral-400 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <div>
                    <a
                      href={`tel:${phoneDigits}`}
                      className="text-neutral-400 transition-colors hover:text-white"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <a
                    href={`mailto:${email}`}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {email}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-neutral-400">Medellín, Antioquia</span>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <div className="text-neutral-400">
                    <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p>Sáb: 8:00 AM - 2:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-neutral-400 md:text-left">
                © {currentYear} Superlimpio. Todos los derechos reservados.
              </p>

              <div className="flex gap-6 text-sm">
                <Link
                  href="/politica-de-datos"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  Política de Datos
                </Link>
                <Link
                  href="/terminos"
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  Términos y Condiciones
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
