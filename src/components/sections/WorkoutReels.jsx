import { motion } from 'framer-motion'
import { Play, Heart, MessageCircle, Share2, ArrowUpRight, Zap } from 'lucide-react'

const reels = [
  {
    id: 1,
    title: "Velocity Protocol",
    athlete: "@dante_stone",
    likes: "12.4k",
    comments: "482",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4"
  },
  {
    id: 2,
    title: "Elite Architects",
    athlete: "@marcus_thorne",
    likes: "18.1k",
    comments: "921",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4"
  },
  {
    id: 3,
    title: "Dawn Evolution",
    athlete: "@elena_vance",
    likes: "15.9k",
    comments: "310",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-the-gym-23214-large.mp4"
  }
]

export default function WorkoutReels() {
  return (
    <section id="reels" className="py-64 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand-red">The Feed</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3.5rem,10vw,8.5rem)] font-display font-black leading-[0.8] tracking-cinematic text-white uppercase italic"
            >
              Immersive <br />
              <span className="text-brand-red not-italic">Execution.</span>
            </motion.h2>
          </div>
          <button className="px-12 py-6 glass text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-brand-black transition-all duration-500 flex items-center gap-4">
            OPEN THE HUB <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1.2 }}
              viewport={{ once: true }}
              className="group relative aspect-[9/16] rounded-[4rem] overflow-hidden bg-brand-void border border-white/5"
            >
              {/* Video Base */}
              <video
                src={reel.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]"
              />

              {/* Interaction Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-void/90 via-transparent to-transparent z-10" />
              
              {/* Top Meta */}
              <div className="absolute top-12 left-12 right-12 z-20 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-brand-red/50 overflow-hidden p-0.5">
                    <div className="w-full h-full rounded-full bg-brand-surface flex items-center justify-center">
                      <Zap size={14} className="text-brand-red fill-brand-red" />
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{reel.athlete}</span>
                </div>
                <div className="px-4 py-2 glass rounded-full border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/40">
                  LIVE NOW
                </div>
              </div>

              {/* Center Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100 transition-transform">
                <div className="w-24 h-24 rounded-full glass border border-white/20 flex items-center justify-center text-white backdrop-blur-3xl shadow-2xl">
                  <Play size={40} className="fill-white ml-2" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <h3 className="text-3xl font-display font-black text-white italic uppercase tracking-cinematic mb-8">
                  {reel.title}
                </h3>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <div className="flex gap-8">
                    <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-colors">
                      <Heart size={20} />
                      <span className="text-[10px] font-black">{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40">
                      <MessageCircle size={20} />
                      <span className="text-[10px] font-black">{reel.comments}</span>
                    </div>
                  </div>
                  <button className="text-white/40 hover:text-white transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
