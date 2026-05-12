import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Zap, Dumbbell, Trophy, ArrowRight, Share2 } from 'lucide-react'

const REELS = [
  {
    id: 1,
    url: "https://cdn.coverr.co/videos/preview/720p/coverr-weightlifter-preparing-himself-for-a-lift-5236.mp4",
    title: "Maximum Power",
    description: "Architectural precision in heavy compound movements. Engineered for peak output.",
    category: "STRENGTH",
    stat: "300KG"
  },
  {
    id: 2,
    url: "https://cdn.coverr.co/videos/preview/720p/coverr-woman-doing-pull-ups-5238.mp4",
    title: "Elite Calisthenics",
    description: "Mastering the physics of bodyweight movement. Pure structural integrity.",
    category: "ATHLETICISM",
    stat: "100% RAW"
  },
  {
    id: 3,
    url: "https://cdn.coverr.co/videos/preview/720p/coverr-man-doing-exercises-with-dumbbells-5240.mp4",
    title: "Precision Form",
    description: "Surgical execution of isolation protocols. Every fiber optimized.",
    category: "HYPERTROPHY",
    stat: "ELITE"
  },
  {
    id: 4,
    url: "https://cdn.coverr.co/videos/preview/720p/coverr-a-man-training-in-the-gym-8473.mp4",
    title: "Endless Endurance",
    description: "Pushing cardiovascular boundaries in the high-performance zone.",
    category: "CONDITIONING",
    stat: "90% MAX"
  }
]

const ReelCard = ({ reel, isActive }) => {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true) // Default true for autoplay

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        // Force play when active
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay prevented:", error)
            setIsPlaying(false)
          })
        }
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [isActive])

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div className="relative h-full w-full bg-brand-black flex-shrink-0 snap-start overflow-hidden">
      {/* Video with explicit autoplay/muted attributes for better browser compatibility */}
      <video
        ref={videoRef}
        src={reel.url}
        loop
        muted={isMuted}
        playsInline
        autoPlay={isActive}
        className="absolute inset-0 w-full h-full object-cover"
        onClick={togglePlay}
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60 opacity-80 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />

      {/* Reel UI Content */}
      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="bg-brand-red text-white text-[10px] font-black px-6 py-2 rounded-full tracking-[0.3em] uppercase shadow-[0_10px_20px_rgba(255,59,48,0.3)]">
              {reel.category}
            </span>
            <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center border border-white/10 shadow-2xl">
              <Zap size={16} className="text-brand-red fill-brand-red" />
            </div>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-display font-black italic uppercase tracking-tighter text-white mb-6 leading-[0.85]"
          >
            {reel.title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-brand-gray text-base md:text-xl mb-12 max-w-lg font-medium leading-relaxed opacity-60"
          >
            {reel.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-10"
          >
            <button className="px-10 py-5 bg-white text-brand-black rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-brand-red hover:text-white transition-all shadow-2xl">
              Book Session
              <ArrowRight size={18} />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em] mb-1">OUTPUT LEVEL</span>
              <span className="text-3xl font-display font-black text-white italic tracking-tighter">{reel.stat}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Actions (Like TikTok) */}
      <div className="absolute right-8 bottom-40 flex flex-col gap-8 pointer-events-auto z-30">
        <button 
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="w-14 h-14 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all shadow-2xl group"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        <button className="w-14 h-14 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all shadow-2xl">
          <Share2 size={24} />
        </button>
        <div className="flex flex-col items-center gap-2">
          <button className="w-14 h-14 rounded-full glass-dark border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all shadow-2xl">
            <Trophy size={24} />
          </button>
          <span className="text-[10px] font-black text-white/30 tracking-[0.4em]">RANK</span>
        </div>
      </div>

      {/* Play/Pause indicator on click */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          >
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
              <Play size={48} className="text-white fill-white ml-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function WorkoutReels() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft
    const width = e.target.offsetWidth
    const index = Math.round(scrollLeft / width)
    setActiveIndex(index)
  }

  return (
    <section id="workout-reels" className="relative h-[100dvh] bg-brand-black overflow-hidden border-b border-white/5">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-12 md:p-16 z-40 flex justify-between items-start pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center shadow-[0_0_20px_rgba(255,59,48,0.5)]">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="text-[10px] text-white font-black uppercase tracking-[0.6em]">The Arena Feed</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-none">
            Workout <span className="text-brand-red">Reels.</span>
          </h2>
        </motion.div>
        <div className="hidden md:flex gap-4">
          <div className="glass-dark px-8 py-4 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_#FF3B30]" />
            <span className="text-[10px] text-white/80 font-black uppercase tracking-[0.4em]">LIVE PERFORMANCE FEED</span>
          </div>
        </div>
      </div>

      {/* Reels Scroll Container */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {REELS.map((reel, idx) => (
          <ReelCard key={reel.id} reel={reel} isActive={activeIndex === idx} />
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-40">
        {REELS.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 transition-all duration-700 rounded-full ${activeIndex === idx ? 'w-20 bg-brand-red shadow-[0_0_20px_#FF3B30]' : 'w-6 bg-white/10 hover:bg-white/30 cursor-pointer'}`}
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({
                  left: idx * containerRef.current.offsetWidth,
                  behavior: 'smooth'
                })
              }
            }}
          />
        ))}
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-16 right-16 z-40 hidden xl:flex items-center gap-6">
        <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.6em] animate-pulse">Swipe to Explore</span>
        <div className="w-16 h-[1px] bg-white/10" />
      </div>
    </section>
  )
}
