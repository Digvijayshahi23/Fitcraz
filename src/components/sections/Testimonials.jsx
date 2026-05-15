import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red">REAL FEEDBACK. REAL RESULTS.</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter mb-8">
              WHAT OUR <br />MEMBERS SAY
            </h2>
            
            <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-3xl relative">
              <p className="text-brand-gray text-lg italic leading-relaxed mb-8">
                "FITCRAZ ELITE changed my life. The coaches, the community and the atmosphere keep me pushing every day."
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=33" alt="Member" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase">MARK T.</h4>
                    <p className="text-[8px] text-brand-gray uppercase tracking-widest font-bold">ELITE MEMBER</p>
                  </div>
                </div>
                
                <div className="flex gap-1 text-brand-red">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-12 right-12 flex gap-4 translate-y-20 md:translate-y-0">
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Improved CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#050505] group"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
              alt="Community" 
              className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          </div>

          <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] uppercase italic tracking-tighter mb-6">
                READY TO <br />
                <span className="text-brand-red text-shadow-premium">BECOME</span> YOUR BEST?
              </h3>
              <p className="text-brand-gray text-sm md:text-lg max-w-md opacity-80">
                The elite ecosystem is waiting. Join 12,000+ athletes who have already transformed their lives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <button className="px-12 py-6 bg-brand-red text-white rounded-full font-black text-xs uppercase tracking-widest shadow-[0_20px_50px_rgba(255,59,48,0.3)] hover:scale-105 transition-all">
                JOIN THE ELITE
              </button>
              <button className="px-12 py-6 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all backdrop-blur-xl">
                BOOK A TOUR
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-[120px] rounded-full translate-x-1/2" />
        </motion.div>
        </div>
      </div>
    </section>
  )
}
