import { motion } from 'framer-motion'
import { Camera, Shield, Play, MessageSquare, ArrowRight, Activity, Target } from 'lucide-react'

const trainers = [
  {
    name: "Viktor Petrov",
    role: "Head Performance Architect",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
    stats: { power: "99", speed: "85", endurance: "92" },
    social: "@petrov_elite"
  },
  {
    name: "Elena Vane",
    role: "MMA & Conditioning Elite",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
    stats: { power: "88", speed: "98", endurance: "95" },
    social: "@vane_shadow"
  },
  {
    name: "Marcus Aris",
    role: "Body Recomposition Master",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    stats: { power: "95", speed: "80", endurance: "90" },
    social: "@aris_transform"
  },
  {
    name: "Luna Thorne",
    role: "Functional Performance Expert",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    stats: { power: "85", speed: "92", endurance: "98" },
    social: "@luna_performance"
  }
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Target className="w-5 h-5 text-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">The Collective</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
            >
              Master <br />
              <span className="text-brand-red not-italic">Architects.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 max-w-sm"
          >
            <p className="text-brand-gray text-lg font-medium leading-relaxed">
              Our architects aren't just trainers. They are the elite designers of human potential, engineered for world-class standards.
            </p>
            <button className="flex items-center gap-4 text-white hover:text-brand-red transition-all text-[10px] font-black uppercase tracking-[0.3em] group">
              VIEW FULL ROSTER <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4.5] rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-brand-red/30 transition-all duration-700 shadow-2xl">
                {/* Trainer Image */}
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1.5s]"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />

                {/* Stats Overlay */}
                <div className="absolute top-8 right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y--4 group-hover:translate-y-0">
                  {Object.entries(trainer.stats).map(([key, val]) => (
                    <div key={key} className="glass-dark px-4 py-2 rounded-2xl flex flex-col items-center gap-1 border border-white/5 shadow-xl min-w-[70px]">
                      <span className="text-[7px] uppercase font-black text-white/30 tracking-widest">{key}</span>
                      <span className="text-sm font-display font-black italic text-brand-red">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center shadow-[0_0_30px_#FF3B30]">
                    <Shield size={20} className="text-white fill-white" />
                  </div>
                </div>

                {/* Info Area */}
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-brand-red font-black uppercase tracking-[0.3em] text-[9px] mb-4 scale-x-110 origin-left">
                    {trainer.social}
                  </p>
                  <h3 className="text-4xl font-display font-black italic uppercase tracking-tighter text-white leading-[0.8] mb-4">
                    {trainer.name}
                  </h3>
                  <p className="text-white/40 font-black uppercase tracking-[0.2em] text-[8px] mb-8">
                    {trainer.role}
                  </p>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <button className="w-12 h-12 rounded-2xl glass-dark border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group/btn shadow-xl">
                      <Activity size={20} className="text-white group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="w-12 h-12 rounded-2xl glass-dark border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group/btn shadow-xl">
                      <MessageSquare size={20} className="text-white group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="px-6 h-12 rounded-2xl bg-white text-brand-black font-black uppercase tracking-widest text-[9px] hover:bg-brand-red hover:text-white transition-all shadow-xl">
                      Book Mission
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Ambient Glow */}
              <div className="absolute -inset-4 bg-brand-red/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3.5rem] glass-dark border border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-display font-black italic uppercase tracking-tighter text-white">Elite Coaching Certification</h4>
            <p className="text-white/40 text-sm font-medium">All Fitcraz architects undergo a 6-month specialized biometric performance training.</p>
          </div>
          <div className="flex -space-x-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-brand-black overflow-hidden shadow-2xl relative group/avatar">
                <img src={`https://i.pravatar.cc/150?img=${i+40}`} alt="Expert" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-display font-black uppercase text-white/[0.01] pointer-events-none -z-10 italic select-none">
        COLLECTIVE
      </div>
    </section>
  )
}
