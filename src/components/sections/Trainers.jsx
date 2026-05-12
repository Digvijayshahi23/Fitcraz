import { motion } from 'framer-motion'
import { Camera, X, Play } from 'lucide-react'

const trainers = [
  {
    name: "Victor 'The Titan' Drago",
    role: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
    stats: { power: "99", speed: "85", endurance: "92" }
  },
  {
    name: "Elena 'Shadow' Vane",
    role: "HIIT & MMA Specialist",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
    stats: { power: "88", speed: "98", endurance: "95" }
  },
  {
    name: "Marcus Aurelius",
    role: "Body Transformation Elite",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    stats: { power: "95", speed: "80", endurance: "90" }
  },
  {
    name: "Luna Stark",
    role: "Functional Performance",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    stats: { power: "85", speed: "92", endurance: "98" }
  }
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
            >
              ELITE COMMANDERS
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
            >
              TRAINER <span className="text-brand-yellow">EMPIRE</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-sm text-sm uppercase font-bold tracking-widest leading-relaxed"
          >
            Our commanders aren't just trainers. They are elite architects of human potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-brand-red/50 transition-all duration-500">
                {/* Trainer Image */}
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity" />
                
                {/* Stats Overlay */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Object.entries(trainer.stats).map(([key, val]) => (
                    <div key={key} className="glass px-3 py-1 rounded-full flex items-center justify-between gap-4 min-w-[100px]">
                      <span className="text-[10px] uppercase font-black text-white/60">{key}</span>
                      <span className="text-xs font-black text-brand-red">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-brand-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-6">
                    {trainer.role}
                  </p>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-red transition-colors">
                      <Camera size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-red transition-colors">
                      <X size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-red transition-colors">
                      <Play size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-brand-red/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-[2rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
