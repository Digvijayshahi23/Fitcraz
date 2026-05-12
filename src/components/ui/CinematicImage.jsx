import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CinematicImage({ src, alt, className, aspectRatio = 'aspect-video' }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Skeleton / Placeholder */}
      <div className={`absolute inset-0 bg-white/5 animate-pulse transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'}`}
      />
      
      {/* Subtle Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent pointer-events-none" />
    </div>
  )
}
