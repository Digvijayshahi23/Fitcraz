import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const transformations = [
  {
    name: "Alex 'The Beast' Chen",
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    weight: "-25kg",
    muscle: "+12kg",
    strength: "+150%",
    quote: "FITCRAZ didn't just change my body. It rewired my entire mind."
  },
  {
    name: "Sarah Miller",
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop",
    weight: "-15kg",
    muscle: "+8kg",
    strength: "+80%",
    quote: "I found a strength I never knew I possessed. This is the elite standard."
  }
]

const ComparisonSlider = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)

  const handleMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX || e.touches[0].clientX) - rect.left) / rect.width
    setSliderPos(Math.min(Math.max(x * 100, 0), 100))
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Base) */}
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      
      {/* Before Image (Clip) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} className="absolute inset-0 w-full h-full object-cover grayscale brightness-75" alt="Before" />
      </div>

      {/* Slider Bar */}
      <div 
        className="absolute inset-y-0 w-[2px] bg-brand-red shadow-[0_0_10px_#ff1a1a] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white border-2 border-white/20">
          <span className="text-xs font-black">↔</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-20 flex gap-4">
        <span className="bg-black/80 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">Before</span>
        <span className="bg-brand-red px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white">After</span>
      </div>
    </div>
  )
}

export default function Transformations() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} id="transformation" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
          >
            REAL RESULTS
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
          >
            THE <span className="text-brand-yellow">ASCENSION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {transformations.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-12"
            >
              <ComparisonSlider before={item.before} after={item.after} />
              
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white">
                  {item.name}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass p-4 rounded-2xl text-center">
                    <p className="text-2xl font-black text-brand-red italic">{item.weight}</p>
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Weight Lost</p>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center">
                    <p className="text-2xl font-black text-brand-yellow italic">{item.muscle}</p>
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Muscle Gained</p>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center">
                    <p className="text-2xl font-black text-brand-red italic">{item.strength}</p>
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Strength</p>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center">
                    <p className="text-2xl font-black text-brand-yellow italic">Elite</p>
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Confidence</p>
                  </div>
                </div>

                <div className="relative p-8 glass-dark rounded-3xl overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  <p className="text-xl text-white/70 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute -right-20 top-1/4 text-[15rem] font-black italic uppercase text-white/5 pointer-events-none select-none -z-10"
      >
        BEAST
      </motion.div>
    </section>
  )
}
