import React, { useRef } from 'react'
import Video from './Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import profileImg from '../../assets/Profile.jpeg'

const HomeHeroText = () => {
    const containerRef = useRef(null)
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const line3Ref = useRef(null)
    const badgeRef = useRef(null)
    const profileRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Text lines swipe down into position
        tl.fromTo(
            line1Ref.current,
            { y: -100 },
            { y: 0, duration: 1 }
        )
        tl.fromTo(
            line2Ref.current,
            { y: -100 },
            { y: 0, duration: 1 },
            '-=0.7'
        )
        tl.fromTo(
            line3Ref.current,
            { y: -80 },
            { y: 0, duration: 1 },
            '-=0.7'
        )

        // Video pill badge clip-path swipe
        tl.fromTo(
            badgeRef.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.9, ease: 'power3.inOut' },
            '-=0.6'
        )

        // Profile avatar clip-path swipe
        tl.fromTo(
            profileRef.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.9, ease: 'power3.inOut' },
            '-=0.7'
        )
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="font-[font1] text-4xl text-center pt-5 overflow-hidden">
            <div className="overflow-hidden py-1">
                <div ref={line1Ref} className="uppercase text-[12vw] lg:text-[9.5vw] leading-[8vw]">
                    Tanmay
                </div>
            </div>

            <div className="overflow-hidden py-1">
                <div ref={line2Ref} className="uppercase text-[12vw] lg:text-[9.5vw] leading-[8vw] flex items-center justify-center gap-3">
                    <span>Rongre</span>
                    <div
                        ref={profileRef}
                        className="inline-block overflow-hidden rounded-full w-[10vw] h-[10vw] lg:w-[7.5vw] lg:h-[7.5vw] border-2 border-white/30 shadow-2xl shrink-0"
                    >
                        <img
                            src={profileImg}
                            alt="Tanmay Rongre"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden py-1">
                <div ref={line3Ref} className="uppercase text-[12vw] lg:text-[9.5vw] leading-[8vw] flex items-center justify-center gap-4">
                    <span>web</span>
                    <div
                        ref={badgeRef}
                        className="inline-block overflow-hidden rounded-full aspect-video w-[15vw] h-[6vw] mt-2"
                    >
                        <Video className="w-full h-full object-cover" />
                    </div>
                    <span>Dev</span>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroText