import React, { useContext, useRef } from 'react'
import { TransitionContext } from '../common/Stairs'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeBottomText = () => {
  const navigateWithTransition = useContext(TransitionContext)
  const containerRef = useRef(null)
  const paraRef = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Paragraph swipes down into view
    tl.fromTo(
      paraRef.current,
      { y: -60 },
      { y: 0, duration: 0.9, delay: 0.3 }
    )

    // Buttons clip-path swipe left-to-right (0 to 100% width) with y translate
    tl.fromTo(
      btn1Ref.current,
      { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', y: -40 },
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, duration: 0.8 },
      '-=0.5'
    )

    tl.fromTo(
      btn2Ref.current,
      { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', y: -40 },
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, duration: 0.8 },
      '-=0.6'
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='font-[font2] flex items-center justify-center gap-4 px-4'>
      <div className='overflow-hidden absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28 lg:bottom-72'>
        <p ref={paraRef} className='font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm an engineering student and full-stack builder specializing in React, Node.js, and modern web graphics. Crafting interactive digital experiences with a focus on performant, clean architecture.
        </p>
      </div>

      <div
        ref={btn1Ref}
        onClick={() => navigateWithTransition('/projects')}
        className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase cursor-pointer transition-colors duration-300'
      >
        <span className='text-[6vw] lg:mt-6'>Projects</span>
      </div>

      <div
        ref={btn2Ref}
        onClick={() => navigateWithTransition('/services')}
        className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase cursor-pointer transition-colors duration-300'
      >
        <span className='text-[6vw] lg:mt-6'>Services</span>
      </div>
    </div>
  )
}

export default HomeBottomText