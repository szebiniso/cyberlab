import { lazy } from 'react';

const Home = lazy(() => import('@/pages/HomePage.tsx'));
const CyberAwareness = lazy(() => import('@/pages/CyberAwarenessPage.tsx'));
const SchoolRankings = lazy(() => import('@/pages/SchoolRankingsPage.tsx'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <CyberAwareness /> },
  { path: '/services', element: <SchoolRankings /> },
  { path: '*', element: <Home /> },
];
