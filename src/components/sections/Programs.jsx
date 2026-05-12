import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const protocols = [
  {
    id: "01",
    title: "Strength Architecture",
    tag: "Structural Integrity",
    description: "Re-engineer your musculoskeletal foundation with elite-grade hypertrophy and structural load protocols.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  },
  {
    id: "02",
    title: "Metabolic Storm",
    tag: "Bio-Thermal Burn",
    description: "Weaponize your metabolism through science-backed conditioning engineered for maximum caloric output.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
  },
  {
    id: "03",
    title: "High-Velocity HIIT",
    tag: "Cardiac Dominance",
    description: "Push cardiovascular boundaries with high-intensity interval training designed for elite endurance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
  },
  {
    id: "04",
    title: "Functional Flow",
    tag: "Kinetic Precision",
    description: "Optimize biomechanics and joint health through movement protocols that restore natural mobility.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80"
  }
]

export default function Programs() {
  return (
    <section id="programs" className="py-48 bg-brand-void relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand-red">Training Protocols</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3.5rem,10vw,7.5rem)] font-display font-black leading-[0.8] tracking-cinematic text-white uppercase italic"
            >
              Select your <br />
              <span className="text-brand-red not-italic">Trajectory.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 max-w-sm"
          >
            <p className="text-brand-gray text-xl font-medium leading-tight tracking-tight opacity-60">
              Each protocol is an engineered pathway to physiological dominance. No filler. Just performance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {protocols.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-white/5 cursor-pointer"
            >
              {/* Cinematic Background Image Layer */}
              <div className="absolute inset-0 bg-brand-surface group-hover:scale-105 transition-transform duration-[2s] ease-expo">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-brand-void/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-12 md:p-16 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="px-6 py-2 rounded-full glass border border-white/10 text-[9px] font-black uppercase tracking-[0.4em] text-white">
                    {program.tag}
                  </div>
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <ArrowRight size={24} />
                  </div>
                </div>

                <div className="max-w-md">
                  <div className="text-brand-red text-sm font-black mb-4 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-brand-red" />
                    Protocol {program.id}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display font-black italic uppercase text-white mb-6 tracking-cinematic leading-none">
                    {program.title}
                  </h3>
                  <p className="text-brand-gray text-lg font-medium leading-snug tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-700 max-h-0 group-hover:max-h-32 overflow-hidden">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Edge Lighting */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="group flex items-center gap-12 text-white/40 hover:text-white transition-all duration-700">
            <span className="text-[10px] font-black uppercase tracking-[0.8em]">Explore Full Matrix</span>
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-700">
              <Zap size={24} className="group-hover:fill-white transition-all" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
