import React from 'react'

const SingleCard = ({ image, title, tags, link, description, github, num, category, onSelectProject }) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (onSelectProject) {
      onSelectProject({ image, title, tags, link, description, github })
    }
  }

  return (
    <div
      onClick={handleClick}
      className='group relative flex-1 min-w-0 overflow-hidden cursor-pointer h-full flex flex-col bg-white/[0.02] border border-white/10 hover:border-[#F39A27]/60 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(243,154,39,0.12)] select-none'
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Sleek Browser chrome bar */}
      <div className='relative z-10 flex items-center justify-between px-3.5 py-2.5 bg-[#0e0e0e] border-b border-white/[0.08] shrink-0 pointer-events-none'>
        <div className='flex items-center gap-1.5'>
          <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80'></span>
          <span className='w-2.5 h-2.5 rounded-full bg-[#febc2e]/80'></span>
          <span className='w-2.5 h-2.5 rounded-full bg-[#28c840]/80'></span>
        </div>
        
        {/* URL Pill */}
        <div className='flex-1 max-w-xs mx-3 bg-white/[0.03] border border-white/[0.06] rounded-full py-0.5 px-3 overflow-hidden text-center'>
          <span className='text-[10px] text-white/40 font-mono truncate block'>
            {link || 'https://tanmayrongre.dev'}
          </span>
        </div>

        {/* View Prompt Indicator */}
        <div className='flex items-center gap-1 text-[10px] font-[font5] uppercase tracking-[0.2em] text-[#F39A27] opacity-80 group-hover:opacity-100 transition-opacity'>
          <span className='hidden sm:inline'>OPEN</span>
          <span className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>↗</span>
        </div>
      </div>

      {/* Screenshot container */}
      <div className='relative flex-1 w-full overflow-hidden bg-black'>
        <img
          className='h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform'
          src={image}
          alt={title || 'Project screenshot'}
          loading='eager'
        />

        {/* Ambient Bottom Gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300' />

        {/* Content Overlay */}
        <div className='absolute inset-0 p-5 sm:p-7 flex flex-col justify-end pointer-events-none'>
          
          {/* Tags */}
          {tags && (
            <div className='flex flex-wrap gap-1.5 mb-2.5'>
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className='text-[9px] sm:text-[10px] uppercase font-[font5] tracking-[0.2em] text-[#F39A27] bg-[#F39A27]/10 border border-[#F39A27]/25 rounded-full px-2.5 py-0.5 font-medium backdrop-blur-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          {title && (
            <h3 className='text-white font-[font3] text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight tracking-tight group-hover:text-[#F39A27] transition-colors duration-300 mb-2'>
              {title}
            </h3>
          )}

          {/* Action Row */}
          <div className='flex items-center justify-between pt-1 border-t border-white/10 mt-1'>
            <span className='text-white/60 font-[font5] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] group-hover:text-white transition-colors'>
              CASE STUDY & DETAILS
            </span>
            <div className='w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#F39A27] group-hover:text-black text-white flex items-center justify-center transition-all duration-300'>
              <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                <path d='M7 17L17 7M17 7H7M17 7v10' />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const ProjectCard = (props) => {
  return (
    <>
      {props.image1 && (
        <SingleCard
          image={props.image1}
          title={props.title1}
          tags={props.tags1}
          link={props.link1}
          description={props.description1}
          github={props.github1}
          onSelectProject={props.onSelectProject}
        />
      )}
      {props.image2 && (
        <SingleCard
          image={props.image2}
          title={props.title2}
          tags={props.tags2}
          link={props.link2}
          description={props.description2}
          github={props.github2}
          onSelectProject={props.onSelectProject}
        />
      )}
    </>
  )
}

export default ProjectCard
