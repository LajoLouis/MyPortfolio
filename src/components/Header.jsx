import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black text-white px-9 py-4 flex justify-between items-center flex-col lg:flex-row xs:space-y-2">
        <h1 className="text-xl font-bold text-yellow-600">FRANKLIN</h1>
        <nav className="space-x-4">
          <Link to={`/`} className="text-yellow-400 border-b-2 border-yellow-400 pb-1">HOME</Link>
          <Link to={`/resume`} className="hover:text-yellow-400">RESUME</Link>
          <Link to={`/projects`}className="hover:text-yellow-400">PROJECTS</Link>
          <Link to={`/contact`} className="hover:text-yellow-400">CONTACT</Link>
        </nav>
    </header>
  );
}

export default Header;