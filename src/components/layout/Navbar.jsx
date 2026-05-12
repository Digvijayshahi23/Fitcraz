import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Training', href: '#training' },
  { name: 'Transformation', href: '#transformation' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass-dark rounded-full px-8 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-black/60 border-white/10' : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <h2 className="text-3xl font-black italic tracking-tighter text-white group-hover:scale-110 transition-transform duration-300">
              FIT<span className="text-brand-red">CRAZ</span>
            </h2>
            <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#ff1a1a]" />
              </a>
            ))}
            
            {user ? (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-red border-brand-red/30">
                  <User size={20} />
                </div>
                <button 
                  onClick={logout}
                  className="text-xs font-black uppercase tracking-tighter text-white/40 hover:text-brand-red transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-brand-red text-white px-8 py-2.5 rounded-full font-bold uppercase tracking-tighter text-sm hover:bg-white hover:text-brand-black transition-all duration-300 neon-glow-red hover:shadow-[0_0_20px_#fff]">
                Member Login
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-black/95 backdrop-blur-2xl flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-3xl font-black italic tracking-tighter text-white">
                FIT<span className="text-brand-red">CRAZ</span>
              </h2>
              <button 
                className="text-white p-2 glass rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase italic tracking-tighter text-white/50 hover:text-brand-red hover:translate-x-4 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <button className="w-full bg-brand-red text-white py-6 rounded-2xl font-black uppercase text-xl italic tracking-tighter neon-glow-red">
                Start Transformation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
