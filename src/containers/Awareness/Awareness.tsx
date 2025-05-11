import BlogsList from './BlogsList.tsx';
import SearchWithFilters from '@/components/ui/SearchWithFilters.tsx';

const Awareness = () => {
  return (
    <div className='lg:mb-28 mb-12 mt-12 px-4 md:px-14'>
      <div className='flex flex-col-reverse lg:flex-row gap-5'>
        <div className='w-full lg:w-3/4'>
          <BlogsList />
        </div>
        <div className='w-full lg:w-1/4'>
          <SearchWithFilters />
        </div>
      </div>
    </div>
  );
};

export default Awareness;
