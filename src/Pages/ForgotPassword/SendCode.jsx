import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import useForgotPassword from '../../hooks/useForgotPassword.js';

export default function SendCode() {
  const { sendCode } = useForgotPassword();

  const schema = Yup.object({
    email: Yup.string().required("Email is required").email("Please enter a valid email").min(8, "Email must be at least 8 characters long"),
  });

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: schema,
    onSubmit: async (values) => {
      await sendCode(values);
    },
  });

  return (
    <section className="bg-mainBg py-[4%]">
      <form className='wrapper flex flex-col justify-center items-center gap-4' onSubmit={formik.handleSubmit}>
        <div>
          <h1 className="flex flex-row text-base font-extrabold italic md:text-2xl font-Poppins uppercase cursor-pointer text-mainColor">
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className='text-sm text-red-600'>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit" className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Send Code</button>
        <a href="../login" className='text-[#878787] text-base font-semibold'>Back to login</a>
      </form>
    </section>
  );
}
