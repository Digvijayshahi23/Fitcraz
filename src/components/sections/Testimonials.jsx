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

          <div className="relative max-w-md hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80" 
              alt="Community" 
              className="rounded-3xl grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-center">
              <h3 className="text-2xl font-display font-black text-white uppercase italic">READY TO BECOME YOUR BEST?</h3>
              <p className="text-brand-gray text-xs mt-2 mb-6">Your journey starts today. Join the elite and unlock your full potential.</p>
              <div className="flex flex-col gap-4">
                <button className="px-8 py-4 bg-brand-red text-white rounded-lg text-[10px] font-black uppercase tracking-widest">JOIN THE ELITE</button>
                <button className="px-8 py-4 border border-white/10 text-white rounded-lg text-[10px] font-black uppercase tracking-widest">BOOK A TOUR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
