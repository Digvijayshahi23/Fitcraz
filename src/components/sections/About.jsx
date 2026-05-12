import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Sparkles, Activity, ShieldCheck, Zap, ArrowRight, Target } from 'lucide-react'

const Counter = ({ value, label, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseFloat(value)
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-5xl md:text-6xl font-display font-black italic text-white tracking-tighter leading-none mb-4">
        {prefix}{count.toFixed(value.includes('.') ? 1 : 0)}{suffix}
      </div>
      <div className="text-brand-red uppercase text-[9px] font-black tracking-[0.4em] opacity-60">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-48 overflow-hidden bg-brand-black border-b border-white/5">
      {/* Background Text Strip */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-[15rem] font-display font-black uppercase text-white inline-block italic"
        >
          LEGACY • PERFORMANCE • DISCIPLINE • POWER • LEGACY • PERFORMANCE • DISCIPLINE • POWER •
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5.5] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Elite Performance Arena"
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90" />
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-12 glass-dark p-10 rounded-[3rem] border border-white/10 hidden xl:block backdrop-blur-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-brand-red flex items-center justify-center shadow-[0_0_20px_#FF3B30]">
                  <Activity className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-[10px] text-white font-black uppercase tracking-[0.3em]">Live Bio-Telemetry</span>
              </div>
              <p className="text-white font-display font-black italic text-3xl tracking-tight mb-2 uppercase">
                Peak Output
              </p>
              <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em]">
                System Synchronized
              </p>
            </motion.div>

            {/* Glowing Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-red/5 blur-[150px] rounded-full" />
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Target className="w-5 h-5 text-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">The Elite Legacy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white mb-12 uppercase italic"
            >
              Forging the <br />
              <span className="text-brand-red not-italic">Extraordinary.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-brand-gray mb-20 leading-relaxed font-medium opacity-80"
            >
              Antigravity is the world's most advanced athletic ecosystem. We integrate cinematic design with world-class bio-technology to push the boundaries of human performance.
            </motion.p>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-y-16 gap-x-12 mb-20">
              <Counter value="500" label="Global Evolutions" suffix="+" />
              <Counter value="25" label="Elite Architects" suffix="+" />
              <Counter value="12" label="Atmospheric Arenas" suffix="" />
              <Counter value="98" label="Success Protocol" suffix="%" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="group flex items-center gap-8 text-white">
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-700 relative overflow-hidden shadow-2xl">
                  <Zap className="w-8 h-8 relative z-10 group-hover:scale-110 group-hover:fill-white transition-all" />
                  <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-brand-red font-black uppercase tracking-[0.4em] mb-2">Our Mission</div>
                  <div className="text-2xl font-display font-black italic tracking-tight uppercase">Watch The Film</div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
