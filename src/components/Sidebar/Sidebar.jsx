import React, { useState } from 'react'

export default function Sidebar({onMenuClick}) {
  const [activeMenu, setActiveMenu] = useState('overview');
  
  return (
 <>
 <div className="flex flex-col gap-3 px-7 pt-12 h-screen bg-[#121212] justify-between">
<div className='flex flex-col gap-3'>
<div className={`flex flex-row gap-3 items-start cursor-pointer px-4 py-3 ${activeMenu==='overview'?' bg-mainColor w-[100%]  rounded ':''}` } onClick={()=>{onMenuClick('overview');setActiveMenu('overview')}}>
    <img src="./Overview.svg" alt="overview" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white '>overview</h3>
  </div>
  <div className={`flex flex-row gap-3 items-start cursor-pointer px-4 py-3 ${activeMenu==='allChildren'?' bg-mainColor w-[100%]  rounded ':''}` } onClick={()=>{onMenuClick('allChildren');setActiveMenu('allChildren')}}>
    <img src="./UserCircleGear.svg" alt="UserCircleGear" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white'>Child Management</h3>
  </div>
  <div className={`flex flex-row gap-3 items-start cursor-pointer px-4 py-3 ${activeMenu==='addChild'?' bg-mainColor w-[100%] rounded ':''}`} onClick={()=>{onMenuClick('addChild');setActiveMenu('addChild')}}>
    <img src="./Add Square 03.svg" alt="add" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white'>add child</h3>
  </div>
  <div className={`flex flex-row gap-3 items-start cursor-pointer px-4 py-3 ${activeMenu==='settings'?' bg-mainColor w-[100%] rounded ':''}`} onClick={()=>{onMenuClick('settings');setActiveMenu('settings')}}>
    <img src="./Settings.svg" alt="settings" />
    <h3 className='hidden md:flex font-semibold text-base capitalize text-white'>settings</h3>
  </div>
</div>
  <div className='flex flex-row gap-3 items-start px-4 bg-mainColor w-[100%] py-3 rounded cursor-pointer mb-6'>
    <img src="./logout.svg" alt="settings" />
    <h3 className='hidden md:flex font-semibold text-base capitalize  text-white '>logout</h3>
  </div>
 </div>
 </>
  )
}
