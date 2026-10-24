import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

const Loader = () => {
    const loaderRef = useRef(null)
    const counterRef = useRef(null)
    const labelRef = useRef(null)
    const logoRef = useRef(null)
    const contentRef = useRef(null)
    const stripsRef = useRef([])
    const [loaded, setLoaded] = useState(false)

    // 1. Lock body scroll during loading
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleLoad = () => setTimeout(() => setLoaded(true), 200)

        if (document.readyState === 'complete') {
            setTimeout(() => setLoaded(true), 300)
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => window.removeEventListener('load', handleLoad)
    }, [])

    // 2. Animate counter
    useEffect(() => {
        let count = 0
        const interval = setInterval(() => {
            if (loaded) {
                if (counterRef.current) counterRef.current.textContent = '100'
                clearInterval(interval)
            } else {
                count = Math.min(count + Math.floor(Math.random() * 8 + 1), 94)
                if (counterRef.current) counterRef.current.textContent = count.toString()
            }
        }, 80)

        return () => clearInterval(interval)
    }, [loaded])

    // 3. GSAP Exit Animation Timeline
    useGSAP(
        () => {
            if (!loaded) return

            const tl = gsap.timeline({
                onComplete: () => {
                    if (loaderRef.current) loaderRef.current.style.display = 'none'
                    document.body.style.overflow = ''
                },
            })

            // STEP 1: Fade out "TR.", Counter, and "Loading" together first
            tl.to([logoRef.current, counterRef.current, labelRef.current], {
                opacity: 0,
                y: -30,
                duration: 0.4,
                stagger: 0.05,
                ease: 'power2.in',
            })

            // STEP 2: Immediately hide the entire content wrapper
            tl.to(contentRef.current, { display: 'none', duration: 0 })

            // STEP 3: Reveal the page underneath by pulling up the strips
            tl.to(stripsRef.current, {
                scaleY: 0,
                duration: 0.6,
                ease: 'power3.inOut',
                stagger: { amount: 0.15, from: 'center' },
            })
        },
        { dependencies: [loaded], scope: loaderRef }
    )

    return (
        <div
            ref={loaderRef}
            className='fixed inset-0 z-[9999] flex pointer-events-auto'
        >
            {/* 5 vertical black strips */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (stripsRef.current[i] = el)}
                    className='flex-1 h-full bg-[#0a0a0a] origin-top'
                />
            ))}

            {/* Centered text container */}
            <div
                ref={contentRef}
                className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10'
            >
                <h1
                    ref={logoRef}
                    className='font-[font2] text-[18vw] leading-none text-white tracking-tighter select-none'
                >
                    TR.
                </h1>
                <div className='flex items-end gap-3 mt-6'>
                    <span
                        ref={counterRef}
                        className='font-[font1] text-[#F39A27] text-6xl tabular-nums leading-none'
                    >
                        0
                    </span>
                    <span className='font-[font1] text-white/30 text-xl mb-1'>%</span>
                </div>
                <p
                    ref={labelRef}
                    className='font-[font1] text-white/30 text-xs tracking-[0.3em] uppercase mt-3'
                >
                    Loading
                </p>
            </div>
        </div>
    )
}

export default Loader