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
    subtitle: 'MERN Hostel Operations & Gate Pass Engine',
    category: 'Full-Stack Architecture',
    description: 'Comprehensive digital hostel management ecosystem featuring QR-based gate check-in/out tracking, automated leave requests, room allocations, and role-based dashboards for students, wardens, and administrators.',
    image: hostelHubImg,
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'QR Pass'],
    link: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
    github: 'https://github.com/tanmayrongre/hackthon-mountreach-2026',
  },
  {
    id: 'turio',
    num: '02',
    title: 'Turio',
    subtitle: 'MERN Travel & Booking Engine',
    category: 'Full-Stack Architecture',
    description: 'Comprehensive travel and destination platform built with the MERN stack, offering dynamic itineraries, interactive guides, and streamlined booking flows.',
    image: turioImg,
    tags: ['MERN', 'MongoDB', 'Node.js', 'Vercel'],
    link: 'https://turio-theta.vercel.app/',
    github: 'https://github.com/tanmayrongre/turio',
  },
  {
    id: 'devspace',
    num: '03',
    title: 'DevSpace',
    subtitle: 'All-in-One MERN Developer Workspace & Collaboration Suite',
    category: 'Full-Stack Architecture',
    description: 'Unified developer productivity and portfolio platform featuring interactive Kanban boards, public developer showcases, collaborative project ideation trackers, sticky notes, and a community explore feed for projects and profiles.',
    image: devSpaceImg,
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Kanban'],
    link: 'https://devspace-sand.vercel.app',
    github: 'https://github.com/tanmayrongre/devspace',
  },
  {
    id: 'facultyhub',
    num: '04',
    title: 'FacultyHub',
    subtitle: 'Smart Academic & Faculty Management System',
    category: 'Full-Stack Architecture',
    description: 'Role-based MERN platform built for HODs and faculty to streamline academic operations — featuring batch-wise attendance tracking, PA & practical marks management, leave & substitution workflows, master timetable, campus notices, and Google Sheets data export.',
    image: facultyHubImg,
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Google Sheets API'],
    link: 'https://github.com/tanmayrongre/FacultyHub',
    github: 'https://github.com/tanmayrongre/FacultyHub',
  },
  {
    id: 'elearn',
    num: '05',
    title: 'E-Learn',
    subtitle: 'Interactive LMS & Educational Dashboard',
    category: 'Frontend & LMS Engineering',
    description: 'Modern educational platform featuring modular course structures, quiz assessments, student progress analytics, and responsive design.',
    image: elearnImg,
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Vercel'],
    link: 'https://e-learning-platform-six-lilac.vercel.app/',
    github: 'https://github.com/tanmayrongre/e-learning-platform',
  },
  {
    id: 'movie-recommender',
    num: '06',
    title: 'Movie Recommender',
    subtitle: 'TMDB Intelligent Discovery Engine',
    category: 'API & Modern UI',
    description: 'Smart movie search and recommendation engine powered by TMDB API with real-time query filtering, high-res posters, trailer embeds, and cast insights.',
    image: movieImg,
    tags: ['React', 'TMDB API', 'Tailwind CSS', 'GitHub Pages'],
    link: 'https://tanmayrongre.github.io/movie-recommender/',
    github: 'https://github.com/tanmayrongre/movie-recommender',
  },
  {
    id: 'connect-hub',
    num: '07',
    title: 'Connect Hub',
    subtitle: 'Social Interaction Platform',
    category: 'Interactive Web',
    description: 'Dynamic web network enabling creators to connect, publish feed updates, explore community channels, and interact with modern UI components.',
    image: connectHubImg,
    tags: ['HTML5/CSS3', 'JavaScript', 'Responsive UI', 'GitHub Pages'],
    link: 'https://tanmayrongre.github.io/Connect-hub/',
    github: 'https://github.com/tanmayrongre/Connect-hub',
  },
  {
    id: 'portfolio',
    num: '08',
    title: 'Developer Portfolio',
    subtitle: 'Bespoke Dark Architecture & Motion Showcase',
    category: 'Creative Direction & Motion',
    description: 'Museum-grade personal portfolio engineered with GSAP physics-driven scroll storytelling, high-contrast editorial typography, dynamic project showcases, and fluid transitions.',
    image: portfolioImg,
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Lenis', 'Vercel'],
    link: 'https://github.com/tanmayrongre/my-portfolio',
    github: 'https://github.com/tanmayrongre/my-portfolio',
  },
]

export default projects
