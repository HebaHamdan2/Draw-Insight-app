import React from 'react';
import GenderSelection from '../GenderSelection/GenderSelection.jsx';
import useAddProfile from '../../hooks/useAddProfile.js';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const AddChild = () => {
  const {addChild} = useAddProfile();
  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        formik.setFieldValue('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const schema = Yup.object({
    name: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long"),
    dateOfBirth: Yup.string()
      .required("Date of Birth is required"),
    gender: Yup.string()
      .required("Gender is required"),
    image: Yup.mixed()
      .required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      dateOfBirth: '',
      gender: '',
      image: null,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      await addChild(values);
    },
  });

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[60%] m-auto"
      onSubmit={formik.handleSubmit}
    >
      <div>
        <img
          src={formik.values.image || '../null.png'}
          alt="profile-pic"
          className="size-[95px] md:size-[180px] rounded-full block cursor-pointer"
          onClick={handleImageClick}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
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
      </div>
      <GenderSelection
        value={formik.values.gender}
        onChange={(value) => formik.setFieldValue('gender', value)}
      />
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
