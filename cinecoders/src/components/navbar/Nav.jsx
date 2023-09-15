import React from 'react';
import MoviesDropdown from './MoviesDropdown';

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2 sticky top-0 z-10">
      {/* Other navbar content */}
      <MoviesDropdown />
      {/* Other navbar content */}
    </nav>
  );
}

export default NavBar;