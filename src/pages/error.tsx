import {
  Link,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <motion.div className="flex h-screen" initial={{}} animate={{}} exit={{}}>
        <div className="text-center font-Roboto m-auto">
          <div className="md:text-9xl text-8xl font-bold">
            &#123; {error.status} &#125;
          </div>
          <div className="text-gray-400 md:text-2xl text-1xl">
            {error.statusText}
          </div>
          <div className="text-gray-400 md:text-2xl text-1xl">
            {error.data?.message}
          </div>
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
      </motion.div>
    );
  } else {
    return (
      <div className="flex h-screen">
        <div className="flex flex-col m-auto font-Roboto">
          <h1 className="text-9xl font-black">&#123; Oops &#125;</h1>
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
}
