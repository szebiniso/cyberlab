import { User } from 'lucide-react';
import { FC } from 'react';

type TBlog = {
  id: number;
  image: string;
  category: string;
  title: string;
  author: string;
  description: string;
};

type Props = {
  blog: TBlog;
};

const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <div
      key={`${blog.id}-${Math.random()}`}
      className='rounded-lg overflow-hidden bg-[#121212] flex flex-col'
    >
      {/* Challenge Image */}
      <div className={`h-44 relative`}>
        <img src={blog.image} alt={blog.category} className='w-full h-full object-cover' />
      </div>

      {/* Card Content */}
      <div className='p-4 flex flex-col flex-grow font-light'>
        {/* Category Tag */}
        <div className='mb-4'>
          <span className='bg-green-700 text-white px-2 py-2 rounded text-sm font-medium'>
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-white leading-[120%] text-lg mb-2'>{blog.title}</h3>

        {/* Author */}
        <div className='flex items-center gap-2 mb-3 text-[#98989A]'>
          <User size={16} />
          <span className='text-xs'>{blog.author}</span>
        </div>

        {/* Description */}
        <p className='text-[#98989A] text-xs mb-4'>{blog.description}</p>

        {/* Read More Link */}
        <div className='mt-auto'>
          <a
            href='#'
            className='text-[#22E2EC] hover:text-cyan-400 underline text-base font-semibold'
          >
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
