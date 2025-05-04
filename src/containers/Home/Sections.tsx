import AwarenessBlogBanner from '@/assets/images/AwarenessBlogBanner.webp';
import CyberArenaBanner from '@/assets/images/CyberArenaBanner.webp';
import LearningCenterBanner from '@/assets/images/LearningCenterBanner.webp';
import SchoolRankingsBanner from '@/assets/images/SchoolRankingsBanner.webp';

const Sections = () => {
  const sections = [
    {
      title: 'School Rankings',
      color: 'purple',
      img: SchoolRankingsBanner,
    },
    {
      title: 'Cyber Arena',
      color: 'green',
      img: CyberArenaBanner,
    },
    {
      title: 'Awareness & Blog',
      color: 'yellow',
      img: AwarenessBlogBanner,
    },
    {
      title: 'Learning Center',
      color: 'blue',
      img: LearningCenterBanner,
    },
  ];

  return (
    <div className='container m-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-24 p-4 bg-black'>
      {sections.map((section, index) => (
        <div
          key={index}
          className='bg-black relative p-6 flex flex-col justify-between w-full min-h-[340px] transition hover:scale-105 duration-300'
        >
          <img className='absolute top-0 left-0 w-full' src={section.img} alt={section.title} />
          <div className='absolute top-[40%] text-center right-0'>
            <h3 className='text-white text-3xl font-bold'>{section.title}</h3>
            <p className='text-gray-400 text-2xl font-normal border-b border-gray-700 pb-2 mt-2'>
              Learn More
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sections;
