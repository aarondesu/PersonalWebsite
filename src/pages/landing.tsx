import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

import photo from '../assets/photo-1.png';

const LandingPage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row m-auto font-Roboto md:space-x-6 lg:space-x-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="lg:my-auto mt-6 lg:order-1 order-2 lg:text-start text-center">
        <div className="text-xl text-gray-400">Aaron Neiel</div>
        <div className="text-5xl font-black">Fullstack</div>
        <div className="text-5xl font-black">Web Developer</div>

        <div className="flex space-x-6">
          <Link
            to="contact"
            className="bg-indigo-500 text-white py-4 px-8 mt-8 w-full lg:w-fit cursor-pointer block "
          >
            Contact Me
          </Link>

          <Link
            to="portfolio"
            className="py-3 px-8 mt-8 w-full lg:w-fit cursor-pointer block border-4 border-gray-500"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="mx-auto lg:order-2 order-1">
        <img
          src={photo}
          alt=""
          className="w-[320px] md:w-[600px] lg:w-[480px]"
        />
      </div>
    </motion.div>
  );
};

export default LandingPage;
