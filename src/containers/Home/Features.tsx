export default function CybersecurityPlatform() {
  const sections = [
    {
      id: 'learn',
      title: 'Learn',
      description: 'Explore video lessons and courses.',
    },
    {
      id: 'practice',
      title: 'Practice',
      description: 'Sharpen your skills with hands-on tasks and simulators.',
    },
    {
      id: 'ctf',
      title: 'Play CTF',
      description: 'Participate in exciting challenges and competitions.',
    },
    {
      id: 'ranks',
      title: 'Climb the Ranks',
      description: 'Secure your spot in top user and school rankings.',
    },
  ];

  return (
    <div className='bg-black text-white pb-16'>
      {/* Hero Section */}
      <div className='pt-14 pb-8 px-4 sm:px-6 md:px-10 lg:px-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium mb-6'>
          Become a Cybersecurity Master
        </h1>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium'>What You Can Do Here</h2>
      </div>

      {/* Section Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`border-t ${index % 2 !== 1 && 'sm:border-r'} ${
              index < 2 && 'lg:border-b'
            } border-[#262626] p-8 sm:p-10 lg:p-12`}
          >
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2'>{section.title}</h3>
            <p className='text-gray-400 text-base sm:text-lg lg:text-2xl font-normal'>
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
