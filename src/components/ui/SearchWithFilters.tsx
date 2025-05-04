import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchWithFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Categories data
  const categories = [
    'Social Engineering',
    'Fishing',
    'Analytics',
    'Passwords',
    'Video',
    'Case',
    'Guide',
  ];

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className='min-h-screen bg-black flex flex-col items-center'>
      {/* Search Bar */}
      <div className='w-full max-w-lg relative mb-4'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full py-2 px-5 bg-transparent text-gray-300 font-medium text-sm leading-[100%] rounded-md border border-gray-600 focus:outline-none'
        />
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
          <Search size={24} className='text-[#119822]' />
        </div>
      </div>

      {/* Categories Header */}
      <div className='w-full max-w-lg border border-[#119822] rounded-md mb-4'>
        <h2 className='text-white font-medium text-sm leading-[100%] py-2 text-center'>
          Categories
        </h2>
      </div>

      {/* Categories Grid */}
      <div className='w-full max-w-lg space-y-2 flex flex-wrap gap-2'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`
              py-2 whitespace-nowrap flex-auto px-4 rounded-md bg-[#FFFFFF21] cursor-pointer
              ${selectedCategory === category ? 'bg-[#119822] border border-[#119822]' : ''}
              ${index === categories.length - 1 && categories.length % 2 !== 0 ? 'col-span-2' : ''}
            `}
            onClick={() => handleCategoryClick(category)}
          >
            <p className='text-[#98989A] text-center font-medium text-sm leading-[100%]'>
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchWithFilters;
