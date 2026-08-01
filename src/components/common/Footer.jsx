import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { TransitionContext } from './Stairs'

const Footer = () => {
  const location = useLocation()
  const navigateWithTransition = useContext(TransitionContext)

  // Don't render footer on Home page (/)
  if (location.pathname === '/') return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-black text-white border-t border-white/10 pt-16 pb-12 px-6 lg:px-16 relative z-10'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        
        {/* Top Section: Brand & Back to Top */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-white/10'>
          <div>
            <h2 className='font-[font2] text-5xl lg:text-7xl uppercase tracking-tighter text-[#D3FD50]'>
              TR.
            </h2>
            <p className='font-[font1] text-white/50 text-sm mt-2 uppercase tracking-widest'>
              Full-Stack Developer & Graphics Engineer
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className='group flex items-center gap-3 border border-white/20 hover:border-[#D3FD50] hover:text-[#D3FD50] px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer'
          >
            <span>Back to top</span>
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='transition-transform duration-300 group-hover:-translate-y-1'>
              <path d='M12 19V5M5 12l7-7 7 7' />
            </svg>
          </button>
        </div>

        {/* Middle Section: Navigation & Social Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-[font1]'>
          
          {/* Navigation Links */}
          <div className='flex flex-col gap-3'>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#D3FD50]'>Navigation</span>
            <div className='flex flex-col gap-2 font-[font2] text-xl lg:text-2xl uppercase'>
              <button onClick={() => navigateWithTransition('/')} className='text-left hover:text-[#D3FD50] transition-colors w-fit'>Home</button>
              <button onClick={() => navigateWithTransition('/projects')} className='text-left hover:text-[#D3FD50] transition-colors w-fit'>Projects</button>
              <button onClick={() => navigateWithTransition('/services')} className='text-left hover:text-[#D3FD50] transition-colors w-fit'>Services</button>
              <button onClick={() => navigateWithTransition('/contact')} className='text-left hover:text-[#D3FD50] transition-colors w-fit'>Contact</button>
            </div>
          </div>

          {/* Connect / Socials */}
          <div className='flex flex-col gap-3'>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#D3FD50]'>Social Network</span>
            <div className='flex flex-col gap-2 text-base lg:text-lg uppercase text-white/80'>
              <a href='https://github.com/tanmayrongre' target='_blank' rel='noopener noreferrer' className='hover:text-[#D3FD50] transition-colors w-fit flex items-center gap-2'>
                <span>GitHub</span>
                <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M7 17L17 7M17 7H7M17 7v10' /></svg>
              </a>
              <a href='https://www.linkedin.com/in/tanmayrongre' target='_blank' rel='noopener noreferrer' className='hover:text-[#D3FD50] transition-colors w-fit flex items-center gap-2'>
                <span>LinkedIn</span>
                <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M7 17L17 7M17 7H7M17 7v10' /></svg>
              </a>
              <a href='https://drive.google.com/file/d/1Rx9B-a1xWv-JIfgRsJS_PI45e3CC1BmN/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className='hover:text-[#D3FD50] transition-colors w-fit flex items-center gap-2'>
                <span>Resume (PDF)</span>
                <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M7 17L17 7M17 7H7M17 7v10' /></svg>
              </a>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className='flex flex-col gap-3'>
            <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#D3FD50]'>Direct Email</span>
            <a
              href='mailto:tanmayrongre2008@gmail.com'
              className='font-[font2] text-xl lg:text-2xl text-white hover:text-[#D3FD50] transition-colors break-all'
            >
              tanmayrongre2008@gmail.com
            </a>
            <p className='text-xs text-white/50 leading-relaxed mt-2'>
              Available for freelance opportunities, full-time positions, and technical collaborations.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className='pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest'>
          <span>© 2026 Tanmay Rongre. All rights reserved.</span>
          <span>Designed & Built with React, GSAP & Tailwind</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
