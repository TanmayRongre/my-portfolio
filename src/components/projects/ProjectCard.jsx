import React from 'react'

const SingleCard = ({ image, title, tags, link, description, github, category, onSelectProject }) => {
  const handleClick = (e) => {
    // Only open modal if not clicking directly on an external anchor link
    if (e.target.closest('a')) return
    e.preventDefault()
    if (onSelectProject) {
      onSelectProject({ image, title, tags, link, description, github, category })
    }
  }

  // Extract clean domain for browser bar
  const getDisplayUrl = (url) => {
    if (!url) return 'tanmayrongre.dev'
    try {
      const parsed = new URL(url)
      return parsed.hostname + (parsed.pathname !== '/' ? parsed.pathname : '')
    } catch {
      return url.replace(/^https?:\/\//, '')
    }
  }

  return (
    <div
      onClick={handleClick}
      className='group relative flex-1 min-w-0 flex flex-col bg-[#0a0a0a] border border-white/[0.08] hover:border-[#F39A27]/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(243,154,39,0.1)] cursor-pointer'
    >
      {/* 1. Sleek macOS-Style Browser Bar */}
      <div className='flex items-center justify-between px-4 py-2.5 bg-[#121212] border-b border-white/[0.06] select-none'>
        <div className='flex items-center gap-1.5'>
          <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80' />
          <span className='w-2.5 h-2.5 rounded-full bg-[#febc2e]/80' />
          <span className='w-2.5 h-2.5 rounded-full bg-[#28c840]/80' />
        </div>

        {/* Clean URL Badge */}
        <div className='flex items-center gap-1.5 max-w-[260px] sm:max-w-xs px-3 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 text-[10px] font-mono truncate'>
          <svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='text-[#F39A27]/70 shrink-0'>
            <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
            <path d='M7 11V7a5 5 0 0 1 10 0v4' />
          </svg>
          <span className='truncate'>{getDisplayUrl(link)}</span>
        </div>

        {/* Launch prompt */}
        <div className='flex items-center gap-1 text-[10px] font-[font5] uppercase tracking-[0.2em] text-[#F39A27] opacity-75 group-hover:opacity-100 transition-opacity'>
          <span className='hidden sm:inline'>PREVIEW</span>
          <span className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>↗</span>
        </div>
      </div>

      {/* 2. Uncluttered, True 16:9 Screenshot Viewport */}
      <div className='relative w-full aspect-[16/9] overflow-hidden bg-[#050505]'>
        <img
          src={image}
          alt={title || 'Project Screenshot'}
          loading='lazy'
          className='w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform'
        />

        {/* Ambient Dark Bottom Vignette */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none' />

        {/* Subtle Hover Reveal Pill */}
        <div className='absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none'>
          <div className='px-4 py-2 rounded-full bg-[#0e0e0e]/90 border border-[#F39A27]/50 text-[#F39A27] font-[font5] text-[11px] uppercase tracking-[0.25em] shadow-2xl flex items-center gap-2'>
            <span>EXPAND CASE STUDY</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* 3. Clean, Spacious Metadata Below the 16:9 Image */}
      <div className='p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#0b0b0b] to-[#070707]'>
        
        {/* Top: Category & Header */}
        <div>
          <div className='flex items-center justify-between gap-3 mb-2.5'>
            <span className='font-[font5] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F39A27] font-semibold'>
              [ {category || 'FULL-STACK'} ]
            </span>
            <span className='flex items-center gap-1.5 font-[font5] text-[10px] tracking-wider uppercase text-white/40'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#28c840]' />
              LIVE
            </span>
          </div>

          {/* Title */}
          <h3 className='font-[font3] text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-[#F39A27] transition-colors duration-300'>
            {title}
          </h3>

          {/* Clean 2-Line Description */}
          {description && (
            <p className='font-[font5] text-xs sm:text-sm text-white/60 line-clamp-2 leading-relaxed mt-2.5'>
              {description}
            </p>
          )}
        </div>

        {/* Bottom: Tag Strip & Action Buttons */}
        <div className='pt-5 mt-5 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className='flex flex-wrap items-center gap-1.5'>
              {tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className='font-[font5] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-white/60'
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className='font-[font5] text-[10px] uppercase tracking-wider px-2 py-1 text-white/40'>
                  +{tags.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Direct Action Icons */}
          <div className='flex items-center gap-2 shrink-0 self-end sm:self-auto'>
            {github && (
              <a
                href={github}
                target='_blank'
                rel='noreferrer'
                onClick={(e) => e.stopPropagation()}
                title='View GitHub Repository'
                className='w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors'
              >
                <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'>
                  <path fillRule='evenodd' clipRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
                </svg>
              </a>
            )}

            {link && (
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                onClick={(e) => e.stopPropagation()}
                title='Launch Live Project'
                className='w-8 h-8 rounded-full bg-[#F39A27]/10 hover:bg-[#F39A27] border border-[#F39A27]/30 flex items-center justify-center text-[#F39A27] hover:text-black transition-colors'
              >
                <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'>
                  <path d='M7 17L17 7M17 7H7M17 7v10' />
                </svg>
              </a>
            )}
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
          category={props.category1}
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
          category={props.category2}
          onSelectProject={props.onSelectProject}
        />
      )}
    </>
  )
}

export default ProjectCard
