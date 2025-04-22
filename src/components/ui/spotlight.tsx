
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({
  className = '',
  fill = 'white',
}: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0.5) // Увеличиваем начальную непрозрачность
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return
      
      const div = divRef.current
      const rect = div.getBoundingClientRect()
      
      setPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      })
    }

    const handleMouseEnter = () => {
      setOpacity(0.8) // Увеличиваем яркость при наведении
    }

    const handleMouseLeave = () => {
      setOpacity(0.5) // Менее прозрачный при отведении курсора
    }

    const element = divRef.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-30 transition duration-300', // Увеличиваем z-index до 30
        className
      )}
      style={{ opacity: isClient ? opacity : 0 }}
      ref={divRef}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: isClient
            ? `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${fill}25, transparent 50%)`
            : '',
        }}
      />
    </div>
  )
}
