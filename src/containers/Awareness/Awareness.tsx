import BlogsList from './BlogsList.tsx';
import SearchWithFilters from '@/components/ui/SearchWithFilters.tsx';

const Awareness = () => {
  return (
    <div className='mb-28 mt-12 px-14'>
      <div className='flex gap-5'>
        <div className='flex-4'>
          <BlogsList />
        </div>
        <div className='flex-1'>
          <SearchWithFilters />
        </div>
      </div>
    </div>
  );
};

export default Awareness;
