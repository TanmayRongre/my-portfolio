import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ProjectDetailModal = ({ project, onClose }) => {
  const modalRef = useRef(null)
  const backdropRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline()

    // 1. Fade backdrop
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: 'power2.out' }
    )

    // 2. Animate modal container scaling up with back.out ease
    tl.fromTo(
      modalRef.current,
      { y: 60, opacity: 0, scale: 0.92 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' },
      '-=0.15'
    )

    // 3. Image reveal zoom out effect
    tl.fromTo(
      imageRef.current,
      { scale: 1.15, filter: 'blur(10px)' },
      { scale: 1, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )

    // 4. Staggered text & button elements reveal
    tl.fromTo(
      contentRef.current.children,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out' },
      '-=0.4'
    )

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        onClose()
      }
    })

    tl.to(modalRef.current, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 0.25,
      ease: 'power2.in'
    })
    tl.to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.in'
    }, '-=0.15')
  }

  if (!project) return null

  return (
    <div className='fixed inset-0 z-[999] flex items-center justify-center p-4 lg:p-8 overflow-y-auto'>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className='fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer'
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className='relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] text-[#FBF8F3] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-white/15 my-auto'
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-[#F39A27] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20'
          aria-label='Close modal'
        >
          <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'>
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>

        {/* Browser Mockup Top Bar */}
        <div className='flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-white/[0.08]'>
          <span className='w-3 h-3 rounded-full bg-[#ff5f57]' />
          <span className='w-3 h-3 rounded-full bg-[#febc2e]' />
          <span className='w-3 h-3 rounded-full bg-[#28c840]' />
          <div className='flex-1 mx-4 bg-white/[0.03] border border-white/[0.06] rounded-full py-1 px-4 text-center'>
            <span className='text-xs text-[#aaa] font-mono truncate block'>
              {project.link || 'https://k72.ca'}
            </span>
          </div>
        </div>

        {/* Hero Photo Section (16:9) */}
        <div className='relative w-full aspect-video overflow-hidden bg-black'>
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover object-top'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80' />
        </div>

        {/* Details & Action Content */}
        <div ref={contentRef} className='p-6 lg:p-10 flex flex-col gap-6 -mt-8 relative z-10'>
          
          {/* Tags */}
          {project.tags && (
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className='text-[10px] sm:text-[11px] uppercase font-[font5] tracking-[0.2em] text-[#F39A27] bg-[#F39A27]/10 border border-[#F39A27]/25 px-3 py-1 rounded-full font-medium'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <div>
            <h2 className='font-[font3] lg:text-5xl text-3xl uppercase tracking-tight text-white'>
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <p className='text-white/70 font-[font5] text-sm sm:text-base leading-relaxed max-w-3xl'>
            {project.description || 'An interactive web experience engineered with modern performance and design standards.'}
          </p>

          {/* Buttons: GitHub & Deployment */}
          <div className='flex flex-wrap items-center gap-4 pt-2'>
            
            {/* Live Deployment Button */}
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-[#F39A27] text-black font-[font5] uppercase text-xs sm:text-sm font-semibold tracking-[0.15em] px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(243,154,39,0.3)]'
            >
              <span>Live Demo</span>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                <path d='M7 17L17 7M17 7H7M17 7v10' />
              </svg>
            </a>

            {/* GitHub Repo Button */}
            <a
              href={project.github || `https://github.com/tanmayrongre`}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.12] text-white font-[font5] uppercase text-xs sm:text-sm font-semibold tracking-[0.15em] px-8 py-4 rounded-full border border-white/15 hover:border-[#F39A27]/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]'
            >
              <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
                <path fillRule='evenodd' clipRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
              </svg>
              <span>GitHub Code</span>
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProjectDetailModal
