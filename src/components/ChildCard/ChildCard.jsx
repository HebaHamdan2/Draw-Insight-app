import React from 'react'
import { Link } from 'react-router-dom'

const ChildCard = ({name,profilePic,gender,childId}) => {
  return (
   <>
   <div className="flex flex-col p-6 bg-white rounded-lg items-center justify-center gap-2 md:gap-6">
<div>
<img
                        src= {profilePic==='null'?'/null.jpg':profilePic}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
</div>
<div className='items-start'>
<div className='gap-1 pb-4'>
<h3 className='font-semibold text-xl '>{name}</h3>
<p className='text-sm text-[#9F9F9F]'>Name</p>
</div>
<div className='gap-1 '>
<h3 className='font-semibold text-xl'>{gender}</h3>
<p className='text-sm text-[#9F9F9F]'>Gender</p>
</div>

</div>

<Link  to={`/dashboard/profiles/${childId}`} className='bg-mainColor text-white flex gap-1 font-medium text-sm px-5 py-1 rounded'>Details <img src="/Vector (7).svg" alt="arrow" /></Link>
   </div>
   </>
  )
}

export default ChildCard