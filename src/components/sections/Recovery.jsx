import { motion } from 'framer-motion'
import { Activity, Shield, Zap, Thermometer, Droplets, Wind, Sparkles, ArrowRight } from 'lucide-react'

const features = [
  {
    title: "Cryo-Recovery",
    description: "Advanced sub-zero treatments to eliminate inflammation and accelerate tissue repair.",
    icon: Thermometer,
    tag: "INFLAMMATION"
  },
  {
    title: "Hyperbaric O2",
    description: "Oxygen-rich environments to saturate muscle tissue and enhance cognitive clarity.",
    icon: Wind,
    tag: "OXYGENATION"
  },
  {
    title: "Bio-Nutrition",
    description: "Scientifically formulated nutrient protocols tailored to your specific genetic output.",
    icon: Droplets,
    tag: "HYDRATION"
  },
  {
    title: "Neural Sync",
    description: "Frequency-based recovery sessions to optimize the central nervous system.",
    icon: Activity,
    tag: "CNS REPAIR"
  }
]

export default function Recovery() {
  return (
    <section id="recovery" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">The Optimization Lab</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic mb-12"
            >
              Bio-Recovery <br />
              <span className="text-brand-red not-italic">& Nutrition.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-brand-gray mb-16 leading-relaxed font-medium max-w-xl"
            >
              Performance is only as good as your repair protocol. We integrate world-class bio-technology to ensure you return to the arena stronger, faster, and fully optimized.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 mb-16"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black italic text-white leading-none mb-2">4X</span>
                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">RECOVERY SPEED</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-display font-black italic text-white leading-none mb-2">100%</span>
                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">BIO-SYNC</span>
              </div>
            </motion.div>

            <button className="px-12 py-6 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-white hover:text-brand-black transition-all group">
              EXPLORE THE LAB <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="glass-dark p-10 rounded-[3rem] border border-white/5 flex flex-col gap-8 group hover:border-brand-red/30 transition-all duration-500 shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-center group-hover:bg-brand-red transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-brand-red group-hover:text-white transition-all" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span className="text-[8px] font-black text-brand-red uppercase tracking-widest">{feature.tag}</span>
                  </div>
                  <h3 className="text-2xl font-display font-black italic uppercase tracking-tighter text-white mb-4 group-hover:text-brand-red transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray text-[10px] font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cinematic Imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="h-[500px] rounded-[4rem] overflow-hidden border border-white/5 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4s]"
            alt="Recovery Sanctuary"
          />
          <div className="absolute inset-0 bg-brand-black/40 z-10 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="glass-dark p-12 rounded-[3rem] text-center border border-white/10 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)]">
              <Zap className="text-brand-red mx-auto mb-6 w-12 h-12" />
              <p className="text-white font-display font-black tracking-tight text-4xl mb-2 italic">THE RECOVERY SANCTUARY</p>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-black">Zero Gravity Environments • Bio-Telemetry Analysis</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
