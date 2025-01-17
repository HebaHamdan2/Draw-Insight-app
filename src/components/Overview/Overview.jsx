import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import useAllDrawings from '../../hooks/useAllDrawings.js';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Overview = () => {
  const { getAllDrawings, page, setPage, totalPages } = useAllDrawings();
  const [drawings, setDrawings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDrawings = async (currentPage) => {
    setLoading(true);
    try {
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

        setDrawings((prevDrawings) =>
          currentPage === 1
            ? processedDrawings
            : [
                ...prevDrawings,
                ...processedDrawings.filter(
                  (newDrawing) =>
                    !prevDrawings.some(
                      (existingDrawing) => existingDrawing._id === newDrawing._id
                    )
                ),
              ]
        );
      }
    } catch (error) {
      toast.error('Failed to fetch drawings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrawings(page);
  }, [page]);

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
              {loading ? (
                // Skeleton Loader for Table Rows
                <tr>
                  <td colSpan="4" className="p-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                      <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse"></div>
                      <div className="w-1/3 h-4 bg-gray-300 rounded animate-pulse"></div>
                      <div className="w-1/4 h-4 bg-gray-300 rounded animate-pulse"></div>
                      <div className="w-1/4 h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                  </td>
                </tr>
              ) : drawings.length > 0 ? (
                drawings.map((drawing, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4">
                      <Link to={`/dashboard/profiles/${drawing.childId._id}/`}>
                        <img
                          src={drawing.childId?.profilePic?.secure_url || '/null.jpg'}
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link to={`/dashboard/profiles/${drawing.childId._id}/`}>
                        {drawing.childId?.name || 'Unknown'}
                      </Link>
                    </td>
                    <td className="p-4">
                      <img
                        src={drawing.imageUrl?.secure_url}
                        alt="Drawing"
                        className="w-20"
                      />
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
        {drawings.length > 0 && (
          <div className="flex justify-center mt-4">
            {page < totalPages ? (
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-mainColor text-white rounded-[4px] font-bold text-base"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Overview;
