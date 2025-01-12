import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import ChildCard from '../ChildCard/ChildCard.jsx'
import useAllChildren from '../../hooks/useAllChildren.js'

const ChildrenProfiles = () => {
  const {getAllChildren,currentPage,setCurrentPage,totalPages}=useAllChildren();
   const [children, setChildren] = useState([]);
    const [loading, setLoading] = useState(false); 
  const fetchProfiles = async (currentPage) => {
      setLoading(true); 
      const data = await getAllChildren(currentPage);//call it once loading more clicked then the drawings array append
      if (data) {
        const children = data.children;
  
        // Append new drawings to the existing list
        if(currentPage>1){
          setChildren((prevChildren) => [...prevChildren, ...children]);
  
        }else{
          setChildren([...children])
        }
      }
  
      setLoading(false); 
    };
  
    useEffect(() => {
      fetchProfiles(currentPage); //  initial drawings when the component mounts
    }, []);
    const handleLoadMore = () => {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage); 
      fetchProfiles(nextPage); 
    };
  return (
<>
<Navbar/>
<div className="w-[95%] mx-auto pt-4 pb-10">
        <h2 className="text-lg md:text-xl text-center md:text-left cursor-pointer text-[#878787] capitalize pb-4">
         Children Profiles
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 ">
     {children.map((child,index)=>(
        <ChildCard name={child.name} gender={child.gender} profilePic={child.profilePic.secure_url} key={index} childId={child._id} />
       ))}

    </div>
            {/* Load More Button */}
          {children.length>0?
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
            </div>:''}
        
        
        </div>
</>
  )
}

export default ChildrenProfiles