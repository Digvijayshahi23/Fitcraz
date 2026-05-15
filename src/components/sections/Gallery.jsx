import { motion } from 'framer-motion'

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
]

export default function Gallery() {
  return (
    <section id="arena" className="py-24 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red">BUILT DIFFERENT.</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter">
              THE ARENA
            </h2>
            <p className="text-brand-gray mt-4 max-w-lg">
              State-of-the-art equipment. World-class facilities. Everything you need to dominate.
            </p>
          </div>
          <button className="px-8 py-4 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
            EXPLORE THE ARENA
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 aspect-video">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative">
            <img src={images[0]} alt="Arena" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="rounded-2xl overflow-hidden group relative">
            <img src={images[1]} alt="Arena" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="rounded-2xl overflow-hidden group relative">
            <img src={images[2]} alt="Arena" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden group relative aspect-[2/1]">
            <img src={images[3]} alt="Arena" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  )
}
