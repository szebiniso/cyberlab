import { useState } from 'react';
import staffPhoto from '@/assets/images/StaffPhoto.webp';
import Comments from '@/assets/images/Comments.webp';
import { Editor } from 'primereact/editor';

const ArticleInfo = () => {
  const [text, setText] = useState<string>('');

  return (
    <div className='bg-black text-white space-y-6 font-sans w-full'>
      <div className='flex flex-wrap lg:justify-normal justify-between items-center gap-3'>
        <span className='bg-green-700 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-lg'>
          Social Engineering
        </span>
        <span className='text-gray-400 text-xs sm:text-sm'>OCT 20th, 2023</span>
      </div>

      <h1 className='text-2xl lg:text-start text-center md:text-3xl font-bold leading-snug'>
        Embark on an Exciting CTF Challenge Adventure
      </h1>

      <div className='flex items-center space-x-2'>
        <img src={staffPhoto} alt='Author' className='rounded-full w-6 h-6' />
        <span className='text-sm underline font-semibold'>Adam Lee</span>
      </div>

      <div className='space-y-4 text-base sm:text-lg leading-relaxed text-gray-300'>
        <p className='font-bold text-white'>
          This is the article name – headline lorem ipsum. This is the article name – headline lorem
          ipsum. This is the article name – headline lorem ipsum.
        </p>

        <p>
          The article raises the question of next-generation education based on the epic "Manas"
          aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of
          the Kyrgyz people.
        </p>

        <p>
          Epic is a special epopea vividly describing Kyrgyz's life. Accordingly, special national
          programs were elaborated. In addition, the subject "Manas studies" has an important role
          in the education system.
        </p>

        <p className='font-bold text-white'>
          This is the article name – headline lorem ipsum. This is the article name – headline lorem
          ipsum.
        </p>
      </div>

      <div className='h-20 px-4 items-center bg-[#121212] rounded-md flex gap-4'>
        <span className='font-bold text-lg'>3 Comments</span>
        <img className='w-[25px] h-[25px]' src={Comments} alt='Comments icon' />
      </div>

      <div className='bg-[#121212] p-4 rounded-md'>
        <Editor
          value={text}
          onTextChange={(e) => e.htmlValue && setText(e.htmlValue)}
          style={{ height: '220px' }}
        />
      </div>
    </div>
  );
};

export default ArticleInfo;
