import { motion } from 'framer-motion'
import { Zap, Trophy, Target, User, MessageSquare, Activity } from 'lucide-react'

const dockItems = [
  { icon: Target, href: '#programs', label: 'Protocols' },
  { icon: Trophy, href: '#trainers', label: 'Elite' },
  { icon: Zap, href: '#home', label: 'Arena', primary: true },
  { icon: Activity, href: '#recovery', label: 'Bio' },
  { icon: MessageSquare, href: '#faq', label: 'Intel' }
]

export default function MobileDock() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden"
    >
      <div className="mx-6 mb-8 p-3 glass-dark rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl flex items-center justify-between relative">
        {dockItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              item.primary 
                ? 'w-16 h-16 -mt-10 bg-brand-red rounded-full shadow-[0_0_20px_#FF3B30] text-white border-4 border-brand-black' 
                : 'w-12 h-12 text-white/40 hover:text-white'
            }`}
          >
            {item.primary ? (
              <Zap size={28} className="fill-white" />
            ) : (
              <item.icon size={20} />
            )}
            {!item.primary && (
              <span className="text-[7px] font-black uppercase tracking-widest mt-1">
                {item.label}
              </span>
            )}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
