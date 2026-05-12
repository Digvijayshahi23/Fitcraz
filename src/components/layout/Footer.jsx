import { motion } from 'framer-motion'
import { Shield, ArrowUpRight, Globe, Zap, Target } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-void py-64 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-10 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-48">
          {/* Brand Manifesto */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center shadow-2xl">
                <Shield size={32} className="text-white fill-white" />
              </div>
              <h2 className="text-4xl font-display font-black tracking-cinematic text-white uppercase italic leading-none">
                FITCRAZ<span className="text-brand-red not-italic inline-block transform -skew-x-6">ELITE</span>
              </h2>
            </div>
            <p className="text-brand-gray text-3xl font-medium leading-[1.1] tracking-tight opacity-60 mb-16 max-w-xl">
              Engineered for those who demand more than survival. Forged in the pursuit of physiological dominance.
            </p>
            <div className="flex gap-12">
              {[Globe, Zap, Target].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#FF3B30' }}
                  className="text-white/20 transition-colors"
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Editorial Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase tracking-[0.6em] text-[10px] mb-16 opacity-30">Ecosystem</h4>
            <ul className="space-y-8">
              {['The Arena', 'Protocols', 'Architects', 'The Feed', 'Membership'].map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center justify-between text-brand-gray hover:text-white text-xl font-medium tracking-tight transition-all duration-500">
                    {link}
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Manifest */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase tracking-[0.6em] text-[10px] mb-16 opacity-30">Protocols</h4>
            <ul className="space-y-8">
              {['Terms of Access', 'Privacy Matrix', 'Security Protocol', 'Club Rules'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-gray hover:text-white text-xl font-medium tracking-tight transition-all duration-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Signature */}
        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-[10px] text-white/10 font-black uppercase tracking-[1em]">
              © 2026 FITCRAZ ELITE • ANTIGRAVITY EDITION
            </p>
            <p className="text-[8px] text-brand-red font-black uppercase tracking-[0.8em]">
              SUSTAINED PERFORMANCE STUDIO
            </p>
          </div>
          
          <div className="flex gap-16 text-[9px] text-white/10 font-black uppercase tracking-widest">
            <span>Global HQ: Dubai, UAE</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>

      {/* Atmospheric Void */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-brand-red/5 blur-[300px] rounded-full pointer-events-none" />
    </footer>
  )
}
