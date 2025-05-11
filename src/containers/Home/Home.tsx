import banner from '@/assets/images/banner.webp';
import articleBannerImg from '@/assets/images/articleBannerImg.webp';
import { User } from 'lucide-react';
import { lazy } from 'react';
import CybersecurityPlatform from '@/containers/Home/Features.tsx';
const Sections = lazy(() => import('@/containers/Home/Sections.tsx'));

const Home = () => {
  return (
    <div className='w-full bg-black pt-24'>
      <img src={banner} alt='Banner img' className='w-full h-auto object-cover' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        <h2 className='text-xl sm:text-2xl font-normal my-6 text-white text-center'>
          LATEST ARTICLES
        </h2>

        <div className='bg-[#121212] text-white p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row gap-4 shadow-lg'>
          <img
            src={articleBannerImg}
            alt='Post thumbnail'
            className='w-full sm:w-36 h-48 sm:h-36 object-cover rounded-md'
          />
          <div className='flex flex-col justify-between gap-2 sm:gap-3'>
            <h2 className='text-base sm:text-lg font-light'>
              Case Unlocked: Yukthi CTF 2024 Prelims
            </h2>
            <div className='flex items-center text-[#98989A] font-light text-xs'>
              <User className='w-4 h-4 mr-1' />
              Adam Lee
            </div>
            <p className='text-[#98989A] font-light text-xs line-clamp-2'>
              Introduction Welcome to Case Unlocked, a featured challenge in the Yukthi CTF 2024
              prelims, designed...
            </p>
            <p className='text-[#98989A] text-xs font-light mt-2'>5 months ago</p>
          </div>
        </div>
      </div>

      <Sections />
      <CybersecurityPlatform />
    </div>
  );
};

export default Home;
