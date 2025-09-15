import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProcessStep {
  number: number
  title: string
  description: string
  icon?: LucideIcon
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  variant?: "vertical" | "horizontal"
  className?: string
}

export function ProcessSteps({
  steps,
  variant = "horizontal",
  className,
}: ProcessStepsProps) {
  return (
    <div
      className={cn(
        variant === "horizontal"
          ? "grid grid-cols-1 md:grid-cols-3 gap-8"
          : "space-y-8",
        className
      )}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            "relative",
            variant === "horizontal" && index < steps.length - 1 && 
            "md:after:content-[''] md:after:absolute md:after:top-12 md:after:left-[60%] md:after:w-full md:after:h-0.5 md:after:bg-gradient-to-r md:after:from-primary md:after:to-transparent"
          )}
        >
          <div className="flex flex-col items-center text-center">
            {/* Número del paso */}
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white">
                {step.icon ? (
                  <step.icon className="h-8 w-8" />
                ) : (
                  <span className="text-2xl font-bold">{step.number}</span>
                )}
              </div>
              {/* Decoración */}
              <div className="absolute -inset-2 bg-primary/10 rounded-full animate-pulse" />
            </div>

            {/* Contenido */}
            <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
              {step.title}
            </h3>
            <p className="text-neutral-600 max-w-xs">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}