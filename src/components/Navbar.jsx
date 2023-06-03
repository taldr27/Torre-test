import React, { useState } from 'react';
import { RxHamburgerMenu, RxMagnifyingGlass } from 'react-icons/rx';

const Navbar = ({ onSearchValue }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchValue(searchTerm);
    setShowSearch(!showSearch);
    setSearchTerm('');
  };

  return (
    <nav className="flex justify-between w-full h-[72px] bg-primary text-white px-4 xl:px-32 py-[21px] shadow-xl">
      <div className="flex items-center gap-5">
        <RxHamburgerMenu className="text-xl xl:hidden" />
        {!showSearch && (
          <>
            <h2 className="text-2xl xl:text-3xl">
              torre
              <span className="text-secondary">.co</span>
            </h2>
          </>
        )}
      </div>
      <div className="flex items-center gap-5 text-xl xl:text-2xl">
        {!showSearch ? (
          <button type="button" onClick={() => setShowSearch(true)}>
            <RxMagnifyingGlass />
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search by username..."
              value={searchTerm}
              onChange={handleInputChange}
              className="bg-transparent outline-none border border-secondary rounded-xl p-2 placeholder:p-2"
            />
          </form>
        )}
        {!showSearch && <h2 className="text-secondary">SIGN IN</h2>}
      </div>
    </nav>
  );
};

export default Navbar;
