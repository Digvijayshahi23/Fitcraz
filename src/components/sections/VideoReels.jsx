import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reels = [
  { url: "https://assets.mixkit.co/videos/preview/mixkit-athlete-lifting-heavy-weights-in-the-gym-23215-large.mp4", title: "PUSH" },
  { url: "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4", title: "PULL" },
  { url: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-man-training-with-dumbbells-23213-large.mp4", title: "GRIND" },
  { url: "https://assets.mixkit.co/videos/preview/mixkit-man-running-on-a-treadmill-in-the-gym-23212-large.mp4", title: "ENDURE" },
  { url: "https://assets.mixkit.co/videos/preview/mixkit-boxer-training-with-a-punching-bag-23211-large.mp4", title: "STRIKE" }
]

export default function VideoReels() {
  const horizontalRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        horizontalRef.current,
        { x: 0 },
        {
          x: "-80%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 1,
            pin: true,
          }
        }
      )
      return () => pin.kill()
    }, triggerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={triggerRef} className="relative overflow-hidden bg-brand-black">
      <div className="absolute top-20 left-6 z-20">
        <h4 className="text-brand-yellow font-black uppercase tracking-[0.4em] mb-4 text-sm italic">CINEMATIC REELS</h4>
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white">THE REEL <span className="text-brand-red">INTENSITY</span></h2>
      </div>

      <div ref={horizontalRef} className="flex h-screen items-center px-6 gap-6 w-[500vw]">
        {reels.map((reel, idx) => (
          <div 
            key={idx} 
            className="relative h-[80vh] w-[80vw] md:w-[40vw] flex-shrink-0 rounded-[2rem] overflow-hidden group border border-white/10"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
              <source src={reel.url} type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-12 left-12">
              <h3 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-white leading-none">
                {reel.title}
              </h3>
              <p className="text-brand-yellow font-black uppercase tracking-[0.2em] text-sm mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Phase 0{idx + 1} // Advanced Training
              </p>
            </div>

            {/* Shine sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>
        ))}
      </div>
    </section>
  )
}
