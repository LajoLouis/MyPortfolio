import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col sm:flex-row justify-between items-center py-4 border-b border-black'>
        <Link to='/' className='font-extrabold text-2xl'>LajoFrank</Link>
        <div className='flex flex-col sm:flex-row sm:space-x-5 mt-3 sm:mt-0'>
          <Link to='/resume' className='border-b sm:border-r sm:border-b-0 border-black pb-2 sm:pb-0 sm:pr-4'>Resume</Link>
          <Link to='/projects' className='border-b sm:border-r sm:border-b-0 border-black pb-2 sm:pb-0 sm:pr-4'>Projects</Link>
          <Link to='/contact' className='pb-2 sm:pb-0'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;