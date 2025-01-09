import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useForgotPassword = () => {
    let navigate= useNavigate();
    async function sendCode(values){
      try{
        const response  = await axios.patch("http://localhost:3000/auth/sendcode", values);
        const {data}=response;
                     if (data?.message === "success") {
                       toast.success("Reset code sent check your email");
                        navigate("../reset");
                     } else {
                       toast.error(data?.validationArray[0]);
                   }
      }catch (err) {
        const errorMessage = err?.response?.data?.message || "An error occurred during signup.";
        toast.error(errorMessage);
      }
  
    
 }
 async function resetPassword(values){
  try{
    const  response  = await axios.patch("http://localhost:3000/auth/forgetPasseword", values)
    const {data}=response
                 if (data.message === "success") {
                   toast.success("Reset password done");
                    navigate("../login");
                 } else {
                   toast.error(data.validationArray[0]);
                 
               }
  }
  catch (err) {
    const errorMessage = err?.response?.data?.message || "An error occurred during reset password].";
    toast.error(errorMessage);
  }
   
    
 }
   return {sendCode,resetPassword}
}

export default useForgotPassword