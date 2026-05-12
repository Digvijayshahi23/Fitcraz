import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Zap } from 'lucide-react'

const schedule = [
  { time: "06:00", activity: "High Intensity Protocol", coach: "Viktor", location: "Arena 1" },
  { time: "08:30", activity: "Strength Architecture", coach: "Elena", location: "Power Lab" },
  { time: "12:00", activity: "Bio-Recovery Session", coach: "Marcus", location: "Zen Zone" },
  { time: "17:30", activity: "Metabolic Conditioning", coach: "Viktor", location: "Arena 2" },
  { time: "19:00", activity: "Elite Performance Flow", coach: "Elena", location: "Sky Deck" }
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-40 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Calendar className="w-5 h-5 text-brand-red" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red">Live Schedule</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-black leading-[0.85] tracking-tighter text-white uppercase italic"
            >
              The Daily <br />
              <span className="text-brand-red not-italic">Rhythm.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gray max-w-md text-right hidden md:block opacity-60"
          >
            Synchronize your training with our elite group protocols. Real-time availability for the most advanced sessions in the city.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 glass-dark rounded-[2.5rem] border border-white/5 hover:border-brand-red/30 transition-all duration-700"
            >
              <div className="flex items-center gap-12 mb-6 md:mb-0">
                <div className="text-4xl md:text-5xl font-display font-black italic text-white group-hover:text-brand-red transition-colors">
                  {item.time}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight text-white mb-2">
                    {item.activity}
                  </h3>
                  <div className="flex items-center gap-4 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Zap size={12} className="text-brand-red" /> {item.coach}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                  </div>
                </div>
              </div>

              <button className="px-10 py-4 rounded-full border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                Reserve Spot
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
