import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Socials from './components/socials';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Socials />
      <div className="grow flex my-2">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default App;
