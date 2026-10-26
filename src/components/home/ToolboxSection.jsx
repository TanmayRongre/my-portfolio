import React, { useState } from 'react'

export const CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#10B981',       // Emerald Green
    dotBg: 'bg-[#10B981]',
    glow: 'rgba(16, 185, 129, 0.45)',
    symbol: '🟢',
    count: 7,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#EAB308',       // Yellow / Gold
    dotBg: 'bg-[#EAB308]',
    glow: 'rgba(234, 179, 8, 0.45)',
    symbol: '🟡',
    count: 7,
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    color: '#EF4444',       // Crimson Red
    dotBg: 'bg-[#EF4444]',
    glow: 'rgba(239, 68, 68, 0.45)',
    symbol: '🔴',
    count: 8,
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    color: '#38BDF8',       // Sky Blue
    dotBg: 'bg-[#38BDF8]',
    glow: 'rgba(56, 189, 248, 0.45)',
    symbol: '🔵',
    count: 6,
  },
  {
    id: 'tools',
    label: 'Tools & Environments',
    color: '#A855F7',       // Purple / Violet
    dotBg: 'bg-[#A855F7]',
    glow: 'rgba(168, 85, 247, 0.45)',
    symbol: '🟣',
    count: 7,
  },
  {
    id: 'creative',
    label: 'UI/UX & Creative',
    color: '#F39A27',       // Signature Amber / Orange
    dotBg: 'bg-[#F39A27]',
    glow: 'rgba(243, 154, 39, 0.45)',
    symbol: '🟠',
    count: 5,
  },
]

export const TECH_PILLS = [
  // 🟢 Languages
  { name: 'C', category: 'languages', iconSlug: 'c' },
  { name: 'C++', category: 'languages', iconSlug: 'cpp' },
  { name: 'Java', category: 'languages', iconSlug: 'java' },
  { name: 'Python', category: 'languages', iconSlug: 'python' },
  { name: 'JavaScript', category: 'languages', iconSlug: 'javascript' },
  { name: 'SQL', category: 'languages', iconSlug: 'sql' },
  { name: '8086 Assembly', category: 'languages', iconSlug: 'cpu' },

  // 🟡 Frontend
  { name: 'React.js', category: 'frontend', iconSlug: 'react', big: true },
  { name: 'Redux Toolkit', category: 'frontend', iconSlug: 'redux' },
  { name: 'Tailwind CSS', category: 'frontend', iconSlug: 'tailwind', big: true },
  { name: 'Bootstrap', category: 'frontend', iconSlug: 'bootstrap' },
  { name: 'HTML5 & CSS3', category: 'frontend', iconSlug: 'html' },
  { name: 'GSAP', category: 'frontend', iconSlug: 'gsap', big: true },
  { name: 'Responsive Design', category: 'frontend', iconSlug: 'layout' },

  // 🔴 Backend & Databases
  { name: 'Node.js', category: 'backend', iconSlug: 'node', big: true },
  { name: 'Express.js', category: 'backend', iconSlug: 'express' },
  { name: 'RESTful APIs', category: 'backend', iconSlug: 'api' },
  { name: 'Socket.io', category: 'backend', iconSlug: 'socket' },
  { name: 'MongoDB', category: 'backend', iconSlug: 'mongodb', big: true },
  { name: 'Mongoose', category: 'backend', iconSlug: 'mongoose' },
  { name: 'JWT Auth', category: 'backend', iconSlug: 'auth' },
  { name: 'MySQL / JDBC', category: 'backend', iconSlug: 'database' },

  // 🔵 DevOps & Cloud
  { name: 'Git & GitHub', category: 'devops', iconSlug: 'git', big: true },
  { name: 'Vercel', category: 'devops', iconSlug: 'vercel' },
  { name: 'Render', category: 'devops', iconSlug: 'render' },
  { name: 'Google Cloud', category: 'devops', iconSlug: 'gcp' },
  { name: 'Linux Server Setup', category: 'devops', iconSlug: 'server' },
  { name: 'CI/CD Basics', category: 'devops', iconSlug: 'cicd' },

  // 🟣 Tools & Environments
  { name: 'Arch Linux', category: 'tools', iconSlug: 'arch', big: true },
  { name: 'Hyprland', category: 'tools', iconSlug: 'hyprland' },
  { name: 'Fish Shell', category: 'tools', iconSlug: 'terminal' },
  { name: 'VS Code', category: 'tools', iconSlug: 'vscode' },
  { name: 'IntelliJ IDEA', category: 'tools', iconSlug: 'idea' },
  { name: 'Ollama / Local LLMs', category: 'tools', iconSlug: 'ai', big: true },
  { name: 'Postman', category: 'tools', iconSlug: 'postman' },

  // 🟠 UI/UX & Creative
  { name: 'Dark Mode Glassmorphism', category: 'creative', iconSlug: 'glass', big: true },
  { name: 'UI/UX Wireframing', category: 'creative', iconSlug: 'wireframe' },
  { name: 'DaVinci Resolve', category: 'creative', iconSlug: 'video' },
  { name: 'Figma', category: 'creative', iconSlug: 'figma', big: true },
  { name: 'Canva', category: 'creative', iconSlug: 'canva' },
]

