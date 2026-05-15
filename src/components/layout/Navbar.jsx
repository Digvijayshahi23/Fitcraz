import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'LOCATIONS', href: '#arena' },
  { name: 'CLASSES', href: '#programs' },
  { name: 'ARENA+', href: '#reels' },
  { name: 'TRAINING', href: '#trainers' },
  { name: 'ABOUT', href: '#testimonials' },
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
      {/* Top Black Bar */}
      <div className="bg-black py-2 px-6 border-b border-white/10 hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white">
          <div className="flex gap-6">
            <span className="opacity-60 hover:opacity-100 cursor-pointer">#NOJUDGMENTS</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 cursor-pointer">
              <Globe size={12} />
              <span>EN</span>
            </div>
            <Link to="/login" className="flex items-center gap-2 opacity-60 hover:opacity-100">
              <User size={12} />
              <span>LOGIN</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group shrink-0">
              <div className="w-10 h-10 bg-[#FF0000] rounded flex items-center justify-center font-display font-black text-white italic transition-transform group-hover:scale-110">F</div>
              <span className="text-2xl font-display font-black text-white italic tracking-tighter">FITCRAZ</span>
            </a>

            {/* Desktop Links - Centered */}
            <div className="hidden lg:flex items-center gap-8 ml-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.15em] text-white/80 hover:text-white transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF0000] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Action Buttons - Right */}
            <div className="hidden md:flex items-center gap-0 ml-auto h-12 overflow-hidden rounded-sm">
              <button className="h-full px-8 bg-[#FF8C00] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#e67e00] transition-all">
                FREE TRIAL
              </button>
              <button className="h-full px-8 bg-[#FF0000] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#cc0000] transition-all">
                JOIN
              </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden text-white ml-4">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] bg-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FF0000] rounded flex items-center justify-center font-display font-black text-white italic">F</div>
                <span className="text-2xl font-black italic">FITCRAZ</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-black italic uppercase text-white hover:text-[#FF0000] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-6 bg-[#FF8C00] text-white rounded-full font-black uppercase tracking-widest text-xs">
                FREE TRIAL
              </button>
              <button className="w-full py-6 bg-[#FF0000] text-white rounded-full font-black uppercase tracking-widest text-xs">
                JOIN NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
