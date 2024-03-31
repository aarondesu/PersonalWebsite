import {
  Link,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <motion.div className="flex h-screen" initial={{}} animate={{}} exit={{}}>
      <div className="text-center font-Roboto m-auto space-y-6">
        {isRouteErrorResponse(error) ? (
          <div>
            <div className="md:text-9xl text-8xl font-bold">
              &#123; {error.status} &#125;
            </div>
            <div className="text-gray-400 md:text-2xl text-1xl">
              {error.statusText}
            </div>
            <div className="text-gray-400 md:text-2xl text-1xl">
              {error.data?.message}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="md:text-9xl text-8xl font-bold">Oops</h1>
          </div>
        )}
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

        <div>
          <span>
            If any issue is found, please report it to{' '}
            <a
              href="https://github.com/aarondesu/PersonalWebsite/issues"
              className="underline"
            >
              issues page
            </a>
            .
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
