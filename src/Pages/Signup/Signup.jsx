import React from 'react'
const Signup = () => {
  return (
   <section className="bg-mainBg  py-[4%] ">
 <form className='wrapper flex flex-col justify-center items-center gap-6'>
  <img src="./null.png" alt="profile-pic" className="block size-[180px] cursor-pointer" />
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="username">Name</label>
    <input
      type="text"
      name="username"
      placeholder="John Doe"
      id="username" 
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
    />
  </div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="address">Address</label>
    <input
      type="text"
      name="address"
      placeholder="Palestine"
      id="address"
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
    />
  </div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      name="email"
      placeholder="johndoe@gmail.com"
      id="email"
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'

    />
  </div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Enter your password here!"
      id="password"
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
    />
  </div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="cPassword">Confirm Password</label>
    <input
      type="password"
      name="cPassword"
      placeholder="Confirm your password here!"
      id="cPassword"
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'

    />
  </div>
  <p >
          Already have an account? <a href="/login" className='text-mainColor font-medium' >Log In</a>
        </p>
  <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3'> Sign Up</button>
</form>

   </section>
  )
}

export default Signup