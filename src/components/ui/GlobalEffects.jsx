import { motion } from 'framer-motion'

export default function GlobalEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Subtle Deep Void Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-30" />
      
      {/* Soft Ambient Energy Glow */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-red/[0.03] blur-[200px] rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-white/[0.01] blur-[200px] rounded-full animate-pulse-slow delay-1000" />

      {/* Extreme Minimalist Grain */}
      <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-noise" />
      </div>
    </div>
  )
}
