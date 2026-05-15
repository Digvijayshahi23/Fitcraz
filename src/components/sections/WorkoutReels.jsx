import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const reels = [
  { id: 1, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" },
  { id: 2, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80" },
  { id: 3, image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80" },
  { id: 4, image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80" },
  { id: 5, image: "https://images.unsplash.com/photo-1491752355423-9545ac42602b?auto=format&fit=crop&q=80" }
]

export default function WorkoutReels() {
  return (
    <section id="reels" className="py-24 bg-black border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red">TRAIN. RECORD. EVOLVE.</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter">
              WORKOUT REELS
            </h2>
            <p className="text-brand-gray mt-4 max-w-lg">
              Swipe through real workouts from our elite community.
            </p>
          </div>
          <button className="px-8 py-4 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
            VIEW ALL REELS
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={reel.image} 
                alt="Reel" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
