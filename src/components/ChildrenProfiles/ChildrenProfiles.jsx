import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import ChildCard from '../ChildCard/ChildCard.jsx';
import useAllChildren from '../../hooks/useAllChildren.js';

const ChildrenProfiles = () => {
  const { getAllChildren, currentPage, setCurrentPage, totalPages } = useAllChildren();
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProfiles = async (currentPage) => {
    setLoading(true);
    const data = await getAllChildren(currentPage);
    if (data) {
      const children = data.children;

      if (currentPage > 1) {
        setChildren((prevChildren) => [...prevChildren, ...children]);
      } else {
        setChildren([...children]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfiles(currentPage);
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchProfiles(nextPage);
  };

  return (
    <>
      <Navbar />
      <div className="w-[95%] mx-auto pt-4 pb-10">
        <h2 className="text-lg md:text-xl text-center md:text-left cursor-pointer text-[#878787] capitalize pb-4">
          Children Profiles
        </h2>
        {children.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {children.map((child, index) => (
              <ChildCard
                name={child.name}
                gender={child.gender}
                profilePic={child.profilePic?.secure_url || '/null.jpg'}
                key={index}
                childId={child._id}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center font-bold text-lg">
            No Children's Profiles
          </div>
        )}

        <div className="flex justify-center mt-4">
          {currentPage < totalPages && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-mainColor text-white rounded-[4px] font-bold text-base"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-4">
            {Array(6).fill().map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-24 bg-gray-300 rounded animate-pulse mb-2"></div>
                <div className="w-2/3 h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ChildrenProfiles;
