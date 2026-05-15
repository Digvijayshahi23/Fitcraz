import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-black">
      {/* Background Media - Cinematic Gym Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-heavy-chains-in-the-gym-22874-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-[clamp(3rem,12vw,9rem)] font-display font-black leading-none uppercase italic tracking-tighter mb-8 drop-shadow-2xl">
            FEEL MORE HERE.
          </h1>
          
          <button className="px-12 py-5 bg-white text-black rounded-sm font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            JOIN NOW
          </button>
        </motion.div>
      </div>

      {/* Bottom Local Banner - Crunch Style */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-gradient-to-r from-[#FF0000] via-[#FF8C00] to-[#FFA500] py-6 px-6">
          <div className="container mx-auto flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-1">CLOSEST CLUB</span>
            <h3 className="text-white text-xl md:text-3xl font-display font-black uppercase italic tracking-tight flex items-center gap-3">
              YOUR LOCAL ARENA <span className="text-white">📍 DELHI NCR</span>
              <button className="text-[10px] font-black underline ml-2 opacity-60 hover:opacity-100 transition-opacity">EDIT</button>
            </h3>
          </div>
        </div>
      </div>

      {/* Video Pause/Play Visual indicator (Decorative) */}
      <div className="absolute bottom-28 right-10 z-10">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white cursor-pointer backdrop-blur-md">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-current" />
            <div className="w-1 h-3 bg-current" />
          </div>
        </div>
      </div>
    </section>
  )
}
