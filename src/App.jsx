import { useState, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'

import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import SmoothScroll from './components/layout/SmoothScroll'
import GlobalEffects from './components/ui/GlobalEffects'
import Footer from './components/layout/Footer'
import MobileDock from './components/layout/MobileDock'
import './App.css'

// Lazy loaded sections for performance
const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Programs = lazy(() => import('./components/sections/Programs'))
const Trainers = lazy(() => import('./components/sections/Trainers'))
const Membership = lazy(() => import('./components/sections/Membership'))
const Transformations = lazy(() => import('./components/sections/Transformations'))
const WorkoutReels = lazy(() => import('./components/sections/WorkoutReels'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Recovery = lazy(() => import('./components/sections/Recovery'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Schedule = lazy(() => import('./components/sections/Schedule'))
const Shop = lazy(() => import('./components/sections/Shop'))
const Login = lazy(() => import('./components/auth/Login'))
const Signup = lazy(() => import('./components/auth/Signup'))

function HomePage({ loading, setLoading }) {
  return (
    <>
      <Helmet>
        <title>ANTIGRAVITY | Elite Performance Ecosystem</title>
        <meta name="description" content="Experience the next generation of high-performance athletic training. Cinematic environments, elite coaching, and architectural precision." />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <SmoothScroll key="content">
            <div className="relative bg-brand-black">
              <GlobalEffects />
              <Navbar />
              <MobileDock />

              <main>
                <Suspense fallback={<div className="h-screen bg-brand-black" />}>
                  <Hero />
                  <About />
                  <Programs />
                  <Trainers />
                  <Membership />
                  <Transformations />
                  <Schedule />
                  <WorkoutReels />
                  <Gallery />
                  <Shop />
                  <Recovery />
                  <Testimonials />
                  <FAQ />
                  <Contact />
                  <Footer />
                </Suspense>
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
              <Route
                path="/login"
                element={
                  <Suspense fallback={<div className="h-screen bg-brand-black" />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/signup"
                element={
                  <Suspense fallback={<div className="h-screen bg-brand-black" />}>
                    <Signup />
                  </Suspense>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App
