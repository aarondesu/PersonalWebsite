import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Socials from './socials';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Socials />
      <AnimatePresence>
        <div className="grow flex my-2 p-10">
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
