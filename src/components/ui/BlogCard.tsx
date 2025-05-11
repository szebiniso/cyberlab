import { User } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

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
      <div className={`h-44 relative`}>
        <img src={blog.image} alt={blog.category} className='w-full h-full object-cover' />
      </div>
      <div className='p-4 flex flex-col flex-grow font-light'>
        <div className='mb-4'>
          <span className='bg-green-700 text-white px-2 py-2 rounded text-sm font-medium'>
            {blog.category}
          </span>
        </div>
        <h3 className='text-white leading-[120%] text-lg mb-2'>{blog.title}</h3>
        <div className='flex items-center gap-2 mb-3 text-[#98989A]'>
          <User size={16} />
          <span className='text-xs'>{blog.author}</span>
        </div>
        <p className='text-[#98989A] text-xs mb-4'>{blog.description}</p>
        <div className='mt-auto'>
          <Link
            to={`/cyber-awareness/${blog.id}`}
            className='text-[#22E2EC] hover:text-cyan-400 underline text-base font-semibold'
          >
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
