import  { useContext, useState } from 'react'
import { AuthContext } from '../context/Auth.context.jsx'
import { toast } from 'react-toastify';
import axios from 'axios';

const useAllChildren = () => {
 const {authUser}=useContext(AuthContext);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(1); 
 const getAllChildren=async(currentPage)=>{
try{
    const response = await axios.get(`http://localhost:3000/child?page=${currentPage}&limit=6`, {
        headers: {
          authorization: `Heba__${authUser.token}`,
        },
      });

      if (response.data?.message === 'success') {
        const data = response.data;
        setTotalPages(Math.ceil(data.total / 6));
        return data; 
      }

}catch(err){
          toast.error(err?.response?.data?.message || 'An error occurred.');
    

}
 }  

   return {getAllChildren,currentPage,setCurrentPage,totalPages}
}

export default useAllChildren