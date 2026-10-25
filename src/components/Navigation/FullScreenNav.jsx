import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { TransitionContext } from '../common/Stairs'

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)
  const tlRef = useRef(null)
  const navigateWithTransition = useContext(TransitionContext)

  const [navOpen, setNavOpen] = useContext(NavbarContext)

  const navLinks = [
    {
      num: '01',
      title: 'Home',
      marqueeText: 'Tanmay Rongre • Creative Technologist',
      img1: '/Tanmay.png',
      img2: '/services/fullstack.jpg',
      path: '/'
    },
    {
      num: '02',
      title: 'Projects',
      marqueeText: 'Selected Works • Production Builds',
      img1: '/services/fullstack.jpg',
      img2: '/services/motion.jpg',
      path: '/projects'
    },
    {
      num: '03',
      title: 'Services',
      marqueeText: 'Full-Stack Architecture • 60FPS Motion',
      img1: '/services/uiux.jpg',
      img2: '/tech/react.png',
      path: '/services'
    },
    {
      num: '04',
      title: 'Contact',
      marqueeText: "Let's Build • Initiate Transmission",
      img1: '/Tanmay.png',
      img2: '/services/uiux.jpg',
      path: '/contact'
    }
  ]

  const handleLinkClick = (path) => {
    setNavOpen(false)
    if (navigateWithTransition) {
      navigateWithTransition(path)
    }
  }

  function gsapAnimation() {
    if (tlRef.current) tlRef.current.kill()
    const tl = gsap.timeline()
    tlRef.current = tl

    // Make container visible
    gsap.set(fullScreenRef.current, { display: 'block', pointerEvents: 'auto' })
    gsap.set('.navlink', { opacity: 0, y: -15 })
    gsap.set('.link-item', { opacity: 0, rotateX: 90 })
    gsap.set('.navfooter', { opacity: 0, y: 20 })

    // 1. Column stairs reveal down
    tl.to('.stairing', {
      height: '100%',
      duration: 0.45,
      ease: 'power3.inOut',
      stagger: { amount: 0.15, from: 'start' }
    })

    // 2. 3D flip-in links
    tl.to('.link-item', {
      opacity: 1,
      rotateX: 0,
      duration: 0.35,
      ease: 'power2.out',
      stagger: { amount: 0.18 }
    }, '-=0.1')

    // 3. Header & Footer fade in
    tl.to('.navlink', { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, '<')
    tl.to('.navfooter', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.15')
  }

  function gsapAnimationReverse() {
    if (tlRef.current) tlRef.current.kill()
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(fullScreenRef.current, { display: 'none', pointerEvents: 'none' })
      }
    })
    tlRef.current = tl

    // 1. Fade header & footer out
    tl.to('.navfooter', { opacity: 0, y: 15, duration: 0.15 })
    tl.to('.navlink', { opacity: 0, y: -10, duration: 0.15 }, '<')

    // 2. 3D flip links out
    tl.to('.link-item', {
      opacity: 0,
      rotateX: 90,
      duration: 0.2,
      ease: 'power2.in',
      stagger: { amount: 0.1 }
    }, '<')

    // 3. Column stairs slide up
    tl.to('.stairing', {
      height: 0,
      duration: 0.38,
      ease: 'power3.inOut',
      stagger: { amount: 0.12, from: 'end' }
    })
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation()
    } else {
      gsapAnimationReverse()
    }
  }, [navOpen])

  return (
    <div
      ref={fullScreenRef}
      id='fullscreennav'
      className='fullscreennav text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0 select-none'
      style={{ display: 'none', pointerEvents: 'none' }}
    >
      {/* 5 Architectural Black Column Stairs */}
      <div className='h-screen w-full fixed top-0 left-0 pointer-events-none'>
        <div className='h-full w-full flex'>
          <div className='stairing h-0 w-1/5 bg-black border-r border-white/[0.04]' />
          <div className='stairing h-0 w-1/5 bg-black border-r border-white/[0.04]' />
          <div className='stairing h-0 w-1/5 bg-black border-r border-white/[0.04]' />
          <div className='stairing h-0 w-1/5 bg-black border-r border-white/[0.04]' />
          <div className='stairing h-0 w-1/5 bg-black' />
        </div>
      </div>

      {/* Ambient background glow inside menu */}
      <div
        className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F39A27]/[0.03] blur-[150px]'
        aria-hidden='true'
      />

      <div
        ref={fullNavLinksRef}
        className='relative h-full flex flex-col justify-between p-5 sm:p-8 lg:p-12 z-10 max-w-[1920px] mx-auto w-full'
      >
        {/* ================= HEADER BAR ================= */}
        <div className='navlink opacity-0 flex w-full justify-between items-center'>
          <div className='flex items-center gap-3'>
            {/* Monogram Badge */}
            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center shrink-0'>
              <span className='font-[font3] text-base sm:text-lg tracking-tight text-white'>
                T<span className='text-[#F39A27]'>R</span>
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60 font-semibold'>
                NAVIGATION DIRECTORY
              </span>
              <span className='font-[font5] text-[9px] tracking-[0.2em] uppercase text-[#F39A27] hidden sm:inline'>
                2026 ARCHITECTURAL ARCHIVE
              </span>
            </div>
          </div>

          {/* Close Menu Button */}
          <button
            onClick={() => setNavOpen(false)}
            className='group flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:border-[#F39A27] hover:bg-[#F39A27]/10 transition-all duration-300 cursor-pointer active:scale-95'
            aria-label='Close Menu'
          >
            <span className='font-[font5] text-xs tracking-[0.22em] uppercase font-semibold text-white/90 group-hover:text-[#F39A27] transition-colors'>
              Close
            </span>
            <div className='relative w-4 h-4 flex items-center justify-center'>
              <span className='absolute w-4 h-[1.5px] bg-[#F39A27] rotate-45 transition-transform duration-300 group-hover:rotate-[135deg]' />
              <span className='absolute w-4 h-[1.5px] bg-white -rotate-45 transition-transform duration-300 group-hover:rotate-[45deg] group-hover:bg-[#F39A27]' />
            </div>
          </button>
        </div>

        {/* ================= MAIN NAV LINKS ================= */}
        <div className='my-auto flex flex-col w-full max-w-6xl mx-auto'>
          {navLinks.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => handleLinkClick(item.path)}
              className={`link-item group opacity-0 origin-top relative border-t ${
                idx === navLinks.length - 1 ? 'border-b' : ''
              } border-white/15 cursor-pointer overflow-hidden transition-colors duration-300`}
            >
              {/* Default Resting State */}
              <div className='py-4 sm:py-6 lg:py-7 px-4 flex items-center justify-between transition-transform duration-300 group-hover:scale-[1.01]'>
                <div className='flex items-baseline gap-4 sm:gap-8'>
                  <span className='font-[font5] text-xs sm:text-sm tracking-[0.25em] text-[#F39A27] font-semibold'>
                    {item.num}
                  </span>
                  <h2 className='font-[font3] text-4xl sm:text-6xl lg:text-[6.2vw] uppercase tracking-tight leading-none text-white group-hover:text-[#F39A27] transition-colors'>
                    {item.title}
                  </h2>
                </div>
                
                <span className='hidden sm:inline-flex items-center gap-1 font-[font5] text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors'>
                  EXPLORE <span className='text-xs'>↗</span>
                </span>
              </div>

              {/* Hover Ribbon Marquee Overlay */}
              <div className='moveLink absolute inset-0 w-full h-full bg-[#F39A27] text-black flex items-center overflow-hidden pointer-events-none'>
                {/* Track 1 */}
                <div className='flex shrink-0 moveX items-center gap-6 sm:gap-10 pr-6 sm:pr-10'>
                  <span className='font-[font3] text-3xl sm:text-5xl lg:text-[5vw] uppercase tracking-tight whitespace-nowrap leading-none'>
                    {item.marqueeText}
                  </span>
                  <div className='h-8 sm:h-12 lg:h-16 w-16 sm:w-28 lg:w-36 rounded-full overflow-hidden shrink-0 border border-black/20 bg-black/10'>
                    <img src={item.img1} alt="" className='w-full h-full object-cover' />
                  </div>
                  <span className='font-[font3] text-3xl sm:text-5xl lg:text-[5vw] uppercase tracking-tight whitespace-nowrap leading-none'>
                    {item.marqueeText}
                  </span>
                  <div className='h-8 sm:h-12 lg:h-16 w-16 sm:w-28 lg:w-36 rounded-full overflow-hidden shrink-0 border border-black/20 bg-black/10'>
                    <img src={item.img2} alt="" className='w-full h-full object-cover' />
                  </div>
                </div>

                {/* Track 2 (Duplicate for Seamless Infinite Marquee) */}
                <div className='flex shrink-0 moveX items-center gap-6 sm:gap-10 pr-6 sm:pr-10' aria-hidden='true'>
                  <span className='font-[font3] text-3xl sm:text-5xl lg:text-[5vw] uppercase tracking-tight whitespace-nowrap leading-none'>
                    {item.marqueeText}
                  </span>
                  <div className='h-8 sm:h-12 lg:h-16 w-16 sm:w-28 lg:w-36 rounded-full overflow-hidden shrink-0 border border-black/20 bg-black/10'>
                    <img src={item.img1} alt="" className='w-full h-full object-cover' />
                  </div>
                  <span className='font-[font3] text-3xl sm:text-5xl lg:text-[5vw] uppercase tracking-tight whitespace-nowrap leading-none'>
                    {item.marqueeText}
                  </span>
                  <div className='h-8 sm:h-12 lg:h-16 w-16 sm:w-28 lg:w-36 rounded-full overflow-hidden shrink-0 border border-black/20 bg-black/10'>
                    <img src={item.img2} alt="" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER BAR ================= */}
        <div className='navfooter opacity-0 flex flex-wrap items-center justify-between border-t border-white/15 pt-5 pb-2 px-2'>
          <div className='flex items-center gap-6 sm:gap-8'>
            <a
              href='https://www.linkedin.com/in/tanmayrongre'
              target='_blank'
              rel='noopener noreferrer'
              className='font-[font5] uppercase text-xs lg:text-sm tracking-[0.2em] text-white/70 hover:text-[#F39A27] transition-colors flex items-center gap-1.5'
            >
              <span>LinkedIn</span>
              <span className='text-xs'>↗</span>
            </a>
            <a
              href='https://github.com/tanmayrongre'
              target='_blank'
              rel='noopener noreferrer'
              className='font-[font5] uppercase text-xs lg:text-sm tracking-[0.2em] text-white/70 hover:text-[#F39A27] transition-colors flex items-center gap-1.5'
            >
              <span>GitHub</span>
              <span className='text-xs'>↗</span>
            </a>
            <a
              href='https://drive.google.com/file/d/1Rx9B-a1xWv-JIfgRsJS_PI45e3CC1BmN/view?usp=drive_link'
              target='_blank'
              rel='noopener noreferrer'
              className='font-[font5] uppercase text-xs lg:text-sm tracking-[0.2em] text-white/70 hover:text-[#F39A27] transition-colors flex items-center gap-1.5'
            >
              <span>Resume (PDF)</span>
              <span className='text-xs'>↗</span>
            </a>
          </div>

          <span className='font-[font5] text-[10px] text-white/40 uppercase tracking-[0.25em] hidden sm:inline-block'>
            © 2026 Tanmay Rongre • All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
