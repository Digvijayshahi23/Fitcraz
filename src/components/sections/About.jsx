import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const Counter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value)
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-5xl md:text-6xl font-black italic text-brand-red tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-white/40 uppercase text-xs font-bold tracking-[0.2em] mt-2">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-brand-black">
      {/* Background Text Strip */}
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[15rem] font-black italic uppercase text-white inline-block"
        >
          TRANSFORMATION • DISCIPLINE • POWER • STRENGTH • TRANSFORMATION • DISCIPLINE • POWER • STRENGTH •
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="Elite Athlete" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl hidden md:block">
              <p className="text-brand-yellow font-black italic text-2xl tracking-tighter mb-1">
                100% ENERGY
              </p>
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                No Excuses. Only Results.
              </p>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-red/10 blur-[100px] rounded-full" />
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
            >
              OUR PHILOSOPHY
            </motion.h4>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter text-white mb-8"
            >
              WE DON’T BUILD BODIES. <br />
              <span className="text-brand-yellow">WE BUILD MONSTERS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/60 mb-12 leading-relaxed"
            >
              FITCRAZ is not just a gym. It's an elite transformation-focused fitness movement. We combine high-performance coaching with a cinematic environment to push your limits beyond what you thought possible.
            </motion.p>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <Counter value="10" label="Active Members" suffix="K+" />
              <Counter value="50" label="Expert Trainers" suffix="+" />
              <Counter value="24" label="Access Hours" suffix="/7" />
              <Counter value="100" label="Transformation" suffix="%" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="flex items-center gap-4 text-white group">
                <span className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:bg-brand-red transition-all duration-500">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1" />
                </span>
                <span className="text-xl font-black uppercase italic tracking-tighter group-hover:text-brand-red transition-colors duration-300">
                  Watch Our Story
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
