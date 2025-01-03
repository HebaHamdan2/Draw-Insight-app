import React from 'react'

export default function Sidebar({onMenuClick}) {
  return (
 <>
 <div className="flex flex-col gap-3 px-7 pt-12 h-screen bg-[#121212] justify-between">
<div className='flex flex-col gap-3'>
<div className='flex flex-row gap-3 items-start cursor-pointer'>
    <img src="./Overview.svg" alt="overview" />
    <h3 className='font-semibold text-base capitalize text-white' onClick={()=>{onMenuClick('overview')}}>overview</h3>
  </div>
  <div className='flex flex-row gap-3 items-start cursor-pointer'>
    <img src="./UserCircleGear.svg" alt="UserCircleGear" />
    <h3 className='font-semibold text-base capitalize text-white'  onClick={()=>{onMenuClick('allChildren')}}>Child Management</h3>
  </div>
  <div className='flex flex-row gap-3 items-start cursor-pointer'>
    <img src="./Overview.svg" alt="overview" />
    <h3 className='font-semibold text-base capitalize text-white' onClick={()=>{onMenuClick('addChild')}}>add child</h3>
  </div>
  <div className='flex flex-row gap-3 items-start cursor-pointer'>
    <img src="./Settings.svg" alt="settings" />
    <h3 className='font-semibold text-base capitalize text-white' onClick={()=>{onMenuClick('settings')}}>settings</h3>
  </div>
</div>
  <div className='flex flex-row gap-3 items-start px-4 bg-mainColor w-[76%] py-3 rounded cursor-pointer mb-6'>
    <img src="./logout.svg" alt="settings" />
    <h3 className='font-semibold text-base capitalize  text-white '>logout</h3>
  </div>
 </div>
 </>
  )
}
