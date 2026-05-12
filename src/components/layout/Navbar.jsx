import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Zap, Shield, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { name: 'Arena', href: '#gallery' },
  { name: 'Protocols', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Recovery', href: '#recovery' },
  { name: 'Stories', href: '#testimonials' },
  { name: 'Access', href: '#membership' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`rounded-full px-8 py-3 flex items-center justify-between transition-all duration-700 ${scrolled ? 'bg-brand-black/40 backdrop-blur-3xl border border-white/5 shadow-2xl' : 'bg-transparent border-transparent'
          }`}>
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-[0_0_20px_#FF3B30]">
              <Zap className="text-white w-5 h-5 fill-white" />
            </div>
            <h2 className="text-2xl font-display font-black tracking-tighter text-white uppercase italic">
              ANTIGRAVITY<span className="text-white/20 not-italic">.</span>
            </h2>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all duration-500 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-red transition-all duration-500 group-hover:w-full shadow-[0_0_8px_#FF3B30]" />
              </a>
            ))}

            <div className="h-4 w-[1px] bg-white/10" />

            {user ? (
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-red border border-white/5">
                  <User size={16} />
                </div>
                <button
                  onClick={logout}
                  className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors"
                >
                  Terminate
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-8 py-2.5 bg-white text-brand-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-red hover:text-white transition-all duration-500 shadow-xl">
                Club Access
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[110] bg-brand-black/98 backdrop-blur-3xl flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center">
                  <Zap className="text-white w-6 h-6 fill-white" />
                </div>
                <h2 className="text-2xl font-display font-black tracking-tighter text-white uppercase italic">
                  ANTIGRAVITY<span className="text-white/20 not-italic">.</span>
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8 flex-grow">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-display font-black text-white/20 hover:text-brand-red transition-all tracking-tighter uppercase italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto border-t border-white/5 pt-12 flex items-center justify-between">
              <div className="flex gap-6">
                <Shield className="text-white/20" />
                <Globe className="text-white/20" />
              </div>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-10 py-4 bg-white text-brand-black rounded-full font-black uppercase tracking-widest text-xs"
              >
                Enter the Arena
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
