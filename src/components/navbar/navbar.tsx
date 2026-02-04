import './navbar.css';

interface NavBarProps {
  onClick: any;
}

export default function NavBar ({ onClick: handleClick }: NavBarProps) {
 return (
  <div className='flex px-16 py-8 justify-end gap-32 navbar'>
    <span className='navbar-item' onClick={() => handleClick('home')}>Home</span>
    <span className='navbar-item' onClick={() => handleClick('stacks')}>Stacks</span>
    {/* <span className='navbar-item' onClick={() => onClick('projects')}>Projects</span> */}
    <span className='navbar-item' onClick={() => handleClick('contactMe')}>Contact Me</span>
  </div>
 );
}