import { metrics } from '@/containers/SchoolRanking/constant.tsx';

const Total = () => {
  return (
    <div className='flex justify-center gap-4 mb-16'>
      {metrics.map((metric, index) => (
        <div key={index} className='bg-[#0f0f0f] rounded p-8 w-64 text-center'>
          <h2 className='text-white text-4xl leading-[150%] font-semibold mb-2.5'>
            {metric.value}
          </h2>
          <p className='text-white text-sm font-medium'>{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Total;
