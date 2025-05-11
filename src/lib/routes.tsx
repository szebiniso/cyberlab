import { lazy } from 'react';
import Articles from '@/containers/Articles/Articles.tsx';

const Home = lazy(() => import('@/pages/HomePage.tsx'));
const Found404 = lazy(() => import('@/containers/Found404.tsx'));
const CyberAwareness = lazy(() => import('@/pages/CyberAwarenessPage.tsx'));
const SchoolRankings = lazy(() => import('@/pages/SchoolRankingsPage.tsx'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/cyber-awareness', element: <CyberAwareness /> },
  { path: '/cyber-awareness/:id', element: <Articles /> },
  { path: '/services', element: <SchoolRankings /> },
  { path: '*', element: <Found404 /> },
];
