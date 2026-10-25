import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectDetailModal from '../components/projects/ProjectDetailModal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

import hostelHubImg from '../assets/Projects/HostelHub.png'
import turioImg from '../assets/Projects/Turio.png'
import devSpaceImg from '../assets/Projects/DevSpace.png'
import facultyHubImg from '../assets/Projects/FacultyHub.png'
import elearnImg from '../assets/Projects/ELearn.png'
import movieImg from '../assets/Projects/MovieRecommnder.png'
import connectHubImg from '../assets/Projects/connectHub.png'
import portfolioImg from '../assets/Projects/Portfolio.png'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const headerMetaRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      rowNum: '01',
      category: 'FULL-STACK & TRAVEL ARCHITECTURE',
      image1: hostelHubImg,
      title1: 'HostelHub',
      tags1: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'QR Pass'],
      category1: 'Full-Stack Architecture',
      description1: 'Comprehensive digital hostel management ecosystem featuring QR-based gate check-in/out tracking, automated leave requests, room allocations, and role-based dashboards for students, wardens, and administrators.',
      link1: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
      github1: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',

      image2: turioImg,
      title2: 'Turio',
      tags2: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel', 'UI/UX'],
      category2: 'Frontend Engineering',
      description2: 'Dynamic, high-performance travel and destination exploration interface featuring curated interactive itineraries, fluid destination guides, immersive showcases, and responsive booking flows.',
      link2: 'https://turio-theta.vercel.app/',
      github2: 'https://github.com/tanmayrongre/turio',
    },
    {
      rowNum: '02',
      category: 'DEVELOPER COLLABORATION & ACADEMIC SUITES',
      image1: devSpaceImg,
      title1: 'DevSpace',
      tags1: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Kanban'],
      category1: 'Full-Stack Architecture',
      description1: 'Unified developer productivity and portfolio platform featuring interactive Kanban boards, public developer showcases, collaborative project ideation trackers, sticky notes, and a community explore feed for projects and profiles.',
      link1: 'https://devspace-sand.vercel.app',
      github1: 'https://github.com/tanmayrongre/devspace',

      image2: facultyHubImg,
      title2: 'FacultyHub',
      tags2: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Google Sheets API'],
      category2: 'Full-Stack Architecture',
      description2: 'Role-based MERN platform built for HODs and faculty to streamline academic operations — featuring batch-wise attendance tracking, PA & practical marks management, leave & substitution workflows, master timetable, campus notices, and Google Sheets data export.',
      link2: 'https://github.com/tanmayrongre/FacultyHub',
      github2: 'https://github.com/tanmayrongre/FacultyHub',
    },
    {
      rowNum: '03',
      category: 'ENTERPRISE & DISCOVERY ENGINES',
      image1: elearnImg,
      title1: 'E-Learning Platform',
      tags1: ['React', 'Tailwind', 'GSAP', 'Vercel'],
      category1: 'Frontend & LMS Engineering',
      description1: 'An interactive online learning platform featuring modular course structures, quiz assessments, interactive progress analytics, and responsive student dashboards.',
      link1: 'https://e-learning-platform-six-lilac.vercel.app/',
      github1: 'https://github.com/tanmayrongre/e-learning-platform',

      image2: movieImg,
      title2: 'Movie Recommender',
      tags2: ['React', 'TMDB API', 'GitHub Pages'],
      category2: 'API & Discovery Engine',
      description2: 'Smart movie search & recommendation engine powered by TMDB API featuring instant query filtering, trailer embeds, cast insights, and fluid transitions.',
      link2: 'https://tanmayrongre.github.io/movie-recommender/',
      github2: 'https://github.com/tanmayrongre/movie-recommender',
    },
    {
      rowNum: '04',
      category: 'SOCIAL WEB & DIGITAL IDENTITY',
      image1: connectHubImg,
      title1: 'Connect Hub',
      tags1: ['HTML5/CSS3', 'JavaScript', 'GitHub Pages'],
      category1: 'Interactive Social Web',
      description1: 'Modern social feed and community web hub enabling creators to publish updates, explore channels, and interact seamlessly with dynamic UI components.',
      link1: 'https://tanmayrongre.github.io/Connect-hub/',
      github1: 'https://github.com/tanmayrongre/Connect-hub',

      image2: portfolioImg,
      title2: 'Portfolio (Current)',
      tags2: ['React', 'GSAP', 'Tailwind', 'Vercel'],
      category2: 'Creative Direction & Motion',
      description2: 'High-performance interactive portfolio engineered with GSAP scroll storytelling, custom canvas particle physics, luxury typography, and editorial dark aesthetics.',
      link2: 'https://tanmayrongre.github.io/Portfolio/',
      github2: 'https://github.com/tanmayrongre/my-portfolio',
    },
  ]



  useGSAP(
    () => {
      // 1. Header entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        titleRef.current,
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 }
      )

      tl.fromTo(
        subtitleRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.7'
      )

      tl.fromTo(
        headerMetaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )

      // 2. Project Rows: Clean upward fade-in entrance
      const rows = gsap.utils.toArray('.project-row-group')

      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      ScrollTrigger.refresh()
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className='bg-black text-[#FBF8F3] min-h-screen relative overflow-x-hidden select-none'
    >
      {/* Ambient background glow matching Home */}
      <div
        className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#F39A27]/[0.035] blur-[160px] -z-0'
        aria-hidden='true'
      />

      {/* =========================================================================
          PAGE HERO / HEADER
          ========================================================================= */}
      <section className='pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-14 border-b border-white/[0.08] relative z-10'>
        <div className='max-w-[1800px] mx-auto'>
          
          {/* Top Status & Category Tracker */}
          <div className='flex items-center justify-between pb-4 sm:pb-6 border-b border-white/[0.06] mb-8'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse shrink-0' />
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#F39A27] font-semibold'>
                [ ARCHITECTURAL PORTFOLIO • 2026 ]
              </span>
            </div>

            <div className='hidden sm:flex items-center gap-2 font-[font5] text-[10px] tracking-[0.25em] uppercase text-white/40'>
              <span>VOLUME 01</span>
              <span>/</span>
              <span>INDEX ARCHIVE</span>
            </div>
          </div>

          {/* Monumental Headline */}
          <div className='overflow-hidden py-1'>
            <h1
              ref={titleRef}
              className='text-5xl sm:text-7xl lg:text-[8.5vw] font-[font3] uppercase tracking-tight leading-[0.9] text-white flex flex-wrap items-baseline gap-x-4 sm:gap-x-6'
            >
              <span>Selected</span>
              <span className='font-[font4] italic text-[#FBF8F3]'>Works</span>
            </h1>
          </div>

          {/* Subtitle & Stats Bar */}
          <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mt-6 sm:mt-8'>
            <p
              ref={subtitleRef}
              className='font-[font4] italic text-base sm:text-xl text-white/70 max-w-xl leading-relaxed'
            >
              *A curated archive of full-stack platforms, client booking engines, and interactive digital experiences engineered for speed and scale.*
            </p>

            {/* Quick Stat Pill counters */}
            <div
              ref={headerMetaRef}
              className='flex flex-wrap items-center gap-6 sm:gap-10 font-[font5] text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/50 border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0'
            >
              <div>
                <span className='font-semibold font-[font3] text-xl sm:text-2xl text-[#F39A27] mr-2'>
                  08
                </span>
                <span>PRODUCTION BUILDS</span>
              </div>
              <span className='hidden sm:block w-[1px] h-5 bg-white/20' />
              <div>
                <span className=' font-semibold font-[font3] text-xl sm:text-2xl text-[#F39A27] mr-2'>
                  100%
                </span>
                <span>OPEN SOURCE & LIVE</span>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* =========================================================================
          PROJECT CARDS LIST
          ========================================================================= */}
      <section className='px-4 sm:px-8 lg:px-14 py-12 sm:py-20 relative z-10'>
        <div className='max-w-[1800px] mx-auto flex flex-col gap-10 sm:gap-14'>
          {projects.map((elem, idx) => (
            <div key={elem.rowNum || idx} className='project-row-group flex flex-col gap-4'>
              
              {/* Row Header with Category and Number */}
              <div className='flex items-center justify-between px-1 font-[font5] text-[11px] sm:text-xs tracking-[0.25em] uppercase text-white/40'>
                <div className='flex items-center gap-3'>
                  <span className='font-[font3] text-lg text-[#F39A27] font-bold'>
                    {elem.rowNum}
                  </span>
                  <span>/</span>
                  <span className='text-white/80 font-medium tracking-widest'>
                    {elem.category}
                  </span>
                </div>
                <div className='hidden sm:flex items-center gap-2 text-white/30 text-[10px]'>
                  <span>16:9 VIEWPORTS</span>
                  <span>•</span>
                  <span>CLICK TO EXPAND</span>
                </div>
              </div>

              {/* 2-Column Responsive Grid with natural 16:9 aspect ratio */}
              <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch'>
                <ProjectCard
                  image1={elem.image1}
                  title1={elem.title1}
                  tags1={elem.tags1}
                  link1={elem.link1}
                  description1={elem.description1}
                  github1={elem.github1}
                  category1={elem.category1}
                  image2={elem.image2}
                  title2={elem.title2}
                  tags2={elem.tags2}
                  link2={elem.link2}
                  description2={elem.description2}
                  github2={elem.github2}
                  category2={elem.category2}
                  onSelectProject={(projectData) => setSelectedProject(projectData)}
                />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          BOTTOM ARCHITECTURAL CTA SECTION (Matching Home Theme)
          ========================================================================= */}
      <section className='py-20 sm:py-28 px-4 sm:px-8 lg:px-14 border-t border-white/[0.08] bg-[#050505] relative z-10'>
        <div className='max-w-[1800px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8'>
          <div>
            <div className='inline-flex items-center gap-2 mb-3'>
              <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse' />
              <span className='font-[font5] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#F39A27]'>
                LET&apos;S BUILD SOMETHING ICONIC
              </span>
            </div>
            <h2 className='font-[font3] text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight'>
              Have an ambitious vision?
            </h2>
            <p className='font-[font4] italic text-base sm:text-lg text-white/60 mt-2 max-w-lg'>
              *Open for freelance architecture, full-stack engineering, and creative technology collaborations.*
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              to='/contact'
              className='inline-flex items-center gap-3 bg-[#141414] hover:bg-[#F39A27] text-white hover:text-black border border-white/20 hover:border-[#F39A27] font-[font5] text-xs sm:text-sm tracking-[0.15em] uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg active:scale-95'
            >
              <span>Start a conversation</span>
              <span className='text-sm'>↗</span>
            </Link>
            <Link
              to='/'
              className='inline-flex items-center gap-2 text-white/70 hover:text-[#F39A27] font-[font5] text-xs sm:text-sm tracking-[0.15em] uppercase px-5 py-3.5 transition-colors'
            >
              <span>Back to home</span>
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAIL MODAL
          ========================================================================= */}
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
