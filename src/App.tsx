import { useState } from 'react';
import './App.css';
import Card from './components/card/card'
import ContactMe from './components/contact-me/contact-me';
import NavBar from './components/navbar/navbar';
import { getProfileData } from './data'


// TODO: make reversed card design automatically

function App() {
  const [pulse, setPulse] = useState('');

  const {
    githubProfilePicture,
    aboutMeDescription,
    // projectsDescription,
    techsList,
  } = getProfileData();



  function handleNavBarClick(item: string) {
    // TODO: change this to dynamic values
    const element = document.getElementById(item);
    if (!element) return;

    setPulse(p => p = item)

    const headerOffset = 88;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  return (
    <div className="App" >
      <header>
        <NavBar onClick={handleNavBarClick} />
      </header>

      <main className="flex flex-col gap-16 px-16 mb-8">
        <section className="flex items-center justify-center mobile-view" id='home'>
          <img src={githubProfilePicture} alt="Lucas Castro de Rezende" className="avatar my-6 z-50"/>
          <Card 
            title={'About me'}
            isReversed={true}
            pulse={pulse === "home"}
            onPulseEnd={() => setPulse(p => p = '')}
          >
            {aboutMeDescription}
          </Card>
        </section>
        
        {/* <div id='projects'>
          <Card
            title={'Projects (Under construction)'}
            isReversed={false}
            pulse={pulse === "projects"}
            onPulseEnd={() => setPulse(p => p = '')}
          >
            {projectsDescription}
          </Card>
        </div> */}
        
        <section id='stacks'>
          <Card
            title={'Stacks'}
            isReversed={false}
            pulse={pulse === "stacks"}
            onPulseEnd={() => setPulse(p => p = '')}
          >
            <div className='flex flex-wrap gap-12 mobile-view'>
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
        </section>

        <section id='contactMe'>
          <Card
            title={'Contact Me'}
            isReversed={true}
            pulse={pulse === "contactMe"}
            onPulseEnd={() => setPulse(p => p = '')}
          >
            <ContactMe />
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
