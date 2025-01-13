import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';

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
 
 return {getChildProfile}
}

export default useChildProfile