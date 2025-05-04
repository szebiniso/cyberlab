import { FC } from 'react';

interface DataTableProps {
  title?: string;
  columns: string[];
  data: (string | number)[][];
}

const DataTable: FC<DataTableProps> = ({ title, columns, data }) => {
  return (
    <div className='mb-16 w-full z-20 max-w-screen-lg mx-auto'>
      {title && (
        <h2 className='text-white text-2xl font-semibold leading-[100%] mb-6 text-center'>
          {title}
        </h2>
      )}
      <div className='overflow-x-auto bg-[#121212] rounded-md'>
        <table className='w-full'>
          <thead>
            <tr className='border-b w-fit border-[#262626]'>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className='py-3 px-1 text-white text-base font-medium bg-[#121212] text-center`'
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className='border-b w-fit border-[#262626]'>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-2 px-1 text-base font-medium text-white bg-[#121212] ${
                      cellIndex === 1 ? 'text-left' : 'text-center'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
