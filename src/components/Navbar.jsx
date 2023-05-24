import React, { useState } from 'react';
import { RxHamburgerMenu, RxMagnifyingGlass } from 'react-icons/rx';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex justify-between w-full h-[72px] bg-primary text-white px-4 py-[21px] shadow-xl">
      <div className="flex items-center gap-5">
        <RxHamburgerMenu className="text-xl" />
        <h2 className=" text-2xl">
          torre
          <span className="text-secondary">.co</span>
        </h2>
      </div>
      <div className="flex items-center gap-5 text-xl">
        {!showSearch && (
          <button type="button" onClick={() => setShowSearch(!showSearch)}>
            <RxMagnifyingGlass />
          </button>
        )}
        {showSearch ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <h2 className="text-secondary">SIGN IN</h2>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
