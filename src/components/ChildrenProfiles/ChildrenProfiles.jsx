import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import ChildCard from '../ChildCard/ChildCard.jsx'

const ChildrenProfiles = () => {
  return (
<>
<Navbar/>
<div className="w-[95%] mx-auto pt-4 pb-10">
        <h2 className="text-lg md:text-xl text-center md:text-left cursor-pointer text-[#878787] capitalize pb-4">
         Children Profiles
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 ">
        <ChildCard/>
        <ChildCard/>
        <ChildCard/>
        <ChildCard/>
        <ChildCard/>

    </div>
        
        </div>
</>
  )
}

export default ChildrenProfiles