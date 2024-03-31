import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col m-auto font-Roboto md:divide-y-0 divide-y-2 divide-dotted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center space-y-6 lg:mt-28 mt-10">
        <div className="space-y-4">
          <div className="text-xl text-gray-400">Aaron Neiel</div>
          <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-2 text-5xl font-black">
            <div className="md:text-5xl text-5xl font-black">Fullstack</div>
            <div className="md:text-5xl text-5xl font-black">Web Developer</div>
          </div>
        </div>

        <div className="md:p-0 p-4 flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4 justify-center">
          <Link
            to="contact"
            className="bg-indigo-500 text-white py-4 px-8 w-full md:w-fit cursor-pointer block "
          >
            Contact Me
          </Link>

          <Link
            to="projects"
            className="py-3 px-8 w-full md:w-fit cursor-pointer block border-4 border-gray-500"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:mt-20 mt-10 space-y-4 py-10">
        <h4 className="font-bold text-2xl text-center">Looking for</h4>
        <div className="flex md:flex-row flex-col justify-center md:space-x md:divide-x md:space-y-0 md:divide-y-0 space-y divide-y divide-gray-400 divide-dotted text-center">
          <div className="lg:p-4 p-4">Full/Part Time Jobs</div>
          <div className="lg:p-4 p-4">Projects/Commision Based Jobs</div>
          <div className="lg:p-4 p-4">Collaborations</div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
