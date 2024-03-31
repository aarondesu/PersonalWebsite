import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';
import React from 'react';

const Socials: React.FC = () => {
  return (
    <span className="w-fit bg-teal-400 text-white px-3 py-6 rounded-r-md fixed bottom-1/2 ">
      <ul className="space-y-4">
        <li>
          <a href="https://github.com/aarondesu" target="_blank">
            <IconBrandGithubFilled />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aaron-neiel-aro-098651251/"
            target="_blank"
          >
            <IconBrandLinkedin />
          </a>
        </li>
      </ul>
    </span>
  );
};

export default Socials;
