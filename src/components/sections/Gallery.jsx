import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Sparkles, LayoutGrid } from 'lucide-react'
import CinematicImage from '../ui/CinematicImage'

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    size: "md:col-span-2 md:row-span-2",
    tag: "Architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    size: "md:col-span-1 md:row-span-1",
    tag: "Neural"
  },
  {
    src: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
    size: "md:col-span-1 md:row-span-1",
    tag: "Core"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    size: "md:col-span-2 md:row-span-1",
    tag: "Elite"
  },
  {
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    size: "md:col-span-1 md:row-span-2",
    tag: "Sync"
  },
  {
    src: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
    size: "md:col-span-1 md:row-span-1",
    tag: "VOID"
  }
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="showcase" className="py-32 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <LayoutGrid className="w-4 h-4 text-apple-blue" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-apple-blue">The Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight">
              Aesthetic <br />
              <span className="text-white/20 italic font-light">Performance.</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-gray max-w-xs font-light text-lg leading-relaxed"
          >
            A curated showcase of high-end digital architecture and athletic precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer rounded-[2.5rem] overflow-hidden border border-white/5 ${item.size}`}
              onClick={() => setSelectedImg(item.src)}
            >
              <CinematicImage
                src={item.src}
                alt={`Gallery ${idx}`}
                className="w-full h-full group-hover:scale-110 transition-transform duration-[2s] ease-out"
                aspectRatio="aspect-auto"
              />

              {/* Interaction Overlay */}
              <div className="absolute inset-0 bg-void/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center scale-50 group-hover:scale-100 transition-all duration-500">
                  <ZoomIn className="text-white w-6 h-6" />
                </div>

                <div className="absolute bottom-8 left-8 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-apple-blue" />
                  <span className="text-[10px] text-white font-bold uppercase tracking-[0.3em]">{item.tag}</span>
                </div>
              </div>

              {/* Edge Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-700 rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-void/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-10 right-10 text-white glass p-4 rounded-full border border-white/10 hover:bg-white hover:text-void transition-all duration-500"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Selected"
                className="w-full h-auto rounded-[3rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium">
                Antigravity Visual Feed
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
