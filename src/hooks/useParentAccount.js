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
  return {getAccountInfo}
}

export default useParentAccount