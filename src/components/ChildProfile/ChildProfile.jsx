import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useChildProfile from '../../hooks/useChildProfile.js';

const ChildProfile = () => {
    let {childId}=useParams();
    let{getChildProfile}=useChildProfile();
    let[childInfo,setChildInfo]=useState([]);
    useEffect(()=>{
async function getChildInfo() {
    let data=await getChildProfile(childId);
    setChildInfo(data.child); 
}
getChildInfo();
} 
    ,[childId])
  return (
    <div>{childInfo.name}</div>
  )
}

export default ChildProfile