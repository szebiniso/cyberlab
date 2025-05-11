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
    <footer className='w-full bg-black text-white py-12 px-6 sm:px-10 md:px-14'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-start gap-12'>
        <div className='xl:max-w-md lg:max-w-[250px] space-y-4 w-full text-center md:text-left'>
          <img src={logo} alt='CyberXLAB Logo' className='h-6 mx-auto md:mx-0' />
          <p className='lg:text-lg text-3xl md:text-[32px] font-medium leading-snug'>
            Cybersecurity is not a choice: it’s a necessity in the modern world.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-12 sm:gap-20'>
          {footerLinks.map((section) => (
            <div key={section.heading} className='text-center sm:text-left'>
              <h3 className='text-xl font-semibold mb-4'>{section.heading}</h3>
              <ul className='space-y-3 text-base font-medium text-gray-300'>
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
