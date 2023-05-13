import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts';
import { About, Contact, Home } from '../views';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);