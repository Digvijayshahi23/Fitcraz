import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { name: 'Arena', href: '#gallery' },
  { name: 'Protocols', href: '#programs' },
  { name: 'Architects', href: '#trainers' },
  { name: 'Reels', href: '#reels' },
  { name: 'Access', href: '#membership' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${scrolled ? 'py-6' : 'py-12'}`}>
      <div className="container mx-auto px-10 max-w-[1600px]">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#home" className="group flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl">
              <Shield size={24} className="text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-display font-black tracking-cinematic text-white uppercase italic leading-none">
                FITCRAZ<span className="text-brand-red not-italic inline-block transform -skew-x-6">ELITE</span>
              </h2>
              <span className="text-[7px] text-white/20 font-black uppercase tracking-[0.5em] mt-1">Antigravity Edition</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all duration-500 relative group"
              >
                {link.name}
                <span className="absolute -bottom-4 left-0 w-0 h-[2px] bg-brand-red transition-all duration-500 group-hover:w-full" />
              </a>
            ))}

            <div className="w-[1px] h-6 bg-white/10" />

            {user ? (
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-red hover:bg-white hover:text-brand-black transition-all cursor-pointer">
                  <User size={18} />
                </div>
                <button onClick={logout} className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                  TERMINATE
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-12 py-5 bg-white text-brand-black rounded-full font-black uppercase tracking-[0.3em] text-[9px] hover:bg-brand-red hover:text-white transition-all duration-700 shadow-2xl">
                CLUB ACCESS
              </Link>
            )}
          </div>

          {/* Mobile Interaction */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden text-white/60 hover:text-white transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Luxury Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-brand-void flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-24">
              <Shield size={32} className="text-brand-red fill-brand-red" />
              <button onClick={() => setIsOpen(false)} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-6xl font-display font-black text-white italic uppercase tracking-cinematic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full py-8 bg-brand-red text-white flex items-center justify-center rounded-full font-black uppercase tracking-[0.4em] text-xs shadow-2xl"
              >
                ENTER THE ARENA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
