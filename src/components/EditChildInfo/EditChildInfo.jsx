import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import GenderSelection from '../GenderSelection/GenderSelection.jsx';
import useChildProfile from '../../hooks/useChildProfile.js';

const EditChildInfo = () => {
  const { childInfo } = useOutletContext();
  let {editProfileInfo}=useChildProfile()
  const [imagePreview, setImagePreview] = useState(childInfo.profilePic?.secure_url || null);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [name, setName] = useState('');
  const today = new Date().toISOString().split('T')[0];

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); 
      setImagePreview(URL.createObjectURL(file)); 
    }
  };
  const handleEditProfile=async()=>{
    await editProfileInfo(childInfo._id ,name,gender,dateOfBirth,image);
    setImage(null)
    setImagePreview(null)
    setDateOfBirth('')
    setName('')
    setGender('')
        }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto mt-6">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3'>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3" 
            id='name' 
            value={name}
            placeholder="Enter child's name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input 
            type="date" 
            className="bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3" 
            id='dateOfBirth' 
            value={dateOfBirth}
            max={today}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="profilePic">Upload New Picture</label>
          {imagePreview === null ? (
            <textarea
              name="profilePic"
              onClick={handleImageClick}
              className="text-gray-400 resize-none cursor-pointer bg-transparent border border-[#4B5768] focus:outline-none rounded-md px-4 py-3"
              readOnly
              id="profilePic"
              value="Click to upload new picture"
            />
          ) : (
            <img
              src={imagePreview}
              alt="profile-pic"
              className="size-[95px] md:size-[180px] rounded-full block cursor-pointer"
              onClick={handleImageClick}
            />
          )}
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <GenderSelection value={gender} onChange={setGender} />
        <button 
    className='text-white font-normal text-xs rounded-lg px-7  py-2 md:text-sm bg-mainColor' 
    type='submit' 
    onClick={handleEditProfile}
    disabled={!gender && !name && !dateOfBirth &&!image}>
    Edit
  </button>
        
      
      </div>
    </div>
  );
}

export default EditChildInfo;
