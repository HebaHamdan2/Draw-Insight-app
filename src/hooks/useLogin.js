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
    const { data } = response;   
  
                if (data?.message === "success") {
                    localStorage.setItem("parent", JSON.stringify(data))
                    setAuthUser(data)
                  toast.success("Login successful!");
                   navigate("../dashboard");
                } else {
                  toast.error(data?.validationArray[0]);
                
              }}
              catch (err) {
                const errorMessage = err?.response?.data?.message || "An error occurred during signin.";
                toast.error(errorMessage);
              }
   
}
  return login;
}

export default useLogin;