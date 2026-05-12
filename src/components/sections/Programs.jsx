import { motion } from 'framer-motion'
import { Dumbbell, Flame, Zap, Trophy, Target, Activity, Heart, Globe, ArrowRight } from 'lucide-react'

const programs = [
  {
    title: "Strength Architecture",
    description: "Build raw power and structural integrity with elite coaching.",
    icon: <Dumbbell size={28} />,
    tag: "HYPERTROPHY"
  },
  {
    title: "Metabolic Storm",
    description: "Torch body fat with science-backed metabolic conditioning protocols.",
    icon: <Flame size={28} />,
    tag: "BURN"
  },
  {
    title: "High-Velocity HIIT",
    description: "High intensity interval training for maximum cardiovascular performance.",
    icon: <Zap size={28} />,
    tag: "AEROBIC"
  },
  {
    title: "Functional Flow",
    description: "Move with precision. Optimize your biomechanics and mobility.",
    icon: <Target size={28} />,
    tag: "MOBILITY"
  },
  {
    title: "Combat Protocol",
    description: "Train like a pro athlete. Develop speed, power, and mental grit.",
    icon: <Trophy size={28} />,
    tag: "ATHLETIC"
  },
  {
    title: "Elite Mentorship",
    description: "1-on-1 private performance coaching tailored to your mission.",
    icon: <Activity size={28} />,
    tag: "PRIVATE"
  },
  {
    title: "Bio-Nutrition",
    description: "Fuel your evolution. Data-driven nutrition plans for elite output.",
    icon: <Heart size={28} />,
    tag: "RECOVERY"
  },
  {
    title: "Global Remote",
    description: "Access the Antigravity method from anywhere in the ecosystem.",
    icon: <Globe size={28} />,
    tag: "REMOTE"
  }
]

export default function Programs() {
  return (
    <section id="programs" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Activity className="w-5 h-5 text-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">Training Protocols</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
          >
            Choose your <br />
            <span className="text-brand-red not-italic">Evolution.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-dark h-full p-10 rounded-[2.5rem] border border-white/5 group-hover:border-brand-red/30 transition-all duration-700 relative overflow-hidden flex flex-col items-start shadow-2xl">
                {/* Tag */}
                <div className="mb-10 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-brand-red/20 group-hover:bg-brand-red/5 transition-all">
                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-red">{program.tag}</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-center text-brand-red mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-700 shadow-xl">
                  {program.icon}
                </div>

                <h3 className="text-2xl font-display font-black italic uppercase tracking-tighter text-white mb-4 group-hover:text-brand-red transition-colors leading-none">
                  {program.title}
                </h3>

                <p className="text-brand-gray text-xs font-medium leading-relaxed mb-10 opacity-60 flex-grow">
                  {program.description}
                </p>

                <div className="flex items-center gap-4 text-white/20 font-black uppercase text-[9px] tracking-widest group-hover:text-brand-red transition-colors">
                  Inquire Protocol
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Ambient Hover Glow */}
                <div className="absolute -inset-10 bg-brand-red/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-7 bg-white text-brand-black font-black uppercase tracking-[0.4em] text-[11px] rounded-full hover:bg-brand-red hover:text-white transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            Initialize Full Roster
          </motion.button>
          <p className="mt-8 text-white/20 text-[8px] font-black uppercase tracking-[0.5em]">Current Global Availability: 98%</p>
        </div>
      </div>
    </section>
  )
}
