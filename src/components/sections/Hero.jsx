import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Background Image - Muscular man back view as in the image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
          alt="Athlete" 
          className="w-full h-full object-cover opacity-60 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-0 mb-8"
          >
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-display font-black leading-[0.85] tracking-tighter uppercase italic text-white">
              FORGED
            </h1>
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-display font-black leading-[0.85] tracking-tighter uppercase italic text-outline">
              THROUGH
            </h1>
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-display font-black leading-[0.85] tracking-tighter uppercase italic text-brand-red">
              PERFORMANCE.
            </h1>
          </motion.div>

          {/* Subheading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-sm md:text-xl font-black tracking-[0.4em] text-white uppercase mb-6">
              DISCIPLINE. STRENGTH. EVOLUTION.
            </h2>
            <p className="text-brand-gray text-base md:text-lg max-w-lg leading-relaxed opacity-80">
              FITCRAZ ELITE is where ambition meets execution. Train with purpose. Transform with intensity. Become your best.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-24"
          >
            <button className="px-10 py-5 bg-brand-red text-white rounded-full font-black text-xs uppercase tracking-widest shadow-[0_20px_50px_rgba(255,59,48,0.3)] hover:scale-105 transition-transform">
              JOIN THE ELITE
            </button>
            <button className="px-10 py-5 border border-white/20 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all backdrop-blur-md">
              EXPLORE PROGRAMS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar Pinned to Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12"
          >
            {[
              { label: 'ELITE MEMBERS', value: '12K+' },
              { label: 'EXPERT TRAINERS', value: '50+' },
              { label: 'PROGRAMS', value: '20+' },
              { label: 'TRANSFORMATION RATE', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-display font-black text-white mb-2">{stat.value}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side Scroll Dots (Visual only) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full border border-white/40 transition-all ${i === 2 ? 'bg-white scale-125' : ''}`} />
        ))}
      </div>
    </section>
  )
}