// Subtle organic tilt angles for the cloud pills
const TILT_ANGLES = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9, -1.8, 1.4, -0.6, 1.1]

// Mini inline icon helper
const TechIcon = ({ slug }) => {
  switch (slug) {
    case 'react':
      return (
        <svg className='w-3.5 h-3.5 text-[#61DAFB]' viewBox='0 0 115.3 100' fill='currentColor'>
          <circle cx='57.6' cy='50' r='10.5' />
          <path d='M57.6 0C25.8 0 0 22.4 0 50s25.8 50 57.6 50 57.6-22.4 57.6-50S89.5 0 57.6 0zm0 91.2c-26.6 0-48.4-18.4-48.4-41.2S30.9 8.8 57.6 8.8s48.4 18.4 48.4 41.2-21.7 41.2-48.4 41.2z' opacity='0.3' />
        </svg>
      )
    case 'python':
      return (
        <svg className='w-3.5 h-3.5 text-[#3776AB]' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M11.9 2c-3.8 0-6.2 1.6-6.2 4.2v2.4h6.3v.8H3.6C2 9.4 1 10.7 1 13.5c0 2.9 1.3 4.2 3.6 4.2h1.6v-2.3c0-2.6 2.2-4.2 6.1-4.2h3.9v-.8h-4.3c-2.3 0-4.2-1.8-4.2-4.1 0-2.4 1.8-4.2 4.2-4.2h5.4c2.1 0 3.8 1.7 3.8 3.8v1.3h1.8c1.6 0 2.6 1 2.6 2.7 0 2.4-1.2 3.7-3.4 3.7h-1.1v2.3c0 2.6-2.2 4.2-6.1 4.2H10v.8h4.3c2.3 0 4.2 1.8 4.2 4.1 0 2.4-1.8 4.2-4.2 4.2h-5.4c-2.1 0-3.8-1.7-3.8-3.8v-1.3H3.3C1.7 20.6.7 19.6.7 17.9c0-2.4 1.2-3.7 3.4-3.7h1.1v-2.3c0-2.6 2.2-4.2 6.1-4.2h4.7V7.1c0-2.9-2.4-5.1-4.1-5.1z' />
        </svg>
      )
    case 'node':
      return (
        <svg className='w-3.5 h-3.5 text-[#5FA04E]' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z' />
        </svg>
      )
    case 'git':
      return (
        <svg className='w-3.5 h-3.5 text-[#F05032]' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M12 2a2 2 0 00-1.4.6L2.6 10.6a2 2 0 000 2.8l8 8a2 2 0 002.8 0l8-8a2 2 0 000-2.8l-8-8A2 2 0 0012 2zm0 2.8l7.2 7.2-8 8-7.2-7.2 8-8z' />
        </svg>
      )
    case 'figma':
      return (
        <svg className='w-3 h-3 text-[#F24E1E]' viewBox='0 0 38 57' fill='currentColor'>
          <path d='M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z' />
          <path d='M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 11-19 0z' />
          <path d='M19 0v19h9.5a9.5 9.5 0 100-19H19z' />
          <path d='M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z' />
          <path d='M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z' />
        </svg>
      )
    case 'tailwind':
      return (
        <svg className='w-3.5 h-3.5 text-[#06B6D4]' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.8 6-2.5 1.4.2 2.4 1.2 3.5 2.3C15.8 13.6 18.2 16 23 16c4 0 6.5-2 7.5-6-1.5 2-3.5 2.8-6 2.5-1.4-.2-2.4-1.2-3.5-2.3C19.2 8.4 16.8 6 12 6zM4.5 14C.5 14-2 16-3 20c1.5-2 3.5-2.8 6-2.5 1.4.2 2.4 1.2 3.5 2.3C8.3 21.6 10.7 24 15.5 24c4 0 6.5-2 7.5-6-1.5 2-3.5 2.8-6 2.5-1.4-.2-2.4-1.2-3.5-2.3C11.7 16.4 9.3 14 4.5 14z' />
        </svg>
      )
    default:
      return null
  }
}

