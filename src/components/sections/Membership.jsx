import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "49",
    features: ["Access to Base Gym", "2 Group Classes/Mo", "Basic App Access", "Locker Access"],
    color: "white/10",
    popular: false
  },
  {
    name: "Beast Mode",
    price: "99",
    features: ["24/7 Elite Access", "Unlimited Classes", "Pro App Features", "Personal Training (1/Mo)", "Recovery Lounge"],
    color: "brand-red",
    popular: true
  },
  {
    name: "Elite",
    price: "199",
    features: ["VIP Priority Access", "Personal Coaching (4/Mo)", "Nutrition Concierge", "Custom Meal Plans", "Merch Discounts"],
    color: "brand-yellow",
    popular: false
  },
  {
    name: "VIP Transformation",
    price: "499",
    features: ["24/7 Dedicated Coach", "Daily Meal Delivery", "Private Training Suite", "Quarterly Blood Labs", "Global Site Access"],
    color: "white/20",
    popular: false
  }
]

export default function Membership() {
  return (
    <section id="membership" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
          >
            JOIN THE MOVEMENT
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
          >
            MEMBERSHIP <span className="text-brand-yellow">EXPERIENCE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 group ${
                plan.popular 
                  ? 'bg-brand-red border-transparent text-white shadow-[0_0_50px_rgba(255,26,26,0.3)] scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-brand-red/50 text-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-red font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black italic">$</span>
                  <span className="text-6xl font-black italic tracking-tighter">{plan.price}</span>
                  <span className={`text-sm font-bold uppercase tracking-widest ${plan.popular ? 'text-white/70' : 'text-white/30'}`}>/Mo</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white text-brand-red' : 'bg-brand-red text-white'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={`text-sm font-bold tracking-tight ${plan.popular ? 'text-white/90' : 'text-white/60'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black uppercase italic tracking-tighter text-xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white text-brand-red hover:bg-brand-yellow hover:text-white' 
                  : 'bg-brand-red text-white hover:bg-white hover:text-brand-black'
              }`}>
                Join Now
              </button>

              {/* Animated Background Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-xs">
            All plans include access to our basic health tracking platform. Terms & conditions apply.
          </p>
        </div>
      </div>
    </section>
  )
}
