import logo from '@/assets/images/CyberXLABLogo.webp';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    heading: 'Home',
    links: [
      { name: 'School Rankings', path: '/services' },
      { name: 'Cyber Arena', path: '/arena' },
      { name: 'Awareness & Blog', path: '/about' },
      { name: 'Learning Center', path: '/learning' },
    ],
  },
  {
    heading: 'Cyber Awareness',
    links: [
      { name: 'Social Engineering', path: '/awareness/social-engineering' },
      { name: 'Phishing', path: '/awareness/phishing' },
      { name: 'Passwords', path: '/awareness/passwords' },
      { name: 'Learning Center', path: '/learning' },
    ],
  },
  {
    heading: 'Learning Center',
    links: [
      { name: 'School Rankings', path: '/services' },
      { name: 'Cyber Arena', path: '/arena' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='w-full text-white py-12 px-8 md:px-14 relative overflow-hidden'>
      <div className='relative z-10 flex flex-col md:flex-row justify-between items-start gap-12'>
        {/* Left Section */}
        <div className='max-w-md space-y-4'>
          <img src={logo} alt='CyberXLAB Logo' className='h-6' />
          <p className='text-xl md:text-[40px] font-medium leading-[130%]'>
            Cybersecurity is not a choice: it’s a necessity in the modern world
          </p>
        </div>

        {/* Center Sections */}
        <div className='flex gap-32 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className='text-2xl font-semibold mb-6 text-center'>{section.heading}</h3>
              <ul className='space-y-6 text-center text-base font-medium text-gray-200'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className='hover:text-white transition-colors'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
