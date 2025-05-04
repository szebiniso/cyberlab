import logo from '@/assets/images/CyberXLABLogo.webp';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cyber Awareness', path: '/about' },
    { name: 'Learning Center', path: '/learning' },
    { name: 'School Rankings', path: '/services' },
    { name: 'Cyber Arena', path: '/arena' },
  ];

  return (
    <header className='bg-black w-full px-14'>
      <nav className='flex justify-between items-center w-full py-6'>
        <Link to='/'>
          <img src={logo} alt='CyberXLAB Logo' className='h-5 w-auto' />
        </Link>
        <ul className='flex gap-20'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className='text-[#FFFFFF99] hover:text-white transition-colors'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
