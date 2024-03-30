import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import React from 'react';
import Header from './header';
import Footer from './footer';
import Socials from './socials';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Socials />
      <AnimatePresence>
        <div className="grow flex my-2">
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
