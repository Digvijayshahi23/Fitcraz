import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [textIndex, setTextIndex] = useState(0)
  const words = ["INITIALIZING", "CALIBRATING", "SYNCHRONIZING", "ENTERING ARENA"]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textIndex < words.length - 1) {
        setTextIndex(prev => prev + 1)
      } else {
        setTimeout(() => onComplete(), 1000)
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [textIndex, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 blur-[200px] rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full animate-pulse-slow delay-700" />

      {/* Floating Particles Simulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, "-20%", "120%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
            className="absolute w-1 h-1 bg-brand-red rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Center Logo Area */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter italic text-white flex items-center uppercase leading-none">
            FIT
            <span className="text-brand-red relative">
              CRAZ
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-brand-red blur-3xl -z-10"
              />
            </span>
          </h1>

          {/* Animated Shine Sweep */}
          <motion.div
            animate={{ left: ["-100%", "250%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>

        <div className="h-12 mt-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/40 text-xl md:text-2xl font-black tracking-[0.6em] uppercase italic"
            >
              {words[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Loading Progress Bar */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/5 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 4, ease: "linear" }}
          className="w-full h-full bg-brand-red shadow-[0_0_15px_#FF3B30]"
        />
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-white/10 font-black uppercase tracking-[0.5em]">
        Fitcraz Performance Ecosystem v1.0
      </div>
    </motion.div>
  )
}
