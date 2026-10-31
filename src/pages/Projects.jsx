import React, { useRef, useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TransitionContext } from '../components/common/Stairs'
import projects from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const navigateWithTransition = useContext(TransitionContext)

  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const actionsRef = useRef(null)
  const showcaseRef = useRef(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Find active project by id or fallback to the first project
  const currentIndex = projects.findIndex((p) => p.id === id)
  const activeIndex = currentIndex !== -1 ? currentIndex : 0
  const project = projects[activeIndex]

  // Calculate next and previous projects for cyclic navigation
  const nextIndex = (activeIndex + 1) % projects.length
  const prevIndex = (activeIndex - 1 + projects.length) % projects.length
  const nextProject = projects[nextIndex]
  const prevProject = projects[prevIndex]

  // Helper to handle navigation (using stairs transition if available)
  const handleProjectSwitch = (targetId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (navigateWithTransition) {
      navigateWithTransition(`/projects/${targetId}`)
    } else {
      navigate(`/projects/${targetId}`)
    }
  }

  const handleBackToAll = () => {
    if (navigateWithTransition) {
      navigateWithTransition('/')
    } else {
      navigate('/')
    }
  }

  // Smooth entrance animation whenever active project changes
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }
      )

      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )

      tl.fromTo(
        actionsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.5'
      )

      tl.fromTo(
        showcaseRef.current,
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out' },
        '-=0.4'
      )

      // Animate editorial sections on scroll
      const sections = gsap.utils.toArray('.editorial-section')
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      ScrollTrigger.refresh()
    },
    { scope: containerRef, dependencies: [project.id] }
  )

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
  }, [project.id])

  return (
    <div
      ref={containerRef}
      className='bg-[#080808] text-[#FBF8F3] min-h-screen relative overflow-x-hidden selection:bg-[#F39A27] selection:text-black font-[font1]'
    >
      {/* Ambient background gold glow */}
      <div
        className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#F39A27]/[0.035] blur-[170px] -z-0'
        aria-hidden='true'
      />

      {/* =========================================================================
          TOP BAR / HEADER NAVIGATION
          Matches reference: "< All works" on left, "01 / 08" on right
          ========================================================================= */}
      <nav className='pt-28 sm:pt-32 pb-6 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto flex items-center justify-between relative z-20'>
        {/* Left: < All works pill button */}
        <button
          onClick={handleBackToAll}
          className='group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#F39A27]/60 text-white/80 hover:text-white font-[font5] text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-md active:scale-95 cursor-pointer'
        >
          <span className='text-[#F39A27] transition-transform duration-300 group-hover:-translate-x-1'>
            ‹
          </span>
          <span>All works</span>
        </button>

        {/* Center / Right: Project Switcher & Counter "01 / 08" */}
        <div className='flex items-center gap-3 sm:gap-5'>
          {/* Quick Drawer Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className='hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/60 hover:text-white font-[font5] text-[11px] tracking-widest uppercase transition-all cursor-pointer'
            title='View all 8 projects'
          >
            <span>INDEX</span>
            <span className='w-1 h-1 rounded-full bg-[#F39A27]' />
          </button>

          {/* Stepper Chevrons + Count */}
          <div className='flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.2em] uppercase text-white/50 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full'>
            <button
              onClick={() => handleProjectSwitch(prevProject.id)}
              className='hover:text-[#F39A27] px-1 transition-colors cursor-pointer'
              title={`Previous: ${prevProject.title}`}
              aria-label='Previous project'
            >
              ‹
            </button>
            <span className='text-white font-medium'>
              {project.num}
            </span>
            <span className='text-white/30'>/</span>
            <span>0{projects.length}</span>
            <button
              onClick={() => handleProjectSwitch(nextProject.id)}
              className='hover:text-[#F39A27] px-1 transition-colors cursor-pointer'
              title={`Next: ${nextProject.title}`}
              aria-label='Next project'
            >
              ›
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          HERO TITLE & INTRO BLOCK
          Matches reference:
          "Project" in accent color
          Giant Title (e.g. Club Anva / HostelHub)
          Subtitle / overview text
          Buttons: "• Case study" and "Visit site ↗"
          ========================================================================= */}
      <header
        ref={heroRef}
        className='pt-6 sm:pt-10 pb-12 sm:pb-16 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto relative z-10'
      >
        {/* Category Label (Reference: pink/accent 'Project') */}
        <div className='inline-flex items-center gap-2 mb-4 sm:mb-6'>
          <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
          <span className='font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
            Project // {project.category}
          </span>
        </div>

        {/* Monumental Title */}
        <h1
          ref={titleRef}
          className='font-[font3] text-5xl sm:text-7xl lg:text-[7.5vw] font-normal uppercase tracking-tight leading-[0.92] text-white'
        >
          {project.title}
        </h1>

        {/* Subtitle / summary paragraph */}
        <p
          ref={subtitleRef}
          className='font-[font4] italic text-lg sm:text-2xl lg:text-3xl text-white/70 max-w-3xl leading-relaxed mt-5 sm:mt-8'
        >
          {project.subtitle}
        </p>

        {/* Action Buttons: Case study / GitHub & Visit site ↗ */}
        <div
          ref={actionsRef}
          className='flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10'
        >
          {/* Button 1: GitHub / Case Study */}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/40 text-white font-[font5] text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md active:scale-95'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27]' />
              <span>Source Code</span>
              <span className='text-xs text-white/50'>↗</span>
            </a>
          )}

          {/* Button 2: Visit site ↗ */}
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F39A27] hover:bg-white text-black font-[font5] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(243,154,39,0.3)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] active:scale-95'
            >
              <span>Visit site</span>
              <span className='text-sm'>↗</span>
            </a>
          )}
        </div>
      </header>

      {/* =========================================================================
          MASSIVE WATERMARK TYPOGRAPHY (Matches reference: "Club Anva · Club Anva")
          Faint, elegant background text running behind the screenshot
          ========================================================================= */}
      <div className='relative w-full overflow-hidden select-none pointer-events-none -mt-4 sm:-mt-8'>
        <div
          className='whitespace-nowrap font-[font3] uppercase text-[15vw] sm:text-[13vw] font-black tracking-tight text-white/[0.035] leading-none'
          aria-hidden='true'
        >
          {project.title} &nbsp;·&nbsp; {project.title} &nbsp;·&nbsp; {project.title}
        </div>
      </div>

      {/* =========================================================================
          HERO MOCKUP / SCREENSHOT SHOWCASE
          Crisp browser frame with subtle border, shadow, and 16:9 / 1903x982 display
          ========================================================================= */}
      <section
        ref={showcaseRef}
        className='px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto -mt-6 sm:-mt-14 relative z-10'
      >
        <div className='rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 bg-[#0d0d0d] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden group'>
          {/* Minimalist Browser Frame Bar */}
          <div className='flex items-center justify-between px-3 py-2 border-b border-white/[0.06] mb-2 sm:mb-3'>
            <div className='flex items-center gap-1.5'>
              <span className='w-2.5 h-2.5 rounded-full bg-white/20' />
              <span className='w-2.5 h-2.5 rounded-full bg-white/20' />
              <span className='w-2.5 h-2.5 rounded-full bg-[#F39A27]/60' />
            </div>

            <div className='flex items-center gap-2 px-3 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-white/40 font-[font5] text-[10px] tracking-widest uppercase'>
              <span className='w-1 h-1 rounded-full bg-[#F39A27]' />
              <span className='truncate max-w-[200px] sm:max-w-[400px]'>
                {project.link || project.github}
              </span>
            </div>

            <div className='font-[font5] text-[10px] tracking-widest uppercase text-white/30 hidden sm:block'>
              {project.year || '2026'} ARCHIVE
            </div>
          </div>

          {/* Screenshot Viewport Container */}
          <div className='relative w-full aspect-[1903/982] rounded-xl overflow-hidden bg-black flex items-center justify-center'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]'
              loading='eager'
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITABLE CONTENT SECTIONS (MATCHING REFERENCE STRUCTURE)
          Divided by clean thin borders:
          1. ( The story )
          2. ( What it does ) & ( My contribution )
          3. ( Project status )
          4. ( Built with )
          ========================================================================= */}
      <main className='px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto py-16 sm:py-24 relative z-10'>
        
        {/* =====================================================================
            SECTION 1: ( The story )
            ===================================================================== */}
        <section className='editorial-section pt-10 sm:pt-14 border-t border-white/10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10'>
            {/* Section Tag */}
            <div className='lg:col-span-3'>
              <div className='inline-flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                <span>(</span>
                <span>The story</span>
                <span>)</span>
              </div>
            </div>

            {/* Narrative Body */}
            <div className='lg:col-span-9'>
              <p className='font-[font1] text-base sm:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-4xl'>
                {project.story}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: ( What it does ) & ( My contribution )
            Two responsive columns with clean dividers
            ===================================================================== */}
        <section className='editorial-section pt-16 sm:pt-20 border-t border-white/10 mt-16 sm:mt-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16'>
            
            {/* Left Column: ( What it does ) */}
            <div className='flex flex-col gap-6'>
              <div className='inline-flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                <span>(</span>
                <span>What it does</span>
                <span>)</span>
              </div>

              <ul className='flex flex-col gap-4 sm:gap-5 mt-2'>
                {project.whatItDoes?.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-3.5 text-white/80 font-[font1] text-sm sm:text-base lg:text-lg leading-relaxed'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27] mt-2.5 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: ( My contribution ) */}
            <div className='flex flex-col gap-6 border-t lg:border-t-0 border-white/10 pt-10 lg:pt-0'>
              <div className='inline-flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                <span>(</span>
                <span>My contribution</span>
                <span>)</span>
              </div>

              <ul className='flex flex-col gap-4 sm:gap-5 mt-2'>
                {project.myContribution?.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-3.5 text-white/80 font-[font1] text-sm sm:text-base lg:text-lg leading-relaxed'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* =====================================================================
            SECTION 3: ( Project status )
            ===================================================================== */}
        <section className='editorial-section pt-16 sm:pt-20 border-t border-white/10 mt-16 sm:mt-20'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10'>
            {/* Section Tag */}
            <div className='lg:col-span-3'>
              <div className='inline-flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                <span>(</span>
                <span>Project status</span>
                <span>)</span>
              </div>
            </div>

            {/* Status Information */}
            <div className='lg:col-span-9 flex flex-col gap-4'>
              <div className='inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 w-fit'>
                <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0' />
                <span className='font-[font5] text-xs sm:text-sm uppercase tracking-wider text-white font-medium'>
                  {project.status}
                </span>
              </div>

              <p className='font-[font1] text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl leading-relaxed mt-1'>
                {project.statusDetails}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: ( Built with )
            Interactive Tech Pills matching reference layout
            ===================================================================== */}
        <section className='editorial-section pt-16 sm:pt-20 border-t border-white/10 mt-16 sm:mt-20'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10'>
            {/* Section Tag */}
            <div className='lg:col-span-3'>
              <div className='inline-flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                <span>(</span>
                <span>Built with</span>
                <span>)</span>
              </div>
            </div>

            {/* Tech Badges */}
            <div className='lg:col-span-9'>
              <div className='flex flex-wrap items-center gap-2.5 sm:gap-3.5'>
                {project.builtWith?.map((tech, idx) => (
                  <div
                    key={idx}
                    className='inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#121212] hover:bg-[#1a1a1a] border border-white/15 hover:border-[#F39A27]/60 text-white/90 font-[font5] text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27]' />
                    <span className='font-medium'>{tech.name}</span>
                    {tech.category && (
                      <span className='text-[10px] text-white/40 uppercase hidden sm:inline'>
                        / {tech.category}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: BOTTOM NEXT PROJECT TEASER (Matches Reference Bottom)
            "Next project >"
            Massive Clickable Title (e.g. FLAXAN Labs / Turio / DevSpace)
            Round arrow button that advances to next project
            ===================================================================== */}
        <section className='editorial-section pt-20 sm:pt-28 border-t border-white/10 mt-20 sm:mt-28'>
          <div
            onClick={() => handleProjectSwitch(nextProject.id)}
            className='group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 transition-transform duration-300'
          >
            <div>
              <div className='inline-flex items-center gap-2 font-[font5] text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F39A27] font-semibold mb-3'>
                <span>Next project</span>
                <span>›</span>
              </div>

              <h2 className='font-[font3] text-4xl sm:text-6xl lg:text-[6.5vw] font-normal uppercase tracking-tight text-white group-hover:text-[#F39A27] transition-colors leading-[0.95]'>
                {nextProject.title}
              </h2>
            </div>

            {/* Large Circular Arrow Button */}
            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/20 group-hover:border-[#F39A27] group-hover:bg-[#F39A27] flex items-center justify-center text-white group-hover:text-black transition-all duration-300 text-2xl sm:text-3xl shrink-0 shadow-xl group-hover:scale-105 group-hover:rotate-45'>
              ↗
            </div>
          </div>
        </section>

      </main>

      {/* =========================================================================
          PAGE FOOTER
          Minimalist and consistent with portfolio theme
          ========================================================================= */}
      <footer className='border-t border-white/[0.08] py-8 sm:py-10 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-[font5] text-xs tracking-widest uppercase text-white/40'>
        <div>
          © 2026 TANMAY RONGRE — FULL STACK ARCHITECT
        </div>

        <div className='flex items-center gap-6'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='hover:text-[#F39A27] transition-colors cursor-pointer'
          >
            BACK TO TOP ↑
          </button>
          <span>•</span>
          <button
            onClick={handleBackToAll}
            className='hover:text-[#F39A27] transition-colors cursor-pointer'
          >
            ALL WORKS
          </button>
        </div>
      </footer>

      {/* =========================================================================
          FULL PROJECT INDEX DRAWER (SLIDE-OVER CATALOG)
          Opens when user clicks "INDEX" in top bar
          ========================================================================= */}
      {drawerOpen && (
        <div className='fixed inset-0 z-50 flex justify-end'>
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className='fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer'
          />

          {/* Drawer Panel */}
          <div className='relative z-10 w-full max-w-md bg-[#0d0d0d] border-l border-white/10 h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between'>
            <div>
              {/* Header */}
              <div className='flex items-center justify-between pb-6 border-b border-white/10 mb-6'>
                <div className='flex items-center gap-2 font-[font5] text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                  <span className='w-2 h-2 rounded-full bg-[#F39A27]' />
                  <span>ALL PROJECTS ({projects.length})</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className='text-white/60 hover:text-white text-lg px-2 py-1'
                  aria-label='Close drawer'
                >
                  ✕
                </button>
              </div>

              {/* Project list */}
              <div className='flex flex-col gap-3'>
                {projects.map((p, idx) => {
                  const isActive = p.id === project.id
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        setDrawerOpen(false)
                        handleProjectSwitch(p.id)
                      }}
                      className={`group p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-[#1a1a1a] border-[#F39A27]/80 text-white'
                          : 'bg-[#121212]/50 hover:bg-[#151515] border-white/5 hover:border-white/20 text-white/70'
                      }`}
                    >
                      <div className='flex items-center gap-3'>
                        <span className='font-[font5] text-xs font-semibold text-[#F39A27]'>
                          {p.num}
                        </span>
                        <div>
                          <div className='font-[font3] text-base sm:text-lg uppercase text-white group-hover:text-[#F39A27] transition-colors'>
                            {p.title}
                          </div>
                          <div className='font-[font5] text-[10px] text-white/40 tracking-wider uppercase truncate max-w-[220px]'>
                            {p.category}
                          </div>
                        </div>
                      </div>

                      <span className='text-xs text-white/40 group-hover:text-[#F39A27] transition-colors'>
                        {isActive ? '●' : '→'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom info */}
            <div className='pt-6 border-t border-white/10 text-center font-[font5] text-[11px] tracking-widest uppercase text-white/30'>
              TANMAY RONGRE PORTFOLIO 2026
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
