import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts';
import { Home } from '../views';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);