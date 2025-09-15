"use client"

import { useState, useEffect, useCallback } from "react"

interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export function useCountdown(
  targetDate: Date,
  onComplete?: () => void
): CountdownValues {
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate.getTime() - new Date().getTime()
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState<CountdownValues>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
      
      if (newTimeLeft.isExpired && onComplete) {
        onComplete()
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft, onComplete])

  return timeLeft
}