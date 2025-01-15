import axios from 'axios'
import { useContext } from 'react';
import { toast } from 'react-toastify'
import { AuthContext } from '../context/Auth.context.jsx';

const usePredictDrawing = () => {

  let { authUser } = useContext(AuthContext)
    const predict = async (image) => {
        const formData = new FormData();
        formData.append('image', image);
        try {
          let response = await axios.post('http://localhost:5000/predict', formData
           ,{ headers:{'Content-Type': 'multipart/form-data'}}  
          );
          return response.data.predictions;
        } catch (error) {
          if (error.response) {
            toast.error(`Error: ${error.response.data.error}`);
          } else if (error.request) {
            toast.error("Error: No response from the server.");
          } else {
            toast.error(`Error: ${error.message}`);
          }
          throw error; 
        }
      };
      const SavePrediction=async(childId,image,happy,anger,sad,anxiety)=>{
        const formData = new FormData();
        formData.append('image', image);
        let predictions =JSON.stringify({
          "Anger and aggression": anger,
        "Anxiety": anxiety,
        "Happy": happy,
        "Sad": sad
        });
        formData.append('prediction', predictions);
         try{
          const response = await axios.post(`http://localhost:3000/drawing/${childId}`, formData, {
            headers: { 
                authorization: `Heba__${authUser.token}`,
                'Content-Type': 'multipart/form-data',  
            },
        });
      
          if (response.data?.message === "Success") {
            toast.success("Saved");
          } else {
            toast.error(response.data?.validationError[0]?.message || "An error occurred.");
            return
          }

         }catch(err){
          toast.error(err?.response?.data?.message || "An error occurred.");

         }

      }
 
    return {predict,SavePrediction}
}

export default usePredictDrawing