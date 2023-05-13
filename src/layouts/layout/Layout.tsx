import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <h2>Layout</h2>
      <hr/>
      <Outlet />
    </>
  );
}