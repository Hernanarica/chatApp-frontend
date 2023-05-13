import { Outlet } from 'react-router-dom';
import { Bars3Icon, ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Navbar } from '../../components';
import { useState } from 'react';

export function Layout() {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);

  return (
    <>
      <header className="lg:flex justify-between">
        <div className="p-1 h-14 flex items-center justify-between">
          <h1 className="flex items-center justify-center gap-4">
            <ChatBubbleLeftRightIcon className="h-8 text-purple-600" />
            ChatApp
          </h1>
          <div className="lg:hidden">
            <button
              className="border-2 bg-gray-50 border-gray-300 rounded"
              onClick={ () =>  setIsOpenMenu(!isOpenMenu) }
            >
              {
                isOpenMenu
                  ? <XMarkIcon className="h-8 text-gray-400" />
                  : <Bars3Icon className="h-8 text-gray-400" />
              }
            </button>
          </div>
        </div>
        <Navbar isOpenMenu={ isOpenMenu } />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}