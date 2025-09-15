"use client"

import { useCountdown } from "@/hooks/use-countdown"
import { cn } from "@/lib/utils"

interface CountdownTimerProps {
  endDate: Date
  onComplete?: () => void
  className?: string
  showLabels?: boolean
}

export function CountdownTimer({
  endDate,
  onComplete,
  className,
  showLabels = true,
}: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(endDate, onComplete)

  if (isExpired) {
    return (
      <div className={cn("text-center", className)}>
        <p className="text-neutral-600">¡Oferta finalizada!</p>
      </div>
    )
  }

  const timeUnits = [
    { value: days, label: "Días" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Seg" },
  ]

  return (
    <div className={cn("flex items-center justify-center gap-2 md:gap-4", className)}>
      {timeUnits.map((unit, index) => (
        <div key={index} className="text-center">
          <div className="bg-neutral-900 text-white rounded-lg p-2 md:p-3 min-w-[3rem] md:min-w-[4rem]">
            <span className="text-xl md:text-3xl font-bold tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          {showLabels && (
            <span className="text-xs md:text-sm text-neutral-600 mt-1 block">
              {unit.label}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}