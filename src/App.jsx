import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'

import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import SmoothScroll from './components/layout/SmoothScroll'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Programs from './components/sections/Programs'
import AIShowcase from './components/sections/AIShowcase'
import Transformations from './components/sections/Transformations'
import VideoReels from './components/sections/VideoReels'
import Trainers from './components/sections/Trainers'
import Membership from './components/sections/Membership'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import GlobalEffects from './components/ui/GlobalEffects'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import './App.css'

function HomePage({ loading, setLoading }) {
  return (
    <>
      <Helmet>
        <title>FITCRAZ | Unleash Your Inner Beast - Cinematic Luxury Fitness</title>
        <meta name="description" content="Join the elite global fitness movement. Experience luxury training, AI-powered precision, and breathtaking transformations." />
      </Helmet>
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <SmoothScroll key="content">
            <div className="relative">
              <GlobalEffects />
              <Navbar />
              
              <main>
                <Hero />
                <About />
                <Programs />
                <AIShowcase />
                <Transformations />
                <VideoReels />
                <Trainers />
                <Membership />
                <Gallery />
                <Contact />
                
                <footer className="py-20 border-t border-white/5 text-center bg-brand-black relative z-10">
                  <h2 className="text-4xl font-black italic tracking-tighter mb-8 text-white">
                    FIT<span className="text-brand-red">CRAZ</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-8 mb-12 uppercase text-[10px] font-black tracking-[0.3em] text-white/40">
                    <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
                    <a href="#" className="hover:text-brand-red transition-colors">Terms</a>
                    <a href="#" className="hover:text-brand-red transition-colors">Careers</a>
                    <a href="#" className="hover:text-brand-red transition-colors">Locations</a>
                  </div>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-4">
                    TRAIN INSANE • STAY FIT • LIVE CRAZ
                  </p>
                  <p className="text-white/20 text-[10px] uppercase tracking-widest">
                    © 2026 FITCRAZ GLOBAL. ALL RIGHTS RESERVED.
                  </p>
                </footer>
              </main>
            </div>
          </SmoothScroll>
        )}
      </AnimatePresence>
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="bg-brand-black min-h-screen text-white selection:bg-brand-red selection:text-white">
            <Routes>
              <Route path="/" element={<HomePage loading={loading} setLoading={setLoading} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App
