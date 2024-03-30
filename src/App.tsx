import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import LandingPage from './pages/landing.tsx';
import ErrorPage from './pages/error.tsx';
import AboutPage from './pages/about.tsx';
import ProjectsPage from './pages/projects.tsx';
import ContactPage from './pages/contact.tsx';
import Layout from './components/layout.tsx';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'projects',
          element: <ProjectsPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
