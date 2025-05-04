import Total from '@/containers/SchoolRanking/Total.tsx';
import DataTable from '@/components/ui/DataTable.tsx';
import {
  ageColumns,
  ageData,
  knowledgeColumns,
  knowledgeData,
  rankingsColumns,
  rankingsData,
  regionColumns,
  regionData,
} from '@/containers/SchoolRanking/constant.tsx';

const SchoolRanking = () => {
  return (
    <div className='pt-10 px-14'>
      <Total />
      <DataTable title='Distribution by Regions' columns={regionColumns} data={regionData} />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16'>
        <DataTable title='Age Statistics' columns={ageColumns} data={ageData} />
        <DataTable
          title='Knowledge Levels by Topics'
          columns={knowledgeColumns}
          data={knowledgeData}
        />
      </div>
      <DataTable title='School Rankings' columns={rankingsColumns} data={rankingsData} />
    </div>
  );
};

export default SchoolRanking;
