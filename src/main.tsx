// import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/tailwindcss.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/root.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={ routes } />
  // <React.StrictMode>
  // </React.StrictMode>
);
