import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {
  let {signup}=useSignup()
  const schema = Yup.object({
    username: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long"),
    email: Yup.string().required("Email is required").email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required"),
    cPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('password')], "Confirm password must match the password"),
    address: Yup.string().required("Address is required")
  });
  let formik = useFormik({
    initialValues: {
      username: '',
      address:'',
      email: '',
      password: '',
      cPassword: ''
    },
    validationSchema: schema,
    onSubmit: handleSignup,
  });
  async function handleSignup(values){
    await signup(values);
  }
  return (
   <section className="bg-mainBg  py-[4%] ">
 <form className='wrapper flex flex-col justify-center items-center gap-6'onSubmit={formik.handleSubmit}>
 <div>
  <h1 className="flex flex-row text-base italic font-extrabold md:text-2xl font-Poppins uppercase cursor-pointer text-mainColor">
    <span>draw</span><span className="text-mainText">insight.</span>
  </h1>
</div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="username" className='text-mainText font-medium text-base'>Name</label>
    <input
      type="text"
      name="username"
      placeholder="John Doe"
      id="username" 
      value={formik.values.username}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
    />
  </div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="address" className='text-mainText font-medium text-base'>Address</label>
    <input
      type="text"
      name="address"
      placeholder="Palestine"
      id="address"
      value={formik.values.address}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
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
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}

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
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  </div>
  <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="cPassword" className='text-mainText font-medium text-base'>Confirm Password</label>
    <input
      type="password"
      name="cPassword"
      placeholder="Confirm your password here!"
      id="cPassword"
      value={formik.values.cPassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'

    />
  </div>

  <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'> Sign Up</button>
  <p className='text-[#999DA3]'>
          Already have an account? <a href="/login" className='text-mainColor font-semibold' >Sign in here</a>
        </p>
</form>

   </section>
  )
}

export default Signup