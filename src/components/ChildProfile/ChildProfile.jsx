import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import useChildProfile from '../../hooks/useChildProfile.js';
import Navbar from '../Navbar/Navbar.jsx';

const ChildProfile = () => {
  const { childId } = useParams();
  const { getChildProfile,deleteChildProfile } = useChildProfile();
  const [childInfo, setChildInfo] = useState([]);

  useEffect(() => {
    const getChildInfo = async () => {
      const data = await getChildProfile(childId);
      setChildInfo(data.child);
    };
    getChildInfo();
  }, [childId, getChildProfile]);

  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <div className="bg-white h-1/2 absolute inset-x-0 top-0"></div>
          <div className="flex justify-center mt-8">
            <img
              className="rounded-full w-24 h-24 z-10"
              src={childInfo.profilePic === null ? '/null.jpg' : childInfo.profilePic?.secure_url}
              alt="profile"
            />
            <button
              className="absolute top-20 right-5 bg-mainColor text-sm text-white px-4 py-2 rounded"
              onClick={() => {deleteChildProfile(childId)}}
            >
              Delete
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 md:gap-12 mt-10 text-sm md:text-base">
          <NavLink
            to={`/dashboard/profiles/${childId}/details`}
            end
            className={({ isActive }) => isActive ? 'text-mainColor underline' : 'text-slate-500'}
          >
            Profile Details
          </NavLink>

          <NavLink
            to={`/dashboard/profiles/${childId}/edit`}
            className={({ isActive }) => isActive ? 'text-mainColor underline' : 'text-slate-500'}
          >
            Edit Profile
          </NavLink>

          <NavLink
            to={`/dashboard/profiles/${childId}/predict`}
            className={({ isActive }) => isActive ? 'text-mainColor underline' : 'text-slate-500'}
          >
           Upload Drawing
          </NavLink>
        </div>

<div className='w-[95%] m-auto mt-5'>
<Outlet context={{ childInfo }} />
</div>
        
      </div>
    </>
  );
};

export default ChildProfile;
