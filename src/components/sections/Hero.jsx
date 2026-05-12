import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import BackgroundParticles from '../ui/BackgroundParticles'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <BackgroundParticles />
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          {/* Using a high-quality placeholder gym video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-brand-red/5" />
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div 
          style={{ y: y1, opacity }}
          className="max-w-5xl mx-auto"
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-brand-yellow font-black uppercase tracking-[0.4em] mb-4 text-sm md:text-base italic"
          >
            TRAIN INSANE • STAY FIT • LIVE CRAZ
          </motion.h4>
          
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="text-7xl md:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter text-white mb-8"
          >
            UNLEASH <br /> 
            <span className="text-transparent border-t-2 border-b-2 border-white/20 px-4 inline-block my-2">
              YOUR INNER
            </span> <br />
            <span className="text-brand-red neon-text-red">BEAST</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto mb-12"
          >
            Train harder. Push further. Become unstoppable. The elite global movement for those who crave more than just a workout.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="group relative bg-brand-red text-white px-10 py-5 rounded-full font-black uppercase italic tracking-tighter text-xl overflow-hidden transition-all duration-300 hover:scale-105 neon-glow-red">
              <span className="relative z-10">Start Transformation</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-black font-black uppercase italic tracking-tighter text-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo z-20">
                Start Now
              </span>
            </button>
            
            <button className="glass-dark border-white/20 text-white px-10 py-5 rounded-full font-black uppercase italic tracking-tighter text-xl hover:bg-white/10 transition-all duration-300">
              Explore Membership
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 uppercase text-[10px] tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>

      {/* Mouse Reactive Glow Effect (Simplified) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),#ff1a1a_0%,transparent_50%)]" />
    </section>
  )
}
