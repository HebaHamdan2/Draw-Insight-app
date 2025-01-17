import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useParentAccount from '../../hooks/useParentAccount.js';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { getAccountInfo } = useParentAccount();
  const [parentImg, setParentImage] = useState('null');
  const [parentName, setParentName] = useState('Unknown');

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getAccountInfo();
        if (data) {
          setParentImage(data.parent.profilePic === 'null' ? 'null' : data.parent.profilePic?.secure_url);
          setParentName(data.parent.username || 'Unknown');
        }
      } catch (error) {
        toast.error('Failed to fetch account info');
      }
    };

    getInfo();
  }, [getAccountInfo]);


  return (
    <div className="bg-[#EEEEEE] py-2 flex justify-start md:justify-end px-2 md:px-4">
    <ul className="flex gap-2 md:gap-6 justify-center items-center w-full max-w-md md:max-w-lg lg:max-w-xl">
      <li className="flex-grow text-center md:text-right">
        <Link to={'/dashboard/settings'} className="flex gap-2 items-center justify-center md:justify-end">
          <h3 className="text-sm font-bold capitalize">{parentName}</h3>
          <img src={parentImg || '/null.jpg'} className="w-8 h-8 rounded-[7px]" alt="parent" />
        </Link>
      </li>
    </ul>
  </div>
  
  );
};

export default Navbar;
