import { Link, useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="text-center font-Roboto m-auto">
        <div className="md:text-9xl text-8xl font-bold">&#123; 404 &#125;</div>
        <div className="text-gray-400 md:text-2xl text-1xl">Page Not Found</div>
        <div className="flex space-x-4 justify-center mt-6">
          <Link
            to={'..'}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="underline"
          >
            Go Back
          </Link>
          <Link to={'/'} className="underline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
