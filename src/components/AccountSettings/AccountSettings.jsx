import React, { useEffect, useState } from 'react'
import useParentAccount from '../../hooks/useParentAccount.js'
import EditAccountInfo from '../EditAccountInfo/EditAccountInfo.jsx';

const AccountSettings = () => {
    const{getAccountInfo}= useParentAccount();
    let [parentInfo,setParentInfo]=useState({});

  
useEffect(()=>{
    const getInfo=async()=>{
        const data = await getAccountInfo();
        if(data){
            setParentInfo(data.parent)
        }
    }
    getInfo();
},[getAccountInfo])

  return (
    <>
    <div className="py-2 pb-15 flex justify-center md:justify-start md:ps-9">
        <h2 className='text-[#3E435D] font-medium text-lg md:text-xl  '>Welcome, {parentInfo?.username} </h2>
    </div>
    <div className='md:w-[95%] md:m-auto'>
 <EditAccountInfo parentInfo={parentInfo}  />
    </div>
    </>
  )
}

export default AccountSettings