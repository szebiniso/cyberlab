type RegionData = [number, string, number, string, string]; // №, Region/City, Schools, Students, Score
type AgeData = [number, string, string]; // №, Age Group, Students
type KnowledgeData = [number, string, string]; // №, Topic, Students
type RankingData = [number, string, string, string];

export interface KeyMetricsProps {
  metrics: MetricProps[];
}

export interface MetricProps {
  value: string;
  label: string;
}

export const metrics: MetricProps[] = [
  { value: '120', label: 'Total Schools' },
  { value: '15,000', label: 'Total Students' },
  { value: '78%', label: 'Average Score' },
];

// Regional distribution data
export const regionColumns: string[] = [
  '№',
  'Region/City',
  'Number of Schools',
  'Number of Students',
  'Average Score (%)',
];
export const regionData: RegionData[] = [
  [1, 'Bishkek', 25, '1,500', '85%'],
  [2, 'Osh', 20, '1,200', '78%'],
  [3, 'Jalal-Abad', 15, '900', '82%'],
  [4, 'Issyk-Kul', 10, '600', '88%'],
  [5, 'Naryn', 8, '400', '80%'],
  [6, 'Talas', 6, '300', '76%'],
  [7, 'Batken', 5, '250', '74%'],
];

// Age Statistics data
export const ageColumns: string[] = ['№', 'Age Group', 'Number of Students'];
export const ageData: AgeData[] = [
  [1, '10–12', '3,000'],
  [2, '13–15', '4,000'],
  [3, '16–18', '3,500'],
  [4, 'Issyk-Kul', '600'],
  [5, 'Naryn', '400'],
  [6, 'Talas', '300'],
  [7, 'Batken', '250'],
];

// Knowledge Levels data
export const knowledgeColumns: string[] = ['№', 'Topic', 'Number of Students'];
export const knowledgeData: KnowledgeData[] = [
  [1, '10–12', '3,000'],
  [2, '13–15', '4,000'],
  [3, '16–18', '3,500'],
  [4, 'Issyk-Kul', '600'],
  [5, 'Naryn', '400'],
  [6, 'Talas', '300'],
  [7, 'Batken', '250'],
];

// School Rankings data
export const rankingsColumns: string[] = ['№', 'Region/City', 'Region/City', 'Average Score (%)'];
export const rankingsData: RankingData[] = [
  [1, '№ 24', 'Bishkek', '92%'],
  [2, '№ 1', 'Issyk-Kul', '89%'],
  [3, '№ 67', 'Jalal-Abad', '88%'],
  [4, '№ 5', 'Talas', '85%'],
  [5, '№ 12', 'Bishkek', '83%'],
  [6, '№ 38', 'Batken', '81%'],
  [7, '№ 18', 'Naryn', '80%'],
];
