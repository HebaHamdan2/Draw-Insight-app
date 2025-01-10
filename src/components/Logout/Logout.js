import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('parent'); 
    navigate('/login');
  };

  return (
    <div 
      onClick={handleLogout} 
      className='flex flex-row gap-3 items-start justify-center md:justify-start px-4 bg-mainColor w-[100%] py-3 rounded cursor-pointer mb-6'
    >
      <img src="/logout.svg" alt="settings" />
      <h3 className='hidden md:flex font-semibold text-base capitalize text-white'>
        Logout
      </h3>
    </div>
  );
};

export default Logout;
