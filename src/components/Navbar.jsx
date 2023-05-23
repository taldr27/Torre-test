import React from 'react';
import { RxHamburgerMenu, RxMagnifyingGlass } from 'react-icons/rx';

const Navbar = () => {
  console.log('asd');
  return (
    <nav className="flex justify-between w-full bg-primary text-white  p-4 text-lg shadow-xl">
      <div className="flex items-center gap-5">
        <RxHamburgerMenu />
        <h2 className="text-2xl">
          torre
          <span className="text-secondary">.co</span>
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <RxMagnifyingGlass />
        <h2 className="text-secondary">SIGN IN</h2>
      </div>
    </nav>
  );
};

export default Navbar;
