import React, { useEffect, useState } from 'react'
import useParentAccount from '../../hooks/useParentAccount.js'

const AccountSettings = () => {
    const{getAccountInfo,editAccountInfo}= useParentAccount();
    let [parentInfo,setParentInfo]=useState({});
    const [imagePreview, setImagePreview] = useState(null); // State for image preview
    const [image, setImage] = useState(null);
    const [address, setAddress] = useState(parentInfo.address || '');
    const [username, setUsername] = useState(parentInfo.username || '');
    const handleEditAccount=async()=>{
await editAccountInfo(username||parentInfo.username,address||parentInfo.address,image);
setImage(null)
setImagePreview(null)
setAddress('')
setUsername('')
    }
useEffect(()=>{
    const getInfo=async()=>{
        const data = await getAccountInfo();
        if(data){
            setParentInfo(data.parent)
        }
    }
    getInfo();
},[getAccountInfo])
const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Update image state
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
    }
  };
  return (
    <>
    <div className="py-2 pb-15 flex justify-center md:justify-start md:ps-9">
        <h2 className='text-[#3E435D] font-medium text-lg md:text-xl  '>Welcome, {parentInfo?.username} </h2>
    </div>
    <div className='md:w-[95%] md:m-auto'>
<div className=" flex flex-col gap-2 md:gap-7">
<div>
    <img src="/bg.svg" alt="bg" className='w-fit' />
</div>
<div className="px-1 md:w-[95%] md:m-auto flex flex-row justify-between items-center">
    <div className='flex flex-row gap-3 '>
        <img className='rounded-full size-14' src={parentInfo.profilePic===null?'/null.jpg':parentInfo.profilePic?.secure_url} alt="account" />
        <div>
        <h3 className='font-medium text-base md:text-lg text-black'>{parentInfo.username}</h3>
        <p className='font-normal text-xs md:text-sm text-slate-400'>{parentInfo.email}</p>
        </div>
    </div>
    <div className='flex row gap-1 items-center'>
    <button 
  className='text-white font-normal text-xs rounded-lg px-7 py-2 md:text-sm bg-mainColor' 
  type='submit' 
  onClick={handleEditAccount}
  disabled={!address && !image && !username} >
  Edit
</button>
        <div className='flex flex-col'>
        <img className='w-8 cursor-pointer' src="/Dot Vertical.svg" alt="drop-down" />
        <div className='flex flex-col'>

        </div>
        </div>
       

    </div>
</div>
<div className="px-1 md:w-[95%] md:m-auto grid grid-cols-1 md:grid-cols-2 gap-4">
   <div className='flex flex-col gap-3'> 
    <label htmlFor="username">Name</label>
    <input type="text" className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3" 
    id='username' 
    value={username}
    placeholder={parentInfo.username}
    onChange={(e) => {
        setUsername(e.target.value);
      }}
    />
   </div>
   <div className='flex flex-col gap-3'> 
    <label htmlFor="address">Address</label>
    <input
     type="text" className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
      id='address'
      placeholder={parentInfo.address}
      value={address}
      onChange={(e) => {
        setAddress(e.target.value);
      }}
      
      />
   </div>
   <div className='flex flex-col gap-3'> 
    <label htmlFor="profilePic">Upload New Picture</label>
    {imagePreview===null?
  <textarea
  name="profilePic"
  onClick={handleImageClick}
  className="text-gray-400 resize-none cursor-pointer bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
  readOnly
  id="profilePic"
  value="Click to upload new picture"
/>
:  <img
          src={imagePreview}
          alt="profile-pic"
          className="size-[95px] md:size-[180px] rounded-full block cursor-pointer"
          onClick={handleImageClick}
        />}
  <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

</div>

</div>
    </div>
    </>
  )
}

export default AccountSettings