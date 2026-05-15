import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'LOCATIONS', href: '#arena' },
  { name: 'CLASSES', href: '#programs' },
  { name: 'SENSEI+', href: '#reels' },
  { name: 'TRAINING', href: '#trainers' },
  { name: 'PHILOSOPHY', href: '#testimonials' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex flex-col">
      {/* Top Bar - Minimalist */}
      <div className="bg-brand-black/40 backdrop-blur-sm py-2 px-6 border-b border-white/5 hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-[9px] font-medium uppercase tracking-[0.3em] text-brand-silver/60">
          <div className="flex gap-6">
            <span className="hover:text-brand-white transition-colors cursor-pointer">NEVER SETTLE</span>
            <span className="hover:text-brand-white transition-colors cursor-pointer">BEYOND PERFORMANCE</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-brand-white transition-colors cursor-pointer">
              <Globe size={10} />
              <span>GLOBAL ACCESS</span>
            </div>
            <Link to="/login" className="flex items-center gap-2 hover:text-brand-white transition-colors">
              <User size={10} />
              <span>ATHLETE LOGIN</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - Glassmorphism */}
      <div className={`transition-all duration-700 ${scrolled ? 'bg-brand-black/60 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo - Antigravity */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <div className="w-9 h-9 bg-brand-orange rounded-sm flex items-center justify-center font-display font-black text-brand-black italic transition-transform group-hover:scale-105">A</div>
              <span className="text-xl font-display font-light text-brand-white uppercase tracking-[0.4em] italic">ANTIGRAVITY</span>
            </a>

            {/* Desktop Links - Centered & Thin */}
            <div className="hidden lg:flex items-center gap-12 ml-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-light uppercase tracking-[0.3em] text-brand-silver/50 hover:text-brand-white transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-orange transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Action Buttons - Premium */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              <button className="px-8 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-brand-white hover:text-brand-orange transition-colors">
                GIFT EXPERIENCE
              </button>
              <button className="px-8 py-3 bg-brand-orange text-brand-black text-[9px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-brand-white transition-all shadow-[0_0_30px_rgba(255,106,0,0.2)]">
                JOIN ELITE
              </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden text-brand-white ml-4">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[110] bg-brand-black p-8 flex flex-col justify-center items-center text-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-brand-white">
              <X size={40} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-light italic uppercase text-brand-white hover:text-brand-orange transition-colors tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-20 flex flex-col gap-4 w-full max-w-xs">
              <button className="w-full py-5 bg-brand-orange text-brand-black font-black uppercase tracking-widest text-[10px] rounded-sm">
                JOIN THE MOVEMENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
