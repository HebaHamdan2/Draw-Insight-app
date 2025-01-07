import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useAddProfile = () => {
    let navigate= useNavigate();

   async function addChild(values,authUser){
    const data = await axios.post("http://localhost:3000/child", values, { 
      headers: { Authorization: `Heba__${authUser.token}` },
    }).catch((err) => {
      toast.error(err?.response?.data?.message);
    });
                if (data?.message === "success") {
                  toast.success("Add Child Done!");
                   navigate("../dashboard");
                } else {
                  toast.error(data?.validationArray[0]);
                
              }
   
}
  return addChild
}

export default useAddProfile