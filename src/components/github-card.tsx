import { IconBrandGithubFilled } from '@tabler/icons-react';
import React from 'react';

interface Props {
  name?: string;
  full_name?: string;
  private?: boolean;
  html_url?: string;
  description?: string;
  language?: string;
}

const GithubCard: React.FC<Props> = ({
  full_name,
  html_url,
  description,
  language,
}: Props) => {
  return (
    <>
      <div className="flex flex-col p-4 border-[1px] shadow-md space-y-2 w-[320px] max-w-[320px] border-l-4">
        <div className="flex space-x-2 font-medium">
          <IconBrandGithubFilled />
          <a href={html_url} target="#" className="underline text-indigo-400">
            {full_name}
          </a>
        </div>
        <div className="grow text-gray-600 italic">
          {description ? description : 'No description'}
        </div>
        <div className="text-sm text-gray-400 flex">
          <span>{language}</span>
        </div>
      </div>
    </>
  );
};

export default GithubCard;
