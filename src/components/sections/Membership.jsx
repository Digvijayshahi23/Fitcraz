import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "STARTER",
    price: "39",
    features: ["Gym Access", "Basic Training Plan", "1 Group Class / Week"]
  },
  {
    name: "PERFORMANCE",
    price: "59",
    features: ["Gym Access", "Advanced Training Plan", "3 Group Classes / Week", "Progress Tracking"],
    popular: true
  },
  {
    name: "ELITE",
    price: "89",
    description: "For dedicated individuals.",
    features: ["Gym Access", "Elite Training Plan", "Unlimited Classes", "Progress Tracking", "Nutrition Guidance"]
  },
  {
    name: "ATHLETE PRO",
    price: "129",
    description: "For those who want more.",
    features: ["Everything in Elite", "1-on-1 Coaching", "Priority Support", "Custom Meal Plan"]
  }
]

export default function Membership() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="membership" className="py-24 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red">JOIN THE MOVEMENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter">
            CHOOSE YOUR MEMBERSHIP
          </h2>
          <p className="text-brand-gray mt-4 max-w-lg">
            Flexible plans. Elite results. You vs. Yesterday.
          </p>

          <div className="mt-12 flex items-center gap-4 bg-[#0A0A0A] p-1.5 rounded-xl border border-white/5">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${!isYearly ? 'bg-white text-black' : 'text-white/40'}`}
            >
              MONTHLY
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${isYearly ? 'bg-white text-black' : 'text-white/40'}`}
            >
              YEARLY <span className="text-brand-red ml-1">(SAVE 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col bg-[#0A0A0A] border rounded-2xl p-8 hover:border-brand-red/50 transition-all ${plan.popular ? 'border-brand-red neon-glow-red' : 'border-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[8px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xs font-black text-brand-gray uppercase tracking-widest mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-black text-white">${isYearly ? Math.floor(plan.price * 0.8 * 12) : plan.price}</span>
                  <span className="text-brand-gray text-[10px] font-black uppercase tracking-widest">/{isYearly ? 'YR' : 'MO'}</span>
                </div>
                {plan.description && (
                  <p className="text-brand-gray text-[10px] mt-2 italic">{plan.description}</p>
                )}
              </div>

              <div className="flex-grow space-y-4 mb-12">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-white/60">
                    <Check size={14} className="text-brand-red shrink-0" />
                    <span className="text-[11px] font-medium tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${plan.popular ? 'bg-brand-red text-white' : 'border border-white/10 text-white hover:bg-white hover:text-black'}`}>
                JOIN NOW
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
