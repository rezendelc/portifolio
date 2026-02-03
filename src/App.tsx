import './App.css';
import Card from './components/card/card'
import NavBar from './components/navbar/navbar';

function App() {
  const aboutMeDescription = <span>Under Construction</span>;
  const projectsDescription = <span>Under Construction</span>;
  const stacksDescription = <span>Under Construction</span>;
  const contactMeDescription = <span>Under Construction</span>;

  return (
    <div className="App">
      <header>
        <NavBar>

        </NavBar>
      </header>

      <main className="p-32">
        <div className="d-flex w-100 my-64">
          <img src="https://avatars.githubusercontent.com/u/85887196?v=4" className="avatar m-32"/>
          <Card title={'About me'} isReversed={true}>
            {aboutMeDescription}
          </Card>
        </div>
        
        <div className="d-flex w-100 my-64">
          <Card title={'Projects'} isReversed={false}>
            {projectsDescription}
          </Card>
        </div>

        <div className="d-flex w-100 my-64">
          <Card title={'Stacks'} isReversed={true}>
            {stacksDescription}
          </Card>
        </div>

        <div className="d-flex w-100 my-64">
          <Card title={'Contact Me'} isReversed={false}>
            {contactMeDescription}
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
