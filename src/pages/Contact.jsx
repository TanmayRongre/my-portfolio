import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BlockyHeart = () => (
  <svg className="w-[5vw] h-[5vw] min-w-8 min-h-8 shrink-0 fill-black inline-block mx-4 lg:mx-8" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

const Contact = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const stripRef = useRef(null)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const emailText = "TANMAYRONGRE2008@GMAIL.COM"

  useGSAP(() => {
    // 1. Header Text Swipe Down Reveal
    gsap.fromTo(
      titleRef.current,
      { y: -90 },
      {
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // 2. Email Strip Tilt Direction on Scroll
    // Scrolling DOWN -> Tilt right down (+3.5deg)
    // Scrolling UP -> Tilt left down (-3.5deg)
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
      { y: 60, opacity: 0 },
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
      }, 4000)
    }
  }

  return (
    <div ref={containerRef} className='bg-black text-white min-h-screen pb-24 overflow-x-hidden'>
      
      {/* Header section */}
      <div className='pt-[35vh] pb-8 px-6 lg:px-16 overflow-hidden'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-6'>
          <div className='overflow-hidden'>
            <h1 ref={titleRef} className='font-[font2] lg:text-[14vw] text-7xl uppercase leading-none tracking-tight text-white'>
              LET'S TALK
            </h1>
          </div>
        </div>
      </div>

      {/* Full-Bleed Extra-Large Tilted Looping Email Strip */}
      <div className='my-8 py-20 lg:py-28 overflow-hidden w-full'>
        <a
          href='mailto:tanmayrongre2008@gmail.com'
          ref={stripRef}
          className='w-[140vw] -ml-[20vw] bg-[#D3FD50] text-black py-8 lg:py-12 border-y-4 border-black cursor-pointer shadow-2xl relative select-none group block no-underline'
        >
          {/* White hover fill animation coming from top */}
          <div className='absolute top-0 left-0 w-full h-0 group-hover:h-full bg-white transition-all duration-300 ease-in-out z-0 pointer-events-none' />

          {/* Looping Marquee with Black Blocky Hearts */}
          <div className='relative z-10 flex whitespace-nowrap moveX'>
            <div className='flex items-center font-[font2] text-5xl lg:text-[9vw] uppercase tracking-tighter shrink-0 leading-none'>
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
              <span>{emailText}</span>
              <BlockyHeart />
            </div>
            <div className='flex items-center font-[font2] text-5xl lg:text-[9vw] uppercase tracking-tighter shrink-0 leading-none'>
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

      {/* Dark Mode Contact Form Section */}
      <div ref={formRef} className='max-w-4xl mx-auto px-6 pt-12'>
        <div className='border-t border-white/20 pt-10 mb-10 text-center'>
          <h2 className='font-[font2] text-4xl lg:text-6xl uppercase mb-3'>SEND A MESSAGE</h2>
          <p className='font-[font1] text-white/50 uppercase text-xs tracking-[0.2em]'>Drop your details below</p>
        </div>

        {submitted ? (
          <div className='bg-[#161616] text-white p-8 lg:p-14 rounded-3xl text-center flex flex-col items-center justify-center gap-4 border border-white/10'>
            <span className='w-16 h-16 rounded-full bg-[#D3FD50] text-black flex items-center justify-center text-3xl font-bold'>
              ✓
            </span>
            <h3 className='font-[font2] text-4xl uppercase'>MESSAGE SENT!</h3>
            <p className='font-[font1] text-white/70 max-w-md text-base'>
              Thank you for reaching out. I'll respond as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-10 bg-[#111111] p-8 lg:p-12 rounded-3xl border border-white/10 shadow-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Name Input */}
              <div className='flex flex-col gap-3'>
                <label className='font-[font1] uppercase text-xs tracking-widest text-white/60'>Your Name *</label>
                <input
                  type='text'
                  required
                  placeholder='John Doe'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='border-b-2 border-white/20 py-3 bg-transparent font-[font1] text-lg lg:text-xl text-white focus:border-[#D3FD50] outline-none transition-colors'
                />
              </div>

              {/* Email Input */}
              <div className='flex flex-col gap-3'>
                <label className='font-[font1] uppercase text-xs tracking-widest text-white/60'>Your Email *</label>
                <input
                  type='email'
                  required
                  placeholder='john@example.com'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='border-b-2 border-white/20 py-3 bg-transparent font-[font1] text-lg lg:text-xl text-white focus:border-[#D3FD50] outline-none transition-colors'
                />
              </div>
            </div>

            {/* Service Select */}
            <div className='flex flex-col gap-3'>
              <label className='font-[font1] uppercase text-xs tracking-widest text-white/60'>Interest / Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className='border-b-2 border-white/20 py-3 bg-[#111111] font-[font1] text-lg lg:text-xl text-white focus:border-[#D3FD50] outline-none transition-colors cursor-pointer'
              >
                <option value='Full-Stack Development'>Full-Stack Development</option>
                <option value='UI/UX Design'>UI/UX Design & Architecture</option>
                <option value='Web Animations'>Web Animations & Motion</option>
                <option value='General Inquiry'>General Inquiry / Collaboration</option>
              </select>
            </div>

            {/* Message Input */}
            <div className='flex flex-col gap-3'>
              <label className='font-[font1] uppercase text-xs tracking-widest text-white/60'>Your Message *</label>
              <textarea
                required
                rows='5'
                placeholder='Tell me about your project or inquiry...'
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className='border-b-2 border-white/20 py-3 bg-transparent font-[font1] text-lg lg:text-xl text-white focus:border-[#D3FD50] outline-none transition-colors resize-none'
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='group mt-4 self-center lg:self-start inline-flex items-center gap-4 bg-[#D3FD50] text-black font-[font1] uppercase text-base lg:text-lg font-bold tracking-wider px-10 py-5 rounded-full hover:bg-white transition-all duration-300 cursor-pointer shadow-xl'
            >
              <span>SEND MESSAGE</span>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                <path d='M7 17L17 7M17 7H7M17 7v10' />
              </svg>
            </button>
          </form>
        )}
      </div>

    </div>
  )
}

export default Contact
