import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'

const architects = [
  {
    name: "Marcus Thorne",
    role: "Lead Performance Architect",
    specialty: "Hypertrophy & Biomechanics",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80",
    stats: { clients: "500+", success: "98%" }
  },
  {
    name: "Elena Vance",
    role: "Elite Recovery Specialist",
    specialty: "Physiology & Neural Optimization",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80",
    stats: { clients: "300+", success: "100%" }
  },
  {
    name: "Dante Stone",
    role: "Head of Conditioning",
    specialty: "Metabolic Warfare",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    stats: { clients: "400+", success: "95%" }
  }
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-48 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand-red">The Collective</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3.5rem,10vw,8rem)] font-display font-black leading-[0.8] tracking-cinematic text-white uppercase italic"
          >
            The Master <br />
            <span className="text-brand-red not-italic">Architects.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-[4rem] overflow-hidden">
          {architects.map((architect, i) => (
            <motion.div
              key={architect.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1.5 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] bg-brand-black overflow-hidden cursor-pointer"
            >
              {/* Cinematic Portrait */}
              <img
                src={architect.image}
                alt={architect.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s] ease-expo"
              />
              
              {/* Atmospheric Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-brand-void/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                    {architect.role}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic mb-6 tracking-cinematic">
                    {architect.name}
                  </h3>
                  
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <p className="text-brand-gray text-xs font-black uppercase tracking-widest">
                      {architect.specialty}
                    </p>
                    <div className="flex gap-4">
                      <Instagram size={18} className="text-white/40 hover:text-white transition-colors" />
                      <Linkedin size={18} className="text-white/40 hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Reveal Stats */}
                <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                  <div className="glass-dark px-6 py-4 rounded-2xl border border-white/10">
                    <div className="text-[8px] text-white/40 font-black uppercase tracking-widest mb-1">Success Rate</div>
                    <div className="text-xl text-brand-red font-display font-black italic">{architect.stats.success}</div>
                  </div>
                </div>
              </div>

              {/* Interaction Prompt */}
              <div className="absolute bottom-12 right-12 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center gap-3">
                <span className="text-[9px] text-white font-black uppercase tracking-[0.3em]">View Dossier</span>
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white shadow-xl">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 glass-dark rounded-[4rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex items-center gap-10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-brand-black overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Expert" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-2xl font-display font-black italic text-white uppercase tracking-tight">+12 Elite Coaches</div>
              <div className="text-brand-gray text-xs font-black uppercase tracking-widest opacity-40">Ready to architect your evolution</div>
            </div>
          </div>
          <button className="px-16 py-8 bg-white text-brand-black rounded-full font-black text-xs uppercase tracking-[0.5em] hover:bg-brand-red hover:text-white transition-all duration-500 shadow-2xl">
            INITIALIZE RECRUITMENT
          </button>
        </motion.div>
      </div>
    </section>
  )
}
