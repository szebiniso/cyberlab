import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { routes } from '@/lib/routes.tsx';

import './App.css';
import Header from '@/components/ui/Header.tsx';
import Footer from '@/components/ui/Footer.tsx';
import Wrapper from '@/components/ui/Wrapper.tsx';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <AppRoutes />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
