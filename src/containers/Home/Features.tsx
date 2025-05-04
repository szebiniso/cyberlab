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
    <div className='h-fit pb-16 bg-black text-white'>
      {/* Hero Section */}
      <div className='pt-16 pb-5 px-8'>
        <h1 className='text-5xl font-medium mb-8'>Become a Cybersecurity Master</h1>
        <h2 className='text-4xl font-medium'>What You Can Do Here</h2>
      </div>

      {/* Navigation Sections */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {sections.map((section) => (
          <div key={section.id} className='border-t border-r w-fit grid-1 border-[#262626] p-12'>
            <div className='flex items-center gap-3 mb-2'>
              <h3 className='text-4xl font-semibold whitespace-nowrap'>{section.title}</h3>
            </div>
            <p className='text-gray-400 text-2xl font-normal'>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
