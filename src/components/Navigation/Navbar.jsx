import React, { useContext, useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {
    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const [isVisible, setIsVisible] = useState(true)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isDarkPage = location.pathname === '/' || location.pathname === '/contact' || navOpen

    return (
        <div
            className={`z-50 flex fixed top-0 w-full items-start justify-between transition-all duration-500 ease-in-out ${
                isVisible || navOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
            }`}
        >
            <div className='p-4 lg:p-5'>
                <div className='w-auto'>
                    <h1
                        className={`font-[font2] text-3xl lg:text-[4vw] tracking-tighter transition-colors duration-300 ${
                            isDarkPage ? 'text-white' : 'text-black'
                        }`}
                    >
                        TR.
                    </h1>
                </div>
            </div>
            <div
                onClick={() => {
                    setNavOpen(true)
                }}
                onMouseEnter={() => {
                    if (navGreenRef.current) navGreenRef.current.style.height = '100%'
                }}
                onMouseLeave={() => {
                    if (navGreenRef.current) navGreenRef.current.style.height = '0%'
                }}
                className={`h-12 lg:h-16 relative w-36 lg:w-[16vw] cursor-pointer transition-colors duration-300 ${
                    isDarkPage ? 'bg-white' : 'bg-black'
                }`}
            >
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full px-6 lg:px-12 flex flex-col justify-center items-end gap-1 lg:gap-1.5 z-10'>
                    <div className={`w-10 lg:w-18 h-0.5 transition-colors duration-300 ${isDarkPage ? 'bg-black' : 'bg-white'}`}></div>
                    <div className={`w-6 lg:w-10 h-0.5 transition-colors duration-300 ${isDarkPage ? 'bg-black' : 'bg-white'}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar