import React from 'react'
import './Login.css'
const Login = () => {
  return (
   <section className="Login">
 <form action="">
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
  <p className="forgot-password">
       <a href="/forgot">Forgot Password?</a>
        </p>
  <button type="submit" className='LoginBtn'> Log In</button>
</form>

   </section>
  )
}

export default Login