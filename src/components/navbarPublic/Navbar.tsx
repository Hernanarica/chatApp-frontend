import { About, Contact, Home, Login, Register } from '../../views';
import { NavbarItem } from '../navbarItem';

const routes = [
  {
    name: 'Home',
    path: '/',
    Component: Home
  },
  {
    name: 'About',
    path: 'about',
    Component: About
  },
  {
    name: 'Contact',
    path: 'contact',
    Component: Contact
  },
  {
    name: 'Login',
    path: 'login',
    Component: Login
  },
  {
    name: 'Register',
    path: 'register',
    Component: Register
  },
];

interface Props {
  isOpenMenu: boolean
}

export function Navbar({ isOpenMenu }: Props) {
  return (
    <nav className={ isOpenMenu ? 'block pb-4 lg:px-1' : 'hidden lg:block lg:px-1' }>
      <ul className="flex flex-col space-y-3 lg:h-full lg:items-center lg:gap-3 lg:flex-row lg:space-y-0">
        { routes.map(route =>
          <NavbarItem
            key={ route.path }
            name={ route.name }
            path={ route.path }
          />
        )}
      </ul>
    </nav>
  );
}