import React, { useContext, useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'
import { TransitionContext } from '../common/Stairs'

const Navbar = () => {
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navigateWithTransition = useContext(TransitionContext)
    const [isVisible, setIsVisible] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const lastScrollY = useRef(0)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Activate glassmorphism blur once past initial scroll
            if (currentScrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            // Directional hide / show logic
            if (currentScrollY < 60) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY.current + 8) {
                // Scrolling down -> hide
                setIsVisible(false)
            } else if (currentScrollY < lastScrollY.current - 8) {
                // Scrolling up -> reveal
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isDarkPage = location.pathname === '/' || location.pathname === '/contact'

    const handleNavigate = (path) => {
        if (location.pathname === path) return

        if (navigateWithTransition) {
            navigateWithTransition(path)
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
                navOpen ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
            } ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
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
                    {/* Monogram Badge */}
                    <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                            isDarkPage
                                ? 'border-white/15 bg-white/[0.03] group-hover:border-[#F39A27] group-hover:bg-[#F39A27]/10'
                                : 'border-black/15 bg-black/[0.03] group-hover:border-[#F39A27] group-hover:bg-[#F39A27]/10'
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