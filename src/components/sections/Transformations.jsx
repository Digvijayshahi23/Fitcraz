import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, TrendingUp, ShieldCheck, Trophy, ArrowRight } from 'lucide-react'

const transformations = [
  {
    name: "Viktor Petrov",
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    stats: [
      { label: "BODY FAT", val: "-18%" },
      { label: "LEAN MASS", val: "+9KG" },
      { label: "PEAK POWER", val: "+45%" }
    ],
    quote: "Fitcraz protocols redefined what I thought was biologically possible. This is true metamorphosis."
  },
  {
    name: "Elena Vance",
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "STRENGTH", val: "+120%" },
      { label: "ENDURANCE", val: "ELITE" },
      { label: "RECOVERY", val: "99%" }
    ],
    quote: "The integration of bio-recovery and high-intensity protocols is the Fitcraz secret. I am a different athlete."
  }
]

const ComparisonSlider = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50)
  const [isResizing, setIsResizing] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX || (e.touches && e.touches[0].clientX)) - rect.left) / rect.width
    setSliderPos(Math.min(Math.max(x * 100, 0), 100))
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none border border-white/5 shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={() => setIsResizing(true)}
      onMouseUp={() => setIsResizing(false)}
    >
      {/* After Image (Base) */}
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      
      {/* Before Image (Clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" alt="Before" />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-[1px] bg-brand-red z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark border border-white/20 flex items-center justify-center text-white shadow-2xl backdrop-blur-xl group">
          <div className="flex gap-1">
            <div className="w-[1px] h-3 bg-white/40" />
            <div className="w-[1px] h-3 bg-brand-red" />
            <div className="w-[1px] h-3 bg-white/40" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-20 flex gap-4">
        <span className="bg-brand-black/80 backdrop-blur-md px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white/40 border border-white/5">Before</span>
        <span className="bg-brand-red px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-brand-red/20">After</span>
      </div>
    </div>
  )
}

export default function Transformations() {
  return (
    <section id="transformations" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">Elite Metamorphosis</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
          >
            Absolute <br />
            <span className="text-brand-red not-italic">Results.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <ComparisonSlider before={item.before} after={item.after} />
              
              <div className="flex flex-col gap-8">
                <div className="flex items-end justify-between">
                  <h3 className="text-4xl font-display font-black italic uppercase tracking-tighter text-white">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full border border-white/5">
                    <ShieldCheck size={12} className="text-brand-red" />
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Verified Protocol</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="glass-dark p-6 rounded-3xl border border-white/5 text-center group hover:border-brand-red/30 transition-all duration-500">
                      <p className="text-2xl font-display font-black text-brand-red italic mb-1 group-hover:scale-110 transition-transform">{stat.val}</p>
                      <p className="text-[8px] text-white/20 uppercase font-black tracking-[0.2em]">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="relative p-10 glass-dark rounded-[2.5rem] overflow-hidden group border border-white/5">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                  <p className="text-lg text-brand-gray italic leading-relaxed font-medium">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[3.5rem] glass-dark border border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl"
        >
          <div className="flex gap-16">
            <div className="flex flex-col">
              <span className="text-5xl font-display font-black italic text-white leading-none mb-2">500+</span>
              <span className="text-[8px] font-black text-brand-red uppercase tracking-[0.4em]">EVOLUTIONS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-display font-black italic text-white leading-none mb-2">98%</span>
              <span className="text-[8px] font-black text-brand-red uppercase tracking-[0.4em]">RETENTION</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-display font-black italic text-white leading-none mb-2">10k+</span>
              <span className="text-[8px] font-black text-brand-red uppercase tracking-[0.4em]">ELITE HOURS</span>
            </div>
          </div>
          <button className="px-12 py-6 bg-white text-brand-black rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-brand-red hover:text-white transition-all shadow-xl group">
            START YOUR JOURNEY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-display font-black uppercase text-white/[0.01] pointer-events-none -z-10 italic select-none">
        EVOLUTION
      </div>
    </section>
  )
}
