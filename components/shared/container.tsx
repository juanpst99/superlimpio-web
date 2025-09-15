import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "xl" | "full"
}

const containerSizes = {
  default: "max-w-7xl",
  sm: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-[90rem]",
  full: "max-w-full",
}

export function Container({ 
  children, 
  className,
  size = "default" 
}: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto w-full px-4 sm:px-6 lg:px-8",
      containerSizes[size],
      className
    )}>
      {children}
    </div>
  )
}