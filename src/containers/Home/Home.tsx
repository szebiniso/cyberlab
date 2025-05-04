import banner from '@/assets/images/banner.webp';
import articleBannerImg from '@/assets/images/articleBannerImg.webp';
import { User } from 'lucide-react';
import { lazy } from 'react';
import CybersecurityPlatform from '@/containers/Home/Features.tsx';
const Sections = lazy(() => import('@/containers/Home/Sections.tsx'));

const Home = () => {
  return (
    <div className='w-full bg-black pt-24'>
      <img src={banner} alt='Banner img' />
      <div className='m-auto'>
        <div className='px-12'>
          <h2 className='text-2xl font-normal my-5 text-white text-center'>LATEST ARTICLES</h2>
          <div className='bg-[#121212] text-white p-4 rounded-xl flex gap-4 w-full mx-auto shadow-lg'>
            {/* Left image */}
            <img
              src={articleBannerImg} // replace with actual image path
              alt='Post thumbnail'
              className='w-36 h-36 object-cover'
            />
            {/* Right content */}
            <div className='flex flex-col gap-3'>
              <h2 className='text-lg font-light mb-1'>Case Unlocked: Yukthi CTF 2024 Prelims</h2>
              <div className='flex items-center text-[#98989A] font-light text-xs mb-1'>
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
    </div>
  );
};

export default Home;
