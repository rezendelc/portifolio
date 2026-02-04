import './navbar.css';

interface NavBarProps {
  onClick: any;
}

export default function NavBar ({ onClick: handleClick }: NavBarProps) {
 return (
  <div className='flex px-16 py-8 justify-end gap-32 navbar'>
    <button className='navbar-item' onClick={() => handleClick('home')}>Home</button>
    <button className='navbar-item' onClick={() => handleClick('stacks')}>Stacks</button>
    {/* <button className='navbar-item' onClick={() => onClick('projects')}>Projects</button> */}
    <button className='navbar-item' onClick={() => handleClick('contactMe')}>Contact Me</button>
  </div>
 );
}