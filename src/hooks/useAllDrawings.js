import { useState, useContext } from 'react';
import { AuthContext } from '../context/Auth.context.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const useAllDrawings = () => {
  const { authUser } = useContext(AuthContext);
  const [page, setPage] = useState(1); // Manage current page state
  const [totalPages, setTotalPages] = useState(1); // Manage total pages state

  const getAllDrawings = async (page) => {
    try {
      const response = await axios.get(`http://localhost:3000/drawing?page=${page}`, {
        headers: {
          authorization: `Heba__${authUser.token}`,
        },
      });

      if (response.data?.message === 'success') {
        const data = response.data;
        setTotalPages(data.totalPages); // Set total pages from the response
        return data; 
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'An error occurred.');
    }
  };

  // Return the hook methods and pagination state
  return { getAllDrawings, page, setPage, totalPages };
};

export default useAllDrawings;
