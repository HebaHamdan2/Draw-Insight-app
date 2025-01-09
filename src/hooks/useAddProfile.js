import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context.jsx';

const useAddProfile = () => {
    let navigate= useNavigate();

    let { authUser } = useContext(AuthContext)

    const addChild = async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/child", values, {
          headers: { authorization: `Heba__${authUser.token}` },
        });
        console.log(response.data); // Debugging the response
    
        if (response.data?.message === "success") {
          toast.success("Child added successfully!");
          navigate("../dashboard");
        } else {
          toast.error(response.data?.validationArray[0] || "An error occurred.");
        }
      } catch (err) {
        console.error("Error adding child:", err);
        toast.error(err?.response?.data?.message || "An error occurred.");
      }
    };
  return {addChild}
}

export default useAddProfile