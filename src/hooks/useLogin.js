import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context.jsx';

const useLogin = () => {
    let navigate= useNavigate();
    let { setAuthUser } = useContext(AuthContext)

   async function login(values){
   const { data } = await axios.post("http://localhost:3000/auth/signin", values).catch((err) => {
                  toast.error(err.response.data?.message);
                  if (err.response.data?.validationError[0].message) {
                    toast.error(err.response.data?.validationError[0].message);
                    return;
                  }
                });
                if (data.message === "success") {
                    localStorage.setItem("parent", JSON.stringify(data))
                    setAuthUser(data)
                  toast.success("Login successful!");
                   navigate("../dashboard");
                } else {
                  toast.error(data.validationArray[0]);
                
              }
   
}
  return {login}
}

export default useLogin;