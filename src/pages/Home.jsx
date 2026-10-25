import React, { useRef, useContext, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TransitionContext } from '../components/common/Stairs'

// Project preview assets (src/assets/Projects/)
import hostelHubImg from '../assets/Projects/HostelHub.png'
import turioImg from '../assets/Projects/Turio.png'
import devSpaceImg from '../assets/Projects/DevSpace.png'
import facultyHubImg from '../assets/Projects/FacultyHub.png'
import elearnImg from '../assets/Projects/ELearn.png'
import movieImg from '../assets/Projects/MovieRecommnder.png'
import connectHubImg from '../assets/Projects/connectHub.png'
import portfolioImg from '../assets/Projects/Portfolio.png'



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

  const navigateWithTransition = useContext(TransitionContext)
  const [activeProject, setActiveProject] = useState(0)

  const featuredProjects = [
    {
      num: '01',
      title: 'HostelHub',
      subtitle: 'MERN Hostel Operations & Gate Pass Engine',
      category: 'Full-Stack Architecture',
      description: 'Comprehensive digital hostel management ecosystem featuring QR-based gate check-in/out tracking, automated leave requests, room allocations, and role-based dashboards for students, wardens, and administrators.',
      image: hostelHubImg,
      tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'QR Pass'],
      link: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
      github: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
    },
    {
      num: '02',
      title: 'Turio',
      subtitle: 'Interactive Travel & Destination Platform',
      category: 'Frontend Engineering',
      description: 'Dynamic, high-performance travel and destination exploration interface featuring curated interactive itineraries, fluid destination guides, immersive showcases, and responsive booking flows.',
      image: turioImg,
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel', 'UI/UX'],
      link: 'https://turio-theta.vercel.app/',
      github: 'https://github.com/tanmayrongre/turio',
    },
    {
      num: '03',
      title: 'DevSpace',
      subtitle: 'All-in-One MERN Developer Workspace & Collaboration Suite',
      category: 'Full-Stack Architecture',
      description: 'Unified developer productivity and portfolio platform featuring interactive Kanban boards, public developer showcases, collaborative project ideation trackers, sticky notes, and a community explore feed for projects and profiles.',
      image: devSpaceImg,
      tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Kanban'],
      link: 'https://devspace-sand.vercel.app',
      github: 'https://github.com/tanmayrongre/devspace',
    },
    {
      num: '04',
      title: 'FacultyHub',
      subtitle: 'Smart Academic & Faculty Management System',
      category: 'Full-Stack Architecture',
      description: 'Role-based MERN platform built for HODs and faculty to streamline academic operations — featuring batch-wise attendance tracking, PA & practical marks management, leave & substitution workflows, master timetable, campus notices, and Google Sheets data export.',
      image: facultyHubImg,
      tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Google Sheets API'],
      link: 'https://github.com/tanmayrongre/FacultyHub',
      github: 'https://github.com/tanmayrongre/FacultyHub',
    },
    {
      num: '05',
      title: 'E-Learning Platform',
      subtitle: 'Interactive LMS & Educational Dashboard',
      category: 'Frontend & LMS Engineering',
      description: 'Modern educational platform featuring modular course structures, quiz assessments, student progress analytics, and responsive design.',
      image: elearnImg,
      tags: ['React', 'Tailwind CSS', 'GSAP', 'Vercel'],
      link: 'https://e-learning-platform-six-lilac.vercel.app/',
      github: 'https://github.com/tanmayrongre/e-learning-platform',
    },
    {
      num: '06',
      title: 'Movie Recommender',
      subtitle: 'TMDB Intelligent Discovery Engine',
      category: 'API & Modern UI',
      description: 'Smart movie search and recommendation engine powered by TMDB API with real-time query filtering, high-res posters, trailer embeds, and cast insights.',
      image: movieImg,
      tags: ['React', 'TMDB API', 'Tailwind CSS', 'GitHub Pages'],
      link: 'https://tanmayrongre.github.io/movie-recommender/',
      github: 'https://github.com/tanmayrongre/movie-recommender',
    },
    {
      num: '07',
      title: 'Connect Hub',
      subtitle: 'Social Interaction Platform',
      category: 'Interactive Web',
      description: 'Dynamic web network enabling creators to connect, publish feed updates, explore community channels, and interact with modern UI components.',
      image: connectHubImg,
      tags: ['HTML5/CSS3', 'JavaScript', 'Responsive UI', 'GitHub Pages'],
      link: 'https://tanmayrongre.github.io/Connect-hub/',
      github: 'https://github.com/tanmayrongre/Connect-hub',
    },
    {
      num: '08',
      title: 'Developer Portfolio',
      subtitle: 'Bespoke Dark Architecture & Motion Showcase',
      category: 'Creative Direction & Motion',
      description: 'High-performance interactive portfolio engineered with GSAP scroll storytelling, tailored dark modes, SVG progress rings, luxury typography, and editorial dark aesthetics.',
      image: portfolioImg,
      tags: ['React', 'GSAP', 'Tailwind CSS', 'Vercel'],
      link: 'https://tanmayrongre.github.io/Portfolio/',
      github: 'https://github.com/tanmayrongre/my-portfolio',
    },
  ]


  const pillars = [
    {
      index: '01',
      title: 'Full-Stack Architecture',
      subtitle: 'Scalable Systems from Database to DOM',
      text: 'Specializing in robust MERN stack applications with clean RESTful APIs, optimized database schemas, secure authentication, and resilient server-side architectures.',
      tags: ['Node.js', 'Express', 'MongoDB', 'React', 'REST APIs'],
    },
    {
      index: '02',
      title: 'Creative Motion & Interaction',
      subtitle: 'Liquid 60FPS Storytelling',
      text: 'Engineering award-worthy scroll interactions, GSAP physics-driven micro-animations, and fluid transitions that captivate users without compromising performance.',
      tags: ['GSAP', 'ScrollTrigger', 'Lenis', 'Micro-Interactions', 'CSS3'],
    },
    {
      index: '03',
      title: 'UI/UX & Design Precision',
      subtitle: 'Bespoke Visual Identity',
      text: 'Harmonizing high-contrast typography, tailored dark modes, subtle glassmorphic depth, and responsive layouts that look museum-grade on every device.',
      tags: ['Editorial Typography', 'Responsive Design', 'Color Systems', 'Accessibility'],
    },
  ]

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

    // Scroll Trigger: Project rows entrance (Snappy, prompt entrance on scroll)
    const projectRows = gsap.utils.toArray('.project-row')
    projectRows.forEach((row) => {
      gsap.fromTo(
        row,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Scroll Trigger: Philosophy cards (Snappy, prompt entrance on scroll)
    const pillarCards = gsap.utils.toArray('.pillar-card')
    pillarCards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
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
        ref={heroRef}
        className='relative h-[100dvh] max-h-screen w-full flex flex-col justify-between pt-16 sm:pt-18 lg:pt-20 pb-4 overflow-hidden z-10'
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
                ENGINEER. DEVELOPER. BUILDER.
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
              
              {/* Kicker Subtitle (Sits at upper chest level) */}
              <div ref={kickerRef} className='relative z-10 pb-1'>
                <p className='font-[font5] text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/60 font-medium'>
                  A SYSTEMIC PERSPECTIVE ON TECHNOLOGY
                </p>
              </div>

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
              <div ref={bioRef} className='relative z-10 mt-2.5 sm:mt-3.5 max-w-lg mx-auto px-4'>
                <p className='font-[font5] text-xs sm:text-sm lg:text-[15px] text-white/70 leading-relaxed font-normal'>
                  I build products, engineer scalable architectures,
                  <br className='hidden sm:block' />
                  and craft interactive digital experiences.
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
                  onClick={() => navigateWithTransition('/contact')}
                  className='group inline-flex items-center gap-2 text-white/80 hover:text-[#F39A27] font-[font5] text-[11px] sm:text-xs tracking-[0.15em] uppercase px-4 py-2.5 sm:py-3 border-b border-transparent hover:border-[#F39A27] transition-all duration-300 cursor-pointer'
                >
                  <span>Start a conversation</span>
                  <span className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-xs'>↗</span>
                </button>
              </div>

            </div>

            {/* Center Bottom: Building & Engineering Since 2023 */}
            <div ref={centerBottomRef} className='pt-2 sm:pt-3 text-center'>
              <span className='font-[font5] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#F39A27]/90 font-medium'>
                BUILDING & ENGINEERING SINCE 2023
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
          SECTION 2: FEATURED SELECTED WORKS (Smoothly Scrolled Down To)
          Opaque base black background so the faded photo is cleanly masked.
          ========================================================================= */}
      <section
        id='selected-works'
        className='relative z-20 py-24 sm:py-32 px-5 sm:px-8 lg:px-16 border-t border-white/10 bg-[#050505]'
      >
        {/* Section Header */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16'>
          <div>
            <div className='inline-block font-[font5] text-xs uppercase tracking-[0.3em] text-[#F39A27] mb-2'>
              [ CURATED PORTFOLIO ]
            </div>
            <h2 className='font-[font3] text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white'>
              Selected Works
            </h2>
          </div>
          <p className='font-[font4] italic text-lg sm:text-xl text-white/60 max-w-md'>
            *Engineered with precision, built for high performance, and designed to inspire.*
          </p>
        </div>

        {/* Project Cards List */}
        <div className='flex flex-col gap-8'>
          {featuredProjects.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveProject(idx)}
              className={`project-row group relative rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 border ${
                activeProject === idx
                  ? 'bg-gradient-to-r from-[#12100d] to-[#0a0a0a] border-[#F39A27]/50 shadow-[0_15px_40px_rgba(243,154,39,0.1)]'
                  : 'bg-white/[0.015] border-white/10 hover:border-white/20'
              }`}
            >
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                
                {/* Left: Number & Meta */}
                <div className='lg:col-span-1 flex flex-row lg:flex-col items-center lg:items-start justify-between'>
                  <span className='font-[font3] text-3xl sm:text-4xl text-[#F39A27] font-bold'>
                    {item.num}
                  </span>
                  <span className='font-[font5] text-[11px] uppercase tracking-widest text-white/40 mt-2'>
                    {item.category}
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <div className='lg:col-span-6 flex flex-col gap-3'>
                  <h3 className='font-[font3] text-2xl sm:text-3xl lg:text-4xl uppercase text-white group-hover:text-[#F39A27] transition-colors'>
                    {item.title}
                  </h3>
                  <p className='font-[font4] italic text-base sm:text-lg text-white/80'>
                    {item.subtitle}
                  </p>
                  <p className='font-[font5] text-sm text-white/60 leading-relaxed max-w-xl'>
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className='font-[font5] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70'
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className='flex items-center gap-5 pt-4'>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 font-[font5] text-xs uppercase tracking-widest text-[#F39A27] hover:text-white transition-colors font-semibold'
                    >
                      <span>Live Platform</span>
                      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'>
                        <path d='M7 17L17 7M17 7H7M17 7v10' />
                      </svg>
                    </a>
                    <a
                      href={item.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 font-[font5] text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors'
                    >
                      <span>Source Code</span>
                      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Project Screenshot Preview */}
                <div className='lg:col-span-5'>
                  <div className='relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#F39A27]/40 transition-colors shadow-2xl bg-[#090909]'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className='mt-14 text-center'>
          <button
            onClick={() => navigateWithTransition('/projects')}
            className='group inline-flex items-center gap-3 border border-white/20 hover:border-[#F39A27] px-8 py-4 rounded-full font-[font5] uppercase text-xs tracking-[0.25em] text-white hover:text-[#F39A27] transition-all duration-300 cursor-pointer'
          >
            <span>View All Works in Archive</span>
            <span className='transition-transform duration-300 group-hover:translate-x-1.5'>→</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THREE PILLARS OF ENGINEERING
          ========================================================================= */}
      <section className='relative z-20 py-24 sm:py-32 px-5 sm:px-8 lg:px-16 border-t border-white/10 bg-black'>
        <div className='max-w-3xl mb-16'>
          <div className='font-[font5] text-xs uppercase tracking-[0.3em] text-[#F39A27] mb-2'>
            [ ENGINEERING PRINCIPLES ]
          </div>
          <h2 className='font-[font3] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white'>
            How I Build Systems
          </h2>
          <p className='font-[font4] italic text-lg sm:text-xl text-white/60 mt-3'>
            *Every interface is tuned for speed, longevity, and visual transcendence.*
          </p>
        </div>

        {/* Pillars Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className='pillar-card rounded-3xl p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-[#F39A27]/40 transition-all duration-500 flex flex-col justify-between group'
            >
              <div>
                <span className='font-[font3] text-3xl text-[#F39A27] font-bold block mb-6'>
                  {pillar.index}
                </span>
                <h3 className='font-[font3] text-2xl uppercase text-white mb-2 group-hover:text-[#F39A27] transition-colors'>
                  {pillar.title}
                </h3>
                <h4 className='font-[font4] italic text-sm text-[#F39A27]/80 mb-4'>
                  {pillar.subtitle}
                </h4>
                <p className='font-[font5] text-sm text-white/60 leading-relaxed mb-6'>
                  {pillar.text}
                </p>
              </div>

              <div className='flex flex-wrap gap-1.5 pt-4 border-t border-white/10'>
                {pillar.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='font-[font5] text-[10px] uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/[0.03]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MONUMENTAL CLOSING BANNER
          Clean Black background without amber balls
          ========================================================================= */}
      <section className='relative z-20 py-28 sm:py-36 px-5 sm:px-8 lg:px-16 border-t border-white/10 bg-black overflow-hidden'>
        <div className='relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#F39A27]/30'>
            <span className='w-2 h-2 rounded-full bg-[#F39A27]' />
            <span className='font-[font5] text-xs uppercase tracking-[0.25em] text-[#F39A27]'>
              Initiate Collaboration
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
            <button
              onClick={() => navigateWithTransition('/contact')}
              className='group inline-flex items-center gap-3 bg-[#F39A27] text-black font-[font5] uppercase text-xs sm:text-sm font-bold tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(243,154,39,0.3)] cursor-pointer'
            >
              <span>Start A Project</span>
              <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='transition-transform duration-300 group-hover:translate-x-1'>
                <path d='M7 17L17 7M17 7H7M17 7v10' />
              </svg>
            </button>

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