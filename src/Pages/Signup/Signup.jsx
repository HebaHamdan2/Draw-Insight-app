import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
   <section className="signup">
 <form action="">
  <img src="./null.png" alt="profile-pic" className="profile-pic" />
  <div>
    <label htmlFor="username">Name</label>
    <input
      type="text"
      name="username"
      placeholder="Enter your name here!"
      id="username"
    />
  </div>
  <div>
    <label htmlFor="address">Address</label>
    <input
      type="text"
      name="address"
      placeholder="Enter your address here!"
      id="address"
    />
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your valid email here!"
      id="email"
    />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Enter your password here!"
      id="password"
    />
  </div>
  <div>
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