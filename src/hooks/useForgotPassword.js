import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useForgotPassword = () => {
    let navigate= useNavigate();
    async function sendCode(values){
    const data  = await axios.patch("http://localhost:3000/auth/sendcode", values).catch((err) => {
        toast.error(err?.response?.data?.message) 
                 });
                 if (data?.message === "success") {
                   toast.success("Reset code sent check your email");
                    navigate("../reset");
                 } else {
                   toast.error(data?.validationArray[0]);
                 
               }
    
 }
 async function resetPassword(values){
    const { data } = await axios.patch("http://localhost:3000/auth/forgetPasseword", values).catch((err) => {
        toast.error(err.response.data.message) 
                 });
                 if (data.message === "success") {
                   toast.success("Reset code sent check your email");
                    navigate("../login");
                 } else {
                   toast.error(data.validationArray[0]);
                 
               }
    
 }
   return {sendCode,resetPassword}
}

export default useForgotPassword