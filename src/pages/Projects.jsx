import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectDetailModal from '../components/projects/ProjectDetailModal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import elearnImg from '../assets/Projects/ELearn.png'
import movieImg from '../assets/Projects/MovieRecommnder.png'
import connectHubImg from '../assets/Projects/connectHub.png'
import turioImg from '../assets/Projects/Turio.png'
import portfolioImg from '../assets/Projects/Portfolio.png'
import oldPortfolioImg from '../assets/Projects/OldPortfolio.png'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      image1: elearnImg,
      title1: 'E-Learning Platform',
      tags1: ['React', 'Vercel'],
      description1: 'An interactive online learning platform featuring course modules, quiz assessments, interactive progress tracking, and student dashboards.',
      link1: 'https://e-learning-platform-six-lilac.vercel.app/',
      github1: 'https://github.com/tanmayrongre/e-learning-platform',

      image2: movieImg,
      title2: 'Movie Recommender',
      tags2: ['React', 'API', 'GitHub Pages'],
      description2: 'Smart movie discovery & recommendation engine built with React and TMDB API providing personalized recommendations, trending trailers, and cast details.',
      link2: 'https://tanmayrongre.github.io/movie-recommender/',
      github2: 'https://github.com/tanmayrongre/movie-recommender',
    },
    {
      image1: connectHubImg,
      title1: 'Connect Hub',
      tags1: ['HTML/CSS', 'JS', 'GitHub Pages'],
      description1: 'Modern web social hub allowing users to connect, share updates, explore feeds, and interact seamlessly with clean dynamic UI features.',
      link1: 'https://tanmayrongre.github.io/Connect-hub/',
      github1: 'https://github.com/tanmayrongre/Connect-hub',

      image2: turioImg,
      title2: 'Turio',
      tags2: ['MERN', 'Booking', 'Vercel'],
      description2: 'Comprehensive travel & destination booking web app built on MERN stack, offering interactive itineraries, destination guides, and booking workflows.',
      link2: 'https://turio-theta.vercel.app/',
      github2: 'https://github.com/tanmayrongre/turio',
    },
    {
      image1: portfolioImg,
      title1: 'Portfolio',
      tags1: ['React', 'GSAP', 'GitHub Pages'],
      description1: 'A high-performance modern portfolio featuring GSAP smooth scroll dynamics, custom interactive components, fluid typography, and dark aesthetics.',
      link1: 'https://tanmayrongre.github.io/Portfolio/',
      github1: 'https://github.com/tanmayrongre/my-portfolio',

      image2: oldPortfolioImg,
      title2: 'Portfolio (Classic)',
      tags2: ['React', 'GitHub Pages'],
      description2: 'First iteration portfolio showcasing core web developer projects, responsive design foundations, and clean interactive elements.',
      link2: 'https://tanmayrongre.github.io/Portfolio/',
      github2: 'https://github.com/tanmayrongre/Portfolio',
    },
  ]

  useGSAP(
    () => {
      // 1. Header text swipe down animations
      gsap.fromTo(
        titleRef.current,
        { y: -90 },
        {
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        subtitleRef.current,
        { y: -50 },
        {
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // 2. Project Cards: Height expand on scroll
      const cards = gsap.utils.toArray('.hero-card')

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            height: '80px',
            borderRadius: '12px',
          },
          {
            height: '520px',
            borderRadius: '0px',
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 20%',
              scrub: 0.5,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
            },
          }
        )
      })

      ScrollTrigger.refresh()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className='bg-white text-black lg:px-4 px-2 pb-24 min-h-screen'>
      {/* Header section */}
      <div className='pt-[40vh] pb-8 overflow-hidden'>
        <div className='overflow-hidden'>
          <h2 ref={titleRef} className='font-[font2] lg:text-[9.5vw] text-7xl uppercase leading-none'>
            Projets
          </h2>
        </div>
        <div className='overflow-hidden mt-3'>
          <p ref={subtitleRef} className='text-sm uppercase tracking-[0.3em] text-black/50 font-[font1]'>
            Selected Work — Portfolio Projects ({projects.length * 2})
          </p>
        </div>
      </div>

      {/* Cards list with scroll expand animation */}
      <div className='flex flex-col gap-4'>
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className='hero-card w-full overflow-hidden flex lg:flex-row flex-col lg:gap-4 gap-3 will-change-[height]'
            style={{ height: '80px' }}
          >
            <ProjectCard
              image1={elem.image1} title1={elem.title1} tags1={elem.tags1} link1={elem.link1} description1={elem.description1} github1={elem.github1}
              image2={elem.image2} title2={elem.title2} tags2={elem.tags2} link2={elem.link2} description2={elem.description2} github2={elem.github2}
              onSelectProject={(projectData) => setSelectedProject(projectData)}
            />
          </div>
        ))}
      </div>

      {/* Detail Modal reveal on card click */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects