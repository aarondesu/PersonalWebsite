import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Socials from './components/socials';

export default function App() {
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
}
