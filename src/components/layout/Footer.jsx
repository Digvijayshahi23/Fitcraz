import { motion } from 'framer-motion'
import { Shield, Globe, Send, Zap, Activity, Radio, Target, Trophy, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-black py-40 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_30px_#FF3B30]">
                <img src="/logo.png" alt="Fitcraz" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-3xl font-display font-black tracking-tighter text-white uppercase italic">
                FITCRAZ<span className="text-white/20 not-italic">.</span>
              </h2>
            </div>
            <p className="text-brand-gray text-lg font-medium leading-relaxed mb-12 max-w-sm">
              Forged through performance. The world's most advanced athletic ecosystem engineered for elite standards.
            </p>
            <div className="flex gap-6">
              {[Target, Activity, Trophy, Share2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#FF3B30' }}
                  className="text-white/20 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Ecosystem</h4>
            <ul className="space-y-6">
              {['Arena', 'Protocols', 'Collective', 'Metamorphosis', 'Intelligence'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-brand-gray hover:text-brand-red text-sm font-black uppercase tracking-widest transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Protocols</h4>
            <ul className="space-y-6">
              {['Terms', 'Security', 'Privacy', 'Legal'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-gray hover:text-brand-red text-sm font-black uppercase tracking-widest transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Initialize Mission</h4>
            <p className="text-brand-gray text-sm mb-8 font-medium">Receive the latest performance protocols directly to your terminal.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-xs text-white focus:outline-none focus:border-brand-red transition-all font-black"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center text-white hover:scale-105 transition-all shadow-xl">
                <Send size={18} />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3 text-[9px] text-white/30 font-black uppercase tracking-widest">
                <Shield size={14} className="text-brand-red" />
                Secured
              </div>
              <div className="flex items-center gap-3 text-[9px] text-white/30 font-black uppercase tracking-widest">
                <Globe size={14} className="text-brand-red" />
                Global Access
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] text-white/10 font-black uppercase tracking-[0.5em]">
            © 2026 FITCRAZ ELITE PERFORMANCE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] text-white/10 font-black uppercase tracking-widest">
            <a href="#" className="hover:text-brand-red transition-colors">Term of Access</a>
            <a href="#" className="hover:text-brand-red transition-colors">Performance Protocol</a>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-red/5 blur-[200px] rounded-full pointer-events-none" />
    </footer>
  )
}
