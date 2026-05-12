import { motion } from 'framer-motion'
import { Dumbbell, Flame, Zap, Trophy, Target, Users, Coffee, Globe } from 'lucide-react'

const programs = [
  {
    title: "Strength Training",
    description: "Build raw power and muscle density with elite coaching.",
    icon: <Dumbbell />,
    color: "from-brand-red to-red-900"
  },
  {
    title: "Fat Loss",
    description: "Torch body fat with science-backed metabolic conditioning.",
    icon: <Flame />,
    color: "from-orange-500 to-brand-red"
  },
  {
    title: "HIIT",
    description: "High intensity interval training for maximum performance.",
    icon: <Zap />,
    color: "from-brand-yellow to-orange-500"
  },
  {
    title: "Functional Fitness",
    description: "Move better, live stronger with movement-based training.",
    icon: <Target />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "MMA Conditioning",
    description: "Train like a fighter. Develop speed, power, and agility.",
    icon: <Trophy />,
    color: "from-brand-red to-black"
  },
  {
    title: "Personal Coaching",
    description: "1-on-1 elite mentorship tailored to your specific goals.",
    icon: <Users />,
    color: "from-brand-yellow to-brand-red"
  },
  {
    title: "Diet Programs",
    description: "Fuel your beast. Personalized nutrition plans that work.",
    icon: <Coffee />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Online Training",
    description: "Access the FITCRAZ method from anywhere in the world.",
    icon: <Globe />,
    color: "from-brand-red to-purple-600"
  }
]

export default function Programs() {
  return (
    <section id="training" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
          >
            ELITE PROGRAMS
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
          >
            CHOOSE YOUR <span className="text-brand-red neon-text-red">WEAPON</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-dark h-full p-8 rounded-3xl border border-white/5 group-hover:border-brand-red/30 transition-all duration-500 overflow-hidden">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {program.icon}
                </div>

                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-4 group-hover:text-brand-red transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {program.description}
                </p>

                <div className="flex items-center gap-2 text-white/30 font-bold uppercase text-[10px] tracking-widest group-hover:text-white transition-colors">
                  Learn More 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>

                {/* Animated Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              
              {/* Neon Edge Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 -z-20 rounded-3xl" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-brand-black font-black uppercase italic tracking-tighter text-xl rounded-full hover:bg-brand-red hover:text-white transition-all duration-500 neon-glow-red"
          >
            View All Programs
          </motion.button>
        </div>
      </div>
    </section>
  )
}
