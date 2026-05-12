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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      {/* Cinematic Media Layer */}
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[2s]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4" type="video/mp4" />
        </video>

        {/* Gradients & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-brand-red/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      {/* Floating Elements (Parallax) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 blur-[150px] rounded-full" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ opacity }}
          className="flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,8.5rem)] font-display font-black leading-[0.8] tracking-tighter text-white uppercase italic mb-12"
          >
            Forged <br />
            Through <span className="text-brand-red not-italic">Performance.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-16"
          >
            <p className="text-brand-gray text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
              Experience the pinnacle of athletic discipline. Join the elite global community dedicated to pushing beyond limits.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-black overflow-hidden bg-brand-dark">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-brand-black bg-brand-red flex items-center justify-center text-[10px] font-black shadow-[0_0_20px_rgba(255,59,48,0.5)]">
                  +2k
                </div>
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Active Athletes</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="px-12 py-6 bg-brand-red text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(255,59,48,0.3)] hover:scale-105 transition-transform flex items-center gap-4 group">
              JOIN THE ELITE
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-6 glass-dark text-white rounded-full font-black text-xs uppercase tracking-[0.3em] border border-white/10 hover:bg-white hover:text-brand-black transition-all flex items-center gap-4 group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-black/10 transition-colors">
                <Play size={12} className="fill-current ml-1" />
              </div>
              EXPLORE PROGRAMS
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Telemetry Overlay */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-30 pointer-events-none">
        <div className="flex gap-12">
          {[
            { icon: <Zap size={18} />, label: "PEAK OUTPUT", val: "1.2kW" },
            { icon: <Shield size={18} />, label: "SYSTEM STATUS", val: "ELITE" },
            { icon: <Target size={18} />, label: "ACCURACY", val: "98.5%" }
          ].map((item, i) => (
            <div key={i} className="hidden md:block">
              <div className="flex items-center gap-2 text-brand-red mb-1">
                {item.icon}
                <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
              </div>
              <div className="text-[10px] text-white font-black italic tracking-widest uppercase">{item.val}</div>
            </div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-[8px] text-white/40 uppercase tracking-[0.4em] font-black rotate-90 origin-right translate-x-2">SCROLL TO EVOLVE</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-brand-red to-transparent" />
        </motion.div>
      </div>

      {/* Cinematic Scanning Line */}
      <motion.div
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-brand-red/10 blur-[2px] z-30 pointer-events-none"
      />
    </section>
  )
}
