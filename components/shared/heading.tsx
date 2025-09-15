import { cn } from "@/lib/utils"

interface HeadingProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const headingStyles = {
  1: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold",
  2: "text-3xl md:text-4xl lg:text-5xl font-heading font-bold",
  3: "text-2xl md:text-3xl font-heading font-semibold",
  4: "text-xl md:text-2xl font-heading font-semibold",
  5: "text-lg md:text-xl font-heading font-medium",
  6: "text-base md:text-lg font-heading font-medium",
}

export function Heading({ 
  children, 
  className,
  level = 2,
  as
}: HeadingProps) {
  const Component = as || (`h${level}` as keyof JSX.IntrinsicElements)
  
  return (
    <Component 
      className={cn(
        headingStyles[level],
        "text-neutral-900",
        className
      )}
    >
      {children}
    </Component>
  )
}