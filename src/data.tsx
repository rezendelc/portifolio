import AngularLogoItem from './components/tech-items/angular-logo'
import CssLogoItem from './components/tech-items/css-logo'
import DockerLogoItem from './components/tech-items/docker-logo'
import ExpressLogoItem from './components/tech-items/express-logo'
import GithubLogoItem from './components/tech-items/github-logo'
import HtmlLogoItem from './components/tech-items/html-logo'
import JavascriptLogoItem from './components/tech-items/javascript-logo'
import NestJSLogoItem from './components/tech-items/nestjs-logo'
import NodeJsLogoItem from './components/tech-items/nodejs-logo'
import PostgresLogoItem from './components/tech-items/postgres-logo'
import ReactLogoItem from './components/tech-items/react-logo'
import SvelteKitLogoItem from './components/tech-items/sveltekit-logo'
import TypescriptLogoItem from './components/tech-items/typescript-logo'

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
  { tech: <AngularLogoItem key="Angular" />, name: 'Angular' },
  { tech: <TypescriptLogoItem key="Typescript" />, name: 'Typescript' },
  { tech: <JavascriptLogoItem key="JavaScript" />, name: 'JavaScript' },
  { tech: <HtmlLogoItem key="HTML" />, name: 'HTML' },
  { tech: <CssLogoItem key="CSS" />, name: 'CSS' },
  { tech: <DockerLogoItem key="Docker" />, name: 'Docker' },
  { tech: <NodeJsLogoItem key="NodeJs" />, name: 'NodeJs' },
  { tech: <ExpressLogoItem key="Express" />, name: 'Express' },
  { tech: <SvelteKitLogoItem key="SvelteKit" />, name: 'SvelteKit' },
  { tech: <NestJSLogoItem key="NestJS" />, name: 'NestJS' },
  { tech: <PostgresLogoItem key="PostgreSQL" />, name: 'PostgreSQL' },
  { tech: <GithubLogoItem key="GitHub" />, name: 'GitHub' },

]

const contactMeDescription = <span>Under Construction</span>
