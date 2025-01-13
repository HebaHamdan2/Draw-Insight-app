import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

const useChildProfile = () => {
    
 let navigate= useNavigate();
 const { authUser } = useContext(AuthContext);
 const getChildProfile=async(childId)=>{
    try{
        const response = await axios.get(`http://localhost:3000/child/${childId}`, {
            headers: {
              authorization: `Heba__${authUser.token}`,
            },
          });
          if (response.data?.message === 'success') {
            const data = response.data;
            return data; 
          }
    
    }catch(err){
  toast.error(err?.response?.data?.message || 'An error occurred.');
        
    }
 }
 const deleteChildProfile = async (childId) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#FF698D',
    cancelButtonColor: '#191D23',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      navigate('../');
      const response = await axios.delete(`http://localhost:3000/child/delete/${childId}`, {
        headers: {
          authorization: `Heba__${authUser.token}`,
        },
      });

      if (response.data?.message === "Child profile and associated data deleted successfully") {
        Swal.fire('Deleted!', 'Child Profile has been deleted.', 'success');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'An error occurred.');
    }
  }
};
const deleteleteDrawing=async(childId,drawingId)=>{
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#FF698D',
    cancelButtonColor: '#191D23',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      const response = await axios.delete(`http://localhost:3000/drawing/delete/${childId}/${drawingId}`, {
        headers: {
          authorization: `Heba__${authUser.token}`,
        },
      });

      if (response.data?.message === "Drawing deleted successfully") {
        Swal.fire('Deleted!', 'Child Drawing has been deleted.', 'success');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'An error occurred.');
    }
  }
}
const editProfileInfo = async (childId, name, gender, dateOfBirth, profilePic) => {
  try {
    let body;
    let headers = {
      authorization: `Heba__${authUser.token}`,
    };

    if (profilePic) {
      // Use FormData if there is an image
      body = new FormData();
      if (name) {
        body.append('name', name);
      }
      if (gender) {
        body.append('gender', gender);
      }
      if (dateOfBirth) {
        body.append('dateOfBirth', dateOfBirth);
      }
      body.append('image', profilePic);
      headers['Content-Type'] = 'multipart/form-data';
    } else {
      // Use JSON body if no image
      body = {};
      if (name) {
        body.name = name;
      }
      if (gender) {
        body.gender = gender;
      }
      if (dateOfBirth) {
        body.dateOfBirth = dateOfBirth;
      }
      headers['Content-Type'] = 'application/json';
    }

    const response = await axios.patch(`http://localhost:3000/child/${childId}`, body, {
      headers: headers,
    });

    if (response.data?.message === 'Profile updated successfully') {
      toast.success("Child Profile Edit Successfully");
    }
  } catch (err) {
    toast.error(err?.response?.data?.message || 'An error occurred.');
  }
};

 
 return {getChildProfile,deleteChildProfile,deleteleteDrawing,editProfileInfo}
}

export default useChildProfile