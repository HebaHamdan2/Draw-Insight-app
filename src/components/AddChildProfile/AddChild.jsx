import React from 'react'
import GenderSelection from '../GenderSelection/GenderSelection.jsx'
const AddChild = () => {
  return (
    <form className='flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[60%] m-auto' >
     <img src="../null.png" alt="profile-pic" className="size-[95px] md:size-[180px] block cursor-pointer " />
     <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="name" className='text-mainText font-medium text-sm md:text-base'>Child's Name</label>
       <input
         type="text"
         name="name"
         placeholder="Enter your child's name"
         id="name"
         className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3'
       />
     </div>
    <div  className='flex flex-col gap-2 w-full'>
     <label htmlFor="date" className='text-mainText font-medium text-sm md:text-base'>Child's Birth Date</label>
<input
  type="date"
  name="date"
  id="date"
  placeholder="Enter your child's birth date"
  className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3'

/>

     </div>
 <GenderSelection/>

     <button type="submit"  className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Add</button>
   </form>
      
  )
}

export default AddChild