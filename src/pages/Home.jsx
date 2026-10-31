import React, { useRef, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TransitionContext } from '../components/common/Stairs'

import projects from '../data/projects'
import ToolboxSection from '../components/home/ToolboxSection'



gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const portraitScrollRef = useRef(null)
  const portraitEntranceRef = useRef(null)
  const nameRef = useRef(null)
  const kickerRef = useRef(null)
  const bioRef = useRef(null)
  const actionsRef = useRef(null)
  const leftRailRef = useRef(null)
  const rightRailRef = useRef(null)
  const centerBottomRef = useRef(null)

  // Horizontal Selected Works Pinned Section Refs
  const worksPinRef = useRef(null)
  const worksTrackRef = useRef(null)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const row3Ref = useRef(null)
  const row4Ref = useRef(null)

  // Pinned How I Build (Method) Section Refs
  const methodSectionRef = useRef(null)
  const methodPinRef = useRef(null)
  const activeRoadRef = useRef(null)
  const travellerRef = useRef(null)
  const stationRefs = useRef([])
  const methodToolsRef = useRef(null)

  const navigateWithTransition = useContext(TransitionContext)
  const navigate = useNavigate()
  const [activeProject, setActiveProject] = useState(0)

  const featuredProjects = projects

  const methodStations = [
    {
      num: '1',
      title: 'Define',
      desc: 'UNDERSTAND THE PROBLEM, USER CONTEXT, AND SYSTEM SCOPE.',
      left: '7.5%',
      top: '26.923%',
    },
    {
      num: '2',
      title: 'Design',
      desc: 'PLAN THE ARCHITECTURE, COMPONENT HIERARCHY, AND DATA FLOW.',
      left: '27.5%',
      top: '73.077%',
    },
    {
      num: '3',
      title: 'Build',
      desc: 'TRANSLATE BLUEPRINTS INTO ROBUST, HIGH-PERFORMANCE CODE.',
      left: '50.0%',
      top: '26.923%',
    },
    {
      num: '4',
      title: 'Review',
      desc: 'AUDIT LOGIC, TEST EDGE CASES, BENCHMARK SPEED, AND POLISH UX.',
      left: '72.5%',
      top: '73.077%',
    },
    {
      num: '5',
      title: 'Launch',
      desc: 'DEPLOY TO PRODUCTION, CONNECT DOMAINS, AND MONITOR PERFORMANCE.',
      left: '92.5%',
      top: '26.923%',
    },
  ]

  const methodTools = [
    { name: 'System Architecture', role: 'SYSTEM DESIGN' },
    { name: 'Full-Stack Core', role: 'MERN & NEXT.JS' },
    { name: 'Performance', role: 'LOW LATENCY & OPTIMIZED' },
    { name: 'Creative Motion', role: 'GSAP & INTERACTION' },
    { name: 'Production Audit', role: 'ROBUST & SCALABLE' },
  ]

  // Helper to render alternating Amber and White letters across the endless train
  const renderAlternatingRow = (char, count = 140) => {
    return Array.from({ length: count }, (_, i) => (
      <span
        key={i}
        className={i % 2 === 0 ? 'text-[#F39A27]' : 'text-white/85'}
      >
        {char}{' '}
      </span>
    ))
  }

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // 1. Initial State
    gsap.set(portraitEntranceRef.current, { opacity: 0, scale: 0.96 })
    gsap.set(portraitScrollRef.current, { opacity: 1 })

    // 2. Entrance Animation for portrait
    tl.to(portraitEntranceRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    })

    // 3. Kicker & Name Entrance
    tl.fromTo(
      kickerRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.9'
    )

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.7'
    )

    // 4. Bio and Action buttons
    tl.fromTo(
      bioRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.6'
    )

    tl.fromTo(
      actionsRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.5'
    )

    // 5. Rails and Bottom indicator
    tl.fromTo(
      [leftRailRef.current, rightRailRef.current, centerBottomRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 0.8, stagger: 0.08 },
      '-=0.5'
    )

    // 6. SCROLL TRIGGER: Photo fades slowly on scroll down, and reappears slowly on scroll up!
    gsap.fromTo(
      portraitScrollRef.current,
      { opacity: 1, y: 0, scale: 1 },
      {
        opacity: 0,
        y: -30,
        scale: 0.94,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 20%', // Fades slowly across the hero scroll
          scrub: 1.2, // Smooth scrub: slow fade down, smooth reappearance on scroll up
          invalidateOnRefresh: true,
        },
      }
    )

    // =========================================================================
    // HORIZONTAL SCROLL TRIGGER: Pinned "SELECTED WORK" Section
    // Pinned to viewport, moves projects horizontally right-to-left 1-by-1
    // with 4 kinetic rows of W - O - R - K in the background
    // =========================================================================
    const worksSection = worksPinRef.current
    const worksTrack = worksTrackRef.current

    if (worksSection && worksTrack) {
      const getScrollAmount = () => {
        return Math.max(0, worksTrack.scrollWidth - window.innerWidth)
      }

      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: worksSection,
          start: 'top top',
          end: () => `+=${getScrollAmount() + 500}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 0,
        },
      })

      // Move cards right to left
      horizontalTl.to(worksTrack, {
        x: () => -getScrollAmount(),
        ease: 'none',
      }, 0)

      // Kinetic Parallax on W - O - R - K rows (Smooth subtle motion, never outrunning the train)
      if (row1Ref.current) horizontalTl.to(row1Ref.current, { x: -400, ease: 'none' }, 0)
      if (row2Ref.current) horizontalTl.to(row2Ref.current, { x: 300, ease: 'none' }, 0)
      if (row3Ref.current) horizontalTl.to(row3Ref.current, { x: -400, ease: 'none' }, 0)
      if (row4Ref.current) horizontalTl.to(row4Ref.current, { x: 300, ease: 'none' }, 0)
    }

    // =========================================================================
    // HOW I BUILD (METHOD): Pinned Delivery Loop Animation
    // Define is at the starting point of the curve (origin). Launch is at last.
    // Each block appears ONLY when pointer arrives at its center of origin.
    // Active road and pointer are locked in 1:1 mathematical sync (zero delay).
    // =========================================================================
    const methodSection = methodSectionRef.current
    const methodPin = methodPinRef.current
    const activeRoad = activeRoadRef.current
    const traveller = travellerRef.current

    if (methodSection && methodPin && activeRoad && traveller) {
      let totalLength = 1455.12
      try {
        if (activeRoad.getTotalLength) {
          const l = activeRoad.getTotalLength()
          if (l > 100) totalLength = l
        }
      } catch (e) {
        totalLength = 1455.12
      }

      // Initialize road stroke to fully hidden
      gsap.set(activeRoad, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      })

      // Traveller starts exactly at Define origin (90, 140)
      gsap.set(traveller, {
        attr: { transform: 'translate(90, 140)' },
        opacity: 1,
      })

      // Exact arrival fractions where pointer reaches each station's center of origin
      // 0: Define (0.0000 - at start)
      // 1: Design (0.2433 - center of origin)
      // 2: Build  (0.5000 - center of origin)
      // 3: Review (0.7567 - center of origin)
      // 4: Launch (0.9400 - at last)
      const stationArrivals = [0.0, 0.2433, 0.5000, 0.7567, 0.9400]

      // Initialize GSAP with xPercent: -50, yPercent: -50 to guarantee perfect center-of-origin alignment
      stationRefs.current.forEach((st, idx) => {
        if (!st) return
        gsap.set(st, {
          xPercent: -50,
          yPercent: -50,
          opacity: idx === 0 ? 1 : 0,
          scale: idx === 0 ? 1 : 0.82,
          y: idx === 0 ? 0 : 10,
        })
      })

      if (methodToolsRef.current) {
        gsap.set(methodToolsRef.current, { opacity: 0, y: 20 })
      }

      const methodTl = gsap.timeline({
        scrollTrigger: {
          trigger: methodSection,
          start: 'top top',
          end: '+=180%',
          pin: methodPin,
          pinSpacing: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 0,
        },
      })

      const tracker = { progress: 0 }

      methodTl.to(tracker, {
        progress: 1,
        ease: 'none',
        onUpdate: () => {
          const p = tracker.progress

          // 1. Draw glowing Amber road in exact pixel sync with pointer
          activeRoad.style.strokeDashoffset = String(totalLength * (1 - p))

          // 2. Move traveller dot along SVG wave in exact lockstep
          try {
            if (activeRoad.getPointAtLength) {
              const pt = activeRoad.getPointAtLength(p * totalLength)
              traveller.setAttribute('transform', `translate(${pt.x}, ${pt.y})`)
            }
          } catch (e) {}

          // 3. Station appearance: EACH BLOCK APPEARS ONLY WHEN POINTER ARRIVES AT CENTER OF ORIGIN
          // Define is visible at the starting point of the curve (idx 0).
          // Design, Build, Review appear only when pointer reaches their exact center.
          // Launch appears at the very last of the curve.
          stationRefs.current.forEach((st, idx) => {
            if (!st || idx === 0) return
            const targetP = stationArrivals[idx]
            if (p >= targetP) {
              const factor = Math.min(1, Math.max(0, (p - targetP) / 0.045))
              gsap.set(st, {
                xPercent: -50,
                yPercent: -50,
                opacity: factor,
                scale: 0.82 + factor * 0.18,
                y: 10 * (1 - factor),
              })
            } else {
              gsap.set(st, {
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
                scale: 0.82,
                y: 10,
              })
            }
          })

          // 4. Reveal bottom tool chips as traveller arrives at Launch (at the very last)
          if (methodToolsRef.current) {
            if (p >= 0.96) {
              const factor = Math.min(1, Math.max(0, (p - 0.96) / 0.04))
              methodToolsRef.current.style.opacity = String(factor)
              methodToolsRef.current.style.transform = `translateY(${20 * (1 - factor)}px)`
            } else {
              methodToolsRef.current.style.opacity = '0'
              methodToolsRef.current.style.transform = 'translateY(20px)'
            }
          }
        },
      })
    }
  }, { scope: containerRef })

  // Smooth scroll to selected works section
  const scrollToWorks = () => {
    const el = document.getElementById('selected-works')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      ref={containerRef}
      className='bg-black text-[#FBF8F3] min-h-screen relative overflow-x-hidden select-none'
    >
      {/* =========================================================================
          FIXED RESPONSIVE STUDIO PORTRAIT
          Enlarged so it goes underneath the "Tanmay Rongre" headline across the chest.
          Mobile: Sized slightly smaller with top trimmed down while keeping bottom axis intact.
          Fades slowly to opacity 0 on scroll, and reappears on scroll up.
          ========================================================================= */}
      <div
        ref={portraitScrollRef}
        className='fixed top-[9vh] sm:top-[4vh] left-1/2 -translate-x-1/2 h-[60vh] sm:h-[72vh] lg:h-[76vh] max-h-[500px] sm:max-h-[720px] aspect-[3/4] sm:aspect-[4/5] w-auto pointer-events-none z-0 flex items-center justify-center will-change-[opacity,transform]'
      >
        <div
          ref={portraitEntranceRef}
          className='relative w-full h-full overflow-hidden'
        >
          <img
            src='/Tanmay.png'
            alt='Tanmay Rongre'
            className='w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02]'
          />
          {/* Subtle Bottom Fade into Base Black */}
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-black via-black/75 to-transparent' />
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION (Fits 100% inside one screen frame on ALL displays)
          ========================================================================= */}
      <section
        id='home'
        ref={heroRef}
        className='relative h-screen w-full flex flex-col justify-between pt-16 sm:pt-18 lg:pt-20 pb-4 overflow-hidden z-10'
      >
        {/* 3-Column Grid Container */}
        <div className='relative z-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 h-full'>

          {/* ----------------- LEFT RAIL ----------------- */}
          <div
            ref={leftRailRef}
            className='lg:col-span-2 hidden lg:flex flex-col justify-between p-5 xl:p-7 border-r border-white/[0.07] font-[font5] text-xs'
          >
            {/* Top Left Status */}
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <span className='tracking-[0.2em] uppercase text-white/80 font-medium text-[11px] xl:text-xs'>
                AI WORKFLOW · DEEP CODE
              </span>
            </div>

            {/* Mid Left Navigation / Discipline Index */}
            <div className='flex flex-col gap-2.5 my-auto'>
              <div className='flex items-center gap-2 text-[#F39A27] tracking-[0.25em] text-[11px] uppercase font-semibold'>
                <span>01</span>
                <span>/</span>
                <span>PRESENCE</span>
              </div>
              <div className='text-[#F39A27] text-base font-light leading-none'>+</div>
              <div className='flex flex-col gap-1 tracking-[0.2em] text-[10px] xl:text-[11px] uppercase text-white/50'>
                <span className='hover:text-white transition-colors cursor-default'>ENGINEERING</span>
                <span className='hover:text-white transition-colors cursor-default'>ARCHITECTURE</span>
                <span className='hover:text-white transition-colors cursor-default'>CREATIVE MOTION</span>
              </div>
            </div>

            {/* Bottom Left: Scroll Prompt */}
            <div
              onClick={scrollToWorks}
              className='flex items-center gap-2 tracking-[0.25em] text-[10px] xl:text-[11px] uppercase text-white/40 hover:text-[#F39A27] transition-colors cursor-pointer group w-fit'
            >
              <span className='w-[1px] h-3.5 bg-white/20 group-hover:bg-[#F39A27] transition-colors' />
              <span>SCROLL TO DISCOVER</span>
              <span className='transition-transform duration-300 group-hover:translate-y-1'>↓</span>
            </div>
          </div>

          {/* ----------------- CENTER STAGE (Hero Content Fitted in 1 Frame) ----------------- */}
          <div className='lg:col-span-8 flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 py-1 sm:py-2 h-full'>

            {/* Mobile Top Row (Status for Mobile/Tablet) */}
            <div className='lg:hidden flex items-center justify-between w-full pb-2 border-b border-white/10'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse' />
                <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/80 font-medium'>
                  ENGINEER. BUILDER.
                </span>
              </div>
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/40'>
                INDIA • UTC+5:30
              </span>
            </div>

            {/* Center Content Group: Precisely Anchored to Chest Level */}
            <div className='w-full flex-1 flex flex-col items-center justify-end pb-2 sm:pb-3'>


              {/* Monumental Headline: "Tanmay" (Font 3 Regular) + "Rongre" (Font 4 Italic) */}
              {/* Sits right across chest level on all viewport sizes */}
              <div ref={nameRef} className='relative z-10 overflow-visible py-0.5'>
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-[8    vw] xl:text-[10vw] tracking-tight leading-[0.9] text-white flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5'>
                  <span className='font-[font3] text-white'>
                    Tanmay
                  </span>
                  <span className='font-[font4] italic text-[#FBF8F3]'>
                    Rongre
                  </span>
                </h1>
              </div>

              {/* 2-Line Bio */}
              <div ref={bioRef} className='relative z-10 mt-2.5 sm:mt-3.5 max-w-xl mx-auto px-4'>
                <p className='font-[font5] text-xs sm:text-sm lg:text-[15px] text-white/80 leading-relaxed font-normal'>
                  I build high-impact products by combining
                  <span className='text-white font-medium'> AI-assisted workflow</span> with <span className='text-[#F39A27] font-medium'>hands-on coding knowledge</span> to engineer scalable architectures.
                </p>
              </div>

              {/* Two CTA Buttons */}
              <div
                ref={actionsRef}
                className='relative z-10 mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5'
              >
                {/* Explore my work button */}
                <button
                  onClick={scrollToWorks}
                  className='group inline-flex items-center gap-2 bg-[#141414] hover:bg-[#F39A27] text-white hover:text-black border border-white/20 hover:border-[#F39A27] font-[font5] text-[11px] sm:text-xs tracking-[0.15em] uppercase px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 cursor-pointer shadow-lg active:scale-95'
                >
                  <span>Explore my work</span>
                  <span className='transition-transform duration-300 group-hover:translate-y-0.5 text-xs'>↓</span>
                </button>

                {/* Start a conversation link */}
                <button
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                    else window.location.href = 'mailto:tanmayrongre2008@gmail.com'
                  }}
                  className='group inline-flex items-center gap-2 text-white/80 hover:text-[#F39A27] font-[font5] text-[11px] sm:text-xs tracking-[0.15em] uppercase px-4 py-2.5 sm:py-3 border-b border-transparent hover:border-[#F39A27] transition-all duration-300 cursor-pointer'
                >
                  <span>Start a conversation</span>
                  <span className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-xs'>↗</span>
                </button>
              </div>

            </div>

            {/* Center Bottom: Tagline */}
            <div ref={centerBottomRef} className='pt-2 sm:pt-3 text-center'>
              <span className='font-[font5] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#F39A27]/90 font-medium'>
                AI-ASSISTED WORKFLOW · HANDS-ON CODING KNOWLEDGE
              </span>
            </div>

          </div>

          {/* ----------------- RIGHT RAIL ----------------- */}
          <div
            ref={rightRailRef}
            className='lg:col-span-2 hidden lg:flex flex-col justify-between p-5 xl:p-7 border-l border-white/[0.07] font-[font5] text-xs text-right'
          >
            {/* Top Right Location */}
            <div className='flex items-center justify-end gap-2 text-white/80 tracking-[0.2em] uppercase text-[11px] xl:text-xs font-medium'>
              <span>BASED IN INDIA</span>
              <span>•</span>
              <span>THINKING BEYOND</span>
            </div>

            {/* Mid Right Stack Index */}
            <div className='flex flex-col gap-2.5 my-auto items-end'>
              <div className='flex items-center gap-2 text-[#F39A27] tracking-[0.25em] text-[11px] uppercase font-semibold'>
                <span>02</span>
                <span>/</span>
                <span>ARCHITECTURE</span>
              </div>
              <div className='text-[#F39A27] text-base font-light leading-none'>+</div>
              <div className='flex flex-col gap-1 tracking-[0.2em] text-[10px] xl:text-[11px] uppercase text-white/50 items-end'>
                <span className='hover:text-white transition-colors cursor-default'>REACT & NEXT</span>
                <span className='hover:text-white transition-colors cursor-default'>NODE & MERN</span>
                <span className='hover:text-white transition-colors cursor-default'>GSAP & MOTION</span>
              </div>
            </div>

            {/* Bottom Right: Exploration */}
            <div className='flex items-center justify-end gap-2 tracking-[0.2em] text-[10px] xl:text-[11px] uppercase text-white/40'>
              <span>AN ONGOING EXPLORATION • 2026</span>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 2: PINNED HORIZONTAL "SELECTED WORK" SECTION (W-O-R-K Backdrop)
          Pinnned stuck after hero section.
          Background: 4 equal rows (W, O, R, K) in bold iconic typography.
          Projects slide horizontally from right to left 1 by 1 on scroll.
          ========================================================================= */}
      <section
        id='selected-works'
        ref={worksPinRef}
        className='relative z-20 h-screen w-full bg-[#080808] overflow-hidden select-none'
      >
        {/* =====================================================================
            BACKGROUND: 4 REFINED ARCHITECTURAL ROWS (W - O - R - K)
            Swiss Modernist Lausanne typography with generous breathing room (tracking-[0.28em]),
            refined medium weight, architectural opacity, and seamless 160-repetition train.
            ===================================================================== */}
        <div className='absolute inset-x-0 bottom-0 top-16 sm:top-20 grid grid-rows-4 w-full pointer-events-none select-none z-0 overflow-hidden'>

          {/* Row 1: W (Alternating Amber & White) */}
          <div className='h-full w-full flex items-center overflow-hidden '>
            <div
              ref={row1Ref}
              className='whitespace-nowrap font-[font2] font-medium text-[13vh] sm:text-[15vh] leading-none tracking-[0.28em] will-change-transform pl-4 select-none'
            >
              {renderAlternatingRow('W', 150)}
            </div>
          </div>

          {/* Row 2: O (Alternating Amber & White) */}
          <div className='h-full w-full flex items-center overflow-hidden '>
            <div
              ref={row2Ref}
              className='whitespace-nowrap font-[font2] font-medium text-[13vh] sm:text-[15vh] leading-none tracking-[0.28em] will-change-transform -ml-[900px] select-none'
            >
              {renderAlternatingRow('O', 150)}
            </div>
          </div>

          {/* Row 3: R (Alternating Amber & White) */}
          <div className='h-full w-full flex items-center overflow-hidden' >
            <div
              ref={row3Ref}
              className='whitespace-nowrap font-[font2] font-medium text-[13vh] sm:text-[15vh] leading-none tracking-[0.28em] will-change-transform pl-8 select-none'
            >
              {renderAlternatingRow('R', 150)}
            </div>
          </div>

          {/* Row 4: K (Alternating Amber & White) */}
          <div className='h-full w-full flex items-center overflow-hidden'>
            <div
              ref={row4Ref}
              className='whitespace-nowrap font-[font2] font-medium text-[13vh] sm:text-[15vh] leading-none tracking-[0.28em] will-change-transform -ml-[900px] select-none'
            >
              {renderAlternatingRow('K', 150)}
            </div>
          </div>

        </div>

        {/* =====================================================================
            TOP TECH BADGE: ARCHIVE // 08 PRODUCTION BUILDS
            Minimalist, tech-precision status pill with glowing amber dot
            ===================================================================== */}
        <div className='absolute top-20 sm:top-22 left-1/2 -translate-x-1/2 z-30 pointer-events-none'>
          <div className='inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-md bg-[#0e0e0e]/95 backdrop-blur-md border border-white/10 text-white font-[font3] text-xs sm:text-[13px] tracking-[0.2em] uppercase shadow-2xl'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
            <span>ARCHIVE // {featuredProjects.length} PRODUCTION BUILDS</span>
          </div>
        </div>

        {/* =====================================================================
            HORIZONTAL TRACK: PRECISION-ENGINEERED TECH CARDS
            Compact size, tight refined corners (rounded-xl), zero blur,
            smooth hover pickup with subtle amber edge reflection.
            ===================================================================== */}
        <div className='relative z-10 h-full w-full flex items-center overflow-hidden pt-16 sm:pt-20'>
          <div
            ref={worksTrackRef}
            className='flex items-center gap-7 sm:gap-10 lg:gap-12 pl-[66vw] sm:pl-[77vw] md:pl-[83vw] lg:pl-[calc(100vw-210px)] pr-[35vw] will-change-transform'
          >
            {featuredProjects.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => navigateWithTransition ? navigateWithTransition('/projects/' + item.id) : navigate('/projects/' + item.id)}
                className='shrink-0 w-[74vw] sm:w-[52vw] md:w-[40vw] lg:w-[32vw] xl:w-[26vw] max-w-[420px] group relative rounded-xl sm:rounded-2xl p-2.5 sm:p-3 bg-[#0d0d0d] border border-white shadow-[0_30px_90px_rgba(0,0,0,0.95)] transform-gpu will-change-transform transition-transform duration-150 ease-out hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden cursor-pointer pointer-events-auto'
              >
                {/* Exact Aspect Ratio Viewport (1903x982 browser screenshots, 100% uncropped) */}
                <div className='relative w-full aspect-[1903/982] rounded-lg overflow-hidden bg-[#050505]  flex items-center justify-center shadow-md'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-contain object-center'
                  />

                  {/* Crisp White Tech Index Tag Top-Left */}
                  <div className='absolute top-2 left-2 px-2.5 py-0.5 rounded bg-white text-black font-[font5] text-[9px] tracking-widest font-bold shadow-md'>
                    {item.num || `0${idx + 1}`}
                  </div>

                  {/* Corner Quick Action Badge */}
                  <div className='absolute bottom-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150'>
                    <span className='px-3 py-1 rounded bg-white text-black hover:bg-[#F39A27] font-[font5] text-[9px] uppercase tracking-wider font-bold shadow-lg transition-colors'>
                      OPEN ↗
                    </span>
                  </div>
                </div>

                {/* Tech Metadata Chassis Strip */}
                <div className='w-full mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between select-none'>

                  {/* Left: Brand Dot + Title */}
                  <div className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27] shrink-0' />
                    <span className='font-[font2] text-xs sm:text-[13px] tracking-wide uppercase text-white group-hover:text-[#F39A27] transition-colors truncate max-w-[170px] sm:max-w-[190px] font-medium'>
                      {item.title}
                    </span>
                  </div>

                  {/* Right: Crisp White Pill with Amber Accent */}
                  <div className='flex items-center gap-1 shrink-0'>
                    <span className='font-[font5] text-[9px] font-semibold tracking-wider uppercase text-white/90 bg-white/[0.08] border border-white/20 px-2 py-0.5 rounded'>
                      {item.tags?.[0] || 'MERN'}
                    </span>
                    <span className='text-[#F39A27] font-bold text-xs ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>↗</span>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 3: HOW I BUILD (PINNED METHODOLOGY DELIVERY LOOP)
          Sinusoidal curve with glowing Amber traveller and sequential station reveals.
          Styled with PP Editorial New (font3 & font4 italic).
          Small screens show compact pills with ONLY the stage names (Define, Design, etc).
          ========================================================================= */}
      <section
        id='method'
        ref={methodSectionRef}
        className='relative z-20 bg-[#080808] text-white select-none border-t border-white/10'
      >
        <div
          ref={methodPinRef}
          className='h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-5 sm:px-8 lg:px-16 overflow-hidden'
        >
          {/* Top Section Header: PP Editorial Headline */}
          <div className='max-w-6xl mx-auto w-full'>
            <div className='flex items-center gap-2.5 text-[#F39A27] font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold mb-2 sm:mb-3'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse' />
              <span>[ 03 / METHODOLOGY ]</span>
            </div>
            
            <h2 className='text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95] max-w-4xl'>
              <span className='font-[font3]'>AI-Assisted Builds. </span>
              <span className='font-[font4] italic text-[#F39A27]'>Hands-On Coding.</span>
            </h2>

            <p className='font-[font4] italic text-sm sm:text-base lg:text-lg text-white/60 mt-2 sm:mt-3'>
              *A disciplined architectural loop from concept definition to production launch.*
            </p>
          </div>

          {/* Center Stage: Sinusoidal Curve + 5 Delivery Stations */}
          {/* Station 1 (Define) is the origin. Line flows: Define -> Design -> Build -> Review -> Launch */}
          <div className='relative w-full my-auto h-[clamp(220px,32vh,360px)] max-w-6xl mx-auto'>
            {/* SVG Wave */}
            <svg
              viewBox='0 0 1200 520'
              preserveAspectRatio='none'
              className='absolute inset-0 w-full h-full pointer-events-none'
              fill='none'
            >
              {/* Inactive dark track: 10px stroke */}
              <path
                d='M90 140 C 190 140 230 380 330 380 S 500 140 600 140 S 770 380 870 380 S 1010 140 1110 140'
                stroke='#1c1c1c'
                strokeWidth='10'
                strokeLinecap='round'
              />

              {/* Active glowing amber track: 10px stroke in exact lockstep with pointer */}
              <path
                ref={activeRoadRef}
                d='M90 140 C 190 140 230 380 330 380 S 500 140 600 140 S 770 380 870 380 S 1010 140 1110 140'
                stroke='#F39A27'
                strokeWidth='10'
                strokeLinecap='round'
                className='filter drop-shadow-[0_0_8px_rgba(243,154,39,0.6)]'
              />

              {/* Glowing traveller node: perfect 1:1 circle regardless of non-uniform screen stretch */}
              <g ref={travellerRef} transform='translate(90, 140)'>
                <path
                  d='M0 -0.01 L0 0.01'
                  stroke='#FFFFFF'
                  strokeWidth='24'
                  strokeLinecap='round'
                  vectorEffect='non-scaling-stroke'
                  className='filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                />
                <path
                  d='M0 -0.01 L0 0.01'
                  stroke='#F39A27'
                  strokeWidth='11'
                  strokeLinecap='round'
                  vectorEffect='non-scaling-stroke'
                />
              </g>
            </svg>

            {/* 5 Delivery Stations: Responsive (Small screen: pills showing ONLY words Define, Build, etc.) */}
            {methodStations.map((st, idx) => (
              <div
                key={idx}
                ref={(el) => (stationRefs.current[idx] = el)}
                style={{ left: st.left, top: st.top }}
                className='absolute rounded-full lg:rounded-[22px] bg-white text-black px-3.5 py-1.5 sm:px-4 sm:py-2 lg:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white flex flex-col items-center justify-center text-center select-none will-change-transform pointer-events-auto hover:brightness-105 transition-all duration-200 lg:w-[18%] lg:max-w-[220px]'
              >
                {/* Station Title: PP Editorial serif */}
                <span className='font-[font3] text-xs sm:text-sm lg:text-[15px] font-bold tracking-wide uppercase text-black whitespace-nowrap'>
                  {st.num} · {st.title}
                </span>

                {/* Description: Hidden on small screens! Shows ONLY on lg+ desktop */}
                <p className='hidden lg:block font-[font5] text-[9.5px] xl:text-[10px] tracking-wider uppercase text-black/75 leading-relaxed font-semibold mt-1.5 max-w-[200px]'>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Disciplines / Tools Row: Matching PP Editorial and Lausanne theme */}
          <div
            ref={methodToolsRef}
            className='max-w-6xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 select-none pt-2'
          >
            <ul className='flex flex-wrap items-center gap-2 sm:gap-2.5'>
              {methodTools.map((tool, i) => (
                <li
                  key={i}
                  className='flex items-center gap-2 rounded-full bg-[#121212] border border-white/10 px-3.5 sm:px-4 py-1.5 sm:py-2 hover:border-[#F39A27]/40 transition-colors'
                >
                  <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27]' />
                  <span className='font-[font3] text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white'>
                    {tool.name}
                  </span>
                  <span className='hidden sm:inline font-[font5] text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50 font-medium'>
                    {tool.role}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action pill button */}
            <button
              onClick={scrollToWorks}
              className='group inline-flex items-center gap-2.5 bg-[#F39A27] hover:bg-white text-black font-[font5] text-[11px] sm:text-xs uppercase tracking-wider font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 cursor-pointer active:scale-95'
            >
              <span>{featuredProjects.length} Projects</span>
              <span className='w-1.5 h-1.5 rounded-full bg-black' />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: THE STACK / THE TOOLBOX
          Categorized filterable pills matching the portfolio theme
          ========================================================================= */}
      <ToolboxSection />

      {/* =========================================================================
          SECTION 5: MONUMENTAL CLOSING BANNER
          Clean Black background without amber balls
          ========================================================================= */}
      <section id='contact' className='relative z-20 py-28 sm:py-36 px-5 sm:px-8 lg:px-16 border-t border-white/10 bg-black overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6'>
          <div className='inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#F39A27]/30'>
            <span className='w-2 h-2 rounded-full bg-[#F39A27]' />
            <span className='font-[font5] text-xs uppercase tracking-[0.22em] text-[#F39A27] font-semibold'>
              AI-ASSISTED WORKFLOW · HANDS-ON CODING KNOWLEDGE
            </span>
          </div>

          <h2 className='font-[font3] text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tight text-white leading-[0.95]'>
            Have An Ambitious Project?
          </h2>

          <p className='font-[font4] italic text-2xl sm:text-3xl lg:text-4xl text-[#F39A27] max-w-2xl'>
            *Let's build something extraordinary together.*
          </p>

          <p className='font-[font5] text-sm sm:text-base text-white/60 max-w-xl'>
            Open for full-time engineering roles, high-impact freelance projects, and creative collaborations.
          </p>

          {/* Action Row */}
          <div className='flex flex-wrap items-center justify-center gap-4 pt-6'>
            <a
              href='mailto:tanmayrongre2008@gmail.com'
              className='group inline-flex items-center gap-3 bg-[#F39A27] text-black font-[font5] uppercase text-xs sm:text-sm font-bold tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(243,154,39,0.3)] cursor-pointer'
            >
              <span>Start A Project</span>
              <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='transition-transform duration-300 group-hover:translate-x-1'>
                <path d='M7 17L17 7M17 7H7M17 7v10' />
              </svg>
            </a>

            <a
              href='mailto:tanmayrongre2008@gmail.com'
              className='inline-flex items-center gap-3 border border-white/20 hover:border-[#F39A27] px-8 py-5 rounded-full font-[font5] uppercase text-xs sm:text-sm tracking-[0.2em] text-white hover:text-[#F39A27] hover:bg-[#F39A27]/5 transition-all duration-300'
            >
              <span>tanmayrongre2008@gmail.com</span>
            </a>
          </div>

          {/* Socials & Copyright */}
          <div className='pt-14 mt-10 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-[font5] text-xs text-white/40 uppercase tracking-widest'>
            <div className='flex items-center gap-6'>
              <a
                href='https://github.com/tanmayrongre'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F39A27] transition-colors'
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href='https://www.linkedin.com/in/tanmayrongre'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F39A27] transition-colors'
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href='https://drive.google.com/file/d/1Rx9B-a1xWv-JIfgRsJS_PI45e3CC1BmN/view?usp=drive_link'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F39A27] transition-colors'
              >
                Resume PDF
              </a>
            </div>

            <div>
              © 2026 Tanmay Rongre • Crafted with GSAP & React
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home