import { Link } from 'react-router-dom';
import logo from './../assets/Logo.svg';
import { IconBaselineDensityMedium } from '@tabler/icons-react';

export default function Header() {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Portfolio', link: 'portfolio' },
    { name: 'About', link: 'about' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <div className="flex py-5 px-6 bg-neutral-200">
      <div className="shrink">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="grow justify-end flex">
        <div className="md:hidden">
          <IconBaselineDensityMedium size={26} />
        </div>
        <ul className="md:flex shrink select-none text-sm md:visible hidden text-center space-x-8">
          {Links.map((link) => (
            <li className="font-Roboto self-center" key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
