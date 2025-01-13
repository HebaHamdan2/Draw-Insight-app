import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import useParentAccount from '../../hooks/useParentAccount';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  let { changePassword, authUser } = useParentAccount();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: ''
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required('Old Password is required'),
      newPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('New Password is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await changePassword(values);
        resetForm();
      } catch (error) {
        toast.error('Error changing password');
      }
    }
  });

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[60%] m-auto mt-[30%] md:mt-[10%]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="oldPassword" className="text-mainText font-medium text-sm md:text-base">
          Old Password
        </label>
        <input
          type="password"
          name="oldPassword"
          placeholder="Enter your old password"
          id="oldPassword"
          className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.oldPassword && formik.errors.oldPassword ? (
          <div className="text-red-500">{formik.errors.oldPassword}</div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="newPassword" className="text-mainText font-medium text-sm md:text-base">
          New Password
        </label>
        <input
          type="password"
          name="newPassword"
          placeholder="Enter your new password"
          id="newPassword"
          className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <div className="text-red-500">{formik.errors.newPassword}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
