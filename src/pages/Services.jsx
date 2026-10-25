import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const containerRef = useRef(null)
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const titleTextRef = useRef(null)
  const paraTextRef = useRef(null)

  const imageArray = [
    '/tech/cpp.png',
    '/tech/react.png',
    '/tech/node.png',
    '/tech/java.svg',
    '/tech/mongodb.png',
    '/tech/html5.png',
    '/tech/css3.svg',
    '/tech/tailwind.png'
  ]

  const serviceList = [
    {
      num: '01',
      title: 'Full-Stack Web Architecture',
      subtitle: 'Scalable Systems from Database to DOM',
      desc: 'Specializing in robust MERN stack applications with clean RESTful APIs, optimized database schemas, secure authentication, and resilient server-side architectures engineered for high traffic and low latency.',
      tags: ['Node.js', 'Express', 'MongoDB', 'React', 'REST APIs', 'JWT'],
      img: '/services/fullstack.jpg'
    },
    {
      num: '02',
      title: 'UI/UX & Design Precision',
      subtitle: 'Bespoke Visual Systems & Hierarchy',
      desc: 'Harmonizing high-contrast typography, tailored dark aesthetics, subtle glassmorphic depth, and responsive layouts that look museum-grade on every device display, from mobile to ultra-wide displays.',
      tags: ['Editorial Typography', 'Responsive Design', 'Color Systems', 'Accessibility', 'Figma'],
      img: '/services/uiux.jpg'
    },
    {
      num: '03',
      title: 'Creative Motion & GSAP Interaction',
      subtitle: 'Liquid 60FPS Storytelling',
      desc: 'Engineering award-worthy scroll interactions, physics-driven micro-animations, canvas particle disintegration effects, and fluid transitions that captivate users without compromising hardware performance.',
      tags: ['GSAP', 'ScrollTrigger', 'Lenis Smooth Scroll', 'Canvas Particles', 'Micro-Interactions'],
      img: '/services/motion.jpg'
    }
  ]

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'GSAP', category: 'Animation' },
    { name: 'Lenis', category: 'Smooth Scroll' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'JavaScript (ES6+)', category: 'Core Language' },
    { name: 'C++', category: 'Foundations' },
    { name: 'Java', category: 'Object Oriented' },
    { name: 'HTML5 & CSS3', category: 'Standards' },
    { name: 'REST APIs', category: 'Architecture' },
    { name: 'Git & GitHub', category: 'DevOps' },
    { name: 'Vercel', category: 'Deployment' },
  ]

  // Eagerly preload and decode all service & tech images on mount
  useEffect(() => {
    const allImages = [...imageArray, '/services/fullstack.jpg', '/services/uiux.jpg', '/services/motion.jpg']
    allImages.forEach((src) => {
      const img = new Image()
      img.src = src
      if (img.decode) {
        img.decode().catch(() => {})
      }
    })
  }, [])

  useGSAP(function () {
    // 1. Photo card left-to-right clipPath reveal
    gsap.fromTo(imageDivRef.current,
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        opacity: 1,
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    // 2. Text swipe down animation
    gsap.fromTo(titleTextRef.current,
      {
        y: -70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleTextRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    gsap.fromTo(paraTextRef.current,
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paraTextRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    // 3. Pinned image cycling through tech logos on scroll
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 24%',
        end: 'top -60%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      }
    })

    // 4. Reveal Service Cards: ClipPath swipe + Text reveal
    const cardElems = gsap.utils.toArray('.service-card')
    cardElems.forEach((card) => {
      const cardImg = card.querySelector('.service-card-img')
      const cardText = card.querySelector('.service-card-text')

      if (cardImg) {
        gsap.fromTo(cardImg,
          {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            opacity: 1,
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

      if (cardText) {
        gsap.fromTo(cardText,
          {
            y: -35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }
    })

  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className='bg-black text-[#FBF8F3] min-h-screen relative overflow-x-hidden select-none'
    >
      {/* Ambient background glow matching Home */}
      <div
        className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#F39A27]/[0.035] blur-[160px] -z-0'
        aria-hidden='true'
      />

      {/* =========================================================================
          SECTION 1: HERO & PINNED TECH CARD
          ========================================================================= */}
      <div ref={section1Ref} className="section1 relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-8 lg:px-14 border-b border-white/[0.08]">
        
        {/* Pinned Swiping Tech Logo Card */}
        <div
          ref={imageDivRef}
          className="w-[46vw] h-[60vw] sm:w-[28vw] sm:h-[38vw] md:w-[20vw] md:h-[26vw] lg:w-[14vw] lg:h-[18vw] absolute top-[8vw] sm:top-[6vw] left-[27vw] sm:left-[36vw] md:left-[40vw] lg:left-[33vw] bg-[#0d0d0d] border border-white/15 flex justify-center items-center rounded-3xl p-6 sm:p-7 z-0 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden pointer-events-none"
        >
          {/* Subtle amber ambient ring inside pinned card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F39A27]/10 via-transparent to-transparent pointer-events-none" />
          
          <img
            ref={imageRef}
            src={imageArray[0]}
            alt="Core Technology Stack"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-contain pointer-events-none relative z-10 filter drop-shadow-[0_0_15px_rgba(243,154,39,0.25)]"
          />
        </div>

        {/* Hero Content positioned in front */}
        <div className="relative z-10 max-w-[1800px] mx-auto">
          
          {/* Top Status & Category Tracker */}
          <div className='flex items-center justify-between pb-4 sm:pb-6 border-b border-white/[0.06] mb-8'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                [ CAPABILITIES & DISCIPLINES • 2026 ]
              </span>
            </div>

            <div className='hidden sm:flex items-center gap-2 font-[font5] text-[10px] tracking-[0.25em] uppercase text-white/40'>
              <span>VOLUME 02</span>
              <span>/</span>
              <span>TECHNICAL ARSENAL</span>
            </div>
          </div>

          <div className='flex items-center flex-col mt-[18vh] sm:mt-[22vh] lg:mt-[24vh] justify-center text-center'>
            
            {/* Monumental Title */}
            <div
              ref={titleTextRef}
              className="font-[font3] uppercase text-5xl sm:text-7xl lg:text-[8vw] leading-[0.95] tracking-tight text-white flex flex-col items-center gap-1 sm:gap-3"
            >
              <span>What I Build</span>
              <span className="font-[font4] italic text-[#F39A27]">
                & Engineer
              </span>
            </div>

            {/* Philosophy Lead */}
            <div ref={paraTextRef} className="max-w-3xl mt-8 sm:mt-10 px-4">
              <p className='font-[font4] italic text-lg sm:text-2xl lg:text-3xl text-white/80 leading-relaxed'>
                *I craft seamless, high-performance digital experiences that look sharp, feel alive, and run with architectural resilience.*
              </p>
              <p className='font-[font5] text-xs sm:text-sm text-white/50 tracking-wider uppercase mt-4'>
                MERN STACK ARCHITECTURE • GSAP 60FPS MOTION • BESPOKE DESIGN SYSTEMS
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          SECTION 2: SERVICES BREAKDOWN
          ========================================================================= */}
      <section ref={section2Ref} className="section2 px-4 sm:px-8 lg:px-14 py-20 sm:py-28 relative z-10">
        <div className="max-w-[1800px] mx-auto">
          
          {/* Section Subhead */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 border-b border-white/[0.08] mb-14 sm:mb-20">
            <div>
              <div className='inline-flex items-center gap-2 mb-2'>
                <span className='w-2 h-2 rounded-full bg-[#F39A27]' />
                <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                  CORE SPECIALIZATIONS
                </span>
              </div>
              <h2 className='font-[font3] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white'>
                Full Cycle Capabilities
              </h2>
            </div>
            
            <p className='font-[font4] italic text-base sm:text-lg text-white/60 max-w-md'>
              *From initial database architecture to fine-tuned GPU-accelerated web interactions.*
            </p>
          </div>

          {/* Service Cards Stack */}
          <div className="flex flex-col gap-10 sm:gap-14">
            {serviceList.map((item, idx) => (
              <div
                key={idx}
                className="service-card group relative bg-white/[0.015] border border-white/10 hover:border-[#F39A27]/60 rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(243,154,39,0.12)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Photo Card with clipPath swipe reveal */}
                  <div className="service-card-img lg:col-span-5 w-full h-[240px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/10 relative order-2 lg:order-1">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Text Content */}
                  <div className="service-card-text lg:col-span-7 flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
                    
                    {/* Number & Subtitle */}
                    <div className="flex items-center gap-3">
                      <span className="font-[font3] text-3xl sm:text-4xl text-[#F39A27] font-bold">
                        {item.num}
                      </span>
                      <span className="font-[font5] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40">
                        / SPECIALIZATION
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-[font3] text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight tracking-tight text-white group-hover:text-[#F39A27] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-[font4] italic text-base sm:text-lg text-white/80">
                      {item.subtitle}
                    </p>

                    {/* Detailed Description */}
                    <p className="font-[font5] text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] sm:text-[11px] uppercase font-[font5] tracking-[0.2em] text-[#F39A27] bg-[#F39A27]/10 border border-[#F39A27]/25 rounded-full px-3 py-1 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TECHNICAL ARSENAL GRID
          ========================================================================= */}
      <section className="px-4 sm:px-8 lg:px-14 py-20 border-t border-white/[0.08] bg-[#050505] relative z-10">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 pb-6 border-b border-white/[0.08]">
            <div>
              <div className='inline-flex items-center gap-2 mb-2'>
                <span className='w-2 h-2 rounded-full bg-[#F39A27]' />
                <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                  STACK MATRIX
                </span>
              </div>
              <h2 className='font-[font3] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white'>
                Technical Stack & Tools
              </h2>
            </div>
            <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/40'>
              MODERN PRODUCTION TOOLING
            </span>
          </div>

          {/* Grid of Tech Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#F39A27]/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3 transition-all duration-300 group cursor-default"
              >
                <span className="font-[font5] text-[9px] uppercase tracking-[0.25em] text-white/40 group-hover:text-[#F39A27] transition-colors">
                  {tech.category}
                </span>
                <span className="font-[font3] text-lg sm:text-xl uppercase text-white tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: BOTTOM COLLABORATION CTA (Matching Home Theme)
          ========================================================================= */}
      <section className='py-20 sm:py-28 px-4 sm:px-8 lg:px-14 border-t border-white/[0.08] bg-black relative z-10'>
        <div className='max-w-[1800px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8'>
          <div>
            <div className='inline-flex items-center gap-2 mb-3'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse' />
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#F39A27]'>
                LET&apos;S ENGINEER TOGETHER
              </span>
            </div>
            <h2 className='font-[font3] text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight'>
              Ready to start your project?
            </h2>
            <p className='font-[font4] italic text-base sm:text-lg text-white/60 mt-2 max-w-lg'>
              *Available for freelance contracts, full-stack architectural builds, and technical consultancies.*
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              to='/contact'
              className='inline-flex items-center gap-3 bg-[#F39A27] text-black font-[font5] text-xs sm:text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(243,154,39,0.3)]'
            >
              <span>Initiate Contact</span>
              <span className='text-sm'>↗</span>
            </Link>
            <Link
              to='/projects'
              className='inline-flex items-center gap-2 text-white/70 hover:text-[#F39A27] font-[font5] text-xs sm:text-sm tracking-[0.15em] uppercase px-5 py-4 transition-colors'
            >
              <span>View Selected Works</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
