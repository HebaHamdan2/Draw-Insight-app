import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup" 
import useLogin from '../../hooks/useLogin.js'
const Login = () => {
  
  let {login}=useLogin()
  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Please enter a valid email"),
    password: Yup.string().required("Password is required")
  })

  // Initialize formik with initial values, validation schema, and submit handler
  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, 
    validationSchema: schema,
    onSubmit: handleLogin,
  })
  async function handleLogin(values){
    await login(values);
  }
  return (
   <section className="bg-mainBg py-[4%] ">
 <form className='wrapper flex flex-col justify-center items-center gap-6' onSubmit={formik.handleSubmit} >
 <div>
  <h1 className="flex flex-row text-base italic font-extrabold md:text-2xl font-Poppins uppercase cursor-pointer text-mainColor">
    <span>draw</span><span className="text-mainText">insight.</span>
  </h1>
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
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.errors.password && formik.touched.password ? <div className='text-sm text-red-600'>{formik.errors.password}</div> : null}

  </div>

      
  <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'> Log In</button>
  <a href="../" className='text-mainColor font-semibold' >Create an account</a>
       
</form>
    
   </section>
  )
}

export default Login