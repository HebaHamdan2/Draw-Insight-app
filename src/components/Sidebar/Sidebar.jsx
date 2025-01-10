import React from 'react'
import Logout from '../Logout/Logout.js';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  
  return (
 <>
 <div className="flex flex-col gap-3 px-7 pt-12 h-screen bg-[#121212] justify-between">
<div className='flex flex-col gap-3'>
<div>
  <NavLink className="flex flex-col md:flex-row  items-start text-sm font-extrabold md:text-2xl pb-10 pl-3 font-Poppins uppercase cursor-pointer text-mainColor" to={'/dashboard/overview'}>
    <span>draw</span><span className="text-white">insight.</span>
  </NavLink>
</div>
<NavLink   className={({ isActive }) =>`flex flex-row gap-3  items-start justify-center md:justify-start cursor-pointer px-4 py-3 ${isActive?'bg-mainColor w-[100%]  rounded ':''}`} to={'/dashboard/overview'}>
    <img src="/Overview.svg" alt="overview" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white '>overview</h3>
  </NavLink>
  <NavLink  className={({ isActive }) =>`flex flex-row gap-3  items-start justify-center md:justify-start cursor-pointer px-4 py-3 ${isActive?'bg-mainColor w-[100%]  rounded ':''}`} to={'/dashboard/profiles'}>
    <img src="/UserCircleGear.svg" alt="UserCircleGear" />
    <h3 className='hidden md:block font-semibold text-base capitalize text-white'>Children Profiles</h3>
  </NavLink>
  <NavLink  className={({ isActive }) =>`flex flex-row gap-3  items-start justify-center md:justify-start cursor-pointer px-4 py-3 ${isActive?'bg-mainColor w-[100%]  rounded ':''}`} to={'/dashboard/addChild'}>
    <img src="/Add Square 03.svg" alt="add" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white'>add child</h3>
  </NavLink>
  <NavLink  className={({ isActive }) =>`flex flex-row gap-3  items-start justify-center md:justify-start cursor-pointer px-4 py-3 ${isActive?'bg-mainColor w-[100%]  rounded ':''}`} to={'/dashboard/settings'}>
    <img src="/Settings.svg" alt="settings" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white'>settings</h3>
  </NavLink>
</div>
 <Logout/>
 </div>
 </>
  )
}
