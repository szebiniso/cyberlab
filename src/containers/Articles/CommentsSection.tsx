import userPhoto from '@/assets/images/UserPhoto.webp';

const commentsSection = [
  {
    id: 1,
    name: 'User',
    avatar: userPhoto,
    timestamp: 'July 2, 2024 00:48 am',
    message: `The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system.`,
    likes: 0,
    emojis: '',
  },
  {
    id: 2,
    name: 'Uxxx',
    avatar: userPhoto,
    timestamp: 'June 23, 2024 9:48 pm',
    message: `The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system.`,
    likes: 1,
    emojis: '😍😍😍',
  },
  {
    id: 3,
    name: 'xxx',
    avatar: userPhoto,
    timestamp: 'June 13, 2024 10:48 pm',
    message: `The article raises the question of next-generation education based on the epic "Manas" aimed at reviving the spiritual heritage, national roots, ancestral wisdom, and values of the Kyrgyz people. Epic is a special epopea vividly describing Kyrgyz’s life. Accordingly, special national programs were elaborated. In addition, the subject "Manas studies" has an important role in the education system.`,
    likes: 1,
    emojis: '😍😍😍',
  },
];

const Comments = () => {
  return (
    <div className='bg-black text-white py-8'>
      <div className='space-y-8'>
        {commentsSection.map((comment) => (
          <div key={comment.id} className='flex flex-col space-y-3'>
            {/* User Info */}
            <div className='flex items-center space-x-4'>
              <img
                src={comment.avatar}
                alt={`${comment.name} avatar`}
                className='w-12 h-12 rounded-md object-cover'
              />
              <div>
                <p className='text-sm font-bold text-gray-200'>{comment.name}</p>
                <p className='text-[11px] text-gray-500'>{comment.timestamp}</p>
              </div>
            </div>

            {/* Comment Message */}
            <div className='bg-[#121212] rounded-lg px-4 py-3 text-base leading-relaxed text-gray-100'>
              {comment.message}
              {comment.emojis && <span className='ml-2'>{comment.emojis}</span>}
            </div>

            {/* Interaction Buttons */}
            <div className='text-xs font-semibold text-gray-500 flex gap-6'>
              <button className='hover:text-white transition-colors'>Reply</button>
              <button className='hover:text-white transition-colors'>
                {comment.likes > 0
                  ? `${comment.likes} Like${comment.likes > 1 ? 's' : ''}`
                  : 'Like'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
