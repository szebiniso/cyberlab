import { useState } from 'react';
import logo from '@/assets/images/CyberXLABLogo.webp';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cyber Awareness', path: '/cyber-awareness' },
    { name: 'Learning Center', path: '/learning-center' },
    { name: 'School Rankings', path: '/services-rankings' },
    { name: 'Cyber Arena', path: '/cyber-arena' },
  ];

  return (
    <header className='bg-black w-full px-6 md:px-14'>
      <nav className='flex justify-between items-center w-full py-5'>
        <NavLink to='/'>
          <img src={logo} alt='CyberXLAB Logo' className='h-6 w-auto' />
        </NavLink>

        {/* Hamburger icon on small screens */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-white focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className='hidden md:flex gap-12'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-[#FFFFFF99] hover:text-white transition-colors pb-1 ${
                    isActive ? 'border-b-2 border-[#129322] text-white' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className='flex flex-col gap-4 md:hidden pb-6 px-2'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsMenuOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `block text-[#FFFFFF99] hover:text-white transition-colors pb-1 ${
                    isActive ? 'border-b-2 border-[#129322] text-white' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
