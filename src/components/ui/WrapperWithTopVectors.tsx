import { FC, PropsWithChildren } from 'react';
import Vector from '@/assets/images/Vector.webp';
import Vector2 from '@/assets/images/Vector1.webp';
import Vector3 from '@/assets/images/Vector2.webp';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='relative bg-black'>
      <img className='absolute top-32 left-0 ' src={Vector2} alt='Vector' />
      <img className='absolute top-88 right-0' src={Vector3} alt='Vector' />
      <img className='absolute bottom-0 right-0' src={Vector} alt='Vector' />
      {children}
    </div>
  );
};

export default Wrapper;
