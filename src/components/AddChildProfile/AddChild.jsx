import React, { useState, useEffect } from 'react';
import GenderSelection from '../GenderSelection/GenderSelection.jsx';
import useAddProfile from '../../hooks/useAddProfile.js';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const AddChild = () => {
  const { addChild } = useAddProfile();
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [image, setImage] = useState(null); // State for image file

  const formik = useFormik({
    initialValues: {
      name: '',
      dateOfBirth: '',
      gender: '',
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Child's name is required")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must be at most 20 characters"),
        dateOfBirth: Yup.date()
        .required("Date of Birth is required")
        .max(new Date(), "Date of Birth cannot be in the future"),
      gender: Yup.string().required("Gender is required"),
      image: Yup.mixed().required("Image is required"), 
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await addChild(values);
        resetForm();
        setImage(null); // Reset the image state
        setImagePreview(null); // Reset the image preview
      } catch (error) {
        toast.error("Error adding child");
      }
    },
  });

  // Update Formik values when the image state changes
  useEffect(() => {
    if (image !== formik.values.image) {
      formik.setFieldValue('image', image); // Only update if the value has changed
    }
  }, [image, formik]);

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Update image state
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[60%] m-auto"
      onSubmit={formik.handleSubmit}
    >
      <div>
        <img
          src={imagePreview || '../null.png'} // Use preview if available
          alt="profile-pic"
          className="size-[95px] md:size-[180px] rounded-full block cursor-pointer"
          onClick={handleImageClick}
        />
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="text-red-500">{formik.errors.image}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="text-mainText font-medium text-sm md:text-base">
          Child's Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your child's name"
          id="name"
          className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="date" className="text-mainText font-medium text-sm md:text-base">
          Child's Birth Date
        </label>
        <input
          type="date"
          name="dateOfBirth"
          id="date"
          className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
          <div className="text-red-500">{formik.errors.dateOfBirth}</div>
        ) : null}
      </div>
      <GenderSelection
        value={formik.values.gender}
        onChange={(value) => formik.setFieldValue('gender', value)}
      />
      {formik.touched.gender && formik.errors.gender ? (
        <div className="text-red-500">{formik.errors.gender}</div>
      ) : null}
      <button
        type="submit"
        className="bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold"
      >
        Add
      </button>
    </form>
  );
};

export default AddChild;
