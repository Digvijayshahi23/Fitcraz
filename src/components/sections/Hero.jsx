import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Play, Zap, Target, Trophy, ArrowRight, Shield } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, 250])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 1.2])

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const springX = useSpring(mousePos.x, { stiffness: 100, damping: 30 })
  const springY = useSpring(mousePos.y, { stiffness: 100, damping: 30 })

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-brand-black">
      {/* Cinematic Media Base Layer */}
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale opacity-30 contrast-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4" type="video/mp4" />
        </video>

        {/* Dramatic Lighting & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-brand-void/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-void/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,59,48,0.05)_0%,transparent_60%)]" />
      </motion.div>

      {/* Dynamic Depth Layer */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </motion.div>

      {/* Main Content: Editorial Typography */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center max-w-7xl w-full"
        >
          {/* Staggered Heading System */}
          <div className="overflow-hidden mb-12 md:mb-16">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,18vw,12rem)] font-display font-black leading-[0.75] tracking-cinematic text-white uppercase italic text-center text-shadow-premium"
            >
              Forged <br />
              <span className="text-brand-red not-italic inline-block transform -skew-x-6">Through</span> <br />
              Performance.
            </motion.h1>
          </div>

          {/* Luxury Subline & CTA Ensemble */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-12"
          >
            <p className="text-brand-gray text-xl md:text-3xl font-medium max-w-2xl leading-[1.1] text-center tracking-tight opacity-80">
              The world's most advanced athletic ecosystem. <br className="hidden md:block" />
              Engineered for those who refuse to stay static.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <button className="px-16 py-8 bg-brand-red text-white rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-[0_25px_60px_rgba(255,59,48,0.4)] hover:scale-105 hover:neon-glow-red transition-all duration-500 group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-4">
                  JOIN THE ELITE
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-difference" />
              </button>
              
              <button className="px-16 py-8 glass text-white rounded-full font-black text-xs uppercase tracking-[0.5em] border border-white/10 hover:bg-white hover:text-brand-black transition-all duration-500 flex items-center gap-4 group">
                EXPLORE PROGRAMS
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Motif */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-6 opacity-40">
        <span className="text-[9px] text-white uppercase tracking-[0.6em] font-black">SCROLL TO EVOLVE</span>
        <motion.div
          animate={{ height: [40, 80, 40] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-brand-red to-transparent"
        />
      </div>
    </section>
  )
}
