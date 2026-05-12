import { ReactLenis } from 'lenis/react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Basic GSAP Lenis integration if needed for complex scroll-triggered animations
    const update = (time) => {
      ScrollTrigger.update()
    }
    
    gsap.ticker.add(update)
    
    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
