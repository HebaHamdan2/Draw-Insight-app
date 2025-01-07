import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context.jsx';

const useAddProfile = () => {
    let navigate= useNavigate();
    let { setAuthUser } = useContext(AuthContext)

   async function addChild(values){
   const  data  = await axios.post("http://localhost:3000/child", values).catch((err) => {
    toast.error(err?.response?.data?.message) 
                });
                if (data?.message === "success") {
                    localStorage.setItem("parent", JSON.stringify(data))
                    setAuthUser(data)
                  toast.success("Login successful!");
                   navigate("../dashboard");
                } else {
                  toast.error(data?.validationArray[0]);
                
              }
   
}
  return addChild
}

export default useAddProfile