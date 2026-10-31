import React, { useRef, useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TransitionContext } from '../common/Stairs'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()
    const navigateWithTransition = useContext(TransitionContext)

    const isHomePage = location.pathname === '/'

    useEffect(() => {
        let ticking = false

        const updateScrollAndProgress = () => {
            const currentScrollY = window.scrollY || document.documentElement.scrollTop
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentScrollY / docHeight)) : 0
            setScrollProgress(progress)

            // Activate glassmorphism blur once past initial scroll
            if (currentScrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollAndProgress)
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)
        updateScrollAndProgress()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentScrollY = window.scrollY || document.documentElement.scrollTop
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentScrollY / docHeight)) : 0
            setScrollProgress(progress)
        }, 80)
        return () => clearTimeout(timer)
    }, [location.pathname])

    const scrollToTop = () => {
        if (location.pathname !== '/') {
            if (navigateWithTransition) {
                navigateWithTransition('/')
            } else {
                navigate('/')
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const scrollToSection = (id) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToContact = () => {
        if (isHomePage) {
            scrollToSection('contact')
        } else if (navigateWithTransition) {
            navigateWithTransition('/contact')
        } else {
            navigate('/contact')
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
                isScrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className='relative max-w-[1920px] mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-18 lg:h-20 flex items-center justify-between'>
                
                {/* ================= LEFT: Brand / Monogram Logo ================= */}
                <div
                    onClick={scrollToTop}
                    className='group flex items-center gap-3 cursor-pointer select-none'
                >
                    {/* Monogram Badge with Circular Scroll Progress Rim */}
                    <div className='relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0'>
                        {/* SVG Circular Scroll Progress Rim */}
                        <svg
                            className='absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)] -rotate-90 pointer-events-none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'
                        >
                            {/* Inactive Background Track Rim */}
                            <circle
                                cx='24'
                                cy='24'
                                r='21.5'
                                fill='none'
                                stroke='rgba(255, 255, 255, 0.12)'
                                strokeWidth='2'
                            />
                            {/* Active Amber Scroll Progress Rim */}
                            <circle
                                cx='24'
                                cy='24'
                                r='21.5'
                                fill='none'
                                stroke='#F39A27'
                                strokeWidth='2.2'
                                strokeLinecap='round'
                                strokeDasharray={135.09}
                                strokeDashoffset={135.09 * (1 - scrollProgress)}
                                className='transition-[stroke-dashoffset] duration-100 ease-out'
                                style={{
                                    filter: scrollProgress > 0.005 ? 'drop-shadow(0 0 4px rgba(243, 154, 39, 0.7))' : 'none',
                                }}
                            />
                        </svg>

                        {/* Monogram Core */}
                        <div
                            className='w-full h-full rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 bg-white/[0.03] group-hover:border-[#F39A27]/50 group-hover:bg-[#F39A27]/10'
                        >
                            <span className='font-[font3] text-base sm:text-lg tracking-tight transition-colors duration-300 text-white'>
                                T<span className='font-[font3] text-[#F39A27]'>R</span>
                            </span>
                        </div>
                    </div>

                    {/* Brand Name & Availability */}
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-2'>
                            <span className='font-[font5] text-xs sm:text-[13px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 text-white group-hover:text-[#F39A27]'>
                                Tanmay Rongre
                            </span>
                        </div>
                        <div className='hidden sm:flex items-center gap-1.5'>
                            <span className='font-[font5] text-[9px] tracking-[0.2em] uppercase font-medium text-[#F39A27]'>
                                AI-Assisted Workflow · Hands-on Coding
                            </span>
                        </div>
                    </div>
                </div>

                {/* ================= CENTER: # Navigation Anchors (Home page ONLY - Perfectly Centered) ================= */}
                {isHomePage && (
                    <nav className='hidden md:flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-inner absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10'>
                        <button
                            onClick={() => scrollToSection('home')}
                            className='group px-3 py-1 rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all font-[font5] text-[11px] sm:text-xs tracking-[0.18em] uppercase cursor-pointer'
                        >
                            <span className='text-[#F39A27] transition-colors group-hover:text-white mr-0.5'>#</span>home
                        </button>
                        <button
                            onClick={() => scrollToSection('selected-works')}
                            className='group px-3 py-1 rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all font-[font5] text-[11px] sm:text-xs tracking-[0.18em] uppercase cursor-pointer'
                        >
                            <span className='text-[#F39A27] transition-colors group-hover:text-white mr-0.5'>#</span>works
                        </button>
                        <button
                            onClick={() => scrollToSection('method')}
                            className='group px-3 py-1 rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all font-[font5] text-[11px] sm:text-xs tracking-[0.18em] uppercase cursor-pointer'
                        >
                            <span className='text-[#F39A27] transition-colors group-hover:text-white mr-0.5'>#</span>method
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className='group px-3 py-1 rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all font-[font5] text-[11px] sm:text-xs tracking-[0.18em] uppercase cursor-pointer'
                        >
                            <span className='text-[#F39A27] transition-colors group-hover:text-white mr-0.5'>#</span>skills
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='group px-3 py-1 rounded-full text-white/60 hover:text-white hover:bg-white/[0.06] transition-all font-[font5] text-[11px] sm:text-xs tracking-[0.18em] uppercase cursor-pointer'
                        >
                            <span className='text-[#F39A27] transition-colors group-hover:text-white mr-0.5'>#</span>contact
                        </button>
                    </nav>
                )}

                {/* ================= RIGHT: Get in Touch Action CTA ================= */}
                <div className='flex items-center'>
                    <button
                        onClick={scrollToContact}
                        className='group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:border-[#F39A27] hover:bg-[#F39A27]/10 text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95'
                        aria-label='Contact'
                    >
                        <span className='font-[font5] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-300 group-hover:text-[#F39A27] text-white/90'>
                            Get In Touch
                        </span>
                        <span className='text-[#F39A27] text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>↗</span>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Navbar
