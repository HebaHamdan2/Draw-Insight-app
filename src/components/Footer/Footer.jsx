import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mainText text-white py-3">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <Link to="/" className="text-xl font-semibold hover:text-mainColor">
            DrawInsight
          </Link>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} <Link to="https://linkedin.com/in/heba-hamdan2" className='hover:text-mainColor'>Heba Hamdan.</Link>All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
