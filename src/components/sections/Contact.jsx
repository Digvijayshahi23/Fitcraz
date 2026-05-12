import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Toaster, toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    toast.success("TRANSFORMATION REQUEST RECEIVED. OUR COMMANDERS WILL CONTACT YOU SOON.")
  }

  return (
    <section id="contact" className="py-32 bg-brand-black relative overflow-hidden">
      <Toaster position="top-center" richColors theme="dark" />
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-red/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-yellow font-black uppercase tracking-[0.4em] mb-4 text-sm italic"
          >
            COMMAND CENTER
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
          >
            JOIN THE <span className="text-brand-red neon-text-red">EMPIRE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark p-12 rounded-[3rem] border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Full Name</label>
                <input 
                  {...register("name")}
                  className={`w-full bg-white/5 border ${errors.name ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Email Address</label>
                <input 
                  {...register("email")}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all`}
                  placeholder="name@email.com"
                />
                {errors.email && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Transformation Goal</label>
                <textarea 
                  {...register("message")}
                  rows="4"
                  className={`w-full bg-white/5 border ${errors.message ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all resize-none`}
                  placeholder="Tell us about your mission..."
                />
                {errors.message && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-red text-white font-black uppercase italic tracking-tighter text-xl rounded-2xl hover:bg-white hover:text-brand-black transition-all duration-500 neon-glow-red disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Initiate Mission 
                    <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="flex flex-col gap-8">
            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="h-[300px] rounded-[3rem] overflow-hidden border border-white/10 relative group"
            >
              <div className="absolute inset-0 bg-brand-black/40 z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                alt="Map Location"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="glass p-6 rounded-3xl text-center border-brand-red/30">
                  <MapPin className="text-brand-red mx-auto mb-2" />
                  <p className="text-white font-black italic uppercase tracking-tighter">FITCRAZ HEADQUARTERS</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">77 Elite Way, Cyber City</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-dark p-8 rounded-3xl border-white/5 flex items-center gap-6 group hover:border-brand-red/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Phone />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black text-white/40 tracking-widest">Call Us</p>
                  <p className="text-lg font-black text-white italic">+1 (800) FIT-CRAZ</p>
                </div>
              </div>

              <div className="glass-dark p-8 rounded-3xl border-white/5 flex items-center gap-6 group hover:border-brand-red/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black text-white/40 tracking-widest">Email Us</p>
                  <p className="text-lg font-black text-white italic">mission@fitcraz.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              className="flex items-center justify-between p-8 rounded-[2.5rem] bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366] transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                  <MessageCircle />
                </div>
                <div>
                  <p className="text-white font-black italic uppercase tracking-tighter text-2xl group-hover:scale-105 transition-transform origin-left">WhatsApp Direct</p>
                  <p className="text-white/40 group-hover:text-white/80 text-xs font-bold uppercase tracking-widest transition-colors">Instant Commander Support</p>
                </div>
              </div>
              <div className="text-white/20 group-hover:text-white transition-colors text-3xl font-black">→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
