import React from 'react'

const SingleCard = ({ image, title, tags, link, description, github, onSelectProject }) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (onSelectProject) {
      onSelectProject({ image, title, tags, link, description, github })
    }
  }

  return (
    <div
      onClick={handleClick}
      className='group relative flex-1 min-w-0 overflow-hidden cursor-pointer h-full flex flex-col bg-[#121212] block no-underline select-none'
      style={{ borderRadius: '8px', transform: 'translateZ(0)' }}
    >
      {/* Browser chrome bar */}
      <div className='relative z-10 flex items-center gap-1.5 px-3 py-2 bg-[#1c1c1c] border-b border-white/5 shrink-0 pointer-events-none'>
        <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]'></span>
        <span className='w-2.5 h-2.5 rounded-full bg-[#febc2e]'></span>
        <span className='w-2.5 h-2.5 rounded-full bg-[#28c840]'></span>
        <div className='flex-1 mx-3 bg-[#2a2a2a] rounded-full py-0.5 px-3 overflow-hidden'>
          <span className='text-[10px] text-[#999] font-mono truncate block'>
            {link || 'https://k72.ca'}
          </span>
        </div>
      </div>

      {/* Screenshot container — 16:9 filled content */}
      <div className='relative flex-1 w-full overflow-hidden bg-black'>
        <img
          className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 will-change-transform'
          src={image}
          alt={title || 'Project screenshot'}
          loading='eager'
        />

        {/* Hover overlay */}
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none'>
          {title && (
            <h3 className='text-white font-[font2] text-3xl uppercase leading-none mb-2'>
              {title}
            </h3>
          )}
          {tags && (
            <div className='flex flex-wrap gap-2 mb-4'>
              {tags.map((tag, i) => (
                <span key={i} className='text-[11px] uppercase tracking-widest text-white/80 border border-white/30 rounded-full px-3 py-0.5'>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className='inline-flex items-center gap-2 text-white font-[font1] text-sm uppercase tracking-wider'>
            View Details
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M7 17L17 7M17 7H7M17 7v10' />
            </svg>
          </span>
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