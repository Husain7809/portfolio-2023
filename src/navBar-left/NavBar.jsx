import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-col w-56 py-2 text-white">
        <div className="flex items-center justify-center">
          <a className="rounded-full profile" href="/">
            <img src='../../public/assets/cartoon.png' alt="logo" />
          </a>
        </div>
        <div className="flex flex-col mt-5 ml-5 text-left nav-bar">
          <ul className="flex flex-col space-y-4">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/skill' className='nav-link'>Skills</NavLink>
            <NavLink to='/projects' className='nav-link'>Project</NavLink>
            <NavLink to='/my-blog' className='nav-link'>Blog</NavLink>
            <NavLink to='/chat' className='nav-link'>Chat</NavLink>
            <NavLink to='/contact-me' className='nav-link'>Contact Me</NavLink>
          </ul>
        </div>
      </nav >

    </>
  )
}

export default NavBar
