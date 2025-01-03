import React from 'react'

export const ResetPassword = () => {
  return (
    <section className="bg-mainBg  py-[4%] ">
    <form className='wrapper flex flex-col justify-center items-center gap-6'>
    <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="code" className='text-mainText font-medium text-base'>Code</label>
    <input
      type="text"
      name="code"
      placeholder='Enter Reset Code here!'
      id="code" 
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
    />
  </div>
     <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="email" className='text-mainText font-medium text-base'>Email Address</label>
       <input
         type="email"
         name="email"
         placeholder="johndoe@gmail.com"
         id="email"
         className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
   
       />
     </div>
     <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="password" className='text-mainText font-medium text-base'>Password</label>
       <input
         type="password"
         name="password"
         placeholder="Enter your password here!"
         id="password"
         className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
       />
     </div>
     <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="cPassword" className='text-mainText font-medium text-base'>Confirm Password</label>
       <input
         type="password"
         name="cPassword"
         placeholder="Confirm your password here!"
         id="cPassword"
         className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
   
       />
     </div>
   
     <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Reset</button>
     <a href="../login" className='text-[#878787] text-base font-semibold' >Back to login</a>

   </form>
   
      </section>
  )
}
