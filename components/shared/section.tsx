import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "white" | "gray" | "primary" | "gradient"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
}

const backgrounds = {
  white: "bg-white",
  gray: "bg-neutral-50",
  primary: "bg-primary-50",
  gradient: "bg-gradient-to-br from-primary-50 via-white to-accent-50",
}

const paddings = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
}

export function Section({ 
  children, 
  className,
  id,
  background = "white",
  padding = "lg"
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        "relative overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  )
}