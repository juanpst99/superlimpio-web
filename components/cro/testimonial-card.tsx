import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  location?: string
  rating: number
  comment: string
  date?: string
  verified?: boolean
  className?: string
}

export function TestimonialCard({
  name,
  location,
  rating,
  comment,
  date,
  verified = true,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? "fill-warning text-warning"
                  : "fill-neutral-200 text-neutral-200"
              )}
            />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="text-neutral-700 mb-4">
          "{comment}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-neutral-900">{name}</p>
            {location && (
              <p className="text-sm text-neutral-600">{location}</p>
            )}
          </div>
          
          <div className="text-right">
            {verified && (
              <span className="text-xs text-success font-medium">
                ✓ Verificado
              </span>
            )}
            {date && (
              <p className="text-xs text-neutral-500 mt-1">{date}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}