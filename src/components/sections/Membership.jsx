import { motion } from 'framer-motion'
import { Check, Zap, Trophy, Crown, ArrowRight, Activity, Shield } from 'lucide-react'

const tiers = [
  {
    name: "Core Access",
    price: "99",
    period: "month",
    description: "Foundational access to the Antigravity arena.",
    features: ["Open Gym Access", "Standard Recovery Hub", "Mobile App Integration", "Basic Protocol Access"],
    icon: Zap,
    color: "text-brand-red",
    popular: false
  },
  {
    name: "Advanced Training",
    price: "199",
    period: "month",
    description: "Optimized for dedicated athletes pushing boundaries.",
    features: ["Unlimited Group Sessions", "Priority Arena Booking", "Elite Bio-Analytics", "Custom Protocol Design", "Weekly Performance Audit"],
    icon: Trophy,
    color: "text-brand-red",
    popular: true
  },
  {
    name: "Full Club Experience",
    price: "399",
    period: "month",
    description: "The absolute pinnacle of personalized training.",
    features: ["1-on-1 Performance Coaching", "Private Arena Suite", "Personal Performance Architect", "Advanced Cryo-Recovery", "Global Concierge Access"],
    icon: Crown,
    color: "text-brand-red",
    popular: false
  },
  {
    name: "Personal Performance Manager",
    price: "599",
    period: "month",
    description: "Full spectrum bio-optimization for the elite.",
    features: ["Full Bio-Recovery & Nutrition", "Daily Performance Meals", "Weekly Blood Analysis", "Hyperbaric Chamber Access", "24/7 Medical Concierge"],
    icon: Activity,
    color: "text-brand-red",
    popular: false
  }
]

export default function Membership() {
  return (
    <section id="membership" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Shield className="w-5 h-5 text-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">Membership Protocols</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
          >
            Invest in your <br />
            <span className="text-brand-red not-italic">Evolution.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`premium-card p-10 flex flex-col relative group ${tier.popular ? 'border-brand-red/50 shadow-[0_40px_100px_rgba(255,59,48,0.1)]' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-red text-white text-[8px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">
                  Most Selected
                </div>
              )}

              <div className="mb-10">
                <tier.icon className={`w-12 h-12 ${tier.color} mb-8 group-hover:scale-110 transition-transform duration-500`} />
                <h3 className="text-2xl font-display font-black italic uppercase tracking-tighter text-white mb-2">{tier.name}</h3>
                <p className="text-brand-gray text-[10px] font-medium leading-relaxed">{tier.description}</p>
              </div>

              <div className="mb-12 flex-grow">
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-display font-black italic text-white leading-none">${tier.price}</span>
                  <span className="text-brand-gray text-[10px] uppercase font-black tracking-widest mb-1">/ {tier.period}</span>
                </div>
                
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-red transition-colors mt-0.5">
                        <Check size={10} className="text-brand-red group-hover/item:text-white" />
                      </div>
                      <span className="text-[11px] font-medium text-white/60 group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-700 flex items-center justify-center gap-4 group/btn ${tier.popular ? 'bg-brand-red text-white shadow-xl hover:shadow-brand-red/30' : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-brand-black'}`}>
                Select Protocol
                <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
