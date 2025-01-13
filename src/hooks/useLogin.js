import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context.jsx';

const useLogin = () => {
    let navigate= useNavigate();
    let { setAuthUser } = useContext(AuthContext)

   async function login(values){
    try{
   const  response  = await axios.post("http://localhost:3000/auth/signin", values)  
  
                if (response.data?.message === "success") {
                    localStorage.setItem("parent", JSON.stringify(response.data))
                    setAuthUser(response.data)
                  toast.success("Login successful!");
                   navigate("../dashboard");
                } else {
                  toast.error(response.data?.validationArray[0]);
                
              }}
              catch (err) {
                const errorMessage = err?.response?.data?.message || "An error occurred during signin.";
                toast.error(errorMessage);
              }
   
}
  return login;
}

export default useLogin;