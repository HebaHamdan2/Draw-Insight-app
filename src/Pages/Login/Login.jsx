import React from 'react'
const Login = () => {
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
  <div className='flex flex-col gap-2 w-full'>
   <div className='flex flex-row justify-between items-center'>
   <label htmlFor="password" className='text-mainText font-medium text-base'>Password</label>
    <a href="/forgot" className='text-mainColor text-xs font-medium' >Forgot Password?</a>
   </div>
   
    <input
      type="password"
      name="password"
      placeholder="Enter your password here!"
      id="password"
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
    />
  </div>

      
  <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'> Log In</button>
  <a href="../" className='text-mainColor font-semibold' >Create an account</a>
       
</form>
    
   </section>
  )
}

export default Login