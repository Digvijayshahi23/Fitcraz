import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlobalEffects from '../ui/GlobalEffects'

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center relative overflow-hidden px-6">
      <GlobalEffects />
      
      <div className="absolute top-10 left-10 z-50">
        <Link to="/" className="text-3xl font-black italic tracking-tighter text-white">
          FIT<span className="text-brand-red">CRAZ</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-dark w-full max-w-[450px] p-12 rounded-[3rem] border-white/5 relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">
            {title}
          </h2>
          <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">
            {subtitle}
          </p>
        </div>

        {children}
      </motion.div>
    </div>
  )
}
