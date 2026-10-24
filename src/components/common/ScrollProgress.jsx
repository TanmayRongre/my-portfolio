import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0)
    const location = useLocation()

    useEffect(() => {
        let ticking = false

        const updateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const docHeight = document.documentElement.scrollHeight - window.innerHeight

            if (docHeight <= 0) {
                setProgress(0)
                return
            }

            const current = Math.min(1, Math.max(0, scrollTop / docHeight))
            setProgress(current)
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgress()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)
        
        // Initial check on mount or route change
        updateProgress()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [location.pathname])

    return (
        <div
            className='fixed top-0 left-0 w-full h-[2.5px] sm:h-[3px] z-[100] pointer-events-none overflow-hidden'
            aria-hidden='true'
        >
            <div
                className='h-full w-full bg-[#F39A27] shadow-[0_0_12px_#F39A27,0_0_4px_#F39A27] origin-left will-change-transform transition-transform duration-75 ease-out'
                style={{
                    transform: `scaleX(${progress})`,
                }}
            />
        </div>
    )
}

export default ScrollProgress
