import { motion } from 'framer-motion';
import React from 'react';
import { useGetGithubReposQuery } from '../redux/api/github.api';
import GithubCard from '../components/github-card';

const ProjectsPage: React.FC = () => {
  let { data } = useGetGithubReposQuery();
  data = data?.filter((element) => {
    if (element.fork) return false;

    return true;
  });

  return (
    <motion.div
      className="flex flex-col w-full mt-10 font-Roboto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="font-black text-5xl text-center">
        &#123; Projects &#125;
      </h1>
      <div className="mt-4 space-y-6">
        <div>
          <h1 className="font-bold text-4xl md:text-start text-center">
            Websites
          </h1>

          <div></div>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-4xl md:text-start text-center">
            Github Repos
          </h1>

          <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
            {data &&
              data.map((element) => (
                <GithubCard key={element.id} {...element} />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
