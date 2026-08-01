import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Exporting context so other components can trigger the transition before navigating
export const TransitionContext = createContext()

const Stairs = (props) => {
    const currentPath = useLocation().pathname
    const navigate = useNavigate()
    const overlayRef = useRef(null)
    const pageRef = useRef(null)

    // Function to call when clicking a link
    const navigateWithTransition = (to) => {
        if (to === currentPath) return

        const tl = gsap.timeline({
            onComplete: () => {
                // Once the screen is fully covered by stairs, change the route
                navigate(to)
            }
        })
        
        // 1. Show the stair parent
        tl.set(overlayRef.current, { display: 'block' })
        
        // 2. Stairs slide down to COVER the screen
        tl.fromTo('.stair', 
            { y: '-100%' }, 
            { y: '0%', duration: 0.4, ease: 'power3.inOut', stagger: { amount: 0.15, from: 'start' } }, 
            0
        )
    }

    useGSAP(function () {
        const tl = gsap.timeline()
        
        // Ensure the overlay is visible and page is hidden before animating
        tl.set(overlayRef.current, { display: 'block' })
        tl.set(pageRef.current, { opacity: 0 }) // prevent flash of unstyled content

        // 1. Stairs slide DOWN to reveal the page, while page fades in
        tl.to('.stair', {
            y: '100%',
            duration: 0.5,
            ease: 'power3.inOut',
            stagger: { amount: 0.15, from: 'start' }
        }, 0)
        
        // 2. Fade in the page content in sync with the stair reveal
        tl.to(pageRef.current, {
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out'
        }, 0.1)

        // 3. Hide overlay completely when done
        tl.set(overlayRef.current, { display: 'none' })
        tl.set('.stair', { y: '-100%' }) // Reset for next time
    }, [currentPath])

    return (
        <TransitionContext.Provider value={navigateWithTransition}>
            {/* The Stairs overlay - display is managed entirely by GSAP now */}
            <div 
                ref={overlayRef} 
                className='h-screen w-full fixed z-[100] top-0 left-0 pointer-events-none'
                style={{ display: 'none' }}
            >
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-[#0a0a0a] -translate-y-full'></div>
                    <div className='stair h-full w-1/5 bg-[#0a0a0a] -translate-y-full'></div>
                    <div className='stair h-full w-1/5 bg-[#0a0a0a] -translate-y-full'></div>
                    <div className='stair h-full w-1/5 bg-[#0a0a0a] -translate-y-full'></div>
                    <div className='stair h-full w-1/5 bg-[#0a0a0a] -translate-y-full'></div>
                </div>
            </div>
            
            {/* The page wrapper that scales down/up */}
            <div ref={pageRef} className='origin-center min-h-screen bg-[#0a0a0a]'>
                {props.children}
            </div>
        </TransitionContext.Provider>
    )
}

export default Stairs