import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import useAllDrawings from '../../hooks/useAllDrawings.js';

const Overview = () => {
  const { getAllDrawings, page, setPage, totalPages } = useAllDrawings();
  const [drawings, setDrawings] = useState([]);
  const [loading, setLoading] = useState(false); // To track loading state

  const fetchDrawings = async (currentPage) => {
    setLoading(true); // Set loading to true before fetching
    const data = await getAllDrawings(currentPage);

    if (data) {
      const processedDrawings = data.drawings.map((drawing) => {
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

      // Append new drawings to the existing list
      setDrawings((prevDrawings) => [...prevDrawings, ...processedDrawings]);
    } else {
      console.error('Error: Drawings data is not available or is not an array');
    }

    setLoading(false); // Set loading to false after fetching
  };

  useEffect(() => {
    fetchDrawings(page); // Fetch initial drawings when the component mounts
  }, []);

  // Handle "Load More" button click
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage); // Increment page state
    fetchDrawings(nextPage); // Fetch the next page of drawings
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
            <tbody className="bg-white">
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
                    <td className="p-4">{new Date(drawing.createdAt).toLocaleDateString() || 'Unknown'}</td>
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
        <div className="flex justify-center mt-4">
          {page < totalPages && (
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-blue-500 text-white rounded"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Overview;
