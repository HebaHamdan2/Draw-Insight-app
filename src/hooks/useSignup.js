import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useSignup = () => {
  let navigate= useNavigate();
   async function signup(values){
   const data  = await axios.post("http://localhost:3000/auth/signup", values).catch((err) => {
    toast.error(err?.response?.data?.message) 

                });
                if (data?.message === "success") {
                  toast.success("Signup successful!");
                   navigate("./login");
                } else {
                  toast.error(data?.validationArray[0]);
                
              }
   
}
  return signup
}

export default useSignup