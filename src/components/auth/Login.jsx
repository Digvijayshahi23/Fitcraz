import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import AuthLayout from './AuthLayout'
import { Send, Code, Globe } from 'lucide-react'
import { Toaster, toast } from 'sonner'

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password)
      toast.success("MISSION INITIATED. WELCOME BACK, COMMANDER.")
      setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      toast.error("MISSION FAILED. CHECK YOUR CREDENTIALS.")
    }
  }

  return (
    <AuthLayout title="Command Login" subtitle="Access the elite sanctuary">
      <Toaster position="top-center" richColors theme="dark" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Email Address</label>
          <input 
            {...register("email")}
            type="email"
            className={`w-full bg-white/5 border ${errors.email ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all`}
            placeholder="athlete@antigravity.fit"
          />
          {errors.email && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-4">
            <label className="text-[10px] uppercase font-black tracking-widest text-white/40">Password</label>
            <Link to="/forgot-password" title="Wait, I forgot!" className="text-[9px] uppercase font-black tracking-widest text-brand-yellow hover:text-white transition-colors">Forgot?</Link>
          </div>
          <input 
            {...register("password")}
            type="password"
            className={`w-full bg-white/5 border ${errors.password ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all`}
            placeholder="••••••••"
          />
          {errors.password && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.password.message}</p>}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-brand-red text-white font-black uppercase italic tracking-tighter text-xl rounded-2xl hover:bg-white hover:text-brand-black transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-4"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Mission Start <Send size={20} /></>
          )}
        </button>

        <div className="flex items-center gap-4 py-2">
          <div className="h-[1px] flex-grow bg-white/10" />
          <span className="text-[9px] uppercase font-black text-white/20">OR ASCEND WITH</span>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="glass py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
            <Globe size={18} /> <span className="text-xs font-bold uppercase tracking-widest">Google</span>
          </button>
          <button type="button" className="glass py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
            <Code size={18} /> <span className="text-xs font-bold uppercase tracking-widest">Github</span>
          </button>
        </div>

        <p className="text-center text-white/40 text-[11px] font-bold uppercase tracking-wider">
          New Recruit? <Link to="/signup" className="text-brand-red hover:text-white transition-colors ml-2">Register Now</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
