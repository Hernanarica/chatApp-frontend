import { NavLink } from 'react-router-dom';

interface Props {
  name: string,
  path: string
}

export function NavbarItem({ name, path }: Props) {
  return (
    <li>
      <NavLink
        to={ path }
        className={
          ({ isActive }) => `block p-1 border-l-4 border-transparent lg:border-0 lg:border-b-2 ${ isActive ? 'border-l-purple-500 lg:border-b-purple-500' : 'hover:border-l-purple-300 lg:hover:border-b-purple-300' }`
        }
      >{ name }</NavLink>
    </li>
  );
}