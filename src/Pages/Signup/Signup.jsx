import React from 'react'
const Signup = () => {
  return (
   <section className="bg-mainBg  pt-[4%]">
 <form className='wrapper flex flex-col justify-center items-center gap-6'>
  <img src="./null.png" alt="profile-pic" className="block size-[180px] cursor-pointer" />
  <div className='flex flex-col gap-2'>
    <label htmlFor="username">Name</label>
    <input
      type="text"
      name="username"
      placeholder="Enter your name here!"
      id="username" 
    />
  </div>
  <div className='flex flex-col gap-2'>
    <label htmlFor="address">Address</label>
    <input
      type="text"
      name="address"
      placeholder="Enter your address here!"
      id="address"
    />
  </div>
  <div className='flex flex-col gap-2'>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your valid email here!"
      id="email"
    />
  </div>
  <div className='flex flex-col gap-2'>
    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Enter your password here!"
      id="password"
    />
  </div>
  <div className='flex flex-col gap-2'>
    <label htmlFor="cPassword">Confirm Password</label>
    <input
      type="password"
      name="cPassword"
      placeholder="Confirm your password here!"
      id="cPassword"
    />
  </div>
  <p className="already-account">
          Already have an account? <a href="/login">Log In</a>
        </p>
  <button type="submit" className='SignUpBtn'> Sign Up</button>
</form>

   </section>
  )
}

export default Signup