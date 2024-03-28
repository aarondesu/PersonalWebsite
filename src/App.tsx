import { Outlet } from 'react-router-dom';

import './App.css';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="grow flex my-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
