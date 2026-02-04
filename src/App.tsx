import './App.css';
import Card from './components/card/card'
import ContactMe from './components/contact-me/contact-me';
import NavBar from './components/navbar/navbar';
import { getProfileData } from './data'


// TODO: make reversed card design automatically

function App() {
  const {
    githubProfilePicture,
    aboutMeDescription,
    projectsDescription,
    techsList,
  } = getProfileData();

  function handleNavBarClick(item: string) {
    console.log('clicked: ' + item)
  }

  return (
    <div className="App">
      <header>
        <NavBar onClick={handleNavBarClick} />
      </header>

      <main className="flex flex-col gap-16 px-16 mb-8">
        <div className="flex items-center justify-center mobile-view">
          <img src={githubProfilePicture} alt="Lucas Castro de Rezende" className="avatar my-6"/>
          <Card title={'About me'} isReversed={true}>
            {aboutMeDescription}
          </Card>
        </div>
        
        
        {/* <Card title={'Projects (Under construction)'} isReversed={false}>
          {projectsDescription}
        </Card> */}
        
        <Card title={'Stacks'} isReversed={false}>
          <div className='flex flex-wrap gap-12'>
            {techsList.map(item => {
              return (
                <div className="flex flex-col items-center gap-3 w-[3em]" key={item.name}>
                  { item.tech }
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title={'Contact Me'} isReversed={true}>
          <ContactMe />
        </Card>
      </main>
    </div>
  );
}

export default App;
