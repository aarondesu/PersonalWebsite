import { motion } from 'framer-motion';
import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col lg:m-auto mx-auto mt-10 font-Roboto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="font-black text-5xl">&#123; Projects &#125;</h1>
    </motion.div>
  );
};

export default ProjectsPage;
