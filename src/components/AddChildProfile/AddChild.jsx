import React from 'react'
const AddChild = () => {
  return (
    <form className='flex flex-col justify-center items-center gap-4 w-[60%] m-auto' >
     <img src="../null.png" alt="profile-pic" className="size-[180px] block cursor-pointer " />
     <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="name" className='text-mainText font-medium text-base'>Child's Name</label>
       <input
         type="text"
         name="name"
         placeholder="Enter your child's name"
         id="name"
         className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3'
       />
     </div>
    <div  className='flex flex-col gap-2 w-full'>
     <label for="date" className='text-mainText font-medium text-base'>Child's Birth Date</label>
<input
  type="date"
  name="date"
  id="date"
  placeholder="Enter your child's birth date"
  className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3'

/>

     </div>
     <div className='flex flex-col gap-2 w-full'>
  <label for="gender" className='text-mainText font-medium text-base'>Child's Gender</label>
  <div className="flex flex-row items-center gap-4">
    <div className="flex items-center">
      <input id="default-radio-1" type="radio" value="option1" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"/>
      <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900">Default radio</label>
    </div>
    <div className="flex items-center">
      <input id="default-radio-2" type="radio" value="option2" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" checked/>
      <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900">Checked state</label>
    </div>
  </div>
</div>


     <button type="submit"  className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Add</button>
   </form>
      
  )
}

export default AddChild