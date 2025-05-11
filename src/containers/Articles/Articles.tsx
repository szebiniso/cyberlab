import { lazy } from 'react';
import articleBanner from '@/assets/images/articleBanner.webp';

const ArticleInfo = lazy(() => import('@/containers/Articles/ArticleInfo.tsx'));
const SearchWithFilters = lazy(() => import('@/components/ui/SearchWithFilters.tsx'));
const CommentsSection = lazy(() => import('@/containers/Articles/CommentsSection.tsx'));

const Articles = () => {
  return (
    <div className='mx-auto lg:mb-28 mb-12 px-4 md:px-10 lg:px-14'>
      <img src={articleBanner} alt='Article Banner' className='w-full h-auto object-cover' />

      <div className='flex flex-col-reverse lg:flex-row gap-8 mt-12'>
        <div className='lg:flex-[4] w-full'>
          <ArticleInfo />
          <CommentsSection />
        </div>
        <div className='lg:flex-[1] w-full'>
          <SearchWithFilters />
        </div>
      </div>
    </div>
  );
};

export default Articles;
