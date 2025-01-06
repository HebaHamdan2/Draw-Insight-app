import axios from 'axios';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const useSignup = () => {
   async function signup(values){
  
        const { data } = await axios.post("http://localhost:3000/auth/signup", values).catch((err) => {
                  toast.error(err.response.data?.message);
                  if (err.response.data?.validationError[0].message) {
                    toast.error(err.response.data?.validationError[0].message);
                  }
                });
                if (data.message === "success") {
                    toast.success("yes")
                  Navigate("./login");
                } else {
                  toast.error(data.validationArray[0]);
                
              }
   
}
  return {signup}
}

export default useSignup