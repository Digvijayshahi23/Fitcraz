import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function GlobalEffects() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 })
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden">
      {/* Mouse Follow Glow */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-[600px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full opacity-50"
      />

      {/* Cinematic Fog/Smoke Layer */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay animate-pulse-slow">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="fog">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" seed="1">
              <animate attributeName="baseFrequency" dur="60s" values="0.01;0.015;0.01" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="20" />
          </filter>
          <rect width="100%" height="100%" fill="#1a0000" filter="url(#fog)" />
        </svg>
      </div>

      {/* Grain/Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light" />
      
      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
    </div>
  )
}
