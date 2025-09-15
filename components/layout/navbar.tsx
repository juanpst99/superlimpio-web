"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { MobileMenu } from './mobile-menu'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Ciudades', href: '/ciudades' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Precios', href: '/precios' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573183015035'
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+576042980303'
  const whatsappMessage = encodeURIComponent('Hola! Quisiera información sobre sus servicios.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-elevation-1 py-4"
            : "bg-transparent py-6"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
  {/* Coloca tu logo en /public/logo.png */}
  <Image
    src="/logo.png"
    alt="Superlimpio"
    width={40}
    height={40}
    className="rounded-lg"
  />
  <span className="font-heading font-bold text-xl text-neutral-900">
    Superlimpio
  </span>
</Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-primary hover:text-primary-600"
              >
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="hidden xl:inline">Llamar</span>
                </a>
              </Button>
              
              <Button
                size="sm"
                className="bg-accent hover:bg-accent-600 text-white"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Cotizar
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-primary"
              aria-label="Menú"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      />

      {/* Spacer para compensar el navbar fixed */}
      <div className="h-20 lg:h-24" />
    </>
  )
}