import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-[#EEEEEE] py-2 flex justify-start md:justify-end px-4">
      <ul className='flex gap-2 md:gap-6 justify-center items-center w-full max-w-md md:max-w-lg lg:max-w-xl'>
        <li className="flex-grow">
          <form className='flex items-center bg-white py-2 px-4 rounded-full w-full'>
            <button type='submit' className='flex items-center justify-center pr-2'>
              <img src="/search.svg" className='w-4 h-4' alt="search" />
            </button>
            <input
              type="text"
              className='border-none flex-grow focus:outline-none text-sm pl-2'
              placeholder='Search...'
            />
          </form>
        </li>
        <li>
          <Link to={'/dashboard/settings'} className='flex gap-2 items-center'>
            <h3 className='text-sm font-bold capitalize'>Parent</h3>
            <img src="/null.jpg" className='w-8 h-8 rounded-[7px]' alt="parent" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
