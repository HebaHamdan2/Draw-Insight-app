import React, { useContext } from 'react'
import GenderSelection from '../GenderSelection/GenderSelection.jsx'
import useAddProfile from '../../hooks/useAddProfile.js'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AuthContext } from '../../context/Auth.context.jsx';
const AddChild = () => {
  let addChild=useAddProfile();
  let { authUser } = useContext(AuthContext);

  const schema = Yup.object({
      name: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long"),
      email: Yup.string().required("Email is required").email("Please enter a valid email"),
      dateOfBirth: Yup,
      gender:Yup
    });
    let formik = useFormik({
      initialValues: {
        name: '',
        dateOfBirth:'',
        email: '',
        gender: ''
      },
      validationSchema: schema,
      onSubmit: handleSignup,
    });
    async function handleSignup(values){
      await addChild(values,authUser);
    }
  return (
    <form className='flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[60%] m-auto' >
     <img src="../null.png" alt="profile-pic" className="size-[95px] md:size-[180px] block cursor-pointer " />
     <div className='flex flex-col gap-2 w-full'>
       <label htmlFor="name" className='text-mainText font-medium text-sm md:text-base'>Child's Name</label>
       <input
         type="text"
         name="name"
         placeholder="Enter your child's name"
         id="name"
         className='bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3'
         value={formik.values.name}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
       />
     </div>
    <div  className='flex flex-col gap-2 w-full'>
     <label htmlFor="date" className='text-mainText font-medium text-sm md:text-base'>Child's Birth Date</label>
<input
  type="date"
  name="dateOfBirth"
  id="date"
  placeholder="Enter your child's birth date"
  className='bg-transparent border  border-[#4B5768] focus:outline-none rounded-md px-4 py-3'
  value={formik.values.dateOfBirth}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
/>

     </div>
 <GenderSelection   />

     <button type="submit"  className='bg-mainColor text-white w-full rounded-md px-30 py-3 font-semibold'>Add</button>
   </form>
      
  )
}

export default AddChild