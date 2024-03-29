import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';

export default function Socials() {
  return (
    <span className="flex flex-col w-fit bg-teal-400 text-white px-3 py-6 rounded-r-md space-y-4 fixed bottom-1/2 md:visible">
      <IconBrandGithubFilled />
      <IconBrandLinkedin />
    </span>
  );
}
