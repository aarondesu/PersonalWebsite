import { Link } from 'react-router-dom';
import logo from './../assets/Logo.svg';
import { IconBaselineDensityMedium } from '@tabler/icons-react';
import React from 'react';

const Links = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: 'projects' },
  { name: 'About', link: 'about' },
  { name: 'Contact', link: 'contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex py-5 px-6 border-b-[2px] border-dashed">
      <div className="shrink">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="grow justify-end flex">
        <div className="md:hidden">
          <IconBaselineDensityMedium size={26} />
        </div>
        <ul className="md:flex shrink select-none text-sm md:visible hidden text-center">
          {Links.map((link) => (
            <li className="font-Roboto self-center px-4" key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
