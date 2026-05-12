import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, MessageCircle, Globe, Shield, Radio } from 'lucide-react'
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
    toast.success("TRANSMISSION RECEIVED. PROTOCOL INITIALIZED.")
  }

  return (
    <section id="contact" className="py-40 bg-void relative overflow-hidden">
      <Toaster position="top-center" richColors theme="dark" />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-apple-blue/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Radio className="w-4 h-4 text-apple-blue animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-apple-blue">Transmission Hub</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white"
          >
            Initialize <span className="text-white/20 italic font-light">Connection.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass-dark p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 ml-6">Origin Name</label>
                <input
                  {...register("name")}
                  className={`w-full bg-white/[0.02] border ${errors.name ? 'border-apple-blue' : 'border-white/5'} rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue/30 transition-all font-light`}
                  placeholder="Identify yourself"
                />
                {errors.name && <p className="text-apple-blue text-[10px] font-bold uppercase ml-6">{errors.name.message}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 ml-6">Digital Address</label>
                <input
                  {...register("email")}
                  className={`w-full bg-white/[0.02] border ${errors.email ? 'border-apple-blue' : 'border-white/5'} rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue/30 transition-all font-light`}
                  placeholder="transmission@node.com"
                />
                {errors.email && <p className="text-apple-blue text-[10px] font-bold uppercase ml-6">{errors.email.message}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 ml-6">Protocol Intent</label>
                <textarea
                  {...register("message")}
                  rows="4"
                  className={`w-full bg-white/[0.02] border ${errors.message ? 'border-apple-blue' : 'border-white/5'} rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-apple-blue focus:ring-1 focus:ring-apple-blue/30 transition-all resize-none font-light`}
                  placeholder="Specify mission objectives..."
                />
                {errors.message && <p className="text-apple-blue text-[10px] font-bold uppercase ml-6">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-white text-void font-bold uppercase tracking-widest text-[10px] rounded-2xl hover:bg-apple-blue hover:text-white transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-6 group"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                ) : (
                  <>
                    Initialize Mission
                    <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="flex flex-col gap-10">
            {/* Neural Hub Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="h-[350px] rounded-[3.5rem] overflow-hidden border border-white/5 relative group shadow-2xl"
            >
              <div className="absolute inset-0 bg-void/60 z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-all duration-[3s]"
                alt="Neural Hub"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="glass p-8 rounded-[2rem] text-center border border-white/10 backdrop-blur-3xl">
                  <Globe className="text-apple-blue mx-auto mb-4 w-8 h-8" />
                  <p className="text-white font-display font-bold tracking-tight text-xl mb-1">NEURAL HUB ALPHA</p>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Node 77, Digital Corridor</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group hover:border-apple-blue/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-apple-blue group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[8px] uppercase font-bold text-white/20 tracking-widest mb-1">Direct Line</p>
                  <p className="text-sm font-bold text-white">+1 (800) ANTI-GRAV</p>
                </div>
              </div>

              <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group hover:border-apple-blue/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-apple-blue group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[8px] uppercase font-bold text-white/20 tracking-widest mb-1">Transmission</p>
                  <p className="text-sm font-bold text-white">missions@fitcraz.com</p>
                </div>
              </div>
            </div>

            {/* Encryption Notice */}
            <div className="mt-auto p-10 rounded-[3rem] bg-apple-blue/5 border border-apple-blue/10 flex items-center justify-between group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-apple-blue/20 flex items-center justify-center text-apple-blue shadow-[0_0_30px_rgba(0,122,255,0.2)]">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-2xl tracking-tighter">Secure Protocol</p>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">Post-Quantum Encrypted Hub</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-apple-blue group-hover:border-apple-blue transition-all">
                <Shield size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
