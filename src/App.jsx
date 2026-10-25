import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navigation/Navbar'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const location = useLocation()

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with autoRaf: false
    // Prevents double-RAF loop conflicts that cause pin snapping
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    // Ensure layout calculations are accurate after fonts load
    document.fonts?.ready?.then(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [location.pathname])

  return (
    <div className='overflow-x-hidden flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