export const ToolboxSection = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const activeFilter = hoveredCategory || activeCategory

  const handleCategoryClick = (catId) => {
    setActiveCategory((prev) => (prev === catId ? null : catId))
  }

  const activeCatMeta = CATEGORIES.find((c) => c.id === activeFilter)

  return (
    <section
      id='skills'
      className='relative z-20 py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#080808] text-white border-t border-white/10 overflow-hidden select-none'
    >
      {/* Background radial glow */}
      <div
        className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-20'
        style={{
          background: activeCatMeta ? activeCatMeta.color : '#F39A27',
        }}
      />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto flex flex-col items-center'>
          {/* Section Tag */}
          <div className='inline-flex items-center gap-2 text-[#F39A27] font-[font5] text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold mb-3'>
            <span className='w-2 h-2 rounded-full bg-[#F39A27] animate-pulse' />
            <span>[ 04 / THE STACK ]</span>
          </div>

          {/* Main Title: PP Editorial serif */}
          <div className='relative inline-block mt-1'>
            <h2 className='text-4xl sm:text-6xl lg:text-7xl font-[font3] uppercase tracking-tight text-white leading-[0.95]'>
              The <span className='font-[font4] italic text-[#F39A27] lowercase'>toolbox.</span>
            </h2>

            {/* Organic Blue Underline Squiggle matching reference */}
            <svg
              className='w-[min(260px,50vw)] h-3 sm:h-4 text-[#38BDF8] mx-auto mt-2.5'
              viewBox='0 0 240 16'
              fill='none'
              preserveAspectRatio='none'
            >
              <path
                d='M2 11 C 45 4, 90 14, 135 7 C 175 1, 205 13, 238 6'
                stroke='currentColor'
                strokeWidth='3.5'
                strokeLinecap='round'
              />
            </svg>
          </div>

          {/* Subtitle / Discipline description */}
          <p className='font-[font4] italic text-sm sm:text-base lg:text-lg text-white/60 mt-4 max-w-xl mx-auto leading-relaxed'>
            *React and Next.js in front, Node and Express behind, MongoDB and Cloud underneath.
            Pick a discipline to filter the field.*
          </p>
        </div>

        {/* =========================================================================
            TOP ROW FILTER PILLS (Categories)
            Matching reference: pill with colored dot, clickable & hoverable
            ========================================================================= */}
        <div
          role='group'
          aria-label='Filter skills by discipline'
          className='mt-10 sm:mt-12 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar'
        >
          {/* "All" reset pill */}
          <button
            type='button'
            onClick={() => setActiveCategory(null)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-[13px] font-[font5] font-semibold tracking-wide transition-all duration-300 cursor-pointer shrink-0 border ${
              activeCategory === null
                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-105'
                : 'bg-[#141414] text-white/70 border-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5'
            }`}
          >
            <span className='w-2 h-2 rounded-full bg-white shrink-0' />
            <span>All Disciplines</span>
            <span className='text-[10px] opacity-60'>({TECH_PILLS.length})</span>
          </button>

          {/* Category Filter Pills */}
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type='button'
                onClick={() => handleCategoryClick(cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-[13px] font-[font5] font-semibold tracking-wide transition-all duration-300 cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105 font-bold'
                    : 'bg-[#141414] text-white/75 border-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5'
                }`}
                style={{
                  boxShadow: isSelected ? `0 0 25px ${cat.glow}` : 'none',
                }}
              >
                <span
                  className='w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-200'
                  style={{
                    backgroundColor: cat.color,
                    boxShadow: isSelected ? `0 0 8px ${cat.color}` : 'none',
                  }}
                />
                <span>{cat.label}</span>
                <span className='text-[10px] opacity-50 font-normal'>({cat.count})</span>
              </button>
            )
          })}
        </div>

        {/* =========================================================================
            TECHNOLOGY PILLS (The Floating Toolbox Field)
            Organic rounded white pills with colored indicator dots
            ========================================================================= */}
        <div className='mt-10 sm:mt-14 max-w-5xl mx-auto'>
          <ul
            role='list'
            className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:gap-3.5'
          >
            {TECH_PILLS.map((pill, idx) => {
              const catMeta = CATEGORIES.find((c) => c.id === pill.category)
              const isMatch = activeFilter === null || pill.category === activeFilter
              const tilt = TILT_ANGLES[idx % TILT_ANGLES.length]

              return (
                <li
                  key={idx}
                  style={{
                    transform: `rotate(${tilt}deg)`,
                  }}
                  className={`transition-all duration-300 will-change-transform ${
                    isMatch
                      ? 'opacity-100 scale-100'
                      : 'opacity-15 scale-95 blur-[0.4px] pointer-events-none max-md:hidden'
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-white text-black font-[font5] font-semibold tracking-wide select-none cursor-default transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_28px_rgba(0,0,0,0.8)] border border-white/90 ${
                      pill.big
                        ? 'px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-[14.5px] shadow-[0_6px_22px_rgba(0,0,0,0.65)]'
                        : 'px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11.5px] sm:text-[13px] shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
                    }`}
                    style={{
                      boxShadow:
                        activeFilter === pill.category && isMatch
                          ? `0 0 20px ${catMeta?.glow || 'rgba(255,255,255,0.2)'}`
                          : undefined,
                    }}
                  >
                    {/* Category Color Dot Indicator */}
                    <span
                      className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 shadow-sm'
                      style={{ backgroundColor: catMeta?.color || '#F39A27' }}
                      aria-hidden='true'
                    />

                    {/* Mini SVG icon if defined */}
                    <TechIcon slug={pill.iconSlug} />

                    {/* Tech Name */}
                    <span>{pill.name}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* =========================================================================
            BOTTOM STRIP: "PLUS THE GLUE" + ROLLING MARQUEE TICKER
            Matching the bottom of the reference screenshot
            ========================================================================= */}
        <div className='mt-16 sm:mt-24 pt-8 border-t border-white/10 relative'>
          {/* Plus The Glue Header */}
          <div className='text-center mb-6'>
            <p className='font-[font5] text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/50 font-semibold'>
              PLUS THE GLUE — HIGH-PERFORMANCE CODE · PRODUCTION AUDIT · 60FPS MOTION · FULL-STACK RIGOR
            </p>
          </div>

          {/* Infinite Rolling Marquee Ribbon */}
          <div className='relative w-full overflow-hidden mask-gradient-fade py-2'>
            <div className='flex items-center gap-3 animate-marquee whitespace-nowrap will-change-transform'>
              {[...TECH_PILLS, ...TECH_PILLS].map((item, i) => {
                const cat = CATEGORIES.find((c) => c.id === item.category)
                return (
                  <div
                    key={i}
                    className='inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1.5 hover:border-[#F39A27]/50 transition-colors'
                  >
                    <span
                      className='w-1.5 h-1.5 rounded-full'
                      style={{ backgroundColor: cat?.color || '#F39A27' }}
                    />
                    <span className='font-[font5] text-[11px] tracking-wider uppercase text-white/70 font-medium'>
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Artistic hand-drawn squiggle accent (like in reference bottom-right) */}
          <div className='absolute right-2 -bottom-4 sm:right-6 sm:-bottom-6 pointer-events-none opacity-80'>
            <svg className='w-16 h-16 sm:w-20 sm:h-20 text-[#EF4444]' viewBox='0 0 100 100' fill='none'>
              <path
                d='M20 70 C 35 40, 60 90, 80 50 C 90 30, 70 20, 60 40 C 50 60, 75 80, 85 75'
                stroke='currentColor'
                strokeWidth='3.5'
                strokeLinecap='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolboxSection
