import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook, Youtube } from '../ui/Icons'

export default function Footer() {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center font-display font-black text-white italic">F</div>
              <span className="text-2xl font-display font-black text-white italic tracking-tighter">FITCRAZ</span>
            </div>
            <p className="text-brand-gray text-sm mb-8">
              Train Insane. Stay Fit. Live Craz.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-brand-gray hover:text-white cursor-pointer transition-colors" />
              <Twitter size={20} className="text-brand-gray hover:text-white cursor-pointer transition-colors" />
              <Facebook size={20} className="text-brand-gray hover:text-white cursor-pointer transition-colors" />
              <Youtube size={20} className="text-brand-gray hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              {['Arena', 'Programs', 'Trainers', 'Schedule', 'Access'].map(link => (
                <li key={link}>
                  <a href="#" className="text-brand-gray hover:text-white text-xs transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">SUPPORT</h4>
            <ul className="space-y-4">
              {['FAQ', 'Membership', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-brand-gray hover:text-white text-xs transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">GET THE APP</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 flex items-center gap-3 hover:border-brand-red transition-all">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" alt="App Store" className="invert" />
                </div>
                <div>
                  <p className="text-[8px] text-brand-gray font-bold uppercase">Download on the</p>
                  <p className="text-xs text-white font-black uppercase">App Store</p>
                </div>
              </a>
              <a href="#" className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 flex items-center gap-3 hover:border-brand-red transition-all">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-full" />
                </div>
                <div>
                  <p className="text-[8px] text-brand-gray font-bold uppercase">Get it on</p>
                  <p className="text-xs text-white font-black uppercase">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-brand-gray uppercase tracking-widest font-bold">
            © 2026 FITCRAZ. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-brand-gray uppercase tracking-widest font-bold">
            <span>DESIGNED BY ANTIGRAVITY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
