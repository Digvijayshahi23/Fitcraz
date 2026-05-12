import { motion } from 'framer-motion'
import { Brain, Cpu, Activity, ShieldCheck, Watch, MessageSquare, PieChart, TrendingUp } from 'lucide-react'

const features = [
  { icon: <TrendingUp size={20} />, title: "Predictive Analytics", text: "AI forecasts your performance peaks and recovery needs." },
  { icon: <Watch size={20} />, title: "Smartwatch Sync", text: "Seamless integration with Apple Watch & Garmin." },
  { icon: <PieChart size={20} />, title: "Calorie Intelligence", text: "Visual nutrition tracking with macro-breakdown AI." },
  { icon: <MessageSquare size={20} />, title: "Trainer Direct", text: "24/7 encrypted messaging with your assigned commander." }
]

export default function AIShowcase() {
  return (
    <section id="ai" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Mobile App Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative w-[320px] h-[650px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden z-10">
              <div className="absolute inset-0 bg-brand-black p-6 flex flex-col pt-12">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-xl font-black italic text-white">FIT<span className="text-brand-red">CRAZ</span></div>
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 border border-brand-red/50 flex items-center justify-center animate-pulse">
                    <Activity size={14} className="text-brand-red" />
                  </div>
                </div>

                {/* Main Dashboard Card */}
                <div className="glass p-6 rounded-3xl mb-6 relative overflow-hidden group border-brand-red/20">
                  <p className="text-[10px] uppercase font-bold text-white/40 mb-2 tracking-widest">Performance Index</p>
                  <p className="text-4xl font-black italic text-brand-yellow">98.4%</p>
                  <div className="mt-4 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-brand-red shadow-[0_0_10px_#ff1a1a]"
                    />
                  </div>
                </div>

                {/* Sub Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass p-4 rounded-2xl border-white/5">
                    <Brain size={18} className="text-brand-red mb-2" />
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Mental Focus</p>
                    <p className="text-lg font-black text-white italic">Elite</p>
                  </div>
                  <div className="glass p-4 rounded-2xl border-white/5">
                    <Cpu size={18} className="text-brand-yellow mb-2" />
                    <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Metabolism</p>
                    <p className="text-lg font-black text-white italic">Active</p>
                  </div>
                </div>

                {/* Weekly Chart Mockup */}
                <div className="glass p-4 rounded-2xl flex-grow mb-6 border-white/5">
                  <p className="text-[9px] uppercase font-bold text-white/40 mb-4 tracking-wider">Weekly Intensity</p>
                  <div className="flex items-end justify-between h-20 gap-2">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.1 * i }}
                        className={`w-full rounded-t-sm ${h > 70 ? 'bg-brand-red' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="w-full py-4 rounded-xl bg-brand-red text-white text-center font-black uppercase italic tracking-tighter text-sm shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:scale-[1.02] transition-transform">
                    View Full Analysis
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-800 rounded-b-2xl" />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-20 glass p-6 rounded-2xl border-brand-red/30 z-20 backdrop-blur-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center">
                  <Watch className="text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-white/40">Watch Sync</p>
                  <p className="text-sm font-black text-white italic">Connected</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-20 glass p-6 rounded-2xl border-brand-yellow/30 z-20 backdrop-blur-3xl"
            >
              <p className="text-[10px] font-black uppercase text-white/40 mb-3">Live Biometrics</p>
              <div className="flex gap-1 h-8 items-end">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, 30, 15] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-brand-yellow rounded-full"
                  />
                ))}
              </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-red/5 blur-[150px] rounded-full" />
          </motion.div>

          {/* Right: Content */}
          <div className="relative z-10">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-yellow font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
            >
              THE ECOSYSTEM
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-8 leading-[0.9]"
            >
              AI FITNESS <br /> <span className="text-brand-red neon-text-red">INTELLIGENCE</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-12 leading-relaxed"
            >
              Our proprietary AI doesn't just track your data—it learns your biology. From predictive injury prevention to real-time form correction via your camera, the FITCRAZ app is your 24/7 elite performance commander.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="group"
                >
                  <div className="flex gap-4 items-start p-6 rounded-2xl glass-dark border-white/5 group-hover:border-brand-red/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-black uppercase italic tracking-tighter text-white mb-1">{item.title}</h5>
                      <p className="text-white/40 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <button className="px-10 py-5 bg-white text-brand-black font-black uppercase italic tracking-tighter text-xl rounded-full hover:bg-brand-red hover:text-white transition-all duration-500 neon-glow-red">
                Get Early Access
              </button>
              <div className="flex items-center gap-4 text-white/40 font-bold uppercase text-[10px] tracking-[0.2em]">
                Available on <br /> iOS & Android
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
