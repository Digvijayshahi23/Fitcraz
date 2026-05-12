import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import AuthLayout from './AuthLayout'
import { UserPlus, Code, Globe } from 'lucide-react'
import { Toaster, toast } from 'sonner'

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data) => {
    try {
      await signup(data)
      toast.success("RECRUITMENT SUCCESSFUL. WELCOME TO THE EMPIRE.")
      setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      toast.error("RECRUITMENT FAILED. TRY AGAIN.")
    }
  }

  return (
    <AuthLayout title="New Recruit" subtitle="Join the global transformation">
      <Toaster position="top-center" richColors theme="dark" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Full Name</label>
          <input 
            {...register("name")}
            className={`w-full bg-white/5 border ${errors.name ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all`}
            placeholder="John 'The Beast' Doe"
          />
          {errors.name && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Email Address</label>
          <input 
            {...register("email")}
            type="email"
            className={`w-full bg-white/5 border ${errors.email ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all`}
            placeholder="recruit@antigravity.fit"
          />
          {errors.email && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Password</label>
            <input 
              {...register("password")}
              type="password"
              className={`w-full bg-white/5 border ${errors.password ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all`}
              placeholder="••••••••"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Confirm</label>
            <input 
              {...register("confirmPassword")}
              type="password"
              className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-brand-red' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red transition-all`}
              placeholder="••••••••"
            />
          </div>
        </div>
        {errors.password && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.password.message}</p>}
        {errors.confirmPassword && <p className="text-brand-red text-[10px] font-bold uppercase ml-4">{errors.confirmPassword.message}</p>}

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-brand-red text-white font-black uppercase italic tracking-tighter text-xl rounded-2xl hover:bg-white hover:text-brand-black transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-4"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Ascend Now <UserPlus size={20} /></>
          )}
        </button>

        <p className="text-center text-white/40 text-[11px] font-bold uppercase tracking-wider">
          Already a Commander? <Link to="/login" className="text-brand-red hover:text-white transition-colors ml-2">Login Here</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
