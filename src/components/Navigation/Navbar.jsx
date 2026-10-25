import React, { useContext, useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'
import { TransitionContext } from '../common/Stairs'

const Navbar = () => {
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navigateWithTransition = useContext(TransitionContext)
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const location = useLocation()

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

    const isDarkPage = location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/projects' || location.pathname === '/services'

    const handleNavigate = (path) => {
        if (location.pathname === path) return

        if (navigateWithTransition) {
            navigateWithTransition(path)
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
                navOpen ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'
            } ${
                isScrolled
                    ? isDarkPage
                        ? 'bg-black/75 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                        : 'bg-white/80 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className='max-w-[1920px] mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-18 lg:h-20 flex items-center justify-between'>
                
                {/* ================= LEFT: Brand / Monogram Logo ================= */}
                <div
                    onClick={() => handleNavigate('/')}
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
                                stroke={isDarkPage ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)'}
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
                            className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 border ${
                                isDarkPage
                                    ? 'border-white/10 bg-white/[0.03] group-hover:border-[#F39A27]/50 group-hover:bg-[#F39A27]/10'
                                    : 'border-black/10 bg-black/[0.03] group-hover:border-[#F39A27]/50 group-hover:bg-[#F39A27]/10'
                            }`}
                        >
                            <span
                                className={`font-[font3] text-base sm:text-lg tracking-tight transition-colors duration-300 ${
                                    isDarkPage ? 'text-white' : 'text-black'
                                }`}
                            >
                                T<span className='font-[font3] text-[#F39A27]'>R</span>
                            </span>
                        </div>
                    </div>

                    {/* Brand Name & Availability */}
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-2'>
                            <span
                                className={`font-[font5] text-xs sm:text-[13px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 ${
                                    isDarkPage
                                        ? 'text-white group-hover:text-[#F39A27]'
                                        : 'text-black group-hover:text-[#F39A27]'
                                }`}
                            >
                                Tanmay Rongre
                            </span>
                        </div>
                        <div className='hidden sm:flex items-center gap-1.5'>
                            <span className='w-1.5 h-1.5 rounded-full bg-[#F39A27] animate-pulse' />
                            <span
                                className={`font-[font5] text-[9px] tracking-[0.25em] uppercase font-medium ${
                                    isDarkPage ? 'text-white/40' : 'text-black/40'
                                }`}
                            >
                                Creative Technologist
                            </span>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT: Pure Luxury MENU Trigger Button ================= */}
                <div className='flex items-center'>
                    <button
                        id='navbar-menu-btn'
                        onClick={() => setNavOpen(true)}
                        className={`group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 cursor-pointer shadow-sm active:scale-95 ${
                            isDarkPage
                                ? 'border-white/20 bg-white/[0.04] hover:border-[#F39A27] hover:bg-[#F39A27]/10 text-white'
                                : 'border-black/20 bg-black/[0.04] hover:border-[#F39A27] hover:bg-[#F39A27]/10 text-black'
                        }`}
                        aria-label='Open Menu'
                    >
                        <span
                            className={`font-[font5] text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold transition-colors duration-300 group-hover:text-[#F39A27] ${
                                isDarkPage ? 'text-white/90' : 'text-black/90'
                            }`}
                        >
                            Menu
                        </span>

                        {/* Interactive Animated Hamburger Lines */}
                        <div className='flex flex-col items-end justify-center gap-1 w-5'>
                            <span
                                className='h-[1.5px] w-5 rounded-full bg-[#F39A27] transition-all duration-300 group-hover:w-5'
                            />
                            <span
                                className={`h-[1.5px] w-3 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#F39A27] ${
                                    isDarkPage ? 'bg-white' : 'bg-black'
                                }`}
                            />
                        </div>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Navbar