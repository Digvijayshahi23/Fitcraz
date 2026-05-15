import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook } from '../ui/Icons'

const trainers = [
  {
    name: "ARJUN KHAN",
    role: "ELITE STRENGTH ARCHITECT",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  },
  {
    name: "VIKRAM SINGH",
    role: "PHYSIOLOGICAL PERFORMANCE COACH",
    image: "https://images.unsplash.com/photo-1491752355423-9545ac42602b?auto=format&fit=crop&q=80"
  },
  {
    name: "ANANYA RAJ",
    role: "PEAK CONDITIONING SPECIALIST",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80"
  }
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-orange">ARCHITECTS OF HUMANITY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-brand-white uppercase italic tracking-tighter">
            ELITE ARCHITECTS
          </h2>
          <p className="text-brand-gray mt-4 max-w-lg">
            Learn from the best. Our elite trainers are here to transform you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-brand-graphite border border-white/5 rounded-2xl overflow-hidden p-8 hover:border-brand-orange/50 transition-all"
            >
              <div className="mb-8 aspect-[4/5] overflow-hidden rounded-xl">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <h3 className="text-xl font-display font-black text-white mb-1 uppercase">
                {trainer.name}
              </h3>
              <p className="text-brand-gray text-xs uppercase tracking-widest mb-6">
                {trainer.role}
              </p>

              <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <Instagram size={16} className="cursor-pointer hover:text-brand-orange transition-colors" />
                <Twitter size={16} className="cursor-pointer hover:text-brand-orange transition-colors" />
                <Facebook size={16} className="cursor-pointer hover:text-brand-orange transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
            VIEW ALL TRAINERS
          </button>
        </div>
      </div>
    </section>
  )
}

