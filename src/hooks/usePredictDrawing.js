import axios from 'axios'
import { toast } from 'react-toastify'

const usePredictDrawing = () => {
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
      
 
    return {predict}
}

export default usePredictDrawing