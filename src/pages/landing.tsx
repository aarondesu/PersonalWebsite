import { Link } from 'react-router-dom';
import photo from '../assets/photo-1.png';

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row m-auto font-Roboto md:space-x-10 ">
      <div className="md:my-auto mt-6 md:order-1 order-2 md:text-start text-center">
        <div className="text-sm text-gray-400">Hi I am a</div>
        <div className="text-5xl font-black">Fullstack</div>
        <div className="text-5xl font-black">Web Developer</div>

        <Link
          to="contact"
          className="bg-indigo-500 text-white py-4 px-8 mt-8 w-full md:w-fit cursor-pointer block"
        >
          Contact Me
        </Link>
      </div>
      <div className="md:order-2 order-1">
        <img src={photo} alt="" className="md:w-lg sm:w-[500px] w-[320px]" />
      </div>
    </div>
  );
}
