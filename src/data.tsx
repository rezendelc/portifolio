import ReactLogoItem from './components/tech-items/react-logo'

export const getProfileData = () => {
  return { 
    githubProfilePicture,
    aboutMeDescription,
    projectsDescription,
    techsList,
    contactMeDescription,
  }
}

const githubProfilePicture = 'https://avatars.githubusercontent.com/u/85887196?v=4'
const aboutMeDescription = <span>Full Stack Developer with a strong front-end background, focused on delivering scalable, high-quality software solutions. Experienced in technical leadership, system integration, and collaboration with cross-functional teams. Passionate about modern web technologies, clean code, and continuous improvement.</span>

const projectsDescription = <span>Under Construction</span>

const techsList = [
  { tech: <ReactLogoItem key="React1" />, name: 'React' },
  { tech: <ReactLogoItem key="React2" />, name: 'React' },
  { tech: <ReactLogoItem key="React3" />, name: 'React' },
]

const contactMeDescription = <span>Under Construction</span>