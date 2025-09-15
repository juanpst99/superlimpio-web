import { Shield, Award, Clock, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadge {
  icon: React.ElementType
  title: string
  description?: string
}

const defaultBadges: TrustBadge[] = [
  {
    icon: Shield,
    title: "Garantía Total",
    description: "100% satisfacción"
  },
  {
    icon: Award,
    title: "Profesionales",
    description: "Técnicos expertos"
  },
  {
    icon: Clock,
    title: "Secado Rápido",
    description: "4-6 horas máximo"
  },
  {
    icon: CheckCircle,
    title: "Productos Seguros",
    description: "Eco-amigables"
  },
]

interface TrustBadgesProps {
  badges?: TrustBadge[]
  variant?: "inline" | "grid"
  showDescription?: boolean
  className?: string
}

export function TrustBadges({
  badges = defaultBadges,
  variant = "inline",
  showDescription = true,
  className,
}: TrustBadgesProps) {
  return (
    <div
      className={cn(
        variant === "inline" 
          ? "flex flex-wrap justify-center gap-6 md:gap-8" 
          : "grid grid-cols-2 md:grid-cols-4 gap-4",
        className
      )}
    >
      {badges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <div
            key={index}
            className={cn(
              "flex items-center gap-3",
              variant === "grid" && "flex-col text-center"
            )}
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">{badge.title}</p>
              {showDescription && badge.description && (
                <p className="text-sm text-neutral-600">{badge.description}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}