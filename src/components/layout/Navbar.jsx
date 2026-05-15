import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'ARENA', href: '#arena' },
  { name: 'PROGRAMS', href: '#programs' },
  { name: 'TRAINERS', href: '#trainers' },
  { name: 'RECOVERY', href: '#recovery' },
  { name: 'SCHEDULE', href: '#schedule' },
  { name: 'ACCESS', href: '#membership' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-md border-b border-white/5' : 'py-6 md:py-10 bg-transparent'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center font-display font-black text-white italic transition-transform group-hover:scale-110">F</div>
            <span className="text-xl md:text-2xl font-display font-black text-white italic tracking-tighter">FITCRAZ</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link 
              to="/login" 
              className="px-8 py-3 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all backdrop-blur-md"
            >
              CLUB ACCESS
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden text-white">
            <Menu size={24} />
          </button>
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
                <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center font-display font-black text-white italic">F</div>
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
                  className="text-4xl font-display font-black italic uppercase text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 bg-brand-red text-white flex items-center justify-center rounded-full font-black uppercase tracking-widest text-xs"
              >
                CLUB ACCESS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
