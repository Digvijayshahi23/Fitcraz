import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-brand-black">
      {/* Background Media - High-End Luxury Brand Film Style */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover brightness-[0.6] scale-105"
        >
          {/* Using a high-end cinematic dark gym video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-heavy-chains-in-the-gym-22874-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Exact Overlay Specification: rgba(0,0,0,0.45) */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black opacity-60" />
      </div>

      {/* Main Content - Center Empty Space Composition */}
      <div className="relative z-10 text-center px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.8em" }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-[9px] font-black uppercase text-brand-orange mb-10 block"
          >
            ESTABLISHED IN THE VOID
          </motion.span>
          
          <h1 className="text-brand-white text-[clamp(2.5rem,8vw,6.5rem)] font-display font-light leading-[0.85] uppercase italic tracking-tighter mb-14 max-w-6xl">
            INDIA'S <span className="font-black not-italic text-brand-white">ELITE</span> <br />
            FITNESS EXPERIENCE.
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="group relative px-16 py-6 bg-brand-white text-brand-black rounded-sm font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-brand-orange hover:text-brand-white">
              <span className="relative z-10">CLAIM FREE TRIAL</span>
              <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </button>
            <button className="px-16 py-6 border border-white/10 text-brand-white rounded-sm font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-black transition-all backdrop-blur-xl">
              START TODAY
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Experience Banner - Tesla-Style */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-brand-black/40 backdrop-blur-2xl border-t border-white/5 py-10 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-orange mb-2">CURRENT ARENA</span>
              <h3 className="text-brand-white text-xl font-display font-light uppercase tracking-[0.2em] italic">
                MADERA <span className="font-black not-italic">ELITE</span> <span className="text-brand-silver/20 px-2">|</span> STATUS: <span className="text-brand-white font-bold">OPTIMIZED</span>
              </h3>
            </div>
            
            <div className="flex items-center gap-16">
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-brand-silver/30 uppercase tracking-[0.2em] mb-1">CAPACITY</span>
                <span className="text-brand-white text-xs font-black">94.2%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-brand-silver/30 uppercase tracking-[0.2em] mb-1">SYSTEMS</span>
                <span className="text-brand-orange text-xs font-black animate-pulse">BEYOND LIMITS</span>
              </div>
              <div className="w-[1px] h-8 bg-white/5" />
              <button className="text-[9px] font-black text-brand-white uppercase tracking-[0.3em] group relative overflow-hidden">
                <span className="relative z-10">CHANGE CLUB</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform scale-x-0 group-hover:scale-100 transition-transform origin-left" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side HUD Elements (Decorative) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-16 z-10">
        <div className="rotate-90 text-[8px] font-black text-brand-silver/20 uppercase tracking-[1em] origin-left">
          ANTIGRAVITY SYSTEMS
        </div>
      </div>
      
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-[1px] h-12 bg-white/10 relative overflow-hidden`}>
            {i === 2 && <motion.div animate={{ top: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-brand-orange" />}
          </div>
        ))}
      </div>
    </section>
  )
}
