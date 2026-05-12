import { motion } from 'framer-motion'
import { ShoppingBag, Star, ArrowRight } from 'lucide-react'

const products = [
  { name: "Iso-Fuel Matrix", category: "Supplements", price: "$89", image: "https://images.unsplash.com/photo-1593095191071-82b63deef4a1?q=80&w=2070&auto=format&fit=crop" },
  { name: "Elite Training Vest", category: "Apparel", price: "$120", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=2070&auto=format&fit=crop" },
  { name: "Bio-Sync Grips", category: "Gear", price: "$45", image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop" }
]

export default function Shop() {
  return (
    <section id="shop" className="py-40 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <ShoppingBag className="w-5 h-5 text-brand-red" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">The Armory</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
          >
            Elite <br />
            <span className="text-brand-red not-italic">Equipment.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col p-6 glass-dark rounded-[3rem] border border-white/5 hover:border-brand-red/30 transition-all duration-700"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute top-6 right-6 px-4 py-1.5 glass-dark rounded-full border border-white/10 flex items-center gap-2">
                  <Star size={10} className="text-brand-red fill-brand-red" />
                  <span className="text-[8px] font-black text-white">ELITE SELECTION</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-brand-red text-[8px] font-black uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="text-2xl font-display font-black uppercase italic tracking-tight text-white">{product.name}</h3>
                  </div>
                  <span className="text-2xl font-display font-black text-white">{product.price}</span>
                </div>
                <button className="w-full py-4 rounded-2xl bg-white text-brand-black font-black uppercase tracking-widest text-[10px] hover:bg-brand-red hover:text-white transition-all shadow-xl">
                  Add to Kit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-4 text-white/40 hover:text-white transition-colors group">
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Full Catalog</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-brand-red" />
          </button>
        </div>
      </div>
    </section>
  )
}
