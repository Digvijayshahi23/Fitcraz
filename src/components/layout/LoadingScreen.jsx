import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [textIndex, setTextIndex] = useState(0)
  const words = ["TRAIN INSANE", "STAY FIT", "LIVE CRAZ"]

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 blur-[120px] rounded-full animate-pulse-slow delay-700" />
      
      {/* Floating Particles Simulation (Simplified) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
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
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Center Logo Area */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic text-white flex items-center">
            FIT
            <span className="text-brand-red relative">
              CRAZ
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-brand-red blur-2xl -z-10"
              />
            </span>
          </h1>
          
          {/* Animated Shine Sweep */}
          <motion.div 
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>

        <div className="h-12 mt-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="text-brand-yellow text-xl md:text-2xl font-bold tracking-[0.3em] uppercase italic"
            >
              {words[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Loading Progress Bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="w-full h-full bg-brand-red shadow-[0_0_10px_#ff1a1a]"
        />
      </div>
    </motion.div>
  )
}
