import { motion } from 'framer-motion'

const stories = [
  {
    name: "RICKY S.",
    duration: "12 WEEKS TRANSFORMATION",
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  },
  {
    name: "JESSICA H.",
    duration: "16 WEEKS TRANSFORMATION",
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80"
  },
  {
    name: "DAVID L.",
    duration: "20 WEEKS TRANSFORMATION",
    before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1491752355423-9545ac42602b?auto=format&fit=crop&q=80"
  }
]

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red">REAL PEOPLE. REAL RESULTS.</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter">
            TRANSFORMATIONS THAT INSPIRE
          </h2>
          <p className="text-brand-gray mt-4 max-w-lg">
            Every rep. Every drop of sweat. Every late night. It all shows up in the results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden p-6 hover:border-brand-red/50 transition-all"
            >
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-black">
                  <img src={story.before} alt="Before" className="w-full h-full object-cover grayscale opacity-60" />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 rounded text-[8px] font-black text-white uppercase">BEFORE</div>
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-black">
                  <img src={story.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-brand-red rounded text-[8px] font-black text-white uppercase">AFTER</div>
                </div>
              </div>
              
              <h3 className="text-lg font-display font-black text-white mb-1 uppercase tracking-tight">
                {story.name}
              </h3>
              <p className="text-brand-gray text-[10px] uppercase tracking-widest font-bold">
                {story.duration}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
            VIEW ALL STORIES
          </button>
        </div>
      </div>
    </section>
  )
}
