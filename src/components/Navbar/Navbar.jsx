import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useParentAccount from '../../hooks/useParentAccount.js';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { getAccountInfo } = useParentAccount();
  const [parentImg, setParentImage] = useState(null);
  const [parentName, setParentName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getAccountInfo();
        if (data) {
          setParentImage(data.parent.profilePic === 'null' ? '/null.jpg' : data.parent.profilePic?.secure_url);
          setParentName(data.parent.username || 'Unknown');
        }
      } catch (error) {
        toast.error('Failed to fetch account info');
      } finally {
        setLoading(false);
      }
    };

    getInfo();
  }, [getAccountInfo]);

  return (
    <div className="bg-[#EEEEEE] py-2 flex justify-start md:justify-end px-2 md:px-4">
      <ul className="flex gap-2 md:gap-6 justify-center items-center w-full max-w-md md:max-w-lg lg:max-w-xl">
        <li className="flex-grow text-center md:text-right">
          <Link to={'/dashboard/settings'} className="flex gap-2 items-center justify-center md:justify-end">
            {loading ? (
              <div className="flex gap-2 items-center">
                <div className="w-20 h-6 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-[7px] animate-pulse"></div>
              </div>
            ) : (
              <>
                <h3 className="text-sm font-bold capitalize">{parentName}</h3>
                <img src={parentImg || '/null.jpg'} className="w-8 h-8 rounded-[7px]" alt="parent" />
              </>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
