import hostelHubImg from '../assets/Projects/HostelHub.png'
import turioImg from '../assets/Projects/Turio.png'
import devSpaceImg from '../assets/Projects/DevSpace.png'
import facultyHubImg from '../assets/Projects/FacultyHub.png'
import elearnImg from '../assets/Projects/ELearn.png'
import movieImg from '../assets/Projects/MovieRecommnder.png'
import connectHubImg from '../assets/Projects/connectHub.png'
import portfolioImg from '../assets/Projects/Portfolio.png'

export const projects = [
  {
    id: 'hostelhub',
    num: '01',
    title: 'HostelHub',
    subtitle: 'Comprehensive digital hostel management ecosystem featuring QR-based gate check-in/out tracking, automated leave requests, room allocations, and role-based administration.',
    category: 'Full-Stack Architecture & Campus Ops',
    story: 'Traditional residential hostel management in universities relies heavily on fragmented paper registers, physical logbooks, and delays in getting leave sanctions from wardens. HostelHub was conceived during Hackathon Mountreach 2026 to modernize student campus living into a frictionless, paperless ecosystem. The platform unifies students, resident wardens, chief wardens, and physical security guards into a unified, synchronized web platform.',
    whatItDoes: [
      'Instant QR-coded gate pass generator with dynamic timestamp verification and security guard scanner interface.',
      'End-to-end student leave management workflow with automated status updates (Pending, Approved, Denied, Active).',
      'Interactive room allocation matrix with occupancy tracking, floor plans, and maintenance grievance logging.',
      'Comprehensive administrative dashboards with student directory search, emergency broadcast alerts, and activity audit trails.'
    ],
    myContribution: [
      'Engineered scalable RESTful API micro-services with Node.js, Express, and MongoDB Atlas with role-based access control (RBAC).',
      'Designed secure JWT authentication pipelines with refresh token rotation and bcrypt password hashing.',
      'Developed real-time QR generation and validation algorithms with camera-based barcode scanning support.',
      'Crafted high-contrast responsive dark UI with Tailwind CSS and fluid micro-interactions for mobile and desktop.'
    ],
    status: 'Production Build • Hackathon Finalist 2026',
    statusDetails: 'Live deployment on Vercel with MongoDB Atlas database cluster. 100% open-source codebase with automated CI/CD pipeline.',
    builtWith: [
      { name: 'React', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express', category: 'API Server' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'JWT Auth', category: 'Security' },
      { name: 'QR Pass API', category: 'Verification' },
      { name: 'Tailwind CSS', category: 'Styling' }
    ],
    image: hostelHubImg,
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'QR Pass'],
    link: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
    github: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
    year: '2026'
  },
  {
    id: 'turio',
    num: '02',
    title: 'Turio',
    subtitle: 'Dynamic travel and destination exploration interface featuring curated interactive itineraries, fluid destination guides, and responsive booking flows.',
    category: 'Travel Engineering & UI/UX',
    story: 'Modern travelers are overwhelmed by cluttered travel blogs and clunky booking sites that suffer from poor performance. Turio was engineered as a high-speed travel curation engine that simplifies travel discovery. By combining fluid typography, curated regional photography, and modular itinerary builders, Turio provides travelers with intuitive exploration and seamless booking journeys.',
    whatItDoes: [
      'Interactive destination exploration with category filters (Adventure, Serene, Heritage, Coastal).',
      'Dynamic day-by-day itinerary builders with integrated location insights, weather tips, and gear checklists.',
      'Responsive multi-step booking funnel with real-time price calculations and guest preference storage.',
      'Curated traveler reviews and high-resolution photo galleries with smooth modal previews.'
    ],
    myContribution: [
      'Designed and engineered modular React component architecture focusing on sub-second paint times and zero layout shifts.',
      'Implemented custom responsive design systems with Tailwind CSS for seamless viewing across smartphones, tablets, and desktops.',
      'Engineered state management for filter parameters, wishlist preservation, and checkout forms.',
      'Configured edge caching and optimized image loading strategies on Vercel for instant route transitions.'
    ],
    status: 'Live in Production • Vercel Deployment',
    statusDetails: 'Globally distributed via Vercel Edge Network. High performance metrics with 99+ mobile usability index.',
    builtWith: [
      { name: 'React', category: 'Frontend' },
      { name: 'JavaScript', category: 'Core' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Vercel', category: 'Hosting' },
      { name: 'UI/UX Design', category: 'Creative' }
    ],
    image: turioImg,
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel', 'UI/UX'],
    link: 'https://turio-theta.vercel.app/',
    github: 'https://github.com/tanmayrongre/turio',
    year: '2026'
  },
  {
    id: 'devspace',
    num: '03',
    title: 'DevSpace',
    subtitle: 'Unified developer productivity and portfolio platform featuring interactive Kanban boards, public developer showcases, collaborative ideation trackers, and sticky notes.',
    category: 'Full-Stack Architecture & DevTools',
    story: 'Independent developers and student engineers often struggle to maintain momentum when juggling project ideas, active tasks, and public showcase profiles across separate tools. DevSpace was created as an all-in-one developer operating system that bridges project management with social proof. Engineers can manage tasks on Kanban boards, save quick code thoughts, and publish live project cards to a public developer community feed.',
    whatItDoes: [
      'Interactive drag-and-drop Kanban board supporting custom columns, drag priorities, and tag filters.',
      'Public developer showcase explore feed with project cards, live demos, and GitHub repository links.',
      'Quick sticky notes engine for capturing ephemeral thoughts, snippets, and task reminders.',
      'Customizable public developer profile page with bio, tech stack tags, and featured builds.'
    ],
    myContribution: [
      'Engineered full-stack MERN architecture from MongoDB schema modeling to front-end drag-and-drop interactions.',
      'Constructed robust RESTful API endpoints for task states, note synchronization, and public showcase submissions.',
      'Implemented secure user authentication with JWT, bcrypt hashing, and protected route wrappers.',
      'Integrated responsive dark-mode UI with polished micro-interactions and instant optimistic UI updates.'
    ],
    status: 'Live in Production • Active Developer Community',
    statusDetails: 'Hosted on Vercel with MongoDB Atlas database. Sub-100ms API response times across all Kanban mutations.',
    builtWith: [
      { name: 'React', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express', category: 'API Server' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'JWT', category: 'Security' },
      { name: 'Kanban Engine', category: 'Architecture' }
    ],
    image: devSpaceImg,
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Kanban'],
    link: 'https://devspace-sand.vercel.app',
    github: 'https://github.com/tanmayrongre/devspace',
    year: '2026'
  },
  {
    id: 'facultyhub',
    num: '04',
    title: 'FacultyHub',
    subtitle: 'Role-based MERN platform built for HODs and faculty to streamline academic operations — featuring batch-wise attendance tracking, marks management, and Google Sheets sync.',
    category: 'Full-Stack Enterprise & Academic Suites',
    story: 'Academic departments in engineering institutions frequently face logistical chaos when compiling continuous assessment marks, monitoring daily student attendance, and coordinating emergency teacher substitutions. FacultyHub was custom-built to replace tedious spreadsheets with an automated, role-governed management suite that gives Department Heads (HODs) complete operational clarity.',
    whatItDoes: [
      'Batch-wise student attendance logging with automatic monthly percentage recalculation and low-attendance warnings.',
      'Progressive Assessment (PA) and practical examination marks registry with export-ready report generation.',
      'Faculty leave request workflow with automated substitute teacher assignment and clash prevention.',
      'Master timetable management, urgent campus circular broadcast, and two-way Google Sheets data export.'
    ],
    myContribution: [
      'Designed hierarchical multi-tier permission matrix separating HOD privileges from Assistant Professor permissions.',
      'Integrated Google Sheets API to enable automated real-time spreadsheet backups and institutional data export.',
      'Modeled relational MongoDB data structures for batches, semesters, subject codes, and student enrollment records.',
      'Built reactive front-end dashboards displaying live faculty attendance and pending leave approvals.'
    ],
    status: 'Production Architecture • Academic Deployment Ready',
    statusDetails: 'Tested and verified for university department workflows. Full Google Sheets API integration with automated syncing.',
    builtWith: [
      { name: 'React', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express', category: 'API Server' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'Google Sheets API', category: 'Cloud API' },
      { name: 'JWT Auth', category: 'Security' },
      { name: 'Tailwind CSS', category: 'Styling' }
    ],
    image: facultyHubImg,
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Google Sheets API'],
    link: 'https://github.com/tanmayrongre/FacultyHub',
    github: 'https://github.com/tanmayrongre/FacultyHub',
    year: '2026'
  },
  {
    id: 'elearn',
    num: '05',
    title: 'E-Learn',
    subtitle: 'Interactive online learning platform featuring modular course structures, quiz assessments, interactive progress analytics, and responsive student dashboards.',
    category: 'Frontend & LMS Engineering',
    story: 'Traditional digital learning platforms often present users with wall-to-wall video playlists and confusing navigation. E-Learn was engineered to provide students with a distraction-free, focused learning environment where video content, interactive code snippets, and knowledge-check quizzes coexist in one unified interface.',
    whatItDoes: [
      'Structured modular curriculum breakdown with chapter completion check-offs and dynamic progress meters.',
      'Interactive multiple-choice quiz engine with instant validation, explanations, and score tracking.',
      'Curated video lesson player with speed control, transcript support, and lesson notes storage.',
      'Comprehensive student profile analytics measuring continuous learning streaks and module milestones.'
    ],
    myContribution: [
      'Engineered stateful course progression engine managing lesson completion and quiz answer validations in React.',
      'Integrated GSAP micro-animations for reward feedback, completion badges, and smooth tab switching.',
      'Designed mobile-responsive dashboard layouts with Tailwind CSS adhering to WCAG accessibility guidelines.',
      'Optimized asset delivery and route chunking to guarantee snappy sub-second page transitions.'
    ],
    status: 'Live in Production • Vercel Deployment',
    statusDetails: 'Zero latency client-side execution. Deployed on Vercel with high Lighthouse performance score.',
    builtWith: [
      { name: 'React', category: 'Frontend' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'GSAP', category: 'Motion' },
      { name: 'JavaScript', category: 'Core' },
      { name: 'Vercel', category: 'Hosting' }
    ],
    image: elearnImg,
    tags: ['React', 'Tailwind', 'GSAP', 'Vercel'],
    link: 'https://e-learning-platform-six-lilac.vercel.app/',
    github: 'https://github.com/tanmayrongre/e-learning-platform',
    year: '2026'
  },
  {
    id: 'movie-recommender',
    num: '06',
    title: 'Movie Recommender',
    subtitle: 'Smart movie search & recommendation engine powered by TMDB API featuring instant query filtering, trailer embeds, cast insights, and fluid transitions.',
    category: 'API Engineering & Discovery Engine',
    story: 'With thousands of titles streaming across different networks, finding what to watch next is often a frustrating chore. This platform solves decision paralysis by providing cinephiles with instant search, curated genre rails, high-resolution poster art, and one-click trailer streaming without ever leaving the page.',
    whatItDoes: [
      'Instant debounced movie search querying the vast TMDB movie database in real time.',
      'Dynamic genre filtering (Sci-Fi, Thriller, Drama, Action) with trending and top-rated curation.',
      'Integrated modal video player streaming official YouTube trailers on demand.',
      'In-depth movie detail cards featuring release dates, runtime, IMDb ratings, and full cast rosters.'
    ],
    myContribution: [
      'Engineered asynchronous API pipelines interfacing the TMDB REST API with custom error fallbacks.',
      'Built high-performance responsive image grid with lazy-loading posters and smooth skeleton placeholders.',
      'Created seamless modal overlay components for trailer playback with focus trapping.',
      'Deployed production build via GitHub Pages with automated static site generation.'
    ],
    status: 'Live on GitHub Pages • Production API Integration',
    statusDetails: 'Direct connection to TMDB API v3. 100% client-side query execution with zero downtime.',
    builtWith: [
      { name: 'React', category: 'Frontend' },
      { name: 'TMDB API', category: 'REST API' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'GitHub Pages', category: 'Hosting' },
      { name: 'JavaScript', category: 'Core' }
    ],
    image: movieImg,
    tags: ['React', 'TMDB API', 'GitHub Pages'],
    link: 'https://tanmayrongre.github.io/movie-recommender/',
    github: 'https://github.com/tanmayrongre/movie-recommender',
    year: '2026'
  },
  {
    id: 'connect-hub',
    num: '07',
    title: 'Connect Hub',
    subtitle: 'Modern social feed and community web hub enabling creators to publish updates, explore channels, and interact seamlessly with dynamic UI components.',
    category: 'Interactive Social Web & Modern UI',
    story: 'Engineered as a deep exploration of modern social web patterns and front-end DOM efficiency. Connect Hub demonstrates how reactive feeds, community threads, and responsive layouts can be built with ultra-clean, lightweight code while retaining high visual fidelity.',
    whatItDoes: [
      'Dynamic feed stream allowing users to post updates, attach media links, and tag categories.',
      'Community discussion channels for developers, creative tech, and indie hackers.',
      'Instant interactive like counters, bookmark toggles, and reply threads with optimistic UI updates.',
      'Sleek dark theme with responsive sidebars for trending topics and member suggestions.'
    ],
    myContribution: [
      'Engineered clean modular component architecture with vanilla JavaScript and modern HTML5 semantic elements.',
      'Implemented responsive CSS layouts with CSS Grid and Flexbox for flawless rendering across devices.',
      'Built persistent client-side state management for post storage and interaction histories.',
      'Structured clean GitHub Pages deployment workflow with asset optimization.'
    ],
    status: 'Live on GitHub Pages • Ultra-Lightweight Build',
    statusDetails: 'Zero framework overhead, under 50KB total asset payload. Hosted on GitHub Pages.',
    builtWith: [
      { name: 'HTML5', category: 'Markup' },
      { name: 'CSS3', category: 'Styling' },
      { name: 'JavaScript', category: 'Core' },
      { name: 'GitHub Pages', category: 'Hosting' },
      { name: 'Responsive Design', category: 'UI/UX' }
    ],
    image: connectHubImg,
    tags: ['HTML5/CSS3', 'JavaScript', 'GitHub Pages'],
    link: 'https://tanmayrongre.github.io/Connect-hub/',
    github: 'https://github.com/tanmayrongre/Connect-hub',
    year: '2026'
  },
  {
    id: 'portfolio',
    num: '08',
    title: 'Developer Portfolio',
    subtitle: 'High-performance interactive portfolio engineered with GSAP scroll storytelling, custom canvas particle physics, luxury typography, and editorial dark aesthetics.',
    category: 'Creative Direction & Motion Architecture',
    story: 'A personal creative technology portfolio engineered to demonstrate that web engineering can merge raw architectural rigor with breathtaking cinematic motion. Built with GSAP ScrollTrigger, Lenis smooth physics, and museum-grade editorial typography, this portfolio serves as a living proof-of-work of design precision and engineering speed.',
    whatItDoes: [
      'Pinned horizontal Selected Works scroll track with sub-millisecond transforms and hover edge reflections.',
      'Interactive engineering methodology loop with glowing bezier traveler and sequential station reveals.',
      'Full-screen stair-step page transitions with zero layout shift and preserved scroll states.',
      'Dedicated case-study project route with editorial typography, watermark banners, and deep-linking.'
    ],
    myContribution: [
      'Architected single-page React application with React Router v7 and custom stair transition context.',
      'Designed custom GSAP scroll timelines synchronized with Lenis virtual scroll loop to prevent pin snapping.',
      'Integrated luxury typography system pairing PP Editorial New serif with Lausanne sans.',
      'Engineered responsive dark-obsidian aesthetic with subtle ambient glowing gold accents.'
    ],
    status: 'Live in Production • Vercel Deployment',
    statusDetails: 'Deployed on Vercel with automated Git integration. 60FPS fluid physics across all desktop browsers.',
    builtWith: [
      { name: 'React 18', category: 'Frontend' },
      { name: 'GSAP 3', category: 'Motion' },
      { name: 'Lenis', category: 'Physics Scroll' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'React Router', category: 'Routing' },
      { name: 'Vercel', category: 'Hosting' }
    ],
    image: portfolioImg,
    tags: ['React', 'GSAP', 'Tailwind', 'Vercel', 'Lenis'],
    link: 'https://github.com/tanmayrongre/my-portfolio',
    github: 'https://github.com/tanmayrongre/my-portfolio',
    year: '2026'
  }
]

export default projects
