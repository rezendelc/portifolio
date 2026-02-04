import './App.css';
import Card from './components/card/card'
import NavBar from './components/navbar/navbar';
import { getProfileData } from './data'

function App() {
  const {
    githubProfilePicture,
    aboutMeDescription,
    projectsDescription,
    techsList,
    contactMeDescription,
  } = getProfileData();

  return (
    <div className="App">
      <header>
        <NavBar>

        </NavBar>
      </header>

      <main className="p-32">
        <div className="d-flex w-100 my-64">
          <img src={githubProfilePicture} alt="Lucas Castro de Rezende" className="avatar m-32"/>
          <Card title={'About me'} isReversed={true}>
            {aboutMeDescription}
          </Card>
        </div>
        
        <div className="d-flex w-100 my-64">
          <Card title={'Projects (Under construction)'} isReversed={false}>
            {projectsDescription}
          </Card>
        </div>

        <div className="d-flex w-100 my-64">
          <Card title={'Stacks (Under construction)'} isReversed={true}>
            <div className='d-flex'>
              { techsList }
            </div>
          </Card>
        </div>

        <div className="d-flex w-100 my-64">
          <Card title={'Contact Me (Under construction)'} isReversed={false}>
            {contactMeDescription}
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
