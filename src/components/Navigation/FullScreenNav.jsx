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

            <div ref={fullNavLinksRef} className='relative h-full flex flex-col justify-between p-4 lg:p-6 z-10'>
                {/* Header bar */}
                <div className="navlink opacity-0 flex w-full justify-between items-start">
                    <div>
                        <div className='lg:w-36 w-24'>
                            <h1 className="font-[font2] text-[4vw] tracking-tighter">TR.</h1>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                    </div>
                </div>

                {/* Main Nav Links */}
                <div className='py-2 my-auto'>
                    <div className='link opacity-0 origin-top relative border-t-1 border-white cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/"); }}>
                        <h1 className='font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase'>Home</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>About Me</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>About Me</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link opacity-0 origin-top relative border-t-1 border-white cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/projects"); }}>
                        <h1 className='font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase'>Projets</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>What I made</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>What I made</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link opacity-0 origin-top relative border-t-1 border-white cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/services"); }}>
                        <h1 className='font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase'>Services</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>What i do</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>What i do</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link opacity-0 origin-top relative border-t-1 border-b-1 border-white cursor-pointer' onClick={() => { setNavOpen(false); navigateWithTransition("/contact"); }}>
                        <h1 className='font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-8 pt-3 uppercase'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Lets connect</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Lets connect</h2>
                                <img className='lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Social Links (LinkedIn, GitHub, Resume) */}
                <div className='navfooter opacity-0 flex flex-wrap items-center justify-between border-t border-white/20 pt-4 pb-2 px-2'>
                    <div className='flex items-center gap-6'>
                        <a
                            href='https://www.linkedin.com/in/tanmayrongre'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-[font1] uppercase text-sm lg:text-base tracking-widest text-white/70 hover:text-[#D3FD50] transition-colors flex items-center gap-1.5'
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
                            className='font-[font1] uppercase text-sm lg:text-base tracking-widest text-white/70 hover:text-[#D3FD50] transition-colors flex items-center gap-1.5'
                        >
                            <span>GitHub</span>
                            <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M7 17L17 7M17 7H7M17 7v10' />
                            </svg>
                        </a>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-[font1] uppercase text-sm lg:text-base tracking-widest text-white/70 hover:text-[#D3FD50] transition-colors flex items-center gap-1.5'
                        >
                            <span>Resume</span>
                            <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                <path d='M7 17L17 7M17 7H7M17 7v10' />
                            </svg>
                        </a>
                    </div>

                    <span className='font-mono text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block'>
                        © 2026 Tanmay Rongre
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav