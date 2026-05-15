import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const protocols = [
  {
    title: "STRENGTH BUILT",
    description: "Build power, strength and muscular endurance.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  },
  {
    title: "HYBRID PERFORMANCE",
    description: "Strength + Cardio for maximum performance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
  },
  {
    title: "ATHLETE CONDITIONING",
    description: "Elite conditioning for peak athletic performance.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
  }
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red">BUILT FOR EVERY ATHLETE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter">
            TRAINING PROGRAMS
          </h2>
          <p className="text-brand-gray mt-4 max-w-lg">
            Programs engineered for results. Choose your path and unlock your potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {protocols.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden p-8 hover:border-brand-red/50 transition-all"
            >
              <div className="mb-8 aspect-square overflow-hidden rounded-xl">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-display font-black text-white mb-4 italic uppercase">
                {program.title}
              </h3>
              <p className="text-brand-gray text-sm mb-8 flex-grow">
                {program.description}
              </p>

              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-brand-red transition-colors">
                LEARN MORE <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
            VIEW ALL PROGRAMS
          </button>
        </div>
      </div>
    </section>
  )
}

