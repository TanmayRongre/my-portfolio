import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { TransitionContext } from './Stairs'

const Footer = () => {
  const location = useLocation()
  const navigateWithTransition = useContext(TransitionContext)

  // Don't render footer on Home page (/) since Home has its own monumental closing section
  if (location.pathname === '/') return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-black text-[#FBF8F3] border-t border-white/[0.08] pt-16 sm:pt-20 pb-12 px-5 sm:px-8 lg:px-14 relative z-10 select-none'>
      {/* Ambient background glow matching Home */}
      <div
        className='pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F39A27]/[0.03] blur-[150px] -z-0'
        aria-hidden='true'
      />

      <div className='max-w-[1800px] mx-auto flex flex-col gap-12 sm:gap-16 relative z-10'>
        
        {/* =========================================================================
            TOP SECTION: Brand, Monogram & Back to Top
            ========================================================================= */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-10 sm:pb-12 border-b border-white/[0.08]'>
          
          {/* Brand Name & Headline */}
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              {/* Monogram Badge */}
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center shrink-0'>
                <span className='font-[font3] text-base sm:text-lg tracking-tight text-white'>
                  T<span className='text-[#F39A27]'>R</span>
                </span>
              </div>
              <h2 className='font-[font3] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white flex items-baseline gap-2'>
                <span>Tanmay</span>
                <span className='font-[font4] italic text-[#FBF8F3]'>Rongre</span>
              </h2>
            </div>
            
            <p className='font-[font5] text-[10px] sm:text-[11px] text-[#F39A27] uppercase tracking-[0.25em] font-medium flex items-center gap-2 mt-1'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <span>Full-Stack Architecture • Creative Technologist</span>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className='group flex items-center gap-3 border border-white/20 hover:border-[#F39A27] hover:text-[#F39A27] hover:bg-[#F39A27]/5 px-6 py-3 rounded-full text-[11px] sm:text-xs font-[font5] uppercase tracking-[0.2em] text-white/80 transition-all duration-300 cursor-pointer shadow-sm active:scale-95'
            aria-label='Scroll to top of page'
          >
            <span>Back to top</span>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              className='transition-transform duration-300 group-hover:-translate-y-1'
            >
              <path d='M12 19V5M5 12l7-7 7 7' />
            </svg>
          </button>
        </div>

        {/* =========================================================================
            MIDDLE SECTION: 3-Column Luxury Directory
            ========================================================================= */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12'>
          
          {/* Column 1: Navigation Links */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 font-[font5] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F39A27] font-semibold'>
              <span>01</span>
              <span>/</span>
              <span>INDEX NAVIGATION</span>
            </div>
            <div className='flex flex-col gap-2.5 font-[font3] text-xl sm:text-2xl uppercase'>
              <button
                onClick={() => navigateWithTransition('/')}
                className='text-left text-white/80 hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit cursor-pointer'
              >
                Home
              </button>
              <button
                onClick={() => navigateWithTransition('/projects')}
                className='text-left text-white/80 hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit cursor-pointer'
              >
                Selected Works
              </button>
              <button
                onClick={() => navigateWithTransition('/services')}
                className='text-left text-white/80 hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit cursor-pointer'
              >
                Capabilities & Services
              </button>
              <button
                onClick={() => navigateWithTransition('/contact')}
                className='text-left text-white/80 hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit cursor-pointer'
              >
                Initiate Contact
              </button>
            </div>
          </div>

          {/* Column 2: Connect & Socials */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 font-[font5] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F39A27] font-semibold'>
              <span>02</span>
              <span>/</span>
              <span>SOCIAL DIRECTORY</span>
            </div>
            <div className='flex flex-col gap-3 font-[font5] text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70'>
              <a
                href='https://github.com/tanmayrongre'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F39A27] hover:translate-x-1 transition-all duration-300 w-fit flex items-center gap-2'
              >
                <span>GitHub Repository</span>
                <span className='text-xs'>↗</span>
              </a>
              <a
                href='https://www.linkedin.com/in/tanmayrongre'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F39A27] hover:translate-x-1 transition-all duration-300 w-fit flex items-center gap-2'
              >
                <span>LinkedIn Profile</span>
                <span className='text-xs'>↗</span>
              </a>
              <a
                href='https://drive.google.com/file/d/1Rx9B-a1xWv-JIfgRsJS_PI45e3CC1BmN/view?usp=drive_link'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F39A27] hover:translate-x-1 transition-all duration-300 w-fit flex items-center gap-2'
              >
                <span>Curriculum Vitae (PDF)</span>
                <span className='text-xs'>↗</span>
              </a>
            </div>
          </div>

          {/* Column 3: Direct Inquiry & Availability */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 font-[font5] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F39A27] font-semibold'>
              <span>03</span>
              <span>/</span>
              <span>DIRECT INQUIRIES</span>
            </div>
            <a
              href='mailto:tanmayrongre2008@gmail.com'
              className='font-[font3] text-lg sm:text-xl lg:text-2xl text-white hover:text-[#F39A27] transition-colors break-all leading-snug'
            >
              tanmayrongre2008@gmail.com
            </a>
            <p className='font-[font5] text-xs text-white/50 leading-relaxed max-w-sm mt-1'>
              Open for full-time engineering roles, high-impact freelance projects, and creative technology collaborations.
            </p>

            {/* Availability Badge */}
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#F39A27]/30 mt-2 w-fit'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <span className='font-[font5] text-[10px] uppercase tracking-[0.2em] text-[#F39A27] font-medium'>
                AVAILABLE FOR 2026 INITIATIVES
              </span>
            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM BAR: Copyright & Colophon
            ========================================================================= */}
        <div className='pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-[font5] text-white/40 uppercase tracking-[0.2em]'>
          <span>© 2026 Tanmay Rongre • All Rights Reserved</span>
          <span>Crafted with React, GSAP & Tailwind</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
