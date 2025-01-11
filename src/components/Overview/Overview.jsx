import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import useAllDrawings from '../../hooks/useAllDrawings.js';

const Overview = () => {
  const { getAllDrawings, page, setPage, totalPages } = useAllDrawings();
  const [drawings, setDrawings] = useState([]);
  useEffect(() => {
    const fetchDrawings = async () => {
      const data = await getAllDrawings(page);
      if (data) {
        const processedDrawings = data.map((drawing) => {
          const predictions = drawing.prediction || {};
          const maxPredictionKey = Object.keys(predictions).reduce((a, b) =>
            predictions[a] > predictions[b] ? a : b
          );
          const maxPredictionValue = predictions[maxPredictionKey];
          return {
            ...drawing,
            maxPredictionKey,
            maxPredictionValue,
          };
        });
        setDrawings(processedDrawings);
      }
    };
    fetchDrawings();
  }, [getAllDrawings, page]);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <>
      <Navbar />
      <div className='w-[95%] mx-auto pt-4 pb-10'>
        <h2 className='text-lg md:text-xl text-center md:text-left cursor-pointer text-[#878787] capitalize pb-4'>
          recent insights
        </h2>
        <div className="overflow-x-auto">
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-white text-left'>
                <th className='p-4 font-bold text-sm'>Profile Picture</th>
                <th className='p-4 font-bold text-sm'>Child's Name</th>
                <th className='p-4 font-bold text-sm'>Image</th>
                <th className='p-4 font-bold text-sm'>Prediction</th>
                <th className='p-4 font-bold text-sm'>Date</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
             {drawings.length>0 ? (
               drawings.map((drawing, index) => (
                <tr key={index} className='border-t'>
                  <td className='p-4'>
                  <img
                      src={drawing.childId?.profilePic?.secure_url || '/null.jpg'}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    
                       </td>
                  <td className='p-4'>{drawing.childId?.name || 'Unknown'}</td>
                  <td className='p-4'>
                    <img src={drawing.imageUrl?.secure_url} alt="Drawing" className="w-20" />
                  
                     </td>
                  <td className='p-4'>  {drawing.maxPredictionKey}: {drawing.maxPredictionValue}</td>
                  <td className='p-4'>{new Date(drawing.createdAt).toLocaleDateString() || 'Unknown'}</td>
                </tr>
               ))
              ) 
              : (
                <tr>
                  <td colSpan="5" className="p-4 text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded-l" onClick={handlePrevPage}>
            Previous
          </button>
          <span className="px-4 py-2 bg-gray-300">{page}</span>
          <button className="px-4 py-2 bg-gray-300" onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Overview;
