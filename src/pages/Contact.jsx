import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BlockyHeart = () => (
  <svg className="w-[4vw] h-[4vw] min-w-7 min-h-7 shrink-0 fill-black inline-block mx-4 lg:mx-8" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

const Contact = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const stripRef = useRef(null)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const emailText = "TANMAYRONGRE2008@GMAIL.COM"

  useGSAP(() => {
    // 1. Header Text Swipe Down Reveal
    gsap.fromTo(
      titleRef.current,
      { y: -70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(
      subtitleRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // 2. Email Strip Tilt Direction on Scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (stripRef.current) {
          const targetRotation = self.direction === 1 ? 3.5 : -3.5
          gsap.to(stripRef.current, {
            rotate: targetRotation,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        }
      }
    })

    // Initial tilt angle
    gsap.set(stripRef.current, { rotate: 3.5 })

    // 3. Form elements entrance
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, { scope: containerRef })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', service: 'Full-Stack Development', message: '' })
      }, 5000)
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tanmayrongre2008@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div
      ref={containerRef}
      className='bg-black text-[#FBF8F3] min-h-screen pb-24 overflow-x-hidden relative select-none'
    >
      {/* Ambient background glow matching Home */}
      <div
        className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#F39A27]/[0.035] blur-[160px] -z-0'
        aria-hidden='true'
      />

      {/* =========================================================================
          HEADER SECTION
          ========================================================================= */}
      <section className='pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14 border-b border-white/[0.08] relative z-10'>
        <div className='max-w-[1800px] mx-auto'>
          
          {/* Top Status & Category Tracker */}
          <div className='flex items-center justify-between pb-4 sm:pb-6 border-b border-white/[0.06] mb-8'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                [ INITIATE COLLABORATION • 2026 ]
              </span>
            </div>

            <div className='hidden sm:flex items-center gap-2 font-[font5] text-[10px] tracking-[0.25em] uppercase text-white/40'>
              <span>VOLUME 03</span>
              <span>/</span>
              <span>DIRECT INQUIRIES</span>
            </div>
          </div>

          {/* Monumental Headline */}
          <div className='overflow-hidden py-1'>
            <h1
              ref={titleRef}
              className='text-5xl sm:text-7xl lg:text-[8.5vw] font-[font3] uppercase tracking-tight leading-[0.9] text-white flex flex-wrap items-baseline gap-x-4 sm:gap-x-6'
            >
              <span>Let&apos;s Build</span>
              <span className='font-[font4] italic text-[#F39A27]'>Together</span>
            </h1>
          </div>

          {/* Subtitle & Response Stats */}
          <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mt-6 sm:mt-8'>
            <p
              ref={subtitleRef}
              className='font-[font4] italic text-base sm:text-xl text-white/70 max-w-xl leading-relaxed'
            >
              *Have an ambitious platform to build, an architectural challenge, or a creative project in mind? Reach out directly.*
            </p>

            {/* Response Badges */}
            <div className='flex flex-wrap items-center gap-6 sm:gap-10 font-[font5] text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/50 border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0'>
              <div>
                <span className='text-white font-semibold font-[font3] text-xl sm:text-2xl text-[#F39A27] mr-2'>
                  &lt;24H
                </span>
                <span>RESPONSE GUARANTEE</span>
              </div>
              <span className='hidden sm:block w-[1px] h-5 bg-white/20' />
              <div>
                <span className='text-white font-semibold font-[font3] text-xl sm:text-2xl text-[#F39A27] mr-2'>
                  GLOBAL
                </span>
                <span>REMOTE & CONTRACT</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FULL-BLEED EXTRA-LARGE TILTED LOOPING EMAIL STRIP (Amber Theme)
          ========================================================================= */}
      <div className='my-8 py-16 sm:py-20 lg:py-24 overflow-hidden w-full relative z-10'>
        <a
          href='mailto:tanmayrongre2008@gmail.com'
          ref={stripRef}
          className='w-[140vw] -ml-[20vw] bg-[#F39A27] text-black py-7 sm:py-9 lg:py-11 border-y-4 border-black cursor-pointer shadow-[0_15px_40px_rgba(243,154,39,0.3)] relative select-none group block no-underline transition-transform will-change-transform'
        >
          {/* White hover fill animation coming from top */}
          <div className='absolute top-0 left-0 w-full h-0 group-hover:h-full bg-white transition-all duration-300 ease-in-out z-0 pointer-events-none' />

          {/* Looping Marquee */}
          <div className='relative z-10 flex whitespace-nowrap moveX'>
            <div className='flex items-center font-[font3] text-4xl sm:text-6xl lg:text-[7.5vw] uppercase tracking-tight shrink-0 leading-none'>
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
            </div>
            <div className='flex items-center font-[font3] text-4xl sm:text-6xl lg:text-[7.5vw] uppercase tracking-tight shrink-0 leading-none'>
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
            </div>
          </div>
        </a>
      </div>

      {/* =========================================================================
          CONTACT FORM & DIRECT REACH SECTION
          ========================================================================= */}
      <div ref={formRef} className='max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-14 pt-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14'>
          
          {/* ---------------- LEFT: Direct Channels & Status ---------------- */}
          <div className='lg:col-span-5 flex flex-col justify-between gap-10 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/[0.015] border border-white/10'>
            <div>
              <div className='inline-flex items-center gap-2 mb-3'>
                <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse' />
                <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                  DIRECT COMMUNICATIONS
                </span>
              </div>
              <h2 className='font-[font3] text-3xl sm:text-4xl uppercase text-white tracking-tight'>
                Start a Conversation
              </h2>
              <p className='font-[font4] italic text-base sm:text-lg text-white/60 mt-2 leading-relaxed'>
                *Whether you need full-stack architecture, high-impact motion engineering, or bespoke technical advisory.*
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className='mt-8 p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col gap-3'>
                <span className='font-[font5] text-[10px] uppercase tracking-[0.2em] text-white/40'>
                  DIRECT EMAIL INBOX
                </span>
                <div className='flex items-center justify-between gap-3'>
                  <a
                    href='mailto:tanmayrongre2008@gmail.com'
                    className='font-[font3] text-lg sm:text-xl text-white hover:text-[#F39A27] transition-colors break-all'
                  >
                    tanmayrongre2008@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className='shrink-0 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#F39A27] hover:text-black font-[font5] text-[10px] uppercase tracking-wider text-white transition-all duration-300 cursor-pointer'
                  >
                    {copied ? 'COPIED!' : 'COPY'}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className='mt-6 flex flex-col gap-3 font-[font5] text-xs sm:text-sm uppercase tracking-[0.18em] text-white/70'>
                <a
                  href='https://github.com/tanmayrongre'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-2'
                >
                  <span>GitHub Repository</span>
                  <span className='text-xs'>↗</span>
                </a>
                <a
                  href='https://www.linkedin.com/in/tanmayrongre'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-2'
                >
                  <span>LinkedIn Network</span>
                  <span className='text-xs'>↗</span>
                </a>
                <a
                  href='https://drive.google.com/file/d/1Rx9B-a1xWv-JIfgRsJS_PI45e3CC1BmN/view?usp=drive_link'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#F39A27] hover:translate-x-1.5 transition-all duration-300 w-fit flex items-center gap-2'
                >
                  <span>Download Curriculum Vitae (PDF)</span>
                  <span className='text-xs'>↗</span>
                </a>
              </div>
            </div>

            {/* Live Availability Pill */}
            <div className='p-4 rounded-2xl bg-[#F39A27]/[0.08] border border-[#F39A27]/30 flex items-center gap-3'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <div className='flex flex-col'>
                <span className='font-[font5] text-[10px] uppercase tracking-[0.2em] text-[#F39A27] font-semibold'>
                  CURRENT AVAILABILITY
                </span>
                <span className='font-[font5] text-xs text-white/80'>
                  Taking on new projects for Q1/Q2 2026
                </span>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT: Interactive Contact Form ---------------- */}
          <div className='lg:col-span-7'>
            {submitted ? (
              <div className='bg-[#0c0c0c] text-white p-8 sm:p-14 rounded-3xl text-center flex flex-col items-center justify-center gap-5 border border-[#F39A27]/40 shadow-[0_20px_60px_rgba(243,154,39,0.15)] h-full min-h-[450px]'>
                <span className='w-16 h-16 rounded-full bg-[#F39A27] text-black flex items-center justify-center text-3xl font-bold shadow-[0_0_25px_rgba(243,154,39,0.5)]'>
                  ✓
                </span>
                <h3 className='font-[font3] text-3xl sm:text-4xl uppercase tracking-tight text-white'>
                  Message Transmitted
                </h3>
                <p className='font-[font4] italic text-base sm:text-lg text-white/70 max-w-md leading-relaxed'>
                  *Thank you for reaching out. I have received your transmission and will review it and respond promptly within 24 hours.*
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-8 sm:gap-10 bg-white/[0.015] p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
              >
                {/* Form Subhead */}
                <div className='border-b border-white/[0.08] pb-6 flex items-center justify-between'>
                  <div>
                    <span className='font-[font5] text-[10px] uppercase tracking-[0.25em] text-[#F39A27] font-semibold block mb-1'>
                      PROJECT INQUIRY FORM
                    </span>
                    <h3 className='font-[font3] text-2xl sm:text-3xl uppercase tracking-tight text-white'>
                      Send A Message
                    </h3>
                  </div>
                  <span className='font-[font5] text-[10px] uppercase tracking-[0.2em] text-white/40 hidden sm:inline'>
                    DIRECT TO INBOX
                  </span>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {/* Name Input */}
                  <div className='flex flex-col gap-2'>
                    <label className='font-[font5] uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-[#F39A27] font-medium'>
                      YOUR NAME *
                    </label>
                    <input
                      type='text'
                      required
                      placeholder='Alex Mercer'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className='border-b border-white/20 focus:border-[#F39A27] py-3 bg-transparent font-[font5] text-base sm:text-lg text-white placeholder:text-white/25 outline-none transition-colors'
                    />
                  </div>

                  {/* Email Input */}
                  <div className='flex flex-col gap-2'>
                    <label className='font-[font5] uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-[#F39A27] font-medium'>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type='email'
                      required
                      placeholder='alex@domain.com'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className='border-b border-white/20 focus:border-[#F39A27] py-3 bg-transparent font-[font5] text-base sm:text-lg text-white placeholder:text-white/25 outline-none transition-colors'
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className='flex flex-col gap-2'>
                  <label className='font-[font5] uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-[#F39A27] font-medium'>
                    PRIMARY DISCIPLINE / INTEREST
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className='border-b border-white/20 focus:border-[#F39A27] py-3 bg-[#0d0d0d] font-[font5] text-sm sm:text-base text-white outline-none transition-colors cursor-pointer'
                  >
                    <option value='Full-Stack Development'>Full-Stack Architecture & MERN</option>
                    <option value='UI/UX Design'>UI/UX Design & High-End Systems</option>
                    <option value='Web Animations'>GSAP 60FPS Animations & Motion</option>
                    <option value='General Inquiry'>General Inquiry & Collaboration</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className='flex flex-col gap-2'>
                  <label className='font-[font5] uppercase text-[10px] sm:text-[11px] tracking-[0.2em] text-[#F39A27] font-medium'>
                    PROJECT DETAILS & TIMELINE *
                  </label>
                  <textarea
                    required
                    rows='4'
                    placeholder='Tell me about your product requirements, scope, target goals, or timeline...'
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className='border-b border-white/20 focus:border-[#F39A27] py-3 bg-transparent font-[font5] text-sm sm:text-base text-white placeholder:text-white/25 outline-none transition-colors resize-none leading-relaxed'
                  />
                </div>

                {/* Submit Button */}
                <div className='pt-2 flex flex-col sm:flex-row items-center justify-between gap-4'>
                  <button
                    type='submit'
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F39A27] text-black font-[font5] uppercase text-xs sm:text-sm font-bold tracking-[0.2em] px-10 py-4 sm:py-5 rounded-full hover:bg-white transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(243,154,39,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                  >
                    <span>TRANSMIT MESSAGE</span>
                    <span className='text-sm'>↗</span>
                  </button>
                  <span className='font-[font5] text-[10px] uppercase tracking-[0.2em] text-white/40 text-center sm:text-right'>
                    CONFIDENTIAL • SECURE TRANSMISSION
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
