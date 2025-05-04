import { FC, PropsWithChildren } from 'react';
import Vector from '@/assets/images/Vector.webp';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='relative bg-black'>
      <img className='absolute bottom-0 right-0' src={Vector} alt='Vector' />
      {children}
    </div>
  );
};

export default Wrapper;
