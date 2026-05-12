import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "What makes Fitcraz different from a standard high-end gym?",
    answer: "We are an athletic ecosystem. Beyond high-end equipment, we integrate bio-telemetry, neural-recovery protocols, and architectural training environments designed to optimize human performance at a cellular level."
  },
  {
    question: "Do I need to be a professional athlete to join?",
    answer: "No. We welcome anyone dedicated to the pursuit of their absolute peak. Our protocols are scalable, designed to take you from your current baseline to an elite standard of performance."
  },
  {
    question: "How does the Personal Performance Manager system work?",
    answer: "Athlete Pro members are assigned a dedicated architect who synchronizes your training, nutrition, blood work, and recovery protocols into a single, high-velocity mission plan."
  },
  {
    question: "Are the bio-recovery labs included in all memberships?",
    answer: "Basic recovery access is included in Core. Advanced labs (Cryo, Hyperbaric, etc.) are reserved for Advanced and Elite tiers to ensure zero-latency availability for our high-performance members."
  }
]

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-display font-black italic uppercase tracking-tighter transition-colors duration-500 ${isOpen ? 'text-brand-red' : 'text-white group-hover:text-brand-red'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-brand-red border-brand-red text-white rotate-180' : 'bg-transparent border-white/10 text-white/40 group-hover:border-brand-red group-hover:text-brand-red'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-brand-gray text-lg font-medium leading-relaxed pb-8 max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <HelpCircle className="w-5 h-5 text-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">Performance FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
          >
            Mission <br />
            <span className="text-brand-red not-italic">Intelligence.</span>
          </motion.h2>
        </div>

        <div className="glass-dark rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-display font-black uppercase text-white/[0.01] pointer-events-none -z-10 italic select-none translate-y-1/2">
        INTEL
      </div>
    </section>
  )
}
