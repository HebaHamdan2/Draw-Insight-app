import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import useForgotPassword from '../../hooks/useForgotPassword.js';

export const ResetPassword = () => {
  let resetPassword=useForgotPassword()

  const schema = Yup.object({
    code:Yup.string().required("Verification Code is required"),
    email: Yup.string().required("Email is required").email("Please enter a valid email").min(8,"Email must be at least 8 characters long"),
    password: Yup.string().required("Password is required"),
    });
  let formik = useFormik({
    initialValues: {
      code:'',
      email: '',
      password: ''
    }, validationSchema: schema,
    onSubmit: handleResetPassword,
  })
  async function handleResetPassword(values){
    await resetPassword(values);
  }
  return (
    <section className="bg-mainBg  py-[4%] ">
    <form className='wrapper flex flex-col justify-center items-center gap-6' onSubmit={formik.handleSubmit}>
    <div>
  <h1 className="flex flex-row text-base font-extrabold  italic md:text-2xl font-Poppins uppercase cursor-pointer text-mainColor">
    <span>draw</span><span className="text-mainText">insight.</span>
  </h1>
</div>
    <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="code" className='text-mainText font-medium text-base'>Code</label>
    <input
      type="text"
      name="code"
      placeholder='Enter Reset Code here!'
      id="code" 
      className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md pl-4 py-3'
      value={formik.values.code}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}

    />
      {formik.errors.code && formik.touched.code ? <div className='text-sm text-red-600'>{formik.errors.code}</div> : null}
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
         {formik.errors.email && formik.touched.email ? <div className='text-sm text-red-600'>{formik.errors.email}</div> : null}
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
         {formik.errors.password && formik.touched.password ? <div className='text-sm text-red-600'>{formik.errors.password}</div> : null}
     </div>
   
     <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Reset</button>
     <a href="../login" className='text-[#878787] text-base font-semibold' >Back to login</a>

   </form>
   
      </section>
  )
}
