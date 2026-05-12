import { motion } from 'framer-motion'
import { Quote, Star, ShieldCheck, Zap } from 'lucide-react'

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "FORMER OLYMPIC SPRINTER",
    image: "https://i.pravatar.cc/150?img=11",
    quote: "The Fitcraz ecosystem provides a level of architectural precision I've only ever seen at the highest levels of professional sport. It is the gold standard.",
    rating: 5
  },
  {
    name: "Sophia Rossi",
    role: "CEO, ROSSI VENTURES",
    image: "https://i.pravatar.cc/150?img=32",
    quote: "Finding a performance club that understands the demands of an elite executive lifestyle while delivering world-class athletic results was a game changer.",
    rating: 5
  },
  {
    name: "Dr. James Aris",
    role: "SPORTS BIOMECHANIST",
    image: "https://i.pravatar.cc/150?img=59",
    quote: "As a scientist, I am impressed by the verified data-driven approach. Every protocol is backed by biological evidence and performance analytics.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 bg-brand-black relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Quote className="w-5 h-5 text-brand-red fill-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">The Athlete Voice</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
          >
            Elite <br />
            <span className="text-brand-red not-italic">Endorsements.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="premium-card p-12 flex flex-col gap-10 group relative"
            >
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-red fill-brand-red" />
                ))}
              </div>

              <div className="relative flex-grow">
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-white/[0.03] group-hover:text-brand-red/10 transition-colors" />
                <p className="text-xl text-white font-medium leading-relaxed italic relative z-10">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-red transition-colors shadow-2xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-black italic uppercase tracking-tighter text-white mb-1">{item.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">{item.role}</span>
                    <ShieldCheck size={10} className="text-brand-red" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Banner */}
        <div className="mt-32 flex flex-wrap justify-center items-center gap-16 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
           {/* Mock Brand Logos */}
           <div className="text-3xl font-display font-black italic tracking-tighter">NIKE</div>
           <div className="text-3xl font-display font-black italic tracking-tighter">UNDER ARMOUR</div>
           <div className="text-3xl font-display font-black italic tracking-tighter">RED BULL</div>
           <div className="text-3xl font-display font-black italic tracking-tighter">EQUINOX</div>
           <div className="text-3xl font-display font-black italic tracking-tighter">GATORADE</div>
        </div>
      </div>
    </section>
  )
}
