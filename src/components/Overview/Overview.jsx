import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import useAllDrawings from '../../hooks/useAllDrawings.js';
import moment from 'moment/moment.js';

const Overview = () => {
  const { getAllDrawings, page, setPage, totalPages } = useAllDrawings();
  const [drawings, setDrawings] = useState([]);
  const [loading, setLoading] = useState(false); 
  const fetchDrawings = async (currentPage) => {
    setLoading(true); 
    const data = await getAllDrawings(currentPage);//call it once loading more clicked then the drawings array append

    if (data) {
      const processedDrawings = data.drawings.map((drawing) => {
        const predictions = drawing.prediction || {};
        const maxPredictionKey = Object.keys(predictions).reduce((a, b) =>//to display the main result "max percent" 
          predictions[a] > predictions[b] ? a : b
        );
        const maxPredictionValue = predictions[maxPredictionKey];
        return {
          ...drawing,
          maxPredictionKey,
          maxPredictionValue,
        };
      });

      // Append new drawings to the existing list
      if(currentPage>1){
        setDrawings((prevDrawings) => [...prevDrawings, ...processedDrawings]);

      }else{
        setDrawings([...processedDrawings])
      }
    }

    setLoading(false); 
  };

  useEffect(() => {
    fetchDrawings(page); //  initial drawings when the component mounts
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage); 
    fetchDrawings(nextPage); 
  };

  return (
    <>
      <Navbar />
      <div className="w-[95%] mx-auto pt-4 pb-10">
        <h2 className="text-lg md:text-xl text-center md:text-left cursor-pointer text-[#878787] capitalize pb-4">
          Recent Insights
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-4 font-bold text-sm">Profile Picture</th>
                <th className="p-4 font-bold text-sm">Child's Name</th>
                <th className="p-4 font-bold text-sm">Image</th>
                <th className="p-4 font-bold text-sm">Prediction</th>
                <th className="p-4 font-bold text-sm">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#666666] font-medium text-base">
              {drawings.length > 0 ? (
                drawings.map((drawing, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4">
                      <img
                        src={drawing.childId?.profilePic?.secure_url || '/null.jpg'}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="p-4">{drawing.childId?.name || 'Unknown'}</td>
                    <td className="p-4">
                      <img src={drawing.imageUrl?.secure_url} alt="Drawing" className="w-20" />
                    </td>
                    <td className="p-4">
                      {drawing.maxPredictionKey}: {drawing.maxPredictionValue}
                    </td>
                    <td className="p-4">
  {drawing.createdAt 
    ? moment(drawing.createdAt).format('DD MMMM, YYYY') 
    : 'Unknown'}
</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
     {drawings.length>0? <div className="flex justify-center mt-4">
          {page < totalPages && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-mainColor text-white rounded-[4px] font-bold text-base"
              disabled={loading} 
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </div>:''}
       
      </div>
    </>
  );
};

export default Overview;
