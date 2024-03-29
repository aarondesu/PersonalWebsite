import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';
import React from 'react';

const Socials: React.FC = () => {
  return (
    <span className="w-fit bg-teal-400 text-white px-3 py-6 rounded-r-md space-y-4 fixed bottom-1/2">
      <IconBrandGithubFilled />
      <IconBrandLinkedin />
    </span>
  );
};

export default Socials;
