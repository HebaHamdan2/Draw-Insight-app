import React from 'react'

export default function SendCode() {
  return (
    <section className="bg-mainBg py-[4%] ">
 <form className='wrapper flex flex-col justify-center items-center gap-4' >
 <div>
  <h1 className="flex flex-row text-base font-extrabold italic md:text-2xl  font-Poppins uppercase cursor-pointer text-mainColor">
    <span>draw</span><span className="text-mainText">insight.</span>
  </h1>
</div>
  <h2 className='text-mainText font-bold text-2xl'>Forgot Password?</h2>
  <p className='text-[#666666] text-lg w-[70%] text-center'>Enter your email address to get the password reset code.</p>
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
  <a href="../login" className='text-[#878787] text-base font-semibold' >Back to login</a>

       
</form>
    
   </section>
  )
}
