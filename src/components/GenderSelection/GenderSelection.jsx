import React, { useState } from 'react';

function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState('Male');

  return (
    <div className='flex flex-col gap-2 w-full'>
      <label className='text-mainText font-medium text-sm md:text-base'>Child's Gender</label>
      <div className="flex flex-row items-center gap-4" >
        <div className="flex items-center">
          <input 
            id="male" 
            type="radio" 
            value="Male" 
            name="gender" 
            checked={selectedGender === 'Male'} 
            onChange={() => setSelectedGender('Male')}
            className="cursor-pointer  accent-mainColor  w-4 h-4  shadow-mainColor bg-transparent border-none focus:ring-mainColor " 
          />
          <label htmlFor="male" className="cursor-pointer ml-2 text-sm md:text-base font-medium text-mainText">Male</label>
        </div>
        <div className="flex items-center">
          <input 
            id="female" 
            type="radio" 
            value="Female" 
            name="gender" 
            checked={selectedGender === 'Female'} 
            onChange={() => setSelectedGender('Female')}
            className="cursor-pointer w-4 h-4 accent-mainColor   focus:ring-mainColor " 
          />
          <label htmlFor="female" className="cursor-pointer ml-2  text-s md:text-base font-medium text-mainText">Female</label>
        </div>
      </div>
    </div>
  );
}

export default GenderSelection;
