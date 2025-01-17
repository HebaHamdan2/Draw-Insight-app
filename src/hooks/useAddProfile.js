import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context.jsx';

const useAddProfile = () => {
  let navigate = useNavigate();
  let { authUser } = useContext(AuthContext);

  const addChild = async (values) => {
    let data;
    let headers = {
      authorization: `Heba__${authUser.token}`,
    };
    if (values.image) {
      // If image is provided, use FormData
      data = new FormData();
      data.append('name', values.name);
      data.append('dateOfBirth', values.dateOfBirth);
      data.append('gender', values.gender);
      data.append('image', values.image);
      headers['Content-Type'] = 'multipart/form-data';
    } else {
      // If no image, send JSON
      data = {
        "name": values.name,
        "dateOfBirth": values.dateOfBirth,
        "gender": values.gender,
      };
    }
    console.log(data)
  
    try {
      const response = await axios.post('http://localhost:3000/child', data, {
        headers: headers,
      });
  
      if (response.data?.message === 'success') {
        toast.success('Child added successfully!');
        navigate('../../dashboard/profiles');
      } else {
        toast.error(
          response.data?.validationError[0]?.message || 'An error occurred.'
        );
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred.');
    }
  };
  
  

  return { addChild };
};

export default useAddProfile;
