import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from '../AboutPage';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
  ]);

  return router;
};
