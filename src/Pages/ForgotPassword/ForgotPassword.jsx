import React from 'react'

export default function ForgotPassword() {
  return (
    <section className="bg-mainBg py-[4%] ">
 <form className='wrapper flex flex-col justify-center items-center gap-6' >
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="email" className='text-mainText font-medium text-base'>Email Address</label>
    <input
      type="email"
      name="email"
      placeholder="johndoe@gmail.com"
      id="email"
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'

    /></div>

      
  <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Send Code</button>
  
       
</form>
    
   </section>
  )
}
