import  { useContext } from 'react'
import { AuthContext } from '../context/Auth.context.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';

function useParentAccount() {
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
    
  return {getAccountInfo,editAccountInfo}
}

export default useParentAccount