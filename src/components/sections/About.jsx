import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-64 bg-brand-void relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Visual Storytelling Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 relative group">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80"
                alt="Elite Performance"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-brand-void/20 to-transparent" />
              
              {/* Luxury Detail Overlay */}
              <div className="absolute bottom-16 left-16 right-16 p-12 glass-dark rounded-[3rem] border border-white/10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center">
                    <Shield size={24} className="text-white fill-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Authentic Excellence</span>
                </div>
                <p className="text-brand-gray text-lg font-medium leading-tight tracking-tight italic">
                  "We don't just build muscle. We architect human potential."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content Layer */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand-red">The Mission</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3.5rem,10vw,8.5rem)] font-display font-black leading-[0.8] tracking-cinematic text-white uppercase italic mb-12"
            >
              Beyond the <br />
              <span className="text-brand-red not-italic">Statics.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <p className="text-brand-gray text-2xl md:text-3xl font-medium leading-[1.1] tracking-tight opacity-80">
                Fitcraz Elite is more than a training facility. It is a high-performance laboratory where biological potential meets relentless execution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                {[
                  { icon: Zap, title: "Velocity", desc: "Explosive movement engineered for elite speed." },
                  { icon: Target, title: "Precision", desc: "Scientific protocols for optimized biomechanics." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    <item.icon size={32} className="text-brand-red" />
                    <h4 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter">{item.title}</h4>
                    <p className="text-brand-gray text-lg font-medium leading-snug opacity-60">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-12">
                <button className="group flex items-center gap-8 text-white hover:text-brand-red transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.6em]">Learn Our Protocol</span>
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
