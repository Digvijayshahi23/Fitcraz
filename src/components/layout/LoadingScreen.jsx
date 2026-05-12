import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + 1
      })
    }, 30)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-brand-void flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.03)_0%,transparent_70%)]" />

      {/* Main Brand Manifestation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center"
      >
        <h1 className="text-8xl md:text-[14rem] font-display font-black tracking-cinematic italic text-white leading-none uppercase relative">
          FIT
          <span className="text-brand-red relative inline-block transform -skew-x-6">CRAZ</span>
          
          {/* Animated Shine Sweep */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "250%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 blur-2xl z-10 pointer-events-none"
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-brand-red" />
            <span className="text-[10px] text-brand-red font-black uppercase tracking-[1em]">ELITE PERFORMANCE</span>
            <div className="w-16 h-[1px] bg-brand-red" />
          </div>
          
          <div className="h-10 w-[1px] bg-gradient-to-b from-brand-red to-transparent opacity-40" />
        </motion.div>
      </motion.div>

      {/* Progress Matrix */}
      <div className="absolute bottom-24 w-64 md:w-96">
        <div className="flex justify-between items-center mb-4 text-[8px] font-black uppercase tracking-[0.4em] text-white/20">
          <span>Initializing Ecosystem</span>
          <span>{progress}%</span>
        </div>
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: `${progress - 100}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="absolute inset-0 bg-brand-red shadow-[0_0_15px_#FF3B30]"
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] text-white/10 font-black uppercase tracking-[0.6em] whitespace-nowrap">
        ANTIGRAVITY EDITION • SUSTAINED PERFORMANCE STUDIO
      </div>
    </motion.div>
  )
}
