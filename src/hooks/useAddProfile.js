import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context.jsx';

const useAddProfile = () => {
    let navigate= useNavigate();

    let { authUser } = useContext(AuthContext)

    const addChild = async (values) => {
      const formData = new FormData();
formData.append('name', values.name);
formData.append('dateOfBirth', values.dateOfBirth);
formData.append('gender', values.gender);
formData.append('image', values.image);  


      try {
        const response = await axios.post("http://localhost:3000/child", formData, {
          headers: { 
              authorization: `Heba__${authUser.token}`,
              'Content-Type': 'multipart/form-data',  
          },
      });
    
        if (response.data?.message === "success") {
          toast.success("Child added successfully!");
          navigate("../../dashboard");
        } else {
          toast.error(response.data?.validationError[0]?.message || "An error occurred.");
          return
        }
      } catch (err) {
        toast.error(err?.response?.data?.message || "An error occurred.");
      }
    };
  return {addChild}
}

export default useAddProfile