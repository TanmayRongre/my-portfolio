import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

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
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/960px-ISO_C%2B%2B_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png?_=20170401104355",
    "https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png",
    "https://staging.svgrepo.com/show/331488/mongodb.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1280px-HTML5_Badge.svg.png",
    "https://images.icon-icons.com/2107/PNG/512/file_type_css_icon_130661.png",
    "https://static.vecteezy.com/system/resources/previews/067/565/433/non_2x/tailwind-css-logo-rounded-free-png.png"
  ]

  const serviceList = [
    {
      num: '01',
      title: 'Full-Stack Web Development',
      desc: 'Building scalable MERN stack web applications with clean architecture, robust API integrations, and fast server performance.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      num: '02',
      title: 'UI/UX & Interactive Design',
      desc: 'Crafting modern, fluid user interfaces with micro-interactions, responsive layouts, and rich aesthetic visual systems.',
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop'
    },
    {
      num: '03',
      title: 'GSAP Animations & Motion Graphics',
      desc: 'Engineering scroll-triggered storytelling, high-fps web animations, and interactive web elements that elevate brand identity.',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
    }
  ]

  useGSAP(function () {

    // 1. Photo card left-to-right clipPath reveal (picture inside remains fixed & still)
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

    // 2. Text swipe down animation (y: -70 -> 0)
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
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    )

    gsap.fromTo(paraTextRef.current,
      {
        y: -50,
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
        start: 'top 28%',
        end: 'top -70%',
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

    // 4. Reveal Service Cards: ClipPath swipe (left to right) + Text swipe down
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
            y: -40,
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

    // 5. Instant dark mode fade transition when hitting section2 threshold
    gsap.to(containerRef.current, {
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      duration: 0.4,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: section2Ref.current,
        start: 'top 55%',
        toggleActions: 'play reverse play reverse',
      }
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='bg-white text-black min-h-screen transition-colors duration-500'>

      {/* Section 1: Hero */}
      <div ref={section1Ref} className="section1 py-1 relative">

        {/* Swiping Photo Card (clip-path reveal left to right, picture inside stays fixed) */}
        <div
          ref={imageDivRef}
          className="w-[52vw] h-[68vw] sm:w-[32vw] sm:h-[42vw] md:w-[22vw] md:h-[30vw] lg:w-[15vw] lg:h-[20vw] absolute top-[12vw] left-[24vw] sm:top-[10vw] sm:left-[34vw] md:left-[39vw] lg:left-[30vw] bg-gray-700 flex justify-center items-center rounded-2xl sm:rounded-3xl p-4 sm:p-5 z-0 shadow-xl overflow-hidden pointer-events-none opacity-90"
        >
          <img
            ref={imageRef}
            src={imageArray[0]}
            alt="Tech Logo"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        {/* Text Container sitting IN FRONT of photo card */}
        <div className="relative z-10 font-[font2]">
          <div className='flex items-center flex-col mt-[55vh] justify-center px-4'>

            {/* Title Text Swiping Down */}
            <div ref={titleTextRef} className="uppercase text-[13vw] text-center leading-[15vw]">
              What can i do <br /> for you
            </div>

            {/* Paragraph Text Swiping Down */}
            <div ref={paraTextRef} className="lg:pl-[40%] mt-20 px-6">
              <p className='lg:text-4xl text-2xl leading-relaxed font-[font1]'>
                I craft seamless, high-performance digital experiences that look sharp and run efficiently. Whether building complete MERN stack applications, designing intuitive user interfaces, or optimizing code logic, every build is engineered with precision.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Section 2: Services Breakdown */}
      <div ref={section2Ref} className="section2 min-h-screen px-6 lg:px-16 py-32 relative z-10">
        <h3 className="text-sm font-mono uppercase tracking-[0.3em] opacity-60 mb-12">
          [ Capabilities & Expertise ]
        </h3>

        <div className="flex flex-col gap-20">
          {serviceList.map((item, idx) => (
            <div
              key={idx}
              className="service-card border-t border-current/20 pt-8 flex flex-col lg:flex-row gap-8 items-start justify-between"
            >
              {/* Photo Card with clipPath swipe reveal (picture stays 100% fixed) */}
              <div className="service-card-img lg:w-1/3 w-full h-[220px] sm:h-[260px] lg:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-800 shadow-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text with swipe down animation */}
              <div className="service-card-text lg:w-3/5 w-full flex flex-col gap-4">
                <span className="text-xl font-mono opacity-50">{item.num}</span>
                <h4 className="font-[font2] text-4xl lg:text-5xl uppercase leading-tight">
                  {item.title}
                </h4>
                <p className="font-[font1] text-lg lg:text-xl opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Services