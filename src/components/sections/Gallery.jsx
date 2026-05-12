import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
]

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="gallery" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
          >
            THE CULTURE
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
          >
            ATHLETE <span className="text-brand-yellow">GALLERY</span>
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer rounded-[2rem] overflow-hidden border border-white/5"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img} 
                className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                alt={`Gallery ${idx}`}
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="text-white" />
                </div>
              </div>
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
            className="fixed inset-0 z-[200] bg-brand-black/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white glass p-3 rounded-full hover:bg-brand-red transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-full rounded-3xl object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
