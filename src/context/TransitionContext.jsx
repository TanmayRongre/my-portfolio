import React, { createContext, useRef, useContext } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

export const TransitionContext = createContext()

export const TransitionProvider = ({ children }) => {
    const overlayRef = useRef(null)
    const navigate = useNavigate()

    // Called by any component that wants an animated page change
    function navigateTo(path) {
        const strips = overlayRef.current?.querySelectorAll('.pt-strip')
        if (!strips) { navigate(path); return }

        const tl = gsap.timeline()

        // 1. Show overlay instantly
        tl.set(overlayRef.current, { display: 'flex' })
        tl.set(strips, { scaleY: 0, transformOrigin: 'bottom center' })

        // 2. Strips sweep IN (bottom → top)
        tl.to(strips, {
            scaleY: 1,
            duration: 0.35,
            ease: 'power3.inOut',
            stagger: { amount: 0.1, from: 'start' }
        })

        // 3. Navigate while screen is covered
        tl.call(() => navigate(path))

        // 4. Small hold so new page loads under the strips
        tl.to({}, { duration: 0.08 })

        // 5. Strips sweep OUT (top → bottom)
        tl.set(strips, { transformOrigin: 'top center' })
        tl.to(strips, {
            scaleY: 0,
            duration: 0.35,
            ease: 'power3.inOut',
            stagger: { amount: 0.1, from: 'end' }
        })

        // 6. Hide overlay
        tl.set(overlayRef.current, { display: 'none' })
    }

    return (
        <TransitionContext.Provider value={{ navigateTo }}>
            {/* Page transition overlay — fixed, above everything */}
            <div
                ref={overlayRef}
                className='fixed inset-0 z-[9999] hidden pointer-events-none'
                style={{ display: 'none' }}
            >
                {[0, 1, 2, 3, 4].map(i => (
                    <div
                        key={i}
                        className='pt-strip flex-1 h-full bg-[#0a0a0a]'
                        style={{ transformOrigin: 'bottom center', transform: 'scaleY(0)' }}
                    />
                ))}
            </div>
            {children}
        </TransitionContext.Provider>
    )
}

// Convenience hook
export const useTransition = () => useContext(TransitionContext)
