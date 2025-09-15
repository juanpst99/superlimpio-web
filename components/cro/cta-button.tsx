"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary" | "whatsapp"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  pulse?: boolean
}

const variants = {
  primary: "bg-accent hover:bg-accent-600 text-white shadow-elevation-2 hover:shadow-elevation-3",
  secondary: "bg-primary hover:bg-primary-600 text-white",
  whatsapp: "bg-[#25D366] hover:bg-[#20BA5C] text-white",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export function CTAButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  pulse = false,
}: CTAButtonProps) {
  const buttonClass = cn(
    variants[variant],
    sizes[size],
    "font-semibold transition-all duration-200 transform hover:scale-105",
    fullWidth && "w-full",
    pulse && "animate-pulse-slow",
    className
  )

  const content = (
    <>
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </>
  )

  if (href) {
    return (
      <Button asChild className={buttonClass} disabled={disabled}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </Button>
    )
  }

  return (
    <Button 
      onClick={onClick} 
      className={buttonClass} 
      disabled={disabled || loading}
    >
      {content}
    </Button>
  )
}