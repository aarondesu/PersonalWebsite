import { Link } from 'react-router-dom';
import logo from './../assets/Logo.svg';

export default function Header() {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'about' },
    { name: 'Portfolio', link: 'portfolio' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <div className="py-5 px-6 flex">
      <div className="shrink">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="grow justify-end flex">
        <ul className="md:flex shrink select-none text-sm md:visible hidden">
          {Links.map((link) => (
            <li className="md:ml-8 my-7 md:my-0 font-Roboto" key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
