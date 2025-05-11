import BlogCard from '@/components/ui/BlogCard.tsx';
import Fishing from '@/assets/images/blogImages/Fishing.webp';

const BlogsList = () => {
  const blogList = [
    {
      id: 1,
      category: 'Social Engineering',
      title: 'Case Unlocked: Yukthi CTF 2024 Prelims',
      author: 'Adam Lee',
      description:
        'Introduction Welcome to Case Unlocked, a featured challenge in the Yukthi CTF 2024 prelims, designed...',
      image: Fishing,
    },
    {
      id: 2,
      category: 'Fishing',
      title: 'Case Unlocked: Yukthi CTF 2024 Prelims',
      author: 'Adam Lee',
      description:
        'Introduction Welcome to Case Unlocked, a featured challenge in the Yukthi CTF 2024 prelims, designed...',
      image: Fishing,
      imageAlt: 'Hooded figure at computer',
    },
    {
      id: 3,
      category: 'Passwords',
      title: 'Case Unlocked: Yukthi CTF 2024 Prelims',
      author: 'Adam Lee',
      description:
        'Introduction Welcome to Case Unlocked, a featured challenge in the Yukthi CTF 2024 prelims, designed...',
      image: Fishing,
      imageAlt: 'Lock icons on digital background',
    },
    {
      id: 4,
      category: 'Analytics',
      title: 'Case Unlocked: Yukthi CTF 2024 Prelims',
      author: 'Adam Lee',
      description:
        'Introduction Welcome to Case Unlocked, a featured challenge in the Yukthi CTF 2024 prelims, designed...',
      image: Fishing,
      imageAlt: 'Security operations center',
    },
  ];

  const blogListMap = [...blogList, ...blogList, ...blogList];

  return (
    <div className='min-h-screen bg-black'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {blogListMap.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
