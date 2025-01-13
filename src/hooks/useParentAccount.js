import  { useContext } from 'react'
import { AuthContext } from '../context/Auth.context.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function useParentAccount() {
 let navigate= useNavigate();
 const { authUser } = useContext(AuthContext);
    const getAccountInfo=async()=>{
        try{
            const response = await axios.get(`http://localhost:3000/parent`, {
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
    const editAccountInfo = async (username, address, profilePic) => {
      try {
        let body;
        let headers = {
          authorization: `Heba__${authUser.token}`,
        };
    
        if (profilePic) {
          // Use FormData if there is an image
          body = new FormData();
          if (username) {
            body.append('username', username);
          }
          if (address) {
            body.append('address', address);
          }
          body.append('image', profilePic);
          headers['Content-Type'] = 'multipart/form-data';
        } else {
          // Use JSON body if no image
          body = {
            username,
            address,
          };
          headers['Content-Type'] = 'application/json';
        }
    
        const response = await axios.patch(`http://localhost:3000/parent`, body, {
          headers: headers,
        });
    
        if (response.data?.message === 'Profile updated successfully') {
          toast.success("Account Edit Successfully");
        }
      } catch (err) {
        toast.error(err?.response?.data?.message || 'An error occurred.');
      }
    };
  
   const deleteAccount = async () => {
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
          localStorage.removeItem('parent'); 
          navigate('/login');
          const response = await axios.delete(`http://localhost:3000/parent/delete`, {
            headers: {
              authorization: `Heba__${authUser.token}`,
            },
          });
    
          if (response.data?.message === "Parent account and associated data deleted successfully") {
            Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
          }
        } catch (err) {
          toast.error(err?.response?.data?.message || 'An error occurred.');
        }
      }
    };
    const changePassword=async(values)=> {
      try {
        const response = await axios.patch(
          "http://localhost:3000/parent/updatePassword",
          values, {
            headers: {
              authorization: `Heba__${authUser.token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.data?.message === "success") {
          toast.success("Password changed successfully!");
          navigate("/dashboard");
        } else {
          toast.error(response.data?.validationArray[0] || "Error occurred");
        }
      } catch (err) {
        const errorMessage = err?.response?.data?.message || "An error occurred during password change.";
        toast.error(errorMessage);
      }
      
    }
  return {getAccountInfo,editAccountInfo,deleteAccount,changePassword}
}

export default useParentAccount