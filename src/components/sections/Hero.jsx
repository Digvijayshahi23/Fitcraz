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
          className="w-full h-full object-cover scale-105"
        >
          {/* Using a more high-end, dark cinematic fitness video URL */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-boxer-training-in-a-dark-gym-43034-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Multilayered Gradient Overlays for Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)]" />
      </div>

      {/* Main Content - Minimalist & Centered */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.8em] text-brand-orange mb-8 block"
          >
            ESTABLISHED IN THE VOID
          </motion.span>
          
          <h1 className="text-brand-white text-[clamp(2rem,10vw,7rem)] font-display font-light leading-[0.9] uppercase italic tracking-[-0.05em] mb-12 max-w-5xl">
            ELEVATE HUMAN <br />
            <span className="font-black tracking-tighter not-italic text-brand-white">PERFORMANCE.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button className="group relative px-16 py-6 bg-brand-white text-brand-black rounded-sm font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-brand-orange hover:text-brand-white">
              <span className="relative z-10">JOIN ANTIGRAVITY</span>
              <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Experience Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-brand-graphite/40 backdrop-blur-md border-t border-white/5 py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-orange mb-1">CURRENT LOCATION</span>
              <h3 className="text-brand-white text-lg font-display font-light uppercase tracking-[0.2em] italic">
                MADERA ARENA <span className="text-brand-silver/40 px-2">|</span> ELITE STATUS: <span className="text-brand-white font-bold">OPEN</span>
              </h3>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-brand-silver/40 uppercase tracking-widest">MEMBER COUNT</span>
                <span className="text-brand-white text-xs font-black">12,408</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-brand-silver/40 uppercase tracking-widest">SENSEI AI</span>
                <span className="text-brand-orange text-xs font-black">ACTIVE</span>
              </div>
              <button className="text-[9px] font-black text-brand-white uppercase tracking-[0.2em] border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                CHANGE CLUB
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
