import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { TransitionContext } from '../common/Stairs'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const tlRef = useRef(null) // store active timeline to kill on re-trigger
    const navigateWithTransition = useContext(TransitionContext)

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        // Kill any running timeline before starting
        if (tlRef.current) tlRef.current.kill()
        const tl = gsap.timeline()
        tlRef.current = tl

        tl.to('.fullscreennav', { display: 'block', duration: 0 })
        tl.to('.navlink', { opacity: 0, duration: 0 }) // reset navlink instantly
        tl.to('.link', { opacity: 0, rotateX: 90, duration: 0 }) // reset links instantly
        tl.to('.navfooter', { opacity: 0, y: 20, duration: 0 }) // reset footer instantly
        tl.to('.stairing', {
            height: '100%',
            duration: 0.4,
            ease: 'power3.inOut',
            stagger: { amount: 0.15, from: 'start' }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            duration: 0.3,
            ease: 'power2.out',
            stagger: { amount: 0.2 }
        })
        tl.to('.navlink', { opacity: 1, duration: 0.2 }, '<')
        tl.to('.navfooter', { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.1')
    }

    function gsapAnimationReverse() {
        // Kill any running timeline before starting
        if (tlRef.current) tlRef.current.kill()
        const tl = gsap.timeline()
        tlRef.current = tl

        tl.to('.navfooter', { opacity: 0, y: 15, duration: 0.15 })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            duration: 0.2,
            ease: 'power2.in',
            stagger: { amount: 0.1 }
        }, '<')
        tl.to('.navlink', { opacity: 0, duration: 0.15 }, '<')
        tl.to('.stairing', {
            height: 0,
            duration: 0.35,
            ease: 'power3.inOut',
            stagger: { amount: 0.12, from: 'end' }
        })
        tl.to('.fullscreennav', { display: 'none', duration: 0 })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                </div>
            </div>

            <div ref={fullNavLinksRef} className='relative h-full flex flex-col justify-between p-5 sm:p-8 lg:p-12 z-10'>
                {/* Header bar */}
                <div className="navlink opacity-0 flex w-full justify-between items-center">
                    <div className='flex items-center gap-3 select-none'>
                        <div className='w-10 h-10 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center'>
                            <span className='font-[font3] text-lg tracking-tight text-white'>
                                T<span className='font-[font4] italic text-[#F39A27]'>R</span>
                            </span>
                        </div>
                        <span className='font-[font5] text-xs tracking-[0.25em] uppercase text-white/60'>
                            NAVIGATION
                        </span>
                    </div>

                    <button
                        onClick={() => setNavOpen(false)}
                        className='group flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:border-[#F39A27] hover:bg-[#F39A27]/10 transition-all duration-300 cursor-pointer active:scale-95'
                        aria-label='Close Menu'
                    >
                        <span className='font-[font5] text-xs tracking-[0.22em] uppercase font-semibold text-white/90 group-hover:text-[#F39A27] transition-colors'>
                            Close
                        </span>
                        <div className='relative w-4 h-4 flex items-center justify-center'>
                            <span className='absolute w-4 h-[1.5px] bg-[#F39A27] rotate-45 transition-transform duration-300 group-hover:rotate-[135deg]' />
                            <span className='absolute w-4 h-[1.5px] bg-white -rotate-45 transition-transform duration-300 group-hover:rotate-[45deg] group-hover:bg-[#F39A27]' />
                        </div>
                    </button>
                </div>

                {/* Main Nav Links */}
                <div className='my-auto'>
                    <div className='link opacity-0 origin-top relative border-t border-white/15 cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/"); }}>
                        <h1 className='font-[font3] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.95] lg:pt-6 pt-3 uppercase tracking-tight'>Home</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#F39A27]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>About Me</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>About Me</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link opacity-0 origin-top relative border-t border-white/15 cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/projects"); }}>
                        <h1 className='font-[font3] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.95] lg:pt-6 pt-3 uppercase tracking-tight'>Projects</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#F39A27]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>What I Made</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>What I Made</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link opacity-0 origin-top relative border-t border-white/15 cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/services"); }}>
                        <h1 className='font-[font3] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.95] lg:pt-6 pt-3 uppercase tracking-tight'>Services</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#F39A27]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>What I Do</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>What I Do</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link opacity-0 origin-top relative border-t border-b border-white/15 cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/contact"); }}>
                        <h1 className='font-[font3] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.95] lg:pt-6 pt-3 uppercase tracking-tight'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#F39A27]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>Let's Connect</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font3] lg:text-[6.5vw] text-5xl text-center lg:leading-[0.8] lg:pt-6 pt-3 uppercase tracking-tight'>Let's Connect</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Social Links (LinkedIn, GitHub, Resume) */}
                <div className='navfooter opacity-0 flex flex-wrap items-center justify-between border-t border-white/15 pt-5 pb-2 px-2'>
                    <div className='flex items-center gap-6'>
                        <a
                            href='https://www.linkedin.com/in/tanmayrongre'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-[font5] uppercase text-xs lg:text-sm tracking-[0.2em] text-white/70 hover:text-[#F39A27] transition-colors flex items-center gap-1.5'
                        >
                            <span>LinkedIn</span>
                            <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M7 17L17 7M17 7H7M17 7v10' />
                            </svg>
                        </a>
                        <a
                            href='https://github.com/tanmayrongre'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-[font5] uppercase text-xs lg:text-sm tracking-[0.2em] text-white/70 hover:text-[#F39A27] transition-colors flex items-center gap-1.5'
                        >
                            <span>GitHub</span>
                            <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M7 17L17 7M17 7H7M17 7v10' />
                            </svg>
                        </a>
                        <a
                            href='https://drive.google.com/file/d/1Rx9B-a1xWv-JIfgRsJS_PI45e3CC1BmN/view?usp=drive_link'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-[font5] uppercase text-xs lg:text-sm tracking-[0.2em] text-white/70 hover:text-[#F39A27] transition-colors flex items-center gap-1.5'
                        >
                            <span>Resume</span>
                            <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M7 17L17 7M17 7H7M17 7v10' />
                            </svg>
                        </a>
                    </div>

                    <span className='font-[font5] text-[10px] text-white/40 uppercase tracking-[0.25em] hidden sm:inline-block'>
                        © 2026 Tanmay Rongre • All Rights Reserved
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav